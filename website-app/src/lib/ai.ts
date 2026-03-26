import { properties, suggestedAreas } from "@/data/properties";

export type AiResult = {
  budgetMin: number;
  budgetMax: number;
  monthlyPayment: number;
  areas: string[];
};

const DEFAULT_SALARY = 25000;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function parseSalary(input: string) {
  const salaryMatch = input.match(/(\d+)\s*k/i);
  if (salaryMatch?.[1]) {
    return Number(salaryMatch[1]) * 1000;
  }

  const directMatch = input.match(/(\d[\d,]*)/);
  if (directMatch?.[1]) {
    return Number(directMatch[1].replace(/,/g, ""));
  }

  return DEFAULT_SALARY;
}

export function runAffordabilitySearch(input: string): AiResult {
  const salary = parseSalary(input);
  const maxMonthlyPayment = clamp(salary * 0.36, 3500, 30000);
  const maxPropertyValue = Math.round(maxMonthlyPayment * 230);
  const minPropertyValue = Math.round(maxPropertyValue * 0.82);
  const areaStart = Math.floor((salary / 5000) % suggestedAreas.length);

  const areas = [
    suggestedAreas[areaStart],
    suggestedAreas[(areaStart + 1) % suggestedAreas.length],
    suggestedAreas[(areaStart + 2) % suggestedAreas.length],
  ];

  return {
    budgetMin: minPropertyValue,
    budgetMax: maxPropertyValue,
    monthlyPayment: Math.round(maxMonthlyPayment),
    areas,
  };
}

export function getMatchedProperties(input: string) {
  const salary = parseSalary(input);
  const targetPayment = salary * 0.36;

  return [...properties]
    .sort(
      (a, b) =>
        Math.abs(a.monthlyPayment - targetPayment) -
        Math.abs(b.monthlyPayment - targetPayment),
    )
    .slice(0, 3);
}

export function formatAed(value: number) {
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(value);
}
