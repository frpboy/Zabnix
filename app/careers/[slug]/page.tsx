import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import GlowWrapper from "@/components/common/GlowWrapper";
import Button from "@/components/common/Button";
import Link from "next/link";
import { ArrowLeft, Check, HelpCircle } from "lucide-react";
import { notFound } from "next/navigation";

interface CareerDetail {
  title: string;
  department: string;
  employmentType: string;
  locationType: string;
  location: string;
  experienceLevel: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  applicationEmail: string;
}

const mockCareers: Record<string, CareerDetail> = {
  "senior-systems-engineer": {
    title: "Senior Systems Engineer",
    department: "Development",
    employmentType: "Full-time",
    locationType: "Remote",
    location: "Bangalore, India",
    experienceLevel: "5+ years",
    overview: "We are seeking a senior backend/systems engineer to build high-availability service endpoints, implement database sharding strategies, and manage core microservices architecture.",
    responsibilities: [
      "Design and maintain scalable distributed database schemas.",
      "Build high-speed API gateways and connection caching nodes.",
      "Implement and test microservice integration routines.",
      "Provide technical reviews on server-side performance improvements.",
    ],
    requirements: [
      "Deep familiarity with Node.js, TypeScript, and Go",
      "Expertise in SQL architectures (PostgreSQL, ClickHouse)",
      "Experience configuring AWS, Docker, and CI/CD pipelines",
      "Ability to build reliable, high-throughput database interfaces",
    ],
    benefits: [
      "Competitive salary with health benefits and performance bonuses",
      "Flexible hybrid working options (Remote friendly)",
      "Modern work setup and workspace allowance",
      "Comprehensive medical coverage plans",
    ],
    applicationEmail: "careers@zabnix.com",
  },
  "uiux-interaction-designer": {
    title: "UI/UX Interaction Designer",
    department: "Design",
    employmentType: "Full-time",
    locationType: "Hybrid",
    location: "Bangalore, India",
    experienceLevel: "3+ years",
    overview: "Join our design squad to craft highly functional web interfaces, standardizing design systems, corporate colors, and dashboard layouts.",
    responsibilities: [
      "Build responsive design mockups, wireframes, and prototypes.",
      "Establish site-wide styling tokens for fonts, colors, and shadows.",
      "Develop interactive layouts pairing CSS with Framer Motion.",
      "Engage with front-end engineers to verify layout consistency.",
    ],
    requirements: [
      "Strong portfolio of clean, responsive web applications",
      "Expertise in Figma, modern design tools, and component specifications",
      "Comfortable pairing designs with Framer Motion or clean CSS",
      "Attention to detail in typography, spacing rules, and layout consistency",
    ],
    benefits: [
      "Creative freedom to design state-of-the-art web systems",
      "Hybrid structure with cool downtown Bangalore studio desk",
      "Access to premium design software licenses",
      "Annual growth bonuses and professional learning budgets",
    ],
    applicationEmail: "careers@zabnix.com",
  },
  "operations-integration-lead": {
    title: "Operations & Integration Lead",
    department: "Operations",
    employmentType: "Contract",
    locationType: "Onsite",
    location: "Bangalore, India",
    experienceLevel: "2+ years",
    overview: "Tasked with aligning project sprints, coordinating client handoffs, and managing resource metrics under Sahakar Group integration guidelines.",
    responsibilities: [
      "Coordinate client sprints and deliverable dates.",
      "Formulate compliance documents and check integration paths.",
      "Report project metrics to senior executive boards.",
      "Assist in onboarding new developers and designers.",
    ],
    requirements: [
      "Background managing agile sprints and sprint deliverables",
      "Excellent communication and institutional reporting skills",
      "Experience using JIRA, linear, or similar roadmap structures",
      "Understanding of modern web stacks and technical timelines",
    ],
    benefits: [
      "Direct exposure to institutional operations with Sahakar Group",
      "Clear pathway to full-time executive placement",
      "Generous daily stipend and operations expenses coverage",
      "Mentorship under senior managing partners",
    ],
    applicationEmail: "careers@zabnix.com",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CareerPage({ params }: PageProps) {
  const resolvedParams = await params;
  const career = mockCareers[resolvedParams.slug];

  if (!career) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-24">
        <Section className="relative overflow-hidden">
          <GlowWrapper position="top-right" size="lg" className="absolute inset-0 pointer-events-none" />
          <Container>
            {/* Return Link */}
            <Link href="#careers" className="inline-flex items-center space-x-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors mb-12">
              <ArrowLeft size={14} />
              <span>RETURN TO OPENINGS</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Job Info */}
              <div className="lg:col-span-8 space-y-12">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{career.department} // CAREERS</span>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-4 leading-none">
                    {career.title}
                  </h1>
                  <p className="text-zinc-400 mt-6 leading-relaxed">
                    {career.overview}
                  </p>
                </div>

                {/* Responsibilities */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">Responsibilities</h3>
                  <ul className="space-y-3 font-mono text-xs md:text-sm text-zinc-400">
                    {career.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-cyan-400 font-bold shrink-0 mt-0.5">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Qualifications */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">Requirements</h3>
                  <ul className="space-y-3 font-mono text-xs md:text-sm text-zinc-400">
                    {career.requirements.map((r, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">Perks & Benefits</h3>
                  <ul className="space-y-3 font-mono text-xs md:text-sm text-zinc-400">
                    {career.benefits.map((b, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-emerald-400 font-bold shrink-0 mt-0.5">+</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Sticky Apply Card */}
              <div className="lg:col-span-4 sticky top-28 glass-panel p-8 rounded-xl border-cyan-500/10 space-y-6">
                <div>
                  <h4 className="text-xs uppercase font-bold text-cyan-400 tracking-wider">Position Details</h4>
                  <div className="mt-4 space-y-3 text-xs text-zinc-400 font-mono">
                    <p>LOCATION: {career.location}</p>
                    <p>TYPE: {career.employmentType}</p>
                    <p>STYLE: {career.locationType}</p>
                    <p>EXP: {career.experienceLevel}</p>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-6 space-y-4">
                  <p className="text-xs text-zinc-500 font-mono leading-relaxed">
                    To apply, please send your resume, portfolio, and code samples to our careers team.
                  </p>
                  <Button
                    variant="glow"
                    href={`mailto:${career.applicationEmail}?subject=Application for ${career.title}`}
                    className="w-full py-3 text-xs uppercase tracking-wider"
                  >
                    Apply for Position
                  </Button>
                </div>

                <div className="flex items-center space-x-2 text-[10px] text-zinc-600 font-mono">
                  <HelpCircle size={12} />
                  <span>REF: ZAB-JOB-{career.title.toUpperCase().replace(/ /g, "-")}</span>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
