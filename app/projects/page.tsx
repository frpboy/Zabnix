"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import GlowWrapper from "@/components/common/GlowWrapper";
import Button from "@/components/common/Button";
import Link from "next/link";
import { ArrowRight, Calendar, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectItem {
  slug: string;
  title: string;
  client: string;
  industry: "Finance" | "Healthcare" | "Logistics";
  shortDescription: string;
  results: { label: string; value: string }[];
  technologies: string[];
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"All" | "Finance" | "Healthcare" | "Logistics">("All");

  const projects: ProjectItem[] = [
    {
      slug: "sahakar-cooperative-ledger",
      title: "Cooperative Credit Ledger Migration",
      client: "Sahakar Credit Union",
      industry: "Finance",
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
      industry: "Healthcare",
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

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(p => p.industry === activeTab);

  const tabs: ("All" | "Finance" | "Healthcare" | "Logistics")[] = ["All", "Finance", "Healthcare", "Logistics"];

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-24">
        {/* Projects Hero */}
        <Section className="relative overflow-hidden">
          <GlowWrapper position="top-right" size="lg" className="absolute inset-0 pointer-events-none" />
          <Container>
            <div className="max-w-3xl py-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">Our Works</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4">
                Proven Implementations
              </h1>
              <p className="text-zinc-400 mt-6 leading-relaxed text-base md:text-lg">
                Explore our portfolio of scalable web architectures, database migrations, and custom operations management ERP systems built for real-world reliability.
              </p>
            </div>
          </Container>
        </Section>

        {/* Filter Controls & Projects Grid */}
        <Section gridBackground className="bg-[#080808] border-t border-white/5">
          <Container>
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/5 pb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                    activeTab === tab
                      ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                      : "bg-transparent text-zinc-500 border-transparent hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Dynamic Project Cards Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    key={project.slug}
                    className="glow-card glass-panel p-8 rounded-xl flex flex-col justify-between border border-white/5 hover:border-white/10"
                  >
                    <div>
                      {/* Meta Tags */}
                      <div className="flex items-center space-x-3 mb-6">
                        <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider bg-cyan-950/20 px-2 py-0.5 rounded border border-cyan-500/10">
                          {project.industry}
                        </span>
                        <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-widest">
                          {project.client}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-wide">
                        {project.title}
                      </h3>

                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>

                      {/* Key metrics summaries */}
                      <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6 mb-6">
                        {project.results.map((res) => (
                          <div key={res.label}>
                            <div className="text-xl font-bold text-white font-mono">{res.value}</div>
                            <div className="text-[9px] uppercase font-bold text-zinc-500 tracking-wide mt-1">{res.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-white/5 pt-6 mt-4 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                        {project.technologies.slice(0, 3).map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[9px] font-semibold text-zinc-500 uppercase tracking-wider">{t}</span>
                        ))}
                      </div>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-white hover:text-cyan-400 transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
