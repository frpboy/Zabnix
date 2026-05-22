import { ReactNode } from "react";
import { cn } from "@/lib/utils/helpers";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  clean?: boolean;
}

export default function Container({ children, className, clean = false }: ContainerProps) {
  return (
    <div
      className={cn(
        !clean && "mx-auto w-full max-w-7xl px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}
