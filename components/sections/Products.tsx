"use client";

import { motion } from "framer-motion";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { ArrowUpRight } from "lucide-react";

interface ProductItem {
  title: string;
  type: string;
  status: "Production" | "WIP" | "Experimental" | "Internal";
  shortDescription: string;
  features: string[];
}

export default function Products() {
  const products: ProductItem[] = [
    {
      title: "Zabnix Core",
      type: "SaaS Platform",
      status: "Production",
      shortDescription: "Our primary dashboard offering real-time system performance telemetry, distributed logs ingestion, and automated alert rules.",
      features: ["Sub-millisecond data pipes", "Custom charting interfaces", "Dynamic alert triggers", "API integrations keyways"],
    },
    {
      title: "Kronos ERP",
      type: "ERP System",
      status: "WIP",
      shortDescription: "Bespoke operations resource planning architecture designed to handle heavy manufacturing workflows and logistics databases.",
      features: ["Automated inventory ledgering", "Vendor dispatch pipelines", "Multi-office permission matrix", "Audited ledger exports"],
    },
    {
      title: "Helios Analytics",
      type: "Edge Telemetry",
      status: "Experimental",
      shortDescription: "A stream analytics engine that parses logs directly at Edge CDN nodes to generate fast geographical analytics reports.",
      features: ["Edge network processing", "WebAssembly parsing cores", "Geographical mapping data", "Zero-cold-start hooks"],
    },
  ];

  const getStatusStyles = (status: ProductItem["status"]) => {
    switch (status) {
      case "Production":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "WIP":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "Experimental":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      default:
        return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
    }
  };

  return (
    <Section id="products" className="border-t border-white/5 bg-[#080808]">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">
              Our Products
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-4">
              In-House SaaS Solutions
            </h2>
            <p className="text-zinc-400 mt-6 leading-relaxed">
              We incubate and develop proprietary technologies that push the boundaries of enterprise software performance, logging, and metrics.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button variant="secondary" href="#contact">
              Inquire About Custom Licensing
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glow-card glass-panel p-8 rounded-xl flex flex-col justify-between"
            >
              <div>
                {/* Product Tags */}
                <div className="flex items-center space-x-2 mb-6">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${getStatusStyles(product.status)}`}>
                    {product.status}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                    {product.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-between">
                  {product.title}
                  <ArrowUpRight className="w-5 h-5 text-zinc-600 hover:text-cyan-400 transition-colors cursor-pointer" />
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  {product.shortDescription}
                </p>

                {/* Features List */}
                <div className="border-t border-white/5 pt-6 mb-8">
                  <h4 className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider mb-4">Featured Utilities</h4>
                  <ul className="space-y-2">
                    {product.features.map(f => (
                      <li key={f} className="text-xs text-zinc-400 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button variant="glow" className="w-full text-xs py-2.5 uppercase tracking-wider">
                Request Pilot Access
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
