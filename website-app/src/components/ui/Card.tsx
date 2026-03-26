import type { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 will-change-transform hover:scale-[1.02] hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
