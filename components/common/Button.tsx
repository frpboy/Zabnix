import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/helpers";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "glow";
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  className,
  ...props
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer select-none active:scale-[0.98]";

  const variants = {
    primary:
      "bg-white text-black hover:bg-neutral-200 shadow-[0_4px_12px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)]",
    secondary:
      "bg-neutral-900 text-white border border-white/10 hover:border-white/25 hover:bg-neutral-800",
    glow: "bg-black text-white border border-cyan-500/30 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(0,210,255,0.25)] relative overflow-hidden group",
  };

  const content = (
    <>
      {variant === "glow" && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyle, variants[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyle, variants[variant], className)} {...props}>
      {content}
    </button>
  );
}
