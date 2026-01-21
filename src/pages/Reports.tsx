import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { TrustGauge } from "@/components/ui/TrustGauge";
import { VerdictBadge } from "@/components/ui/VerdictBadge";
import { NeonButton } from "@/components/ui/NeonButton";
import { Link } from "react-router-dom";
import { 
  FileCheck,
  AlertTriangle,
  Shield,
  ArrowRight,
  Scan,
  Video,
  AudioLines
} from "lucide-react";

// This is a placeholder page for the Reports feature
export default function Reports() {
  // Mock data - in a real app, this would come from the backend
  const hasReports = false;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Trust <span className="text-primary">Reports</span>
            </h1>
            <p className="text-muted-foreground">
              View and manage your unified trust analysis reports
            </p>
          </div>
          
          {hasReports ? (
            // Reports list would go here
            <div>Reports will be displayed here</div>
          ) : (
            // Empty state
            <GlassCard className="p-12 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <FileCheck className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-display font-semibold mb-4">
                  No Reports Yet
                </h2>
                <p className="text-muted-foreground mb-8">
                  Start analyzing files to generate trust reports. Each analysis 
                  creates a detailed report with trust scores, verdicts, and 
                  AI explanations.
                </p>
                <Link to="/detection">
                  <NeonButton variant="primary" className="group">
                    Start First Analysis
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </NeonButton>
                </Link>
              </div>
            </GlassCard>
          )}
          
          {/* Example Report Card (for demonstration) */}
          <div className="mt-12">
            <h2 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              Report Preview (Example)
            </h2>
            <GlassCard className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Overall Score */}
                <div className="lg:col-span-1">
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">
                      Aggregated Trust Score
                    </h3>
                    <TrustGauge score={82} size="lg" />
                    <div className="mt-4">
                      <VerdictBadge verdict="AUTHENTIC" size="md" />
                    </div>
                  </div>
                </div>
                
                {/* Individual Scores */}
                <div className="lg:col-span-2">
                  <h3 className="text-sm font-medium text-muted-foreground mb-4">
                    Modality Breakdown
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <GlassCard className="p-4 bg-muted/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Scan className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium">Image</span>
                      </div>
                      <TrustGauge score={85} size="sm" showLabel={false} />
                    </GlassCard>
                    
                    <GlassCard className="p-4 bg-muted/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Video className="w-4 h-4 text-accent" />
                        </div>
                        <span className="font-medium">Video</span>
                      </div>
                      <TrustGauge score={78} size="sm" showLabel={false} />
                    </GlassCard>
                    
                    <GlassCard className="p-4 bg-muted/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                          <AudioLines className="w-4 h-4 text-success" />
                        </div>
                        <span className="font-medium">Audio</span>
                      </div>
                      <TrustGauge score={92} size="sm" showLabel={false} />
                    </GlassCard>
                  </div>
                  
                  {/* Risk Assessment */}
                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">
                      Risk Assessment
                    </h3>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-2 bg-muted/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-success via-warning to-destructive"
                          style={{ width: "18%" }}
                        />
                      </div>
                      <span className="text-sm font-medium text-success">LOW RISK</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  );
}
