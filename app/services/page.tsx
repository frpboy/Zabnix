import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import GlowWrapper from "@/components/common/GlowWrapper";
import Services from "@/components/sections/Services";
import { Cpu, Eye, Scale, Server } from "lucide-react";

export default function ServicesPage() {
  const details = [
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: "Custom Systems Design",
      text: "We plan software schemas, data normalization pipelines, and multi-threaded processing cycles before writing code. This reduces compile bugs and avoids runtime degradation.",
    },
    {
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      title: "Hybrid Cloud Scaling",
      text: "We scale applications utilizing serverless functions, database replica pools, and edge networks, lowering LCP latency metrics globally.",
    },
    {
      icon: <Eye className="w-5 h-5 text-cyan-400" />,
      title: "UI/UX Aesthetic Design",
      text: "Our design team structures layouts with consistent font variables, spacing boundaries, HSL color schemes, and custom CSS timers.",
    },
    {
      icon: <Scale className="w-5 h-5 text-cyan-400" />,
      title: "SLA Commitments",
      text: "Every enterprise project is integrated with strict automated testing routines, code compliance logs, and 99.9% uptime target configurations.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-24">
        {/* Services Page Hero */}
        <Section className="relative overflow-hidden">
          <GlowWrapper position="top-right" size="lg" className="absolute inset-0 pointer-events-none" />
          <Container>
            <div className="max-w-3xl py-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">Capabilities Matrix</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4">
                Enterprise Engineering Services
              </h1>
              <p className="text-zinc-400 mt-6 leading-relaxed text-base md:text-lg">
                We deliver high-end bespoke systems, multi-tenant SaaS architectures, custom internal ERP panels, and optimized web user interfaces.
              </p>
            </div>
          </Container>
        </Section>

        {/* Embedded Services Slider (Responsive Horizontal track or list) */}
        <Services />

        {/* Technical Delivery Principles */}
        <Section gridBackground className="bg-[#080808] border-t border-white/5">
          <Container>
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">Our Standards</span>
              <h2 className="text-3xl font-bold text-white mt-2">Delivery & Architecture Protocols</h2>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                We manage projects with programmatic precision, ensuring compliance, security, and low connection latencies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {details.map((item) => (
                <div key={item.title} className="glass-panel p-8 rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{item.title}</h3>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{item.text}</p>
                  </div>
                  <div className="mt-6 font-mono text-[9px] text-zinc-600 tracking-wider">
                    SPEC // VERIFIED_CODE_PIPES
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
