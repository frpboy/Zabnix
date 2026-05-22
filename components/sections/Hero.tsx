"use client";

import { motion } from "framer-motion";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import GlowWrapper from "@/components/common/GlowWrapper";

export default function Hero() {
  return (
    <div className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Cinematic Cyber Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      
      {/* Decorative vertical/horizontal line beams */}
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent pointer-events-none" />

      {/* Atmospheric Glow */}
      <GlowWrapper position="center" size="xl" color="bg-cyan-500" className="absolute inset-0 pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Subtle top label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">
            Enterprise Innovation Engine
          </span>
        </motion.div>

        {/* Big Display Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white max-w-4xl"
        >
          We Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">Future</span> of Enterprise Systems
        </motion.h1>

        {/* Supporting copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mt-8 leading-relaxed font-light"
        >
          Zabnix designs, architects, and deploys high-performance SaaS environments, bespoke financial portals, and lightning-fast custom web platforms.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full sm:w-auto"
        >
          <Button variant="primary" href="#contact" className="w-full sm:w-auto">
            Get Started
          </Button>
          <Button variant="glow" href="#services" className="w-full sm:w-auto">
            Explore Capabilities
          </Button>
        </motion.div>
      </Container>

      {/* Floating details / coordinates layout for futuristic tech styling */}
      <div className="absolute bottom-8 left-8 hidden lg:block text-left font-mono text-[10px] text-zinc-600 tracking-wider">
        <p>SYS.LOC: //ZABNIX/MAIN_STAGE</p>
        <p>SYS.REF: BACKED_BY_SAHAKAR</p>
      </div>
      
      <div className="absolute bottom-8 right-8 hidden lg:block text-right font-mono text-[10px] text-zinc-600 tracking-wider">
        <p>PORT: 443 // SSL_ENABLED</p>
        <p>V_CORE: 1.0.4</p>
      </div>
    </div>
  );
}
