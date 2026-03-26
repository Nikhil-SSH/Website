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
      ? "bg-[length:200%_200%] bg-[linear-gradient(135deg,#2563eb_0%,#1d4ed8_50%,#2563eb_100%)] text-white hover:bg-[position:100%_50%]"
      : "border border-blue-200 bg-white text-blue-700 hover:bg-blue-50";

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
