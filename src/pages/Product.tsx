import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { Link } from "react-router-dom";
import { 
  Scan, 
  Video, 
  AudioLines, 
  Shield, 
  CheckCircle2,
  ArrowRight,
  Cpu,
  BarChart3,
  FileSearch
} from "lucide-react";

export default function Product() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI Trust Engine</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="gradient-text">Next-Generation</span>
              <br />
              Deepfake Detection
            </h1>
            <p className="text-xl text-muted-foreground">
              Enterprise-grade AI system for detecting manipulated media 
              across images, videos, and audio files.
            </p>
          </div>
        </div>
      </section>
      
      {/* Product Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Image Detection */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4">
                <Scan className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Image Detection</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Advanced Image <span className="text-primary">Analysis</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Our AI analyzes facial features, pixel patterns, and metadata to 
                detect even the most sophisticated image manipulations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span>Face swap & reenactment detection</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span>GAN-generated image identification</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span>Compression artifact analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span>EXIF metadata verification</span>
                </li>
              </ul>
            </div>
            <GlassCard className="p-8 aspect-square flex items-center justify-center" glow="primary">
              <div className="relative">
                <div className="w-48 h-48 rounded-lg bg-muted/30 flex items-center justify-center scan-effect">
                  <Scan className="w-24 h-24 text-primary/50" />
                </div>
                <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-success/20 text-success text-xs font-medium">
                  85% Trust
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* Video Detection */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
            <GlassCard className="p-8 aspect-square flex items-center justify-center order-2 lg:order-1" glow="accent">
              <div className="relative">
                <div className="w-48 h-48 rounded-lg bg-muted/30 flex items-center justify-center">
                  <Video className="w-24 h-24 text-accent/50" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-muted/50 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-accent rounded-full" />
                </div>
              </div>
            </GlassCard>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 mb-4">
                <Video className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Video Detection</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Frame-by-Frame <span className="text-accent">Analysis</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Temporal analysis across video frames to detect inconsistencies, 
                artifacts, and manipulation signatures.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span>Temporal consistency analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span>Lip-sync verification</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span>Frame boundary detection</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span>Motion blur analysis</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Audio Detection */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 mb-4">
                <AudioLines className="w-4 h-4 text-success" />
                <span className="text-sm font-medium text-success">Audio Detection</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Voice Pattern <span className="text-success">Recognition</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Spectral analysis and voice pattern recognition to identify 
                synthetic or cloned audio content.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span>Voice cloning detection</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span>Text-to-speech identification</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span>Audio splicing detection</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span>Background noise analysis</span>
                </li>
              </ul>
            </div>
            <GlassCard className="p-8 aspect-square flex items-center justify-center" glow="success">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="flex items-end gap-1 h-32">
                  {[0.3, 0.6, 0.9, 0.4, 0.7, 0.5, 0.8, 0.4, 0.6, 0.9, 0.5, 0.7].map((h, i) => (
                    <div 
                      key={i}
                      className="w-2 bg-success/50 rounded-t animate-pulse"
                      style={{ 
                        height: `${h * 100}%`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
      
      {/* Output Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What You <span className="text-primary">Get</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every analysis provides comprehensive insights and actionable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-6" hover>
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-display font-semibold mb-2">Trust Score</h3>
              <p className="text-sm text-muted-foreground">
                A 0-100% confidence score indicating the likelihood of authenticity.
              </p>
            </GlassCard>
            
            <GlassCard className="p-6" hover>
              <BarChart3 className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-display font-semibold mb-2">Verdict Label</h3>
              <p className="text-sm text-muted-foreground">
                Clear AUTHENTIC or MANIPULATED classification with confidence levels.
              </p>
            </GlassCard>
            
            <GlassCard className="p-6" hover>
              <FileSearch className="w-10 h-10 text-success mb-4" />
              <h3 className="text-lg font-display font-semibold mb-2">Explainability</h3>
              <p className="text-sm text-muted-foreground">
                Detailed AI reasoning explaining what triggered the detection.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Experience the <span className="gradient-text">Power of AI</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Start analyzing your media files today and protect your organization 
            from deepfake threats.
          </p>
          <Link to="/signup">
            <NeonButton variant="primary" size="lg" className="group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </NeonButton>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
