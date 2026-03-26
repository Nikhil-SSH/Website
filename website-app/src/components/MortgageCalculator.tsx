"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { formatAed } from "@/lib/ai";

function formatNumberWithCommas(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);
}

function parseNumberInput(value: string) {
  const digitsOnly = value.replace(/[^\d]/g, "");
  return digitsOnly ? Number(digitsOnly) : 0;
}

function monthlyPayment(principal: number, annualRate: number, years: number) {
  const monthlyRate = annualRate / 100 / 12;
  const n = years * 12;
  if (monthlyRate === 0) {
    return principal / n;
  }
  return (principal * monthlyRate * (1 + monthlyRate) ** n) / ((1 + monthlyRate) ** n - 1);
}

export function MortgageCalculator() {
  const [propertyValue, setPropertyValue] = useState(2600000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [rate, setRate] = useState(3.95);
  const [tenure, setTenure] = useState(25);

  const downPayment = useMemo(
    () => Math.round(propertyValue * (downPaymentPct / 100)),
    [propertyValue, downPaymentPct],
  );
  const loanAmount = useMemo(() => propertyValue - downPayment, [propertyValue, downPayment]);
  const payment = useMemo(
    () => monthlyPayment(loanAmount, rate, tenure),
    [loanAmount, rate, tenure],
  );

  return (
    <Card className="relative overflow-hidden border-blue-100 p-6 sm:p-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100/60 via-white to-white" />
      <h2 className="text-lg font-semibold text-slate-900">Mortgage Calculator</h2>
      <div className="mt-6 space-y-4">
        <label className="block">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Property value (AED)
          </p>
          <input
            type="text"
            min={500000}
            step={10000}
            value={formatNumberWithCommas(propertyValue)}
            onChange={(event) => setPropertyValue(parseNumberInput(event.target.value))}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-800 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Down payment %
            </p>
            <input
              type="number"
              min={10}
              max={80}
              step={1}
              value={downPaymentPct}
              onChange={(event) => setDownPaymentPct(Number(event.target.value || 0))}
              className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-800 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </label>
          <label className="block">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Interest rate %
            </p>
            <input
              type="number"
              min={1}
              max={12}
              step={0.05}
              value={rate}
              onChange={(event) => setRate(Number(event.target.value || 0))}
              className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-800 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </label>
        </div>

        <label className="block">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Tenure (years)
          </p>
          <input
            type="number"
            min={5}
            max={35}
            step={1}
            value={tenure}
            onChange={(event) => setTenure(Number(event.target.value || 0))}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-800 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </label>

        <div className="rounded-2xl bg-blue-600 p-5 text-white shadow-lg">
          <p className="text-sm text-blue-100">Estimated monthly payment</p>
          <p className="mt-1 text-3xl font-semibold">{formatAed(Math.round(payment))}</p>
          <p className="mt-2 text-xs text-blue-100">Loan: {formatAed(loanAmount)}</p>
        </div>
        <Button className="w-full">Check Eligibility</Button>
      </div>
    </Card>
  );
}
