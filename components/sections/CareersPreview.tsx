"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { ChevronDown, MapPin, Briefcase, Clock } from "lucide-react";

interface JobOpening {
  slug: string;
  title: string;
  department: "Development" | "Design" | "Operations";
  employmentType: string;
  locationType: string;
  location: string;
  experienceLevel: string;
  overview: string;
  requirements: string[];
  applicationEmail: string;
}

export default function CareersPreview() {
  const [expandedJobIndex, setExpandedJobIndex] = useState<number | null>(null);

  const jobs: JobOpening[] = [
    {
      slug: "senior-systems-engineer",
      title: "Senior Systems Engineer",
      department: "Development",
      employmentType: "Full-time",
      locationType: "Remote",
      location: "Bangalore, India",
      experienceLevel: "5+ years",
      overview: "We are seeking a senior backend/systems engineer to build low-latency serverless routes, integrate database sharding models, and oversee microservices architectures.",
      requirements: [
        "Deep familiarity with Node.js, TypeScript, and Go",
        "Expertise in SQL architectures (PostgreSQL, ClickHouse)",
        "Experience configuring AWS, Docker, and edge networks",
        "Ability to build high-performance data interfaces",
      ],
      applicationEmail: "careers@zabnix.com",
    },
    {
      slug: "uiux-interaction-designer",
      title: "UI/UX Interaction Designer",
      department: "Design",
      employmentType: "Full-time",
      locationType: "Hybrid",
      location: "Bangalore, India",
      experienceLevel: "3+ years",
      overview: "Join our design squad to craft futuristic web interfaces, standardizing corporate color maps, typography scales, and CSS micro-animations.",
      requirements: [
        "Strong portfolio of modern minimalist web applications",
        "Expertise in Figma, vector animations, and design token structures",
        "Comfortable pairing layouts with Framer Motion or vanilla CSS",
        "Obsessive eye for typography, alignment, and spacing rules",
      ],
      applicationEmail: "careers@zabnix.com",
    },
    {
      slug: "operations-integration-lead",
      title: "Operations & Integration Lead",
      department: "Operations",
      employmentType: "Contract",
      locationType: "Onsite",
      location: "Bangalore, India",
      experienceLevel: "2+ years",
      overview: "Tasked with aligning project sprints, coordinating client handoffs, and managing resource metrics under Sahakar Group integration guidelines.",
      requirements: [
        "Background managing agile sprints and sprint deliverables",
        "Excellent communication and institutional reporting skills",
        "Experience using JIRA, linear, or similar roadmap structures",
        "Understanding of modern web stacks and technical timelines",
      ],
      applicationEmail: "careers@zabnix.com",
    },
  ];

  const toggleExpand = (index: number) => {
    if (expandedJobIndex === index) {
      setExpandedJobIndex(null);
    } else {
      setExpandedJobIndex(index);
    }
  };

  return (
    <Section id="careers" className="border-t border-white/5 bg-[#0A0A0A]">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">
            Join the Team
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-4">
            Active Job Openings
          </h2>
          <p className="text-zinc-400 mt-6 leading-relaxed">
            We are always looking for high-caliber talents who are passionate about micro-optimization, sleek designs, and building robust web infrastructures.
          </p>
        </div>

        {/* Jobs Accordion */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {jobs.map((job, idx) => {
            const isExpanded = expandedJobIndex === idx;
            return (
              <div
                key={job.title}
                className="glass-panel rounded-xl overflow-hidden transition-all duration-300 border border-white/5"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left cursor-pointer group hover:bg-white/[0.01]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider bg-cyan-950/20 px-2.5 py-0.5 rounded border border-cyan-500/10">
                        {job.department}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-xs text-zinc-500 font-mono">
                      <div className="flex items-center space-x-1.5">
                        <MapPin size={13} className="text-zinc-600" />
                        <span>{job.location} ({job.locationType})</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Clock size={13} className="text-zinc-600" />
                        <span>{job.employmentType}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Briefcase size={13} className="text-zinc-600" />
                        <span>{job.experienceLevel}</span>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 group-hover:text-white"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5 text-sm space-y-6 text-zinc-400">
                        <div>
                          <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-2">Role Overview</h4>
                          <p className="leading-relaxed text-zinc-400">{job.overview}</p>
                        </div>

                        <div>
                          <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-3">Qualifications</h4>
                          <ul className="list-disc pl-5 space-y-1.5 text-zinc-500 font-mono text-xs">
                            {job.requirements.map(req => (
                              <li key={req}>{req}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/5">
                          <p className="text-xs text-zinc-500 font-mono">
                            To apply, send resume and portfolio to <span className="text-white font-bold">{job.applicationEmail}</span>
                          </p>
                          <div className="flex gap-3">
                            <Button
                              variant="secondary"
                              href={`/careers/${job.slug}`}
                              className="py-2 px-5 text-xs uppercase tracking-wider"
                            >
                              Details
                            </Button>
                            <Button
                              variant="glow"
           