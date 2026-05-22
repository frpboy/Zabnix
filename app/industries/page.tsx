import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import GlowWrapper from "@/components/common/GlowWrapper";
import { Activity, DollarSign, Truck, GraduationCap, ShoppingBag, Rocket } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      icon: <Activity className="w-6 h-6 text-cyan-400" />,
      name: "Healthcare & MedTech",
      description: "Engineered for sub-100ms packet processing pipelines, full HIPAA/SOC2 compliance patterns, and secure real-time patient telemetry streams.",
      specs: ["HIPAA/GDPR Mapped ready", "99.9% Telemetry Uptime SLA", "HL7/FHIR compatibility layers"],
    },
    {
      icon: <DollarSign className="w-6 h-6 text-cyan-400" />,
      name: "Fintech & Banking",
      description: "Custom accounting ledgers and secure portals handling multi-currency distributed balances, micro-latency endpoints, and transaction hash trails.",
      specs: ["Double-entry verification keyways", "Sub-15ms ledger query metrics", "Advanced JWT scope permission matrices"],
    },
    {
      icon: <Truck className="w-6 h-6 text-cyan-400" />,
      name: "Logistics & Supply Chain",
      description: "Real-time coordinate tracking boards, fleet scheduling matrices, automated dispatch logs, and dynamic warehouse inventory sync platforms.",
      specs: ["Active route solving algorithms", "ClickHouse tracking database pipelines", "Redis cache load reduction"],
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
      name: "Education & Learning Portals",
      description: "High-concurrency user portals designed to handle millions of page hits during examination releases without thread blocks or database load degradation.",
      specs: ["Distributed read-replica pools", "Edge CDN static pre-rendering (PPR)", "Secure student record matrices"],
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-cyan-400" />,
      name: "Retail & High-Volume Commerce",
      description: "Serverless e-commerce layers, instant checkout transaction endpoints, real-time inventory counter ledgers, and stripe custom checkouts.",
      specs: ["Zero-cold-start edge functions", "Concurrency locker systems", "Multi-country localization pipelines"],
    },
    {
      icon: <Rocket className="w-6 h-6 text-cyan-400" />,
      name: "Startups & Emerging SaaS",
      description: "Rapidly prototyped pilot architectures designed to scale up quickly. We establish clear design tokens, database migrations, and clean SaaS user flows.",
      specs: ["2-Month Sandbox Pilot deployment", "Framer Motion micro-animations", "Next-Sanity dynamic content integrations"],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-24">
        {/* Industries Hero */}
        <Section className="relative overflow-hidden">
          <GlowWrapper position="top-right" size="lg" className="absolute inset-0 pointer-events-none" />
          <Container>
            <div className="max-w-3xl py-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">Sector Specializations</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4">
                Tailored Industry Systems
              </h1>
              <p className="text-zinc-400 mt-6 leading-relaxed text-base md:text-lg">
                We formulate targeted solutions for sectors with rigorous compliance boundaries, performance demands, and heavy data volumes.
              </p>
            </div>
          </Container>
        </Section>

        {/* Industries Grid */}
        <Section gridBackground className="bg-[#080808] border-t border-white/5">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((ind) => (
                <div
                  key={ind.name}
                  className="glow-card glass-panel p-8 rounded-xl flex flex-col justify-between border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center">
                      {ind.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">{ind.name}</h3>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{ind.description}</p>
                  </div>

                  <div className="border-t border-white/5 pt-6 mt-8">
                    <h4 className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider mb-4">Architecture Specs</h4>
                    <ul className="space-y-2 font-mono text-[10px] text-zinc-500">
                      {ind.specs.map((spec) => (
                        <li key={spec} className="flex items-center space-x-2">
                          <span className="w-1 h-1 rounded-full bg-cyan-500/50" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
