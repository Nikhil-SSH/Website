import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AIPropertyFinder } from "@/components/AIPropertyFinder";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FloatingAssistantBubble } from "@/components/FloatingAssistantBubble";
import { HeroVideo } from "@/components/HeroVideo";
import { HeroIntro } from "@/components/HeroIntro";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const bankLogos = ["Emirates NBD", "Mashreq", "ADCB", "RAKBANK", "HSBC", "FAB"];
const trustBadges = ["DFSA-aligned advisors", "1500+ funded families", "4.9/5 client rating"];

const faqs = [
  {
    question: "How long does pre-approval take?",
    answer: "Most clients receive pre-approval guidance within 24 hours after submitting documents.",
  },
  {
    question: "Do you charge brokerage fees?",
    answer: "No hidden fees. We are transparent about every cost before you proceed.",
  },
  {
    question: "Can expats apply for UAE mortgages?",
    answer: "Yes. We support both residents and non-residents with bank-matched options.",
  },
];

const ratesNotes = [
  "Rates shown are indicative for strong credit profiles and may vary by employer category.",
  "Estimated monthly savings compare current market median variable rates.",
  "Most approvals complete in 48-72 hours after full documentation.",
];

const productCards = [
  {
    title: "First-time buyer",
    points: ["Up to 80% financing", "Step-by-step onboarding", "Transparent fee breakdown"],
  },
  {
    title: "Refinance",
    points: ["Potential monthly savings", "Rate renegotiation support", "Fast transfer processing"],
  },
  {
    title: "Investor",
    points: ["Yield-oriented location filters", "Portfolio refinancing options", "ROI-first comparisons"],
  },
];

const testimonialCards = [
  {
    name: "Amira K.",
    headline: "Switched from 4.85% to 3.92% in 5 days.",
    points: ["Saved AED 1,940/month", "Pre-approval in 36 hours"],
  },
  {
    name: "Yousef R.",
    headline: "Bought a 2-bed in Dubai Hills with confident numbers.",
    points: ["Budget accuracy within 4%", "Offer issued in 48 hours"],
  },
  {
    name: "Nadia S.",
    headline: "Refinanced portfolio across two properties smoothly.",
    points: ["Reduced blended rate by 0.8%", "Annual savings ~AED 52,000"],
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logos/logo-dark.png"
              alt="SS Finance"
              width={36}
              height={36}
              className="rounded-md"
            />
            <p className="text-sm font-bold tracking-wide text-slate-900">SS Finance</p>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#finder" className="hover:text-blue-600">
              AI Finder
            </a>
            <a href="#how-it-works" className="hover:text-blue-600">
              Process
            </a>
            <a href="#products" className="hover:text-blue-600">
              Products
            </a>
            <a href="#rates" className="hover:text-blue-600">
              Rates
            </a>
          </nav>
          <a
            href="#eligibility"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
          >
            Check Eligibility
          </a>
        </div>
      </header>

      <main>
        <section className="relative w-full overflow-hidden border-b border-slate-200/60 py-20 md:py-24">
          <HeroVideo />
          <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <HeroIntro trustBadges={trustBadges} />

            <div className="relative z-10">
              <MortgageCalculator />
            </div>
          </div>
        </section>

        <AnimatedSection id="finder" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              AI Property Finder
            </h2>
            <p className="mt-3 text-slate-600">
              Type your salary and preferences. Get realistic monthly numbers and area suggestions instantly.
            </p>
          </div>
          <AIPropertyFinder />
        </AnimatedSection>

        <AnimatedSection className="border-y border-slate-200 bg-white py-14">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-3 px-4 sm:px-6 lg:px-8">
            {bankLogos.map((logo) => (
              <span
                key={logo}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white"
              >
                {logo}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="how-it-works" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">How it works</h2>
          <ul className="mt-3 max-w-2xl space-y-1 text-sm text-slate-600">
            <li>• Same-day lender shortlisting based on profile fit</li>
            <li>• Clear timeline and document checklist at every stage</li>
            <li>• One advisory team from discovery to disbursement</li>
          </ul>
          <div className="mt-8 hidden items-center gap-2 md:flex">
            <div className="h-1 flex-1 rounded-full bg-blue-600" />
            <div className="h-1 flex-1 rounded-full bg-blue-300" />
            <div className="h-1 flex-1 rounded-full bg-slate-200" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["1", "Share your profile", "Tell us your salary, property type, and timeline."],
              ["2", "Compare top banks", "We match you with lender-specific offers instantly."],
              ["3", "Close with confidence", "Dedicated advisors handle paperwork end-to-end."],
            ].map(([step, title, text]) => (
              <Card key={step} className="relative space-y-4 border-slate-200">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {step}
                </span>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-slate-600">{text}</p>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="products" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Mortgage products</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {productCards.map((product) => (
              <Card key={product.title} className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  {product.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
                <Button variant="secondary" className="mt-6">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="rates" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Rates comparison</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-blue-50 text-slate-700">
                <tr>
                  <th className="px-5 py-4">Bank</th>
                  <th className="px-5 py-4">Rate from</th>
                  <th className="px-5 py-4">Est. monthly (AED 2M)</th>
                  <th className="px-5 py-4">Potential savings</th>
                  <th className="px-5 py-4">Type</th>
                  <th className="px-5 py-4">Approval speed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="px-5 py-4 font-medium text-slate-800">Emirates NBD</td>
                  <td className="px-5 py-4">3.79%</td>
                  <td className="px-5 py-4">9,280</td>
                  <td className="px-5 py-4">Up to 1,150/mo</td>
                  <td className="px-5 py-4">Fixed 3 years</td>
                  <td className="px-5 py-4">48 hours</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-slate-800">ADCB</td>
                  <td className="px-5 py-4">3.89%</td>
                  <td className="px-5 py-4">9,420</td>
                  <td className="px-5 py-4">Up to 980/mo</td>
                  <td className="px-5 py-4">Variable</td>
                  <td className="px-5 py-4">72 hours</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-slate-800">Mashreq</td>
                  <td className="px-5 py-4">3.99%</td>
                  <td className="px-5 py-4">9,560</td>
                  <td className="px-5 py-4">Up to 860/mo</td>
                  <td className="px-5 py-4">Fixed 2 years</td>
                  <td className="px-5 py-4">72 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="mt-4 space-y-1 text-xs text-slate-500">
            {ratesNotes.map((note) => (
              <li key={note}>• {note}</li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What clients say</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonialCards.map((testimonial) => (
              <Card key={testimonial.name}>
                <p className="text-sm font-semibold text-slate-900">{testimonial.headline}</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  {testimonial.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold text-slate-900">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto w-full max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">FAQ</h2>
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </AnimatedSection>

        <AnimatedSection id="eligibility" className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <LeadCaptureForm />
        </AnimatedSection>

        <AnimatedSection className="mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 p-10 text-white shadow-xl md:p-14">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Ready to secure the right mortgage with confidence?
            </h2>
            <p className="mt-4 max-w-2xl text-blue-100">
              Start with a quick eligibility check and receive tailored bank options in minutes.
            </p>
            <a
              href="#eligibility"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-lg"
            >
              Check Eligibility
            </a>
          </div>
        </AnimatedSection>
      </main>

      <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <a
          href="#eligibility"
          className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700"
        >
          Check Eligibility
        </a>
      </div>
      <FloatingAssistantBubble />
    </div>
  );
}
