"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";

interface ServiceItem {
  title: string;
  shortDescription: string;
  features: string[];
  technologies: string[];
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  // Responsive boundary check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services: ServiceItem[] = [
    {
      title: "Custom SaaS Engineering",
      shortDescription: "End-to-end development of modern SaaS platforms with multi-tenant capabilities, robust analytics, and modular architectures.",
      features: ["Multi-tenant isolation schemas", "Dynamic subscription workflows", "Bespoke database structures", "Real-time user event queues"],
      technologies: ["React", "Next.js", "Node.js", "Drizzle ORM"],
    },
    {
      title: "Enterprise Dashboards",
      shortDescription: "Tailored internal operations portals, high-security ERP systems, and secure administrative tools containing granular permission management.",
      features: ["Role-based authorization limits", "High-performance data grids", "Modular reporting components", "Secure activity audits logs"],
      technologies: ["TypeScript", "NestJS", "PostgreSQL", "Tailwind CSS"],
    },
    {
      title: "Premium Web Interfaces",
      shortDescription: "Lighthouse-optimized marketing interfaces, landing pages, and websites engineered with seamless fluid interactions and modern visual systems.",
      features: ["95+ score Lighthouse standards", "Fluid scroll timelines (Lenis)", "Cinematic motion reveals", "Fully customized components"],
      technologies: ["Next.js 16", "Framer Motion", "GSAP", "Tailwind v4"],
    },
    {
      title: "Automated Deployments",
      shortDescription: "Secure cloud architectures, CI/CD pipelines, and serverless hosting infrastructures structured to deliver maximum uptime and global speeds.",
      features: ["Containerized microservices", "Database replication models", "Global CDN configurations", "Elastic scaling automation"],
      technologies: ["AWS", "Supabase", "Docker", "Vercel Edge"],
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Slide cards horizontally from 0 to -75% based on vertical scroll Progress
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={containerRef} id="services" className="relative">
      {isMobile ? (
        // Mobile view: natural vertical scroll
        <Section className="bg-[#0A0A0A] border-t border-white/5">
          <Container>
            <div className="mb-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">
                Our Services
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white mt-2">
                Engineering Capabilities
              </h2>
            </div>
            
            <div className="flex flex-col space-y-6">
              {services.map((service, idx) => (
                <div
                  key={service.title}
                  className="glass-panel p-6 rounded-xl relative overflow-hidden"
                >
                  <span className="absolute top-4 right-4 font-mono text-[10px] text-zinc-700">0{idx + 1}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-zinc-400 text-xs mb-4 leading-relaxed">{service.shortDescription}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider mb-2">Deliverables</h4>
                    <ul className="grid grid-cols-1 gap-1 text-[11px] text-zinc-500 font-mono">
                      {service.features.map(f => <li key={f}>• {f}</li>)}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-2">Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-[9px] font-semibold text-zinc-300 uppercase tracking-wider">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ) : (
        // Desktop view: horizontal lock and slide (300vh height track)
        <div className="h-[300vh] relative">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0A]">
            <Container className="mb-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">
                Capabilities
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-3">
                Engineering Solutions
              </h2>
            </Container>

            {/* Horizontal Track container */}
            <div className="flex items-stretch pl-[calc((100vw-1200px)/2)] md:pl-[calc((100vw-1152px)/2)] lg:pl-[calc((100vw-1280px)/2+32px)] xl:pl-[calc((100vw-1280px)/2+32px)]">
              <motion.div style={{ x }} className="flex space-x-8 pr-[50vw]">
                {services.map((service, idx) => (
                  <div
                    key={service.title}
                    className="glow-card glass-panel w-[400px] shrink-0 p-8 rounded-xl flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-zinc-700 text-xs block mb-6">SERVICE // 0{idx + 1}</span>
                      <h3 className="text-xl font-bold text-white mb-4 tracking-wide">{service.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-6">{service.shortDescription}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider mb-2">Core Deliverables</h4>
                        <ul className="space-y-1.5 text-xs text-zinc-500 font-mono">
                          {service.features.map(f => <li key={f}>• {f}</li>)}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider mb-3">Core Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map(t => (
                          <span key={t} className="px-2 py-1 rounded bg-zinc-900 border border-white/5 text-[9px] font-semibold text-zinc-300 uppercase tracking-widest">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
