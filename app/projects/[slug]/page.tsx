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
  "sahakar-cooperative-ledger": {
    title: "Cooperative Credit Ledger Migration",
    client: "Sahakar Credit Union",
    industry: "Finance",
    shortDescription: "Architected a secure, compliant transition system to migrate legacy member account databases into an audited, modern distributed database ledger.",
    results: [
      { label: "Migration Uptime", value: "100%" },
      { label: "Audit Accuracy", value: "100%" },
    ],
    technologies: ["Next.js", "PostgreSQL", "Redis", "Tailwind CSS"],
    overview: "The Sahakar Credit Union required a modern, highly secure digital ledger migration to consolidate legacy accounting nodes and provide real-time reporting for regulatory compliance. The solution needed to enforce compliance limits and guarantee zero data loss during transitions.",
    challenges: [
      "Legacy databases suffered from schema locks and sync drift during peak banking hours.",
      "Regulatory auditing required strict data validation rules and immutable transaction history.",
    ],
    solutions: [
      "Designed a transactional database migration topology utilizing isolated read-replicas and multi-stage dry-runs.",
      "Implemented Next.js server actions wrapped with custom validation tokens for secure transactions.",
      "Integrated Redis caching layers for quick retrieval of common member metrics and ledger balances.",
    ],
  },
  "healthcare-operations-erp": {
    title: "Healthcare Patient Care & Billing ERP",
    client: "Axiom Healthcare Networks",
    industry: "Healthcare IT",
    shortDescription: "Built a custom billing coordination and departmental resource manager to streamline patient registration, scheduling, and pharmacy stock balances.",
    results: [
      { label: "Dispatch Sync Speed", value: "< 2s" },
      { label: "Operational Speedup", value: "45%" },
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
    overview: "Axiom Healthcare wanted to integrate their disconnected patient registration, pharmacy stock registers, and billing queues. The system had to process updates securely across departments and sync inventory details in real time.",
    challenges: [
      "Disparate data systems led to manual reconciliation delays and patient booking conflicts.",
      "Strict data privacy regulations required isolated user permissions and action-level logging.",
    ],
    solutions: [
      "Developed a custom ERP backend utilizing Express and PostgreSQL, merging scheduling and stock workflows.",
      "Enforced row-level permission policies, logging all database mutations with audit tags.",
      "Containerized service modules using Docker for reliable staging and production deployments.",
    ],
  },
  "supply-chain-optimizer": {
    title: "Cooperative Supply Chain Optimizer",
    client: "Sahakar Logistics Division",
    industry: "Logistics",
    shortDescription: "Rebuilt the warehouse dispatch and route optimization panel coordinating delivery fleets across 150+ regional retail and distribution nodes.",
    results: [
      { label: "Routing Efficiency", value: "+28%" },
      { label: "Active Fleets", value: "120+" },
    ],
    technologies: ["React", "NestJS", "Prisma", "PostgreSQL"],
    overview: "Sahakar Logistics required a unified dashboard to coordinate fleet assignments and warehouse inventory levels. The system needed to plan routing schedules and prevent delivery delays between retail cooperatives and central hubs.",
    challenges: [
      "Manual route dispatch plans resulted in delivery delays and high fuel overheads.",
      "Concurrent ledger updates on stock counts caused database row locks and delayed entries.",
    ],
    solutions: [
      "Created an interactive React mapping board utilizing optimized coordinates and dispatch queues.",
      "Engineered a NestJS job queue that alerts dispatchers about shipping and routing overlaps.",
      "Optimized query indexes through Prisma, dropping database lock contention significantly.",
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
