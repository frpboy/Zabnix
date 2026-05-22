import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import GlowWrapper from "@/components/common/GlowWrapper";
import { Linkedin, Github, Cpu, Code2, Shield, Workflow, Terminal, Globe } from "lucide-react";

export default function TeamPage() {
  const leadership = [
    {
      name: "Kannan Subbiah",
      role: "Managing Partner & Systems Architect",
      dept: "Engineering",
      bio: "Former high-frequency trading infrastructure developer. Specializes in low-latency systems, distributed database architecture, and kernel level performance tuning.",
      skills: ["Systems Architecture", "FPGA / Latency", "Vector Engines", "Go / Rust"],
      socials: { linkedin: "https://linkedin.com", github: "https://github" },
    },
    {
      name: "Nandita Nair",
      role: "Lead Design Architect",
      dept: "Design",
      bio: "Award-winning interaction designer with a decade of building high-performance design systems and premium data visualization dashboards for fintech and healthtech giants.",
      skills: ["Design Systems", "UI/UX Strategy", "Framer Motion", "WebGL / SVG"],
      socials: { linkedin: "https://linkedin.com", github: "https://github" },
    },
    {
      name: "Vikram Malhotra",
      role: "Chief Operations Officer",
      dept: "Operations",
      bio: "Oversees enterprise delivery, regulatory compliance strategies, and partner integrations. Ensures HIPAA, SOC2, and ISO standards are integrated in our software lifecycle.",
      skills: ["SecOps Compliance", "HIPAA / SOC2", "SLA Auditing", "Agile Operations"],
      socials: { linkedin: "https://linkedin.com" },
    },
  ];

  const engineers = [
    {
      name: "Rohan Gupta",
      role: "Senior Backend Engineer",
      specialty: "High-throughput APIs & microservices, Go, gRPC, and PostgreSQL.",
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
    },
    {
      name: "Sarah Jenkins",
      role: "Frontend Engineer",
      specialty: "Next.js rendering optimisations, component systems, and state engines.",
      icon: <Code2 className="w-4 h-4 text-cyan-400" />,
    },
    {
      name: "Arjun Mehta",
      role: "DevOps & Infrastructure Lead",
      specialty: "Kubernetes orchestration, AWS architectures, CI/CD, and Terraform.",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
    },
    {
      name: "David Chen",
      role: "Security Analyst",
      specialty: "Intrusive threat analysis, security audits, and penetration testing.",
      icon: <Shield className="w-4 h-4 text-cyan-400" />,
    },
    {
      name: "Priya Patel",
      role: "QA Automation Engineer",
      specialty: "E2E testing suites, Playwright execution grids, and regression test suites.",
      icon: <Workflow className="w-4 h-4 text-cyan-400" />,
    },
    {
      name: "Emma Watson",
      role: "Product Manager",
      specialty: "Client requirements translation, roadmaps, and agile delivery alignment.",
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
                The Architects of Speed & Design
              </h1>
              <p className="text-zinc-400 mt-6 leading-relaxed text-base md:text-lg">
                We are a lean, interdisciplinary collective of systems engineers, product designers, and security professionals dedicated to building state-of-the-art enterprise software.
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
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.socials.github && (
                          <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors">
                            <Github className="w-4 h-4" />
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
