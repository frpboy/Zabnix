"use client";

import { motion } from "framer-motion";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";

export default function About() {
  const leadershipMessage = `"We formed Zabnix to bridge the gap between heavy enterprise legacy architecture and the speed of modern web technologies. Backed by Sahakar Group, we focus on raw performance, visual excellence, and software reliability."`;

  const values = [
    { title: "Pure Precision", text: "We do not compromise. We code clean, test heavily, and optimize down to milliseconds." },
    { title: "Long-term Security", text: "Supported by institutional structures, our builds enforce compliance, safety, and scale." },
    { title: "Minimal Elegance", text: "Visual interfaces are designed to be premium, responsive, and functional, omitting any unnecessary clutter." },
  ];

  return (
    <Section id="about" className="border-t border-white/5 bg-[#080808]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Vision & Message */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-4">
                Redefining the Engineering Ethos
              </h2>
            </div>
            
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Zabnix began as a specialized team building low-latency trading integrations and dashboards. Recognizing the broader market need for fast, high-security cloud platforms, we expanded into a comprehensive engineering studio.
            </p>

            <blockquote className="border-l-2 border-cyan-400 pl-6 py-2">
              <p className="text-zinc-300 italic text-sm md:text-base leading-relaxed mb-4">
                {leadershipMessage}
              </p>
              <footer className="text-xs font-bold text-white uppercase tracking-wider">
                — Senior Executive Board, Zabnix
              </footer>
            </blockquote>
          </div>

          {/* Right Column: Values & Backing */}
          <div className="lg:col-span-6 space-y-8">
            <div className="glass-panel p-8 rounded-xl border-cyan-500/10 relative overflow-hidden">
              {/* Radial gradient backing glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-6">Sahakar Integration</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Our strategic backing by the Sahakar Group allows us to deploy massive enterprise pilots, maintain compliance audits, and resource high-level talents. This backing gives our clients the agility of an innovation studio with the security of a large institution.
              </p>
              
              <div className="flex items-center space-x-6 border-t border-white/5 pt-6">
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">100%</div>
                  <div className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">Sovereign Compliance</div>
                </div>
                <div className="w-[1px] h-8 bg-white/5" />
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">2026</div>
                  <div className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">Corporate Realignment</div>
                </div>
              </div>
            </div>

            {/* Micro value list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {values.map((v) => (
                <div key={v.title} className="space-y-2">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide">{v.title}</h4>
                  <p className="text-zinc-500 text-[11px] leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
