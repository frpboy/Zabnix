import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import CareersPreview from "@/components/sections/CareersPreview";
import GlowWrapper from "@/components/common/GlowWrapper";
import { Send, FileText, CalendarRange } from "lucide-react";

export default function CareersPage() {
  const steps = [
    {
      icon: <Send className="w-5 h-5 text-cyan-400" />,
      title: "1. Submit Application",
      text: "Submit your application with your resume, portfolio link, and a brief description of your technical contributions.",
    },
    {
      icon: <FileText className="w-5 h-5 text-cyan-400" />,
      title: "2. Technical Review",
      text: "Our engineering leads review your profile, check code structures, project history, and practical design capabilities.",
    },
    {
      icon: <CalendarRange className="w-5 h-5 text-cyan-400" />,
      title: "3. Technical Interview",
      text: "A direct discussion walking through your projects, explaining how you approach databases, reliability, and operations.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-24">
        {/* Careers Hero */}
        <Section className="relative overflow-hidden">
          <GlowWrapper position="top-right" size="lg" className="absolute inset-0 pointer-events-none" />
          <Container>
            <div className="max-w-3xl py-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">Careers at Zabnix</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4">
                Build Real-World Operational Systems
              </h1>
              <p className="text-zinc-400 mt-6 leading-relaxed text-base md:text-lg">
                Join our engineering team focused on building stable software systems, enterprise dashboards, and reliable operations platforms.
              </p>
            </div>
          </Container>
        </Section>

        {/* Active Openings Accordion */}
        <CareersPreview />

        {/* Culture / Process */}
        <Section gridBackground className="bg-[#080808] border-t border-white/5">
          <Container>
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">Our Protocol</span>
              <h2 className="text-3xl font-bold text-white mt-2">The Evaluation Process</h2>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                We value execution over talk. Our hiring sequence is transparent, structured, and fast.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.title} className="glass-panel p-8 rounded-xl relative overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-3 tracking-wide">{step.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{step.text}</p>
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
