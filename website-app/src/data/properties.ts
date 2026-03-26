export type Property = {
  id: number;
  title: string;
  type: "apartment" | "villa" | "townhouse";
  location: string;
  area: string;
  price: number;
  monthlyPayment: number;
  downPayment: number;
  roi: number;
  image: string;
};

export const suggestedAreas = [
  "Dubai Marina",
  "Downtown Dubai",
  "Jumeirah Village Circle",
  "Business Bay",
  "Arabian Ranches",
  "Dubai Hills Estate",
];

export const properties: Property[] = [
  {
    id: 1,
    title: "Contemporary Waterfront Apartment",
    type: "apartment",
    location: "Dubai Marina",
    area: "1,180 sq ft",
    price: 2100000,
    monthlyPayment: 9200,
    downPayment: 420000,
    roi: 6.7,
    image: "/assets/images/property-1.jpg",
  },
  {
    id: 2,
    title: "Premium Skyline Residence",
    type: "apartment",
    location: "Downtown Dubai",
    area: "1,420 sq ft",
    price: 2950000,
    monthlyPayment: 12650,
    downPayment: 590000,
    roi: 6.1,
    image: "/assets/images/property-2.jpg",
  },
  {
    id: 3,
    title: "Family Townhouse in Gated Community",
    type: "townhouse",
    location: "Dubai Hills Estate",
    area: "2,350 sq ft",
    price: 3650000,
    monthlyPayment: 15400,
    downPayment: 730000,
    roi: 5.8,
    image: "/assets/images/property-3.jpg",
  },
];
