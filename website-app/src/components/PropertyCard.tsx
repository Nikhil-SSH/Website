import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { formatAed } from "@/lib/ai";
import type { Property } from "@/data/properties";

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  const isBestValue = property.price <= 2300000;
  const isHighRoi = property.roi >= 6.3;

  return (
    <Card className="overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {isBestValue ? (
            <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-700">
              Best value
            </span>
          ) : null}
          {isHighRoi ? (
            <span className="rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
              High ROI
            </span>
          ) : null}
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-lg font-semibold text-slate-900">{formatAed(property.price)}</p>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            {property.location}
          </span>
        </div>
        <p className="text-sm text-slate-500">{property.area}</p>
        <p className="text-sm text-slate-600">
          Building: <span className="blur-[2px] select-none">Ocean Heights Tower</span>
        </p>
        <div className="grid grid-cols-3 gap-2 rounded-xl bg-slate-50 p-3 text-center">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-slate-500">Monthly</p>
            <p className="text-xs font-semibold text-slate-900">{formatAed(property.monthlyPayment)}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wide text-slate-500">Down pmt</p>
            <p className="text-xs font-semibold text-slate-900">{formatAed(property.downPayment)}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wide text-slate-500">ROI</p>
            <p className="text-xs font-semibold text-slate-900">{property.roi}%</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-slate-500">Projected over 12 months</p>
          <Button className="text-xs">Unlock full details</Button>
        </div>
      </div>
    </Card>
  );
}
