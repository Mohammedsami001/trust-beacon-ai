import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface DetectionResult {
  trust_score: number;
  verdict: "AUTHENTIC" | "MANIPULATED" | "SUSPICIOUS";
  explanation: string;
  metadata: {
    model_version: string;
    analysis_type: string;
    processing_time_ms: number;
    detected_artifacts: string[];
  };
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const startTime = Date.now();

  try {
    const contentType = req.headers.get("content-type") || "";
    let imageBase64: string | null = null;
    let imageMimeType = "image/jpeg";

    if (contentType.includes("multipart/form-data")) {
      // Handle form data with file upload
      const formData = await req.formData();
      const file = formData.get("image") as File | null;
      
      if (!file) {
        return new Response(
          JSON.stringify({ error: "No image file provided" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const arrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      imageBase64 = btoa(String.fromCharCode(...uint8Array));
      imageMimeType = file.type || "image/jpeg";
    } else if (contentType.includes("application/json")) {
      // Handle JSON with base64 image
      const body = await req.json();
      imageBase64 = body.image;
      imageMimeType = body.mimeType || "image/jpeg";
      
      if (!imageBase64) {
        return new Response(
          JSON.stringify({ error: "No image data provided" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    } else {
      return new Response(
        JSON.stringify({ error: "Invalid content type. Use multipart/form-data or application/json" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "AI service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // System prompt for deepfake detection analysis
    const systemPrompt = `You are an expert AI system specialized in detecting deepfake and manipulated images. Your task is to analyze images for signs of AI-generated content or digital manipulation.

Analyze the provided image for the following indicators:
1. **Facial Inconsistencies**: Unnatural facial features, asymmetry, artifacts around eyes/teeth/ears, blurred or warped facial boundaries
2. **Lighting & Shadow Anomalies**: Inconsistent light sources, missing or incorrect shadows, unnatural reflections
3. **Texture & Quality Issues**: Unusual skin textures, blurring patterns, compression artifacts inconsistent with authentic photos
4. **Background Analysis**: Warped or distorted backgrounds, repeating patterns, inconsistent focus
5. **GAN Artifacts**: Typical signs of generative AI like "GAN fingerprints", unusual color patterns, checkerboard artifacts
6. **Metadata Consistency**: Any visible watermarks, signs of editing, or inconsistencies suggesting manipulation

You MUST respond with a valid JSON object in this exact format:
{
  "trust_score": <number between 0-100>,
  "verdict": "<one of: AUTHENTIC, MANIPULATED, SUSPICIOUS>",
  "explanation": "<detailed explanation of your analysis in 2-4 sentences>",
  "detected_artifacts": [<list of specific issues found, or empty array if none>]
}

Scoring Guidelines:
- 85-100: High confidence authentic - No manipulation signs detected
- 60-84: Suspicious - Some anomalies detected but not conclusive
- 0-59: Likely manipulated - Clear signs of AI generation or digital manipulation

Be thorough but concise in your explanation. Focus on observable evidence.`;

    console.log("Sending image to Lovable AI Gateway for analysis...");

    // Call Lovable AI Gateway with the image
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-pro",
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Analyze this image for deepfake or manipulation indicators. Provide your analysis in the required JSON format."
              },
              {
                type: "image_url",
                image_url: {
                  url: `data:${imageMimeType};base64,${imageBase64}`
                }
              }
            ]
          }
        ],
        temperature: 0.1,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service quota exceeded. Please contact support." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "AI analysis failed. Please try again." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const aiResponse = await response.json();
    const content = aiResponse.choices?.[0]?.message?.content;
    
    if (!content) {
      console.error("No content in AI response");
      return new Response(
        JSON.stringify({ error: "Invalid AI response" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("AI Response content:", content);

    // Parse the JSON from AI response
    let analysisResult;
    try {
      // Extract JSON from the response (in case there's extra text)
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        analysisResult = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("No JSON found in response");
      }
    } catch (parseError) {
      console.error("Failed to parse AI response:", parseError);
      // Fallback with suspicious verdict if parsing fails
      analysisResult = {
        trust_score: 50,
        verdict: "SUSPICIOUS",
        explanation: "Analysis completed but results were inconclusive. The image could not be definitively classified.",
        detected_artifacts: []
      };
    }

    const processingTime = Date.now() - startTime;

    // Construct final result
    const result: DetectionResult = {
      trust_score: Math.max(0, Math.min(100, analysisResult.trust_score || 50)),
      verdict: ["AUTHENTIC", "MANIPULATED", "SUSPICIOUS"].includes(analysisResult.verdict) 
        ? analysisResult.verdict 
        : "SUSPICIOUS",
      explanation: analysisResult.explanation || "Analysis completed.",
      metadata: {
        model_version: "gemini-2.5-pro",
        analysis_type: "multimodal_vision",
        processing_time_ms: processingTime,
        detected_artifacts: analysisResult.detected_artifacts || []
      }
    };

    console.log("Detection result:", result);

    return new Response(
      JSON.stringify(result),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );

  } catch (error) {
    console.error("Detection error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "An unexpected error occurred" 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
