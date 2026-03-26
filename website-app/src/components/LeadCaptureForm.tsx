"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  monthlyIncome: string;
};

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  monthlyIncome: "",
};

export function LeadCaptureForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const setField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<FormData> = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      nextErrors.email = "Enter a valid email address.";
    if (!/^\+?\d{8,15}$/.test(form.phone.replace(/\s/g, "")))
      nextErrors.phone = "Enter a valid phone number.";
    if (!form.monthlyIncome || Number(form.monthlyIncome) < 5000)
      nextErrors.monthlyIncome = "Income should be at least AED 5,000.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialForm);
  };

  const completion = [
    form.fullName.trim().length > 1,
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    /^\+?\d{8,15}$/.test(form.phone.replace(/\s/g, "")),
    Number(form.monthlyIncome) >= 5000,
  ].filter(Boolean).length;
  const progress = (completion / 4) * 100;

  if (submitted) {
    return (
      <Card className="border-green-100 bg-green-50/70">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
          Request received
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-slate-900">Thank you. You are in.</h3>
        <p className="mt-3 text-slate-600">
          A mortgage specialist will contact you shortly with personalized options.
        </p>
        <Button variant="secondary" className="mt-6" onClick={() => setSubmitted(false)}>
          Submit another request
        </Button>
      </Card>
    );
  }

  return (
    <Card>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
        Free callback
      </p>
      <h3 className="mt-2 text-2xl font-semibold text-slate-900">Get tailored mortgage options</h3>
      <div className="mt-4 overflow-hidden rounded-full bg-slate-100">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </div>
      <p className="mt-2 text-xs text-slate-500">Application progress: {Math.round(progress)}%</p>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div>
          <Input
            value={form.fullName}
            onChange={(event) => setField("fullName", event.target.value)}
            placeholder="Full name"
          />
          {errors.fullName ? (
            <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
          ) : null}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Input
              type="email"
              value={form.email}
              onChange={(event) => setField("email", event.target.value)}
              placeholder="Email address"
            />
            {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
          </div>
          <div>
            <Input
              value={form.phone}
              onChange={(event) => setField("phone", event.target.value)}
              placeholder="+971501234567"
            />
            {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
          </div>
        </div>
        <div>
          <Input
            type="number"
            min={5000}
            value={form.monthlyIncome}
            onChange={(event) => setField("monthlyIncome", event.target.value)}
            placeholder="Monthly income (AED)"
          />
          {errors.monthlyIncome ? (
            <p className="mt-1 text-xs text-red-600">{errors.monthlyIncome}</p>
          ) : null}
        </div>
        <Button className="w-full" type="submit">
          Request callback
        </Button>
      </form>
    </Card>
  );
}
