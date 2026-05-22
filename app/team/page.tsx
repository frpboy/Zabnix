import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import GlowWrapper from "@/components/common/GlowWrapper";
import { Cpu, Code2, Shield, Workflow, Terminal, Globe } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function TeamPage() {
  const leadership = [
    {
      name: "Kannan Subbiah",
      role: "Managing Partner & Systems Architect",
      dept: "Engineering",
      bio: "Specializes in high-integrity database systems, distributed ledger architecture, and enterprise application scaling for cooperative networks.",
      skills: ["Systems Architecture", "Database Sharding", "Ledger Synchronization", "Go / Rust / PostgreSQL"],
      socials: { linkedin: "https://linkedin.com", github: "https://github" },
    },
    {
      name: "Nandita Nair",
      role: "Lead Design Architect",
      dept: "Design",
      bio: "UI/UX architect with a decade of building robust design systems, management dashboards, and intuitive workflow applications for logistics and healthcare platforms.",
      skills: ["Design Systems", "UI/UX Strategy", "Data Visualization", "Tailwind / CSS"],
      socials: { linkedin: "https://linkedin.com", github: "https://github" },
    },
    {
      name: "Vikram Malhotra",
      role: "Chief Operations Officer",
      dept: "Operations",
      bio: "Oversees operations, partner integrations, and regulatory compliance. Ensures bank-grade security, data auditing, and SLA compliance standards are met across all deployments.",
      skills: ["Operations Management", "Sovereign Compliance", "SLA Auditing", "Cooperative Systems"],
      socials: { linkedin: "https://linkedin.com" },
    },
  ];

  const engineers = [
    {
      name: "Rohan Gupta",
      role: "Senior Backend Engineer",
      specialty: "High-throughput APIs, database optimization, Go, and PostgreSQL.",
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
    },
    {
      name: "Sarah Jenkins",
      role: "Frontend Engineer",
      specialty: "React/Next.js dashboard engineering, reusable component systems, and state management.",
      icon: <Code2 className="w-4 h-4 text-cyan-400" />,
    },
    {
      name: "Arjun Mehta",
      role: "DevOps & Infrastructure Lead",
      specialty: "Docker containerization, cloud infrastructures, CI/CD pipelines, and Terraform.",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
    },
    {
      name: "David Cherian",
      role: "Security & Compliance Lead",
      specialty: "Sovereign database compliance, internal security audits, and access control models.",
      icon: <Shield className="w-4 h-4 text-cyan-400" />,
    },
    {
      name: "Priya Patel",
      role: "QA Automation Engineer",
      specialty: "End-to-end integration testing, regression suites, and Playwright verification.",
      icon: <Workflow className="w-4 h-4 text-cyan-400" />,
    },
    {
      name: "Meera Nair",
      role: "Product Manager",
      specialty: "Requirements gathering, operations mapping, and agile delivery alignment.",
      icon: <Globe className="w-4 h-4 text-cyan-400" />,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-24">
        {/* Hero Section */}
        <Section className="relative overflow-hidden">
          <GlowWrapper position="top-right" size="lg" className="absolute inset-0 pointer-events-none" />
          <Container>
            <div className="max-w-3xl py-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">Team Zabnix</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4">
                The Engineering & Operations Team
              </h1>
              <p className="text-zinc-400 mt-6 leading-relaxed text-base md:text-lg">
                We are a dedicated group of systems engineers, product designers, and compliance officers building robust, high-integrity operational software.
              </p>
            </div>
          </Container>
        </Section>

        {/* Board & Leadership */}
        <Section gridBackground className="bg-[#080808] border-t border-white/5">
          <Container>
            <div className="mb-16">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">Governance & Vision</span>
              <h2 className="text-3xl font-bold tracking-tight text-white mt-2">Executive Board & Lead Architects</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {leadership.map((member) => (
                <div key={member.name} className="glow-card glass-panel p-8 rounded-xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">
                  {/* Subtle inner grid pattern effect */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        DEPT // {member.dept}
                      </span>
                      <div className="flex space-x-2">
                        {member.socials.linkedin && (
                          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors">
                            <LinkedinIcon className="w-4 h-4" />
                          </a>
                        )}
                        {member.socials.github && (
                          <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors">
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white tracking-wide mb-2">{member.name}</h3>
                    <span className="text-cyan-400 text-xs font-medium block mb-4">{member.role}</span>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-3">Core Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span key={skill} className="text-[10px] bg-zinc-900 border border-white/5 text-zinc-300 py-1 px-2.5 rounded-full font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Technical Roster */}
        <Section className="border-t border-white/5">
          <Container>
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">Execution Grid</span>
              <h2 className="text-3xl font-bold tracking-tight text-white mt-2">Technical Roster</h2>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                The engineering engine translating architectural concepts into highly stable, secure code.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {engineers.map((engineer) => (
                <div key={engineer.name} className="glass-panel p-6 rounded-xl border border-white/5 flex gap-4 items-start hover:border-cyan-500/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center flex-shrink-0">
                    {engineer.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide">{engineer.name}</h3>
                    <span className="text-zinc-500 text-xs block mb-2">{engineer.role}</span>
                    <p className="text-zinc-400 text-xs leading-relaxed">{engineer.specialty}</p>
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
