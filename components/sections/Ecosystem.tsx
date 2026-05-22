"use client";

import { motion } from "framer-motion";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import { Cpu, ShieldCheck, Zap } from "lucide-react";

export default function Ecosystem() {
  const pillars = [
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: "Proven Engineering",
      description: "High-stability systems built with robust frameworks like Next.js, TypeScript, and clean API design—delivering reliable runtimes without experimental bloat.",
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: "Operational Scaling",
      description: "Bespoke workflow tools, operations managers, and custom dashboard modules designed to integrate with existing database architectures and logistics pipelines.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      title: "Sahakar Group Backing",
      description: "Strategic integration with the Sahakar Group's enterprise ecosystem, offering long-term execution viability, strict security compliance, and real-world deployment channels.",
    },
  ];

  return (
    <Section id="ecosystem" gridBackground className="border-t border-white/5 bg-[#080808]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">
            Structural Pillars
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-4">
            The Zabnix Ecosystem
          </h2>
          <p className="text-zinc-400 mt-6 leading-relaxed">
            We operate at the intersection of robust software engineering, compliance, and practical design to deliver systems that run daily workflows and scale with your operations.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glow-card glass-panel p-8 rounded-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(0,210,255,0.1)]">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-4 tracking-wide">{pillar.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{pillar.description}</p>
              </div>
              <div className="mt-8 font-mono text-[10px] text-zinc-600 tracking-widest uppercase">
                STATUS: ACTIVE // 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
