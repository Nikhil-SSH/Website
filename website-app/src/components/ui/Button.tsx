"use client";

import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 will-change-transform shadow-md hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70";

  const variantClasses =
    variant === "primary"
      ? "bg-[length:220%_220%] bg-[linear-gradient(135deg,#2563EB_0%,#7C3AED_55%,#06B6D4_100%)] text-white shadow-[0_10px_24px_rgba(37,99,235,0.24)] hover:bg-[position:100%_50%] hover:shadow-[0_14px_28px_rgba(124,58,237,0.26)]"
      : "border border-slate-200 bg-gradient-to-r from-white to-blue-50/60 text-slate-700 hover:border-blue-200 hover:text-blue-700";

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
