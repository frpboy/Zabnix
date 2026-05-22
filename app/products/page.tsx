import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import GlowWrapper from "@/components/common/GlowWrapper";
import Button from "@/components/common/Button";
import { Cpu, ShieldCheck, Database, Zap, Layers, RefreshCw } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      title: "Zabnix Core",
      type: "SaaS Platform",
      status: "Production",
      description: "Our core telemetry dashboard system designed to aggregate distributed logs, monitor API query times, and coordinate automated alerts across multi-tenant servers.",
      features: [
        "Sub-millisecond data stream ingest pipes",
        "Configurable vector-rendered charting dashboard",
        "Multi-channel instant alert notifications (Slack, Discord, SMS)",
        "Token-authenticated API request paths",
      ],
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      tagline: "High-Volume Telemetry Systems",
    },
    {
      title: "Kronos ERP",
      type: "Enterprise Resource Planner",
      status: "WIP",
      description: "A secure operations planning architecture built to process heavy inventory tracking logs, vendor dispatch pipelines, and granular office authority permissions.",
      features: [
        "Cryptographically locked transaction ledgers",
        "Automated warehouse stocks reconciliation",
        "Custom billing models and export filters",
        "Optimized Prisma relational database schemas",
      ],
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      tagline: "Corporate Ledger & Operations",
    },
    {
      title: "Helios Analytics",
      type: "Edge Telemetry Compiler",
      status: "Experimental",
      description: "A performance-focused stream analytics package that parses incoming logs directly on Edge CDN routing points to provide near-instant geographical access metrics.",
      features: [
        "WebAssembly-compiled parsing pipeline cores",
        "Zero-cold-start edge function triggers",
        "Sleek coordinate visualization maps",
        "Custom integration bindings for Next.js and NestJS",
      ],
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      tagline: "Edge Performance Analytics",
    },
  ];

  const deploymentModels = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Dedicated Private Cloud",
      text: "Deploy fully containerized Zabnix systems inside your AWS, GCP, or Azure subscription. Keep complete ownership of database tables, backups, and user logs under your compliance boundary.",
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-emerald-400" />,
      title: "2-Month Pilot Phase",
      text: "We configure a dedicated sandbox space mapped to your company's schema guidelines. Our engineers write custom database query maps to verify feasibility before license sign-off.",
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: "Hybrid Enterprise SLA",
      text: "Benefit from a dedicated SLA target providing 99.9% uptime guarantees, direct developer contact queues, and priority updates on new core revisions.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-24">
        {/* Products Hero */}
        <Section className="relative overflow-hidden">
          <GlowWrapper position="top-right" size="lg" className="absolute inset-0 pointer-events-none" />
          <Container>
            <div className="max-w-3xl py-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">Proprietary Stacks</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4">
                In-House Systems & SaaS
              </h1>
              <p className="text-zinc-400 mt-6 leading-relaxed text-base md:text-lg">
                We design and incubate robust software products that address scaling bottlenecks, analytics delay, and secure ledger tracking.
              </p>
            </div>
          </Container>
        </Section>

        {/* Detailed Product Specifications */}
        <Section className="bg-[#080808] border-t border-white/5">
          <Container>
            <div className="space-y-16">
              {products.map((product, idx) => (
                <div
                  key={product.title}
                  className="glow-card glass-panel p-8 md:p-12 rounded-xl grid grid-cols-1 lg:grid-cols-12 gap-8 border border-white/5 hover:border-white/8 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Glowing blur indicator based on status */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-widest font-mono">
                        {product.tagline}
                      </span>
                      <span className="text-zinc-600 font-mono">•</span>
                      <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest bg-zinc-950 px-2.5 py-0.5 rounded border border-white/5">
                        {product.status}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight flex items-center space-x-3">
                      <span className="p-2 bg-zinc-900 border border-white/5 rounded-lg inline-flex">
                        {product.icon}
                      </span>
                      <span>{product.title}</span>
                    </h2>
                    
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between">
                    <div>
                      <h4 className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider mb-4">Spec Sheet Highlights</h4>
                      <ul className="space-y-3 font-mono text-xs text-zinc-500">
                        {product.features.map((feat) => (
                          <li key={feat} className="flex items-start space-x-2">
                            <span className="text-cyan-500/70 font-bold shrink-0 mt-0.5">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="glow" href="/contact" className="w-full text-xs py-2.5 uppercase tracking-wider mt-8">
                      Request Pilot Sandbox
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Licensing & Deployment Models */}
        <Section gridBackground className="bg-[#0A0A0A] border-t border-white/5">
          <Container>
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">Licensing & Setups</span>
              <h2 className="text-3xl font-bold text-white mt-2">Dedicated Deployments</h2>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                Zabnix systems can be operated on our multi-tenant SaaS grid or deployed privately inside your sovereign database zones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {deploymentModels.map((item) => (
                <div key={item.title} className="glass-panel p-8 rounded-xl flex flex-col justify-between border border-white/5">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-bold text-white mb-3 tracking-wide">{item.title}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">{item.text}</p>
                  </div>
                  <div className="mt-6 font-mono text-[9px] text-zinc-600 tracking-wider uppercase">
                    Model // Verified_Licensing
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
