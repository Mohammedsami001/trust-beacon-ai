import { cn } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

interface VerdictBadgeProps {
  verdict: "AUTHENTIC" | "MANIPULATED" | "SUSPICIOUS";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

export function VerdictBadge({ 
  verdict, 
  size = "md",
  showIcon = true 
}: VerdictBadgeProps) {
  const config = {
    AUTHENTIC: {
      icon: CheckCircle2,
      className: "bg-success/20 text-success border-success/50",
      glowClass: "shadow-glow-success"
    },
    MANIPULATED: {
      icon: XCircle,
      className: "bg-destructive/20 text-destructive border-destructive/50",
      glowClass: "shadow-glow-destructive"
    },
    SUSPICIOUS: {
      icon: AlertTriangle,
      className: "bg-warning/20 text-warning border-warning/50",
      glowClass: "shadow-[0_0_20px_hsl(var(--warning)/0.5)]"
    }
  };

  const sizes = {
    sm: "px-3 py-1 text-xs gap-1",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2"
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  const { icon: Icon, className, glowClass } = config[verdict];

  return (
    <div
      className={cn(
        "inline-flex items-center font-display font-semibold uppercase tracking-wider",
        "border rounded-lg transition-all duration-300",
        className,
        glowClass,
        sizes[size]
      )}
    >
      {showIcon && <Icon className={iconSizes[size]} />}
      <span>{verdict}</span>
    </div>
  );
}
