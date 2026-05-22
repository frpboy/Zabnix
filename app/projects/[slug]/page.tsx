import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import GlowWrapper from "@/components/common/GlowWrapper";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Database, Layout } from "lucide-react";
import { notFound } from "next/navigation";

interface ProjectDetail {
  title: string;
  client: string;
  industry: string;
  shortDescription: string;
  results: { label: string; value: string }[];
  technologies: string[];
  overview: string;
  challenges: string[];
  solutions: string[];
}

const mockProjects: Record<string, ProjectDetail> = {
  "sahakar-institutional-core": {
    title: "Sahakar Institutional Core",
    client: "Sahakar Group",
    industry: "Fintech",
    shortDescription: "Architected a custom high-performance secure portal system handling distributed financial accounting ledgers and client data grids.",
    results: [
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Data Latency", value: "<15ms" },
    ],
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
    overview: "The Sahakar Group required a modern, highly secure digital interface to consolidate legacy accounting nodes and provide real-time dashboards for management. The solution needed to enforce compliance limits and guarantee zero data loss.",
    challenges: [
      "Legacy databases suffered from lock contention during concurrent peak hours.",
      "Regulatory data rules demanded strict access controls and real-time transaction hashing.",
    ],
    solutions: [
      "Designed a distributed database topology utilizing read-replicas and custom connection caching.",
      "Implemented Next.js server actions wrapped with custom validation tokens for secure transactions.",
      "Integrated Redis caching layers for quick retrieval of common metrics and ledger indexes.",
    ],
  },
  "medtech-stream-parser": {
    title: "MedTech Stream Parser",
    client: "Axiom Healthcare",
    industry: "MedTech",
    shortDescription: "Engineered a lightning-fast clinical stream parser that ingests real-time patient telemetry feeds and validates metrics under HIPAA privacy limits.",
    results: [
      { label: "Stream Speed", value: "90k req/s" },
      { label: "Parser Delay", value: "8ms" },
    ],
    technologies: ["Node.js", "WebSockets", "ClickHouse", "Docker"],
    overview: "Axiom Healthcare wanted a scalable streaming engine to process real-time patient telemetry. The systems had to parse data packets instantly, store them for analytics, and raise critical status warnings within 100ms.",
    challenges: [
      "Ingesting high volumes of telemetry packets generated network congestion on standard API endpoints.",
      "Data formatting variance across medical machinery demanded customizable parser scripts.",
    ],
    solutions: [
      "Created a WebSocket streaming node that parses packet streams on non-blocking event loops.",
      "Utilized ClickHouse for telemetry logging, enabling fast sub-second queries over millions of entries.",
      "Configured lightweight containerized instances to automatically scale up based on load indexes.",
    ],
  },
  "orbit-global-logistics": {
    title: "Orbit Global Logistics",
    client: "Orbit Supply Chain",
    industry: "Logistics",
    shortDescription: "Rebuilt the tracking management matrix tool that organizes delivery fleets, schedules dispatches, and reports telemetry analytics.",
    results: [
      { label: "Daily Loads", value: "2.4M items" },
      { label: "Load Drop", value: "35%" },
    ],
    technologies: ["React", "NestJS", "Tailwind CSS", "Prisma"],
    overview: "Orbit Global wanted to replace an outdated logistics planning board. They needed an interactive dashboard that maps routes, updates fleet positions, and coordinates shipping schedules under a single responsive dashboard.",
    challenges: [
      "Real-time geographical tracking caused interface lag and excessive API polling.",
      "Complex coordinate schedules caused route-planning conflicts.",
    ],
    solutions: [
      "Rebuilt the mapping interface utilizing vector grids, rendering updates efficiently.",
      "Engineered a NestJS scheduling pipeline that alerts dispatchers about routing conflicts.",
      "Optimized query indexes through Prisma, lowering database response speeds significantly.",
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = mockProjects[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-24">
        <Section className="relative overflow-hidden">
          <GlowWrapper position="top-right" size="lg" className="absolute inset-0 pointer-events-none" />
          <Container>
            {/* Back Link */}
            <Link href="#projects" className="inline-flex items-center space-x-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors mb-12">
              <ArrowLeft size={14} />
              <span>RETURN TO CASES</span>
            </Link>

            {/* Title & Metadata */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
              <div className="lg:col-span-8">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{project.industry} // CASE STUDY</span>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4 leading-none">
                  {project.title}
                </h1>
                <p className="text-zinc-400 mt-6 text-sm md:text-base leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="lg:col-span-4 glass-panel p-6 rounded-xl space-y-6">
                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Client Partner</div>
                  <div className="text-sm font-semibold text-white mt-1">{project.client}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Core Stacks</div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.technologies.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[9px] font-semibold text-zinc-400 uppercase tracking-wider">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/5 mb-16 bg-[#080808]/50 px-8 rounded-xl">
              {project.results.map(r => (
                <div key={r.label} className="space-y-1">
                  <div className="text-3xl font-extrabold text-cyan-400 font-mono tracking-tight">{r.value}</div>
                  <div className="text-[9px] uppercase font-bold text-zinc-500 tracking-widest">{r.label}</div>
                </div>
              ))}
              <div className="space-y-1">
                <div className="text-3xl font-extrabold text-white font-mono tracking-tight">ACTIVE</div>
                <div className="text-[9px] uppercase font-bold text-zinc-500 tracking-widest">PROJECT STATE</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-extrabold text-white font-mono tracking-tight">VERIFIED</div>
                <div className="text-[9px] uppercase font-bold text-zinc-500 tracking-widest">COMPLIANCE CODE</div>
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Database size={18} className="text-cyan-400" />
                  <span>Technical Challenges</span>
                </h3>
                <ul className="space-y-4">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="text-xs md:text-sm text-zinc-400 leading-relaxed pl-6 relative">
                      <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-red-500/50" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Layout size={18} className="text-cyan-400" />
                  <span>Engineering Solutions</span>
                </h3>
                <ul className="space-y-4">
                  {project.solutions.map((s, i) => (
                    <li key={i} className="text-xs md:text-sm text-zinc-400 leading-relaxed pl-6 relative">
                      <CheckCircle size={14} className="absolute left-0 top-1 text-cyan-400" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
