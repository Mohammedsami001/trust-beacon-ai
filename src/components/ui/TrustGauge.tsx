import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TrustGaugeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  animated?: boolean;
}

export function TrustGauge({ 
  score, 
  size = "md", 
  showLabel = true,
  animated = true 
}: TrustGaugeProps) {
  const [displayScore, setDisplayScore] = useState(animated ? 0 : score);
  
  useEffect(() => {
    if (!animated) {
      setDisplayScore(score);
      return;
    }
    
    const duration = 1500;
    const steps = 60;
    const stepValue = score / steps;
    let current = 0;
    
    const interval = setInterval(() => {
      current += stepValue;
      if (current >= score) {
        setDisplayScore(score);
        clearInterval(interval);
      } else {
        setDisplayScore(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(interval);
  }, [score, animated]);

  const sizes = {
    sm: { width: 120, stroke: 8, fontSize: "text-2xl" },
    md: { width: 180, stroke: 10, fontSize: "text-4xl" },
    lg: { width: 240, stroke: 12, fontSize: "text-5xl" }
  };

  const { width, stroke, fontSize } = sizes[size];
  const radius = (width - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (displayScore / 100) * circumference;
  
  const getColor = (value: number) => {
    if (value >= 70) return "hsl(var(--success))";
    if (value >= 40) return "hsl(var(--warning))";
    return "hsl(var(--destructive))";
  };

  const getGlowClass = (value: number) => {
    if (value >= 70) return "drop-shadow-[0_0_15px_hsl(var(--success)/0.8)]";
    if (value >= 40) return "drop-shadow-[0_0_15px_hsl(var(--warning)/0.8)]";
    return "drop-shadow-[0_0_15px_hsl(var(--destructive)/0.8)]";
  };

  return (
    <div className="relative inline-flex flex-col items-center">
      <svg
        width={width}
        height={width}
        className={cn("transform -rotate-90", getGlowClass(displayScore))}
      >
        {/* Background circle */}
        <circle
          cx={width / 2}
          cy={width / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={stroke}
        />
        {/* Progress circle */}
        <circle
          cx={width / 2}
          cy={width / 2}
          r={radius}
          fill="none"
          stroke={getColor(displayScore)}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          className="transition-all duration-300"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span 
          className={cn(
            "font-display font-bold",
            fontSize
          )}
          style={{ color: getColor(displayScore) }}
        >
          {displayScore}%
        </span>
        {showLabel && (
          <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
            Trust Score
          </span>
        )}
      </div>
    </div>
  );
}
