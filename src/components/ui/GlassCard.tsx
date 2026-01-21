import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "primary" | "accent" | "success" | "destructive" | "none";
}

export function GlassCard({ 
  children, 
  className, 
  hover = false,
  glow = "none" 
}: GlassCardProps) {
  const glowStyles = {
    primary: "hover:shadow-glow-primary",
    accent: "hover:shadow-glow-accent",
    success: "hover:shadow-glow-success",
    destructive: "hover:shadow-glow-destructive",
    none: ""
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border/30",
        "bg-card/40 backdrop-blur-xl",
        "transition-all duration-300",
        hover && "hover:border-primary/50 hover:bg-card/60",
        glow !== "none" && glowStyles[glow],
        className
      )}
    >
      {children}
    </div>
  );
}
