import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "primary", size = "md", glow = true, children, ...props }, ref) => {
    const variants = {
      primary: cn(
        "bg-primary text-primary-foreground",
        glow && "shadow-glow-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
      ),
      secondary: cn(
        "bg-secondary text-secondary-foreground border border-border",
        "hover:bg-secondary/80"
      ),
      outline: cn(
        "bg-transparent border-2 border-primary text-primary",
        glow && "hover:shadow-glow-primary hover:bg-primary/10"
      ),
      ghost: cn(
        "bg-transparent text-foreground hover:bg-muted/50",
        "hover:text-primary"
      )
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2",
          "font-display font-semibold tracking-wide uppercase",
          "rounded-lg transition-all duration-300",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

NeonButton.displayName = "NeonButton";
