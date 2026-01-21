import { cn } from "@/lib/utils";
import { Upload, Image, Video, AudioLines } from "lucide-react";
import { useCallback, useState } from "react";

interface FileUploadZoneProps {
  type: "image" | "video" | "audio";
  onFileSelect: (file: File) => void;
  accept: string;
  disabled?: boolean;
}

export function FileUploadZone({ 
  type, 
  onFileSelect, 
  accept,
  disabled = false 
}: FileUploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const icons = {
    image: Image,
    video: Video,
    audio: AudioLines
  };

  const labels = {
    image: "Drop your image here",
    video: "Drop your video here",
    audio: "Drop your audio file here"
  };

  const formats = {
    image: "JPG, JPEG, PNG",
    video: "MP4",
    audio: "WAV, MP3"
  };

  const Icon = icons[type];

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  }, [disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (disabled) return;
    
    const file = e.dataTransfer.files[0];
    if (file) onFileSelect(file);
  }, [onFileSelect, disabled]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileSelect(file);
  }, [onFileSelect]);

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "relative flex flex-col items-center justify-center",
        "min-h-[300px] rounded-lg border-2 border-dashed",
        "transition-all duration-300 cursor-pointer",
        isDragging 
          ? "border-primary bg-primary/10 shadow-glow-primary" 
          : "border-border hover:border-primary/50 hover:bg-card/50",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <input
        type="file"
        accept={accept}
        onChange={handleFileChange}
        disabled={disabled}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
      />
      
      <div className={cn(
        "p-6 rounded-full bg-muted/50 mb-6 transition-all duration-300",
        isDragging && "bg-primary/20 scale-110"
      )}>
        <Icon className={cn(
          "w-12 h-12 transition-colors duration-300",
          isDragging ? "text-primary" : "text-muted-foreground"
        )} />
      </div>
      
      <p className="text-lg font-semibold text-foreground mb-2">
        {labels[type]}
      </p>
      
      <p className="text-sm text-muted-foreground mb-4">
        or click to browse files
      </p>
      
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Upload className="w-4 h-4" />
        <span>Supported: {formats[type]}</span>
      </div>
    </div>
  );
}
