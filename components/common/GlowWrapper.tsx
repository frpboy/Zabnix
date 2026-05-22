import { ReactNode } from "react";
import { cn } from "@/lib/utils/helpers";

interface GlowWrapperProps {
  children?: ReactNode;
  className?: string;
  position?: "top-left" | "top-right" | "center" | "bottom-left" | "bottom-right";
  color?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function GlowWrapper({
  children,
  className,
  position = "center",
  color = "bg-cyan-500",
  size = "md",
}: GlowWrapperProps) {
  const positions = {
    "top-left": "top-0 left-0 -translate-x-1/3 -translate-y-1/3",
    "top-right": "top-0 right-0 translate-x-1/3 -translate-y-1/3",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "bottom-left": "bottom-0 left-0 -translate-x-1/3 translate-y-1/3",
    "bottom-right": "bottom-0 right-0 translate-x-1/3 translate-y-1/3",
  };

  const sizes = {
    sm: "w-64 h-64 blur-[80px]",
    md: "w-96 h-96 blur-[120px]",
    lg: "w-[500px] h-[500px] blur-[150px]",
    xl: "w-[750px] h-[750px] blur-[180px]",
  };

  return (
    <div className={cn("relative w-full", className)}>
      <div
        className={cn(
          "absolute pointer-events-none rounded-full opacity-[0.06] mix-blend-screen animate-glow-pulse",
          positions[position],
          sizes[size],
          color
        )}
      />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
