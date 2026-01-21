import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Newspaper, 
  Users, 
  Scale, 
  Lock,
  Zap,
  Globe,
  Building,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Media Authenticity Verification",
    description: "Verify the authenticity of images, videos, and audio files before publication or use in critical decisions.",
    features: ["Real-time analysis", "Batch processing", "API access"],
    color: "primary"
  },
  {
    icon: Zap,
    title: "Deepfake Risk Assessment",
    description: "Comprehensive risk scoring and threat analysis for organizations concerned about synthetic media.",
    features: ["Risk scoring", "Threat reports", "Trend analysis"],
    color: "accent"
  },
  {
    icon: Lock,
    title: "AI Trust Scoring",
    description: "Quantified trust metrics with explainable AI reasoning for compliance and audit requirements.",
    features: ["Trust certificates", "Audit logs", "Compliance reports"],
    color: "success"
  },
  {
    icon: Globe,
    title: "Enterprise API Access",
    description: "Integrate deepfake detection directly into your existing workflows and applications.",
    features: ["REST API", "Webhooks", "SDKs"],
    color: "warning"
  }
];

const useCases = [
  {
    icon: Newspaper,
    title: "Journalism & Media",
    description: "Verify source materials and protect editorial integrity in the age of synthetic media."
  },
  {
    icon: Users,
    title: "Social Media Moderation",
    description: "Automatically detect and flag manipulated content before it spreads."
  },
  {
    icon: Scale,
    title: "Legal & Forensics",
    description: "Provide expert-level analysis for legal proceedings and investigations."
  },
  {
    icon: Building,
    title: "Corporate Security",
    description: "Protect executives and brands from impersonation and fraud attempts."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Enterprise-grade deepfake detection solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <GlassCard 
                key={index} 
                className="p-8" 
                hover 
                glow={service.color as "primary" | "accent" | "success"}
              >
                <div className={`w-14 h-14 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-6`}
                     style={{ backgroundColor: `hsl(var(--${service.color}) / 0.1)` }}>
                  <service.icon className="w-7 h-7" style={{ color: `hsl(var(--${service.color}))` }} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Industry <span className="text-primary">Use Cases</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our technology serves diverse industries requiring media authenticity verification.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <GlassCard key={index} className="p-6 text-center" hover>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GlassCard className="p-12 text-center border-glow">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Need a Custom <span className="gradient-text">Solution?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contact our team to discuss enterprise deployments, custom integrations, 
              and tailored detection solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <NeonButton variant="primary" size="lg" className="group">
                  Get Started
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </NeonButton>
              </Link>
              <NeonButton variant="outline" size="lg">
                Contact Sales
              </NeonButton>
            </div>
          </GlassCard>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
