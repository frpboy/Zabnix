import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import GlowWrapper from "@/components/common/GlowWrapper";

export default function AboutPage() {
  const team = [
    { name: "Kannan Subbiah", role: "Managing Partner & Systems Architect", dept: "Engineering" },
    { name: "Nandita Nair", role: "Lead Design Architect", dept: "Design" },
    { name: "Vikram Malhotra", role: "Chief Operations Officer", dept: "Operations" },
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
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">About Zabnix</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4">
                Engineering Reliable Digital Systems
              </h1>
              <p className="text-zinc-400 mt-6 leading-relaxed text-base md:text-lg">
                We are a specialized systems engineering and design studio. Backed by the Sahakar Group, we design high-reliability digital platforms, database migrations, and operational tools for cooperative and commercial networks.
              </p>
            </div>
          </Container>
        </Section>

        {/* History & Backing */}
        <Section gridBackground className="bg-[#080808] border-t border-white/5">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Our Journey</h2>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Zabnix was established to build reliable, maintainable software systems for cooperative credit unions, logistics companies, and healthcare providers. Partnering with the Sahakar Group, we consolidated a team of regional engineers and system architects with a mission to develop robust operational workflows and clean user interfaces.
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Today, we deliver complex supply chain trackers, credit union ledger systems, and tailored ERP solutions that power daily business operations.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-xl border-cyan-500/10">
                <h3 className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-6">Institutional Strength</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Backed by Sahakar Group's operational and compliance framework, Zabnix has the stability and resources to manage high-integrity ledger migrations, enforce strict security controls, and deploy high-volume database engines with complete reliability.
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 font-mono font-semibold">
                  <div>
                    <div className="text-xl font-bold text-white">2026</div>
                    <div className="text-[9px] text-zinc-500 uppercase tracking-wide">Inception</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">100%</div>
                    <div className="text-[9px] text-zinc-500 uppercase tracking-wide">Audit Success</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">Sahakar</div>
                    <div className="text-[9px] text-zinc-500 uppercase tracking-wide">Backing</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Team Members */}
        <Section className="border-t border-white/5">
          <Container>
            <div className="mb-16">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">The Studio</span>
              <h2 className="text-3xl font-bold tracking-tight text-white mt-2">Executive Board & Lead Architects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="glow-card glass-panel p-8 rounded-xl relative overflow-hidden">
                  <span className="text-[10px] font-mono text-zinc-600 block mb-6 uppercase tracking-wider">
                    DEPT // {member.dept}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-wide mb-2">{member.name}</h3>
                  <p className="text-zinc-400 text-xs">{member.role}</p>
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
