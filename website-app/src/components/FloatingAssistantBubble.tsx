"use client";

import { motion } from "framer-motion";

export function FloatingAssistantBubble() {
  return (
    <motion.div
      className="fixed bottom-20 right-4 z-40 hidden sm:block"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className="group flex items-center gap-2 rounded-full border border-blue-100 bg-white/95 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-lg backdrop-blur-md"
      >
        <span className="relative inline-flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500/60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
        </span>
        Assistant
        <span className="max-w-0 overflow-hidden text-xs text-slate-500 opacity-0 transition-all duration-300 group-hover:ml-1 group-hover:max-w-24 group-hover:opacity-100">
          Need help?
        </span>
      </motion.button>
    </motion.div>
  );
}
