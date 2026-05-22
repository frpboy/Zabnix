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
      name: "Healthcare & Patient Portals",
      description: "Engineered for regulatory compliance, secure database synchronization, and patient record management across multi-site clinics.",
      specs: ["HIPAA compliance standards Mapped", "Multi-site database sync validation", "Custom billing integration bridges"],
    },
    {
      icon: <DollarSign className="w-6 h-6 text-cyan-400" />,
      name: "Cooperative Credit & Banking",
      description: "Custom accounting systems and secure staff portals designed for cooperative credit unions, enforcing strict auditing limits and regulatory validation.",
      specs: ["Double-entry transaction verification", "Immutable action ledger logs", "Granular role access permission grids"],
    },
    {
      icon: <Truck className="w-6 h-6 text-cyan-400" />,
      name: "Logistics & Supply Chain",
      description: "Warehouse stock reconciliation, dispatch coordinators, and route scheduling panels designed to streamline regional cooperative supply lines.",
      specs: ["Fleet dispatch coordinate tracking", "Unified stock ledger pipelines", "Database cache load optimizations"],
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
      name: "Education & Learning Portals",
      description: "High-concurrency registration systems and student portal dashboards built to scale under peak enrollment periods without thread blocks.",
      specs: ["Distributed database replica pools", "Optimized content caching layers", "Secure student record matrices"],
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-cyan-400" />,
      name: "Retail & Inventory Systems",
      description: "Point-of-sale data sync, real-time stock reconciliations, and secure credit processing endpoints designed for retail chains.",
      specs: ["High-integrity ledger reconciliation", "Concurrency lock systems", "Secure payment gateway bindings"],
    },
    {
      icon: <Rocket className="w-6 h-6 text-cyan-400" />,
      name: "Operational Prototypes",
      description: "Rapidly engineered pilot systems designed to test database schemas, design tokens, and streamline workflows before full-scale licensing.",
      specs: ["2-Month Sandbox Pilot deployment", "Clean responsive component code", "CMS-powered content mappings"],
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
