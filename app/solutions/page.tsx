import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import GlowWrapper from "@/components/common/GlowWrapper";
import { RefreshCw, Zap, ShieldAlert } from "lucide-react";

export default function SolutionsPage() {
  const solutions = [
    {
      icon: <RefreshCw className="w-6 h-6 text-cyan-400" />,
      title: "Legacy Migration Protocols",
      text: "Upgrade ancient database frameworks, slow monolithic systems, and bloated scripts to Next.js microservices. Our progressive migration patterns guarantee zero downtime during transitions.",
      features: ["Incremental route proxy rules", "Live database sync bridges", "API schema translators", "Zero downtime deployments"],
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: "Real-time Telemetry Sync",
      text: "Ingest and process huge streams of logs, events, or sensor telemetry. We build high-throughput non-blocking WebSockets pathways backed by Redis cache indexes.",
      features: ["Sub-50ms message latencies", "Automatic connection retries", "Dynamic data stream pooling", "Efficient ClickHouse logging"],
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-cyan-400" />,
      title: "High-Security API Portals",
      text: "Enforce strict security, compliance, and user roles. We architect microservice APIs with JWT token validation, IP access boundaries, and full activity audit logging.",
      features: ["HIPAA / SOC2 mapping ready", "Granular user role matrices", "Token expiration systems", "Encrypted data store models"],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-24">
        {/* Solutions Hero */}
        <Section className="relative overflow-hidden">
          <GlowWrapper position="top-right" size="lg" className="absolute inset-0 pointer-events-none" />
          <Container>
            <div className="max-w-3xl py-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">Problem Space</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4">
                Bespoke Systems Integrations
              </h1>
              <p className="text-zinc-400 mt-6 leading-relaxed text-base md:text-lg">
                We formulate architectural answers to difficult operational challenges: legacy migrations, streaming telemetry, and high-security compliance.
              </p>
            </div>
          </Container>
        </Section>

        {/* Solutions Grid */}
        <Section gridBackground className="bg-[#080808] border-t border-white/5">
          <Container>
            <div className="space-y-12">
              {solutions.map((sol, idx) => (
                <div
                  key={sol.title}
                  className="glow-card glass-panel p-8 md:p-12 rounded-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-white/5"
                >
                  {/* Left info column */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center">
                      {sol.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">{sol.title}</h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{sol.text}</p>
                  </div>

                  {/* Right specs column */}
                  <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-8">
                    <h4 className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider mb-4">Wired Integrations</h4>
                    <ul className="space-y-3 font-mono text-xs text-zinc-500">
                      {sol.features.map(f => (
                        <li key={f} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                          <span>{f}</span>
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
