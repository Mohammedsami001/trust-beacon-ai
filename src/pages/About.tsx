import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Shield, 
  Eye, 
  Layers, 
  Cpu,
  ArrowRight,
  Upload,
  Scan,
  BarChart3,
  FileCheck
} from "lucide-react";

const flowSteps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Submit your media file for analysis"
  },
  {
    icon: Scan,
    title: "AI Analysis",
    description: "Deep learning models process the content"
  },
  {
    icon: BarChart3,
    title: "Trust Scoring",
    description: "Generate quantified authenticity metrics"
  },
  {
    icon: FileCheck,
    title: "Explainability",
    description: "Receive detailed AI reasoning"
  }
];

const principles = [
  {
    icon: Brain,
    title: "Explainable AI",
    description: "We believe in transparent AI. Every detection comes with clear reasoning, not just a score. You'll understand exactly what triggered our analysis."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your media files are processed securely and never stored longer than necessary. We use end-to-end encryption and comply with global privacy regulations."
  },
  {
    icon: Eye,
    title: "Continuous Learning",
    description: "Our models are continuously updated to detect emerging deepfake techniques. We stay ahead of adversaries through active research and development."
  },
  {
    icon: Layers,
    title: "Multi-Modal Analysis",
    description: "By analyzing multiple modalities together, we achieve higher accuracy than single-mode detection. Cross-referencing image, video, and audio provides comprehensive verification."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              The <span className="gradient-text">Technology</span> Behind
              <br />
              Our Detection System
            </h1>
            <p className="text-xl text-muted-foreground">
              A deep dive into our AI-powered approach to deepfake detection 
              and trust verification.
            </p>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our <span className="text-primary">Philosophy</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                In a world where AI can create increasingly convincing synthetic media, 
                we believe verification technology must be equally sophisticated—yet 
                accessible and transparent.
              </p>
              <p className="text-muted-foreground mb-6">
                Our mission is to provide reliable, explainable AI detection that 
                empowers organizations to verify digital content with confidence.
              </p>
              <Link to="/signup">
                <NeonButton variant="primary" className="group">
                  Try It Yourself
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </NeonButton>
              </Link>
            </div>
            <div className="relative">
              <GlassCard className="p-8">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                      <Cpu className="w-16 h-16 text-primary" />
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow" />
                    <div className="absolute -inset-4 rounded-full border border-accent/20 animate-spin-slow" 
                         style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
                  </div>
                </div>
              </GlassCard>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>
      
      {/* System Flow */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our detection pipeline processes media through multiple AI models 
              to provide comprehensive analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {flowSteps.map((step, index) => (
              <div key={index} className="relative">
                <GlassCard className="p-6 text-center h-full" hover>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-xs text-primary font-mono mb-2">STEP {index + 1}</div>
                  <h3 className="text-lg font-display font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </GlassCard>
                {index < flowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Principles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Core <span className="text-accent">Principles</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <GlassCard key={index} className="p-8" hover>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <principle.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <GlassCard className="p-12 border-glow">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Experience the power of our AI detection technology firsthand.
            </p>
            <Link to="/signup">
              <NeonButton variant="primary" size="lg" className="group">
                Create Free Account
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </NeonButton>
            </Link>
          </GlassCard>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
