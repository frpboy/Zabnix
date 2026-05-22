import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import GlowWrapper from "@/components/common/GlowWrapper";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { notFound } from "next/navigation";

interface BlogPostDetail {
  title: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: string;
  role: string;
  excerpt: string;
  content: string[];
}

const mockPosts: Record<string, BlogPostDetail> = {
  "optimizing-nextjs-16-rendering-systems": {
    title: "Optimizing Next.js 16 Rendering Systems",
    category: "Development",
    publishedAt: "May 18, 2026",
    readTime: "5 min read",
    author: "Kannan Subbiah",
    role: "Systems Architect",
    excerpt: "Deep dive into React Server Components (RSC), server-actions caching, and dynamic partial hydration on edge routes.",
    content: [
      "Next.js 16 introduces refined mechanisms for dynamic stream delivery and component loading sequences. Understanding how React Server Components (RSC) split loading threads is essential for achieving sub-second Largest Contentful Paint (LCP) speeds.",
      "By utilizing partial pre-rendering (PPR) models, static shell pieces (like layouts, navigation bars, and headers) are cached on local CDNs, while dynamic query fragments are streamed asynchronously once database queries resolve.",
      "Furthermore, optimizing server-actions caching prevents excessive database queries during user-driven pagination or listings transitions. Pairing these options with Tailwind CSS v4's light bundle footprint ensures a clean, lightweight, and cinematic user experience.",
    ],
  },
  "design-tokens-for-futuristic-ui-environments": {
    title: "Design Tokens for Futuristic UI Environments",
    category: "Design",
    publishedAt: "May 10, 2026",
    readTime: "8 min read",
    author: "Nandita Nair",
    role: "Lead Design Architect",
    excerpt: "A guide on styling premium dark modes, structuring glassmorphism values, and configuring glow boundary metrics.",
    content: [
      "Futuristic UI design does not mean chaotic neon grids. It is about control, visual depth, and intentional spacing rules that direct attention.",
      "We build Zabnix's layout variables on clear rules. We restrict primary backgrounds to neutral-950 (#0A0A0A) and map glowing overlays to Electric Blue (#00D2FF) with extremely low opacities (below 8%).",
      "Using hardware-accelerated Bezier curves for transition timings (e.g. cubic-bezier(0.16, 1, 0.3, 1)) makes interactions feel fluid and natural. By omitting generic, flat solid borders and implementing fine lines (rgba(255,255,255,0.08)), we achieve layered visual environments that convey enterprise credibility.",
    ],
  },
  "horizontal-database-sharding-at-scale": {
    title: "Horizontal Database Sharding at Scale",
    category: "Architecture",
    publishedAt: "May 02, 2026",
    readTime: "12 min read",
    author: "Kannan Subbiah",
    role: "Systems Architect",
    excerpt: "Analyzing postgres replication pipelines, custom connection poolers, and database latency drops under extreme load conditions.",
    content: [
      "Scaling database layers for high-volume SaaS applications demands structural planning. When solid instances hit query execution thresholds, horizontal partitioning becomes the natural development step.",
      "We sharded our relational architecture by tenant identification tags, routing transactions across independent replica database clusters. By wrapping our engines with lightweight, serverless connection poolers, we minimized connections footprint.",
      "The result of this realignment is a drop in connection latency from 45ms to 12ms, maintaining query consistency and ensuring 100% compliance during concurrent user spikes.",
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = mockPosts[resolvedParams.slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-24">
        <Section className="relative overflow-hidden">
          <GlowWrapper position="top-right" size="lg" className="absolute inset-0 pointer-events-none" />
          <Container>
            {/* Back to Blog */}
            <Link href="#blog" className="inline-flex items-center space-x-2 text-xs font-mono text-zinc-500 hover:text-white transition-colors mb-12">
              <ArrowLeft size={14} />
              <span>RETURN TO INSIGHTS</span>
            </Link>

            <div className="max-w-3xl">
              {/* Category & Stats */}
              <div className="flex items-center space-x-3 mb-6 text-xs text-zinc-500 font-mono uppercase tracking-wider">
                <span className="text-cyan-400 font-bold">{post.category}</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Calendar size={12} />
                  <span>{post.publishedAt}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock size={12} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {post.title}
              </h1>

              {/* Author */}
              <div className="flex items-center space-x-4 border-y border-white/5 py-6 my-8">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-cyan-400">
                  <User size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">{post.author}</div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase">{post.role}</div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 text-zinc-300 text-sm md:text-base leading-relaxed">
                {post.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
