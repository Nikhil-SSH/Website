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

const bankLogos = [
  { name: "Emirates NBD", mark: "EN" },
  { name: "Mashreq", mark: "MQ" },
  { name: "ADCB", mark: "AD" },
  { name: "RAKBANK", mark: "RK" },
  { name: "HSBC", mark: "HB" },
  { name: "FAB", mark: "FB" },
];
const trustBadges = ["Rates from 3.79%", "Pre-approval in 24-48h", "20+ partner banks"];

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

const savingsRows = [
  {
    profile: "First-time buyer (AED 2M loan)",
    bankAverage: "AED 10,480/mo",
    withUs: "AED 9,420/mo",
    saved: "AED 1,060/mo",
  },
  {
    profile: "Refinance profile (AED 2.5M)",
    bankAverage: "AED 13,980/mo",
    withUs: "AED 12,310/mo",
    saved: "AED 1,670/mo",
  },
  {
    profile: "Investor profile (AED 3M)",
    bankAverage: "AED 16,940/mo",
    withUs: "AED 15,280/mo",
    saved: "AED 1,660/mo",
  },
];

const authorityStats = [
  { value: "AED 100M+", label: "Mortgages facilitated" },
  { value: "4.9/5", label: "Client satisfaction Score" },
  { value: "95%", label: "Application success rate" },
  { value: "20+", label: "Active banking partners" },
];

const teamMembers = [
  { name: "Nikhil M.", role: "Senior Mortgage Advisor" },
  { name: "Aisha R.", role: "Home Finance Specialist" },
  { name: "Omar K.", role: "Refinance Consultant" },
];

const blogHighlights = [
  {
    title: "UAE Mortgage Guide 2026",
    meta: "8 min read",
    description: "Understand rates, LTV limits, and approval timelines before applying.",
  },
  {
    title: "Refinance vs Balance Transfer",
    meta: "6 min read",
    description: "When switching banks can reduce your monthly payment significantly.",
  },
  {
    title: "Buying as a Non-Resident",
    meta: "7 min read",
    description: "What lenders check and how to prepare documents for faster processing.",
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-28 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Image
              src="/assets/logos/ss-dark-01.png"
              alt="SS Finance"
              width={338}
              height={99}
              className="h-auto w-[293px] object-contain sm:w-[338px]"
            />
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#finder" className="hover:text-blue-600">
              Calculator
            </a>
            <a href="#products" className="hover:text-blue-600">
              Services
            </a>
            <a href="#how-it-works" className="hover:text-blue-600">
              Process
            </a>
            <a href="#team" className="hover:text-blue-600">
              Team
            </a>
            <a href="#blogs" className="hover:text-blue-600">
              Blogs
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
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

        <AnimatedSection className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Savings comparison</h2>
          <ul className="mt-3 space-y-1 text-sm text-slate-600">
            <li>• Compare likely monthly repayments before you apply</li>
            <li>• See where rate optimization creates real cash-flow relief</li>
          </ul>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-5 py-4">Profile</th>
                  <th className="px-5 py-4">Typical bank average</th>
                  <th className="px-5 py-4">With SS Finance</th>
                  <th className="px-5 py-4">Potential savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {savingsRows.map((row) => (
                  <tr key={row.profile}>
                    <td className="px-5 py-4 font-medium text-slate-800">{row.profile}</td>
                    <td className="px-5 py-4">{row.bankAverage}</td>
                    <td className="px-5 py-4">{row.withUs}</td>
                    <td className="px-5 py-4 font-semibold text-blue-700">{row.saved}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        <AnimatedSection className="border-y border-slate-200 bg-white py-14">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Leading Mortgage providers in UAE
            </p>
            <div className="logo-marquee mt-6">
              <div className="logo-marquee-track">
                {[...bankLogos, ...bankLogos].map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex min-w-[190px] items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      {logo.mark}
                    </span>
                    <span className="text-sm font-semibold text-slate-700">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Why choose us</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {authorityStats.map((stat) => (
              <Card key={stat.label} className="border-slate-200 p-5">
                <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="about" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About SS Finance</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>• Independent mortgage broker focused on UAE home financing.</li>
            <li>• We compare rates, fees, and lender fit before you apply.</li>
            <li>• One advisor supports you from eligibility to disbursement.</li>
          </ul>
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

        <AnimatedSection id="team" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Team</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-slate-200 p-5">
                <p className="text-lg font-semibold text-slate-900">{member.name}</p>
                <p className="mt-1 text-sm text-slate-600">{member.role}</p>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="blogs" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Blogs</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {blogHighlights.map((blog) => (
              <Card key={blog.title} className="border-slate-200 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">{blog.meta}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{blog.title}</p>
                <p className="mt-2 text-sm text-slate-600">{blog.description}</p>
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

        <AnimatedSection
          id="eligibility"
          className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8"
        >
          <LeadCaptureForm />
        </AnimatedSection>

        <AnimatedSection id="contact" className="mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
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
