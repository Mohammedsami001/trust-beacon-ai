import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import heroBg from "@/assets/hero-bg.jpg";
import { 
  Shield, 
  Scan, 
  Video, 
  AudioLines, 
  CheckCircle2, 
  Zap,
  Lock,
  Eye,
  ArrowRight,
  Brain,
  Globe,
  TrendingUp
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Trust Verification</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="text-foreground">Verify Reality.</span>
              <br />
              <span className="gradient-text">Defend Trust.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Multi-modal AI detection system that analyzes images, videos, and audio 
              to identify deepfakes and protect digital authenticity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <NeonButton variant="primary" size="lg" className="group">
                  Get Started
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </NeonButton>
              </Link>
              <Link to="/product">
                <NeonButton variant="outline" size="lg">
                  Learn More
                </NeonButton>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Multi-Modal <span className="text-primary">AI Protection</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive deepfake detection across all media types with 
              explainable AI and real-time trust scoring.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Image Detection */}
            <GlassCard hover glow="primary" className="p-8">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Scan className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Image Detection</h3>
              <p className="text-muted-foreground mb-4">
                Advanced facial analysis and manipulation detection for photos and images.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  Face swap detection
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  GAN artifact analysis
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  Metadata verification
                </li>
              </ul>
            </GlassCard>
            
            {/* Video Detection */}
            <GlassCard hover glow="accent" className="p-8">
              <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Video Detection</h3>
              <p className="text-muted-foreground mb-4">
                Frame-by-frame analysis to detect manipulated video content.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  Temporal consistency
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  Lip-sync analysis
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  Motion artifacts
                </li>
              </ul>
            </GlassCard>
            
            {/* Audio Detection */}
            <GlassCard hover glow="success" className="p-8">
              <div className="w-16 h-16 rounded-lg bg-success/10 flex items-center justify-center mb-6">
                <AudioLines className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Audio Detection</h3>
              <p className="text-muted-foreground mb-4">
                Voice pattern analysis to identify synthetic or cloned audio.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  Voice cloning detection
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  Spectral analysis
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  Audio splicing
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>
      
      {/* Why It Matters Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Why Deepfake Detection <span className="text-primary">Matters</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                In an era of AI-generated content, verifying authenticity has never been 
                more critical. From journalism to legal proceedings, trust in digital 
                media is essential.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Protect Identity</h4>
                    <p className="text-sm text-muted-foreground">
                      Defend against identity theft and impersonation attacks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Eye className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Verify Content</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensure the authenticity of critical media assets.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-success/10">
                    <Zap className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-Time Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Get instant results with explainable AI reasoning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <GlassCard className="p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 rounded-lg bg-muted/30">
                    <div className="text-4xl font-display font-bold text-primary mb-2">99.2%</div>
                    <div className="text-sm text-muted-foreground">Detection Accuracy</div>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-muted/30">
                    <div className="text-4xl font-display font-bold text-accent mb-2">&lt;2s</div>
                    <div className="text-sm text-muted-foreground">Analysis Time</div>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-muted/30">
                    <div className="text-4xl font-display font-bold text-success mb-2">3</div>
                    <div className="text-sm text-muted-foreground">Media Types</div>
                  </div>
                  <div className="text-center p-6 rounded-lg bg-muted/30">
                    <div className="text-4xl font-display font-bold text-warning mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Availability</div>
                  </div>
                </div>
              </GlassCard>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Score Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Real-Time <span className="text-primary">Trust Scoring</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI provides instant trust scores with detailed explanations, 
              helping you make informed decisions about content authenticity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="p-8 text-center">
              <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-display font-semibold mb-2">AI Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Deep learning models trained on millions of samples for accurate detection.
              </p>
            </GlassCard>
            
            <GlassCard className="p-8 text-center">
              <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-display font-semibold mb-2">Global Coverage</h3>
              <p className="text-sm text-muted-foreground">
                Detection of deepfakes from any source, in any language or format.
              </p>
            </GlassCard>
            
            <GlassCard className="p-8 text-center">
              <TrendingUp className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-lg font-display font-semibold mb-2">Continuous Learning</h3>
              <p className="text-sm text-muted-foreground">
                Models constantly updated to detect emerging manipulation techniques.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <GlassCard className="p-12 text-center border-glow">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to <span className="gradient-text">Verify Reality?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Start protecting your organization from deepfake threats today 
              with our AI-powered detection platform.
            </p>
            <Link to="/signup">
              <NeonButton variant="primary" size="lg">
                Get Started Free
              </NeonButton>
            </Link>
          </GlassCard>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
