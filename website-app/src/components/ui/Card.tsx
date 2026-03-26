import type { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export function Card({ className = "", children }: CardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 will-change-transform hover:scale-[1.02] hover:shadow-[0_14px_36px_rgba(15,23,42,0.11)] ${className}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-cyan-500/0 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </div>
  );
}
