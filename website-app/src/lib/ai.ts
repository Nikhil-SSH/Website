import { properties, suggestedAreas } from "@/data/properties";

export type AiResult = {
  budgetMin: number;
  budgetMax: number;
  monthlyPayment: number;
  areas: string[];
  propertyType: "apartment" | "villa" | "townhouse";
  downPaymentRatio: number;
  maxLoan: number;
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

function parsePropertyType(input: string): "apartment" | "villa" | "townhouse" {
  const value = input.toLowerCase();
  if (value.includes("villa")) return "villa";
  if (value.includes("townhouse")) return "townhouse";
  return "apartment";
}

export function runAffordabilitySearch(input: string): AiResult {
  const salary = parseSalary(input);
  const propertyType = parsePropertyType(input);
  // UAE-focused deterministic rules: conservative DTI and type-based LTV.
  const maxMonthlyPayment = clamp(salary * 0.35, 3500, 30000);
  const ltvByType = {
    apartment: 0.8,
    townhouse: 0.75,
    villa: 0.7,
  };
  const downPaymentRatio = 1 - ltvByType[propertyType];
  const maxLoan = Math.round(maxMonthlyPayment * 230);
  const maxPropertyValue = Math.round(maxLoan / ltvByType[propertyType]);
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
    propertyType,
    downPaymentRatio,
    maxLoan,
  };
}

export function getMatchedProperties(input: string) {
  const salary = parseSalary(input);
  const propertyType = parsePropertyType(input);
  const targetPayment = salary * 0.36;

  return [...properties]
    .filter((property) => property.type === propertyType)
    .sort(
      (a, b) =>
        Math.abs(a.monthlyPayment - targetPayment) -
        Math.abs(b.monthlyPayment - targetPayment),
    )
    .slice(0, 3)
    .concat(
      properties
        .filter((property) => property.type !== propertyType)
        .sort(
          (a, b) =>
            Math.abs(a.monthlyPayment - targetPayment) -
            Math.abs(b.monthlyPayment - targetPayment),
        )
        .slice(0, 3),
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
