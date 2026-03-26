"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { formatAed, getMatchedProperties, runAffordabilitySearch } from "@/lib/ai";
import { PropertyCard } from "@/components/PropertyCard";

export function AIPropertyFinder() {
  const [query, setQuery] = useState("What can I afford with 25k salary?");
  const [isLoading, setIsLoading] = useState(false);
  const [activeQuery, setActiveQuery] = useState(query);
  const [showMethodology, setShowMethodology] = useState(false);

  const result = useMemo(
    () => runAffordabilitySearch(activeQuery),
    [activeQuery],
  );
  const matchedProperties = useMemo(
    () => getMatchedProperties(activeQuery),
    [activeQuery],
  );

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveQuery(query);
      setIsLoading(false);
    }, 900);
  };

  return (
    <div className="space-y-8">
      <Card className="p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="What can I afford with 25k salary?"
            className="h-14 text-base"
          />
          <Button onClick={handleSearch} className="h-14 shrink-0 px-7">
            Analyze affordability
          </Button>
        </div>
      </Card>

      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-32 animate-pulse rounded-2xl border border-blue-100 bg-white shadow-md"
            />
          ))}
        </div>
      ) : (
        <motion.div
          key={activeQuery}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid gap-4 md:grid-cols-3"
        >
          <Card className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              Budget Range
            </p>
            <p className="text-xl font-semibold text-slate-900">
              {formatAed(result.budgetMin)} - {formatAed(result.budgetMax)}
            </p>
          </Card>
          <Card className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              Monthly Payment
            </p>
            <p className="text-xl font-semibold text-slate-900">
              {formatAed(result.monthlyPayment)}
            </p>
          </Card>
          <Card className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
              Suggested Areas
            </p>
            <p className="text-base font-semibold text-slate-900">
              {result.areas.join(" • ")}
            </p>
          </Card>
        </motion.div>
      )}

      <Card className="space-y-3 border-slate-200">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-slate-900">Why these results?</p>
          <button
            className="text-xs font-semibold text-blue-600 hover:text-blue-700"
            onClick={() => setShowMethodology((prev) => !prev)}
          >
            {showMethodology ? "Hide details" : "Learn more"}
          </button>
        </div>
        <ul className="space-y-1 text-sm text-slate-600">
          <li>• Affordability uses a conservative 36% debt-to-income threshold.</li>
          <li>• Budget range factors down payment + current market lending bands.</li>
          <li>• Areas are selected by salary fit, inventory depth, and commute demand.</li>
        </ul>
        {showMethodology ? (
          <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-3 text-xs leading-5 text-slate-600">
            We rank areas where your estimated monthly payment stays within target and where listing velocity remains healthy.
            This helps prioritize options with better financing likelihood and resale resilience.
          </div>
        ) : null}
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        {matchedProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
