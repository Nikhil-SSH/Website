"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { PropsWithChildren } from "react";

type AnimatedSectionProps = PropsWithChildren<{
  className?: string;
  id?: string;
}>;

export function AnimatedSection({
  className = "",
  id,
  children,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Subtle 10-15% style vertical parallax effect.
  const y = useTransform(scrollYProgress, [0, 1], [16, -16]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      style={{ y, willChange: "transform" }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
