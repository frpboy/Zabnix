import { ReactNode } from "react";
import { cn } from "@/lib/utils/helpers";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  gridBackground?: boolean;
}

export default function Section({ children, id, className, gridBackground = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28 overflow-hidden",
        gridBackground && "cyber-grid",
        className
      )}
    >
      {children}
    </section>
  );
}
