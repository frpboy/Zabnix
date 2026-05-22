"use client";

import { motion } from "framer-motion";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  shortDescription: string;
  results: { label: string; value: string }[];
  technologies: string[];
}

export default function ProjectsPreview() {
  const cases: CaseStudy[] = [
    {
      slug: "sahakar-cooperative-ledger",
      title: "Cooperative Credit Ledger Migration",
      client: "Sahakar Credit Union",
      industry: "Financial Systems",
      shortDescription: "Architected a secure, compliant transition system to migrate legacy member account databases into an audited, modern distributed database ledger.",
      results: [
        { label: "Migration Uptime", value: "100%" },
        { label: "Audit Accuracy", value: "100%" },
      ],
      technologies: ["Next.js", "PostgreSQL", "Redis", "Tailwind CSS"],
    },
    {
      slug: "healthcare-operations-erp",
      title: "Healthcare Patient Care & Billing ERP",
      client: "Axiom Healthcare Networks",
      industry: "Healthcare IT",
      shortDescription: "Built a custom billing coordination and departmental resource manager to streamline patient registration, scheduling, and pharmacy stock balances.",
      results: [
        { label: "Dispatch Sync Speed", value: "< 2s" },
        { label: "Operational Speedup", value: "45%" },
      ],
      technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
    },
    {
      slug: "supply-chain-optimizer",
      title: "Cooperative Supply Chain Optimizer",
      client: "Sahakar Logistics Division",
      industry: "Logistics",
      shortDescription: "Rebuilt the warehouse dispatch and route optimization panel coordinating delivery fleets across 150+ regional retail and distribution nodes.",
      results: [
        { label: "Routing Efficiency", value: "+28%" },
        { label: "Active Fleets", value: "120+" },
      ],
      technologies: ["React", "NestJS", "Prisma", "PostgreSQL"],
    },
  ];

  return (
    <Section id="projects" className="border-t border-white/5 bg-[#0A0A0A]">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-4">
            Proven Implementations
          </h2>
          <p className="text-zinc-400 mt-6 leading-relaxed">
            Discover how Zabnix delivers performance, stability, and sleek digital experiences for leading industry players and institutions.
          </p>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-12">
          {cases.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glow-card glass-panel p-8 md:p-12 rounded-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Column: Details */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-6 text-xs text-zinc-500 font-mono uppercase tracking-wider">
                    <span>{project.client}</span>
                    <span>•</span>
                    <span className="text-cyan-400">{project.industry}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                    {project.shortDescription}
                  </p>
                </div>
                
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded bg-zinc-950 border border-white/5 text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </div>

              {/* Right Column: Metrics & Actions */}
              <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 lg:pl-12">
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-6 mb-8 lg:mb-0">
                  {project.results.map(r => (
                    <div key={r.label} className="space-y-2">
                      <div className="text-3xl md:text-4xl font-extrabold text-white font-mono tracking-tight drop-shadow-[0_0_10px_rgba(0,210,255,0.15)]">
                        {r.value}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Case Action */}
                <Button variant="glow" href={`/projects/${project.slug}`} className="w-full text-xs py-3 uppercase tracking-widest">
                  View Full Case Study
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
