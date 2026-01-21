import { cn } from "@/lib/utils";
import { Loader2, ScanLine } from "lucide-react";

interface ScanningOverlayProps {
  message?: string;
  type?: "image" | "video" | "audio";
}

export function ScanningOverlay({ 
  message = "Scanning...",
  type = "image" 
}: ScanningOverlayProps) {
  const messages = {
    image: "Analyzing Image Patterns...",
    video: "Processing Video Frames...",
    audio: "Analyzing Audio Waveforms..."
  };

  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-32 h-32 rounded-full border-4 border-primary/20 animate-spin-slow" />
        
        {/* Inner ring */}
        <div className="absolute inset-2 rounded-full border-2 border-primary/40 animate-spin-slow" 
             style={{ animationDirection: 'reverse', animationDuration: '4s' }} />
        
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ScanLine className="w-12 h-12 text-primary animate-pulse" />
        </div>
      </div>
      
      {/* Scanning text */}
      <div className="mt-8 text-center">
        <p className="text-lg font-display text-primary animate-pulse">
          {message || messages[type]}
        </p>
        <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span className="text-sm font-mono">AI Detection in Progress</span>
        </div>
      </div>
      
      {/* Scan line effect */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line opacity-50" />
    </div>
  );
}
