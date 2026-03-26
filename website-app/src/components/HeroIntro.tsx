"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { LottiePulseIcon } from "@/components/LottiePulseIcon";

type HeroIntroProps = {
  trustBadges: string[];
};

export function HeroIntro({ trustBadges }: HeroIntroProps) {
  return (
    <div className="space-y-7">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="inline-flex rounded-full border border-blue-100 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 shadow-sm"
      >
        UAE mortgage advisory platform
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="max-w-xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl md:leading-[1.05]"
      >
        Find the best mortgage in the UAE in minutes
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.16 }}
        className="max-w-xl text-lg leading-8 text-slate-600"
      >
        Compare 20+ banks, understand your real monthly payment, and move from search to pre-approval with a trusted mortgage specialist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.24 }}
        className="flex flex-wrap gap-3"
      >
        {trustBadges.map((badge) => (
          <span
            key={badge}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
          >
            <LottiePulseIcon />
            {badge}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.3 }}
      >
        <Card className="p-3 sm:p-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input placeholder="Try: 2-bed apartment with 30k salary" className="h-14 text-base" />
            <Button className="h-14 px-7">Run AI Search</Button>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.36 }}
        className="grid grid-cols-3 gap-4 pt-2"
      >
        {[
          ["20+", "Bank partners"],
          ["48h", "Fast pre-check"],
          ["AED 0", "Hidden fees"],
        ].map(([value, label]) => (
          <div key={label}>
            <p className="text-2xl font-semibold text-slate-900">{value}</p>
            <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
          </div>
        ))}
      </motion.div>
      <motion.ul
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.42 }}
        className="space-y-1 text-sm text-slate-600"
      >
        <li>• Typical first response within 15 minutes during working hours</li>
        <li>• Average pre-approval timeline: 24-48 hours after document submission</li>
        <li>• Clients report up to AED 2,400/month savings after refinancing</li>
      </motion.ul>
    </div>
  );
}
