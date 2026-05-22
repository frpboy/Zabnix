import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import BlogPreview from "@/components/sections/BlogPreview";
import GlowWrapper from "@/components/common/GlowWrapper";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-24">
        {/* Blog Hero */}
        <Section className="relative overflow-hidden">
          <GlowWrapper position="top-right" size="lg" className="absolute inset-0 pointer-events-none" />
          <Container>
            <div className="max-w-3xl py-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">Insights & Tech</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4">
                The Zabnix Engineering Chronicle
              </h1>
              <p className="text-zinc-400 mt-6 leading-relaxed text-base md:text-lg">
                Technical articles, design specs, and engineering write-ups documenting our learnings on performance tuning, database sharding, and futuristic UI design.
              </p>
            </div>
          </Container>
        </Section>

        {/* Blog Listings Grid */}
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
