import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { useAuth } from "@/hooks/useAuth";
import { 
  Scan, 
  Video, 
  AudioLines, 
  FileCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  Shield
} from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();
  const displayName = user?.email?.split("@")[0] || "User";

  const stats = [
    { icon: FileCheck, label: "Files Analyzed", value: "0", color: "primary" },
    { icon: TrendingUp, label: "Avg Trust Score", value: "—", color: "success" },
    { icon: Clock, label: "Last Analysis", value: "Never", color: "accent" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Welcome back, <span className="text-primary">{displayName}</span>
            </h1>
            <p className="text-muted-foreground">
              Ready to verify your media? Start a new analysis below.
            </p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="p-6">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `hsl(var(--${stat.color}) / 0.1)` }}
                  >
                    <stat.icon className="w-6 h-6" style={{ color: `hsl(var(--${stat.color}))` }} />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
          
          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-semibold mb-4">Start New Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/detection?tab=image">
                <GlassCard className="p-6 cursor-pointer group" hover glow="primary">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Scan className="w-6 h-6 text-primary" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-1">Image Detection</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyze photos for manipulation
                  </p>
                </GlassCard>
              </Link>
              
              <Link to="/detection?tab=video">
                <GlassCard className="p-6 cursor-pointer group" hover glow="accent">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Video className="w-6 h-6 text-accent" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-1">Video Detection</h3>
                  <p className="text-sm text-muted-foreground">
                    Frame-by-frame analysis
                  </p>
                </GlassCard>
              </Link>
              
              <Link to="/detection?tab=audio">
                <GlassCard className="p-6 cursor-pointer group" hover glow="success">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                      <AudioLines className="w-6 h-6 text-success" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-success transition-colors" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-1">Audio Detection</h3>
                  <p className="text-sm text-muted-foreground">
                    Voice pattern analysis
                  </p>
                </GlassCard>
              </Link>
            </div>
          </div>
          
          {/* Detection Hub CTA */}
          <GlassCard className="p-8 border-glow">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold">Detection Hub</h3>
                  <p className="text-muted-foreground">
                    Access all detection tools in one place
                  </p>
                </div>
              </div>
              <Link to="/detection">
                <NeonButton variant="primary" className="group">
                  Open Detection Hub
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </NeonButton>
              </Link>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}
