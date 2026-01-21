import { useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { FileUploadZone } from "@/components/ui/FileUploadZone";
import { ScanningOverlay } from "@/components/ui/ScanningOverlay";
import { TrustGauge } from "@/components/ui/TrustGauge";
import { VerdictBadge } from "@/components/ui/VerdictBadge";
import { NeonButton } from "@/components/ui/NeonButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { 
  Scan, 
  Video, 
  AudioLines, 
  RefreshCw,
  FileText,
  AlertTriangle,
  Clock
} from "lucide-react";

interface DetectionResult {
  trust_score: number;
  verdict: "AUTHENTIC" | "MANIPULATED" | "SUSPICIOUS";
  explanation: string;
  metadata?: Record<string, unknown>;
}

type DetectionType = "image" | "video" | "audio";

export default function Detection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") || "image";
  const [activeTab, setActiveTab] = useState<DetectionType>(initialTab as DetectionType);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const { toast } = useToast();

  const handleTabChange = (value: string) => {
    setActiveTab(value as DetectionType);
    setSearchParams({ tab: value });
    // Reset state when changing tabs
    setSelectedFile(null);
    setPreviewUrl(null);
    setResult(null);
  };

  const handleFileSelect = useCallback(async (file: File) => {
    setSelectedFile(file);
    setResult(null);
    
    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  }, []);

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    
    try {
      // Get the current session for the auth token
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          title: "Authentication Required",
          description: "Please log in to analyze files.",
          variant: "destructive",
        });
        return;
      }

      // Simulate API call (replace with actual backend endpoint)
      // In production, you would send the file to your FastAPI backend
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Simulated response - in production this would come from your FastAPI backend
      const mockResults: Record<DetectionType, DetectionResult> = {
        image: {
          trust_score: Math.floor(Math.random() * 40) + 60,
          verdict: Math.random() > 0.5 ? "AUTHENTIC" : "MANIPULATED",
          explanation: "The AI analysis detected consistent facial geometry and natural lighting patterns. No significant GAN artifacts were found in the image. The metadata appears unmodified and consistent with the claimed source device.",
        },
        video: {
          trust_score: Math.floor(Math.random() * 40) + 55,
          verdict: Math.random() > 0.5 ? "AUTHENTIC" : "SUSPICIOUS",
          explanation: "Frame-by-frame analysis shows consistent temporal patterns. Lip movements appear synchronized with audio. Minor compression artifacts detected but within normal parameters for this codec.",
        },
        audio: {
          trust_score: Math.floor(Math.random() * 40) + 65,
          verdict: Math.random() > 0.5 ? "AUTHENTIC" : "MANIPULATED",
          explanation: "Spectral analysis reveals natural voice patterns. No text-to-speech signatures detected. Background noise is consistent throughout the recording without signs of splicing.",
        }
      };

      setResult(mockResults[activeTab]);
      
      toast({
        title: "Analysis Complete",
        description: `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} analysis finished successfully.`,
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "An error occurred during analysis. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetAnalysis = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setResult(null);
  };

  const tabConfig = {
    image: { icon: Scan, accept: ".jpg,.jpeg,.png", label: "Image Detection" },
    video: { icon: Video, accept: ".mp4", label: "Video Detection" },
    audio: { icon: AudioLines, accept: ".wav,.mp3", label: "Audio Detection" },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Detection <span className="text-primary">Hub</span>
            </h1>
            <p className="text-muted-foreground">
              Upload and analyze media files for deepfake detection
            </p>
          </div>
          
          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md bg-muted/50 p-1 rounded-lg">
              {Object.entries(tabConfig).map(([key, config]) => (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <config.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(tabConfig).map(([key, config]) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Upload Section */}
                  <div className="space-y-6">
                    <GlassCard className="p-6">
                      <h2 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
                        <config.icon className="w-5 h-5 text-primary" />
                        {config.label}
                        {key !== "image" && (
                          <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full ml-2">
                            Prototype
                          </span>
                        )}
                      </h2>
                      
                      <div className="relative">
                        <FileUploadZone
                          type={key as DetectionType}
                          accept={config.accept}
                          onFileSelect={handleFileSelect}
                          disabled={isAnalyzing}
                        />
                        {isAnalyzing && <ScanningOverlay type={key as DetectionType} />}
                      </div>
                      
                      {selectedFile && (
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <FileText className="w-4 h-4" />
                            <span className="truncate max-w-[200px]">{selectedFile.name}</span>
                          </div>
                          <div className="flex gap-2">
                            <NeonButton 
                              variant="ghost" 
                              size="sm" 
                              onClick={resetAnalysis}
                              disabled={isAnalyzing}
                            >
                              <RefreshCw className="w-4 h-4" />
                              Reset
                            </NeonButton>
                            <NeonButton 
                              variant="primary" 
                              size="sm" 
                              onClick={handleAnalyze}
                              disabled={isAnalyzing || !selectedFile}
                            >
                              Analyze
                            </NeonButton>
                          </div>
                        </div>
                      )}
                    </GlassCard>
                    
                    {/* Preview */}
                    {previewUrl && (
                      <GlassCard className="p-6">
                        <h3 className="text-sm font-medium mb-4 text-muted-foreground">Preview</h3>
                        {key === "image" && (
                          <img 
                            src={previewUrl} 
                            alt="Preview" 
                            className="w-full h-64 object-contain rounded-lg bg-muted/30"
                          />
                        )}
                        {key === "video" && (
                          <video 
                            src={previewUrl} 
                            controls 
                            className="w-full h-64 object-contain rounded-lg bg-muted/30"
                          />
                        )}
                        {key === "audio" && (
                          <div className="h-32 flex items-center justify-center">
                            <audio src={previewUrl} controls className="w-full" />
                          </div>
                        )}
                      </GlassCard>
                    )}
                  </div>
                  
                  {/* Results Section */}
                  <div className="space-y-6">
                    {result ? (
                      <>
                        {/* Trust Score */}
                        <GlassCard className="p-8" glow={result.verdict === "AUTHENTIC" ? "success" : "destructive"}>
                          <div className="flex flex-col items-center">
                            <TrustGauge score={result.trust_score} size="lg" />
                            <div className="mt-6">
                              <VerdictBadge verdict={result.verdict} size="lg" />
                            </div>
                          </div>
                        </GlassCard>
                        
                        {/* Explainability */}
                        <GlassCard className="p-6">
                          <h3 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-warning" />
                            AI Explanation
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {result.explanation}
                          </p>
                        </GlassCard>
                        
                        {/* Metadata */}
                        <GlassCard className="p-6">
                          <h3 className="text-sm font-medium mb-4 text-muted-foreground flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Analysis Details
                          </h3>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Type:</span>
                              <span className="ml-2 font-mono">{activeTab.toUpperCase()}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Model:</span>
                              <span className="ml-2 font-mono">v2.1.0</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Confidence:</span>
                              <span className="ml-2 font-mono">{result.trust_score}%</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Time:</span>
                              <span className="ml-2 font-mono">2.3s</span>
                            </div>
                          </div>
                        </GlassCard>
                      </>
                    ) : (
                      <GlassCard className="p-12 text-center">
                        <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                          <config.icon className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-display font-semibold mb-2">No Analysis Yet</h3>
                        <p className="text-muted-foreground">
                          Upload a file and click "Analyze" to see results
                        </p>
                      </GlassCard>
                    )}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
}
