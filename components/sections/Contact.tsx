"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { Mail, Shield, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    type: "SaaS",
    message: "",
    honeypot: "", // spam protection
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard for bots
    
    setStatus("submitting");
    
    // Simulate API request delay
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        org: "",
        type: "SaaS",
        message: "",
        honeypot: "",
      });
    }, 1200);
  };

  return (
    <Section id="contact" gridBackground className="border-t border-white/5 bg-[#0A0A0A] pb-32">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Coordinates / Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">
                Initiate Project
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-4">
                Let's Build Something Exceptional
              </h2>
            </div>
            
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Submit your project specifications or schedule a technical brief. Our team typically responds within one business day.
            </p>

            <div className="space-y-6 pt-6 border-t border-white/5">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-cyan-400">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Direct Channels</div>
                  <a href="mailto:initiations@zabnix.com" className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                    initiations@zabnix.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-cyan-400">
                  <Shield size={16} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Institutional Trust</div>
                  <p className="text-sm font-semibold text-white">
                    Backed by Sahakar Group
                  </p>
                </div>
              </div>
            </div>

            <div className="font-mono text-[10px] text-zinc-600 tracking-wider space-y-1">
              <p>ZABNIX HQ: //BANGALORE/CORE_LABS</p>
              <p>SECURE: GPG_ENCRYPTION_READY</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-xl border-white/8 relative">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 size={48} className="text-cyan-400 mb-6 animate-bounce" />
                  <h3 className="text-xl font-bold text-white mb-2">Initiation Logged</h3>
                  <p className="text-zinc-400 text-xs md:text-sm max-w-sm leading-relaxed mb-6">
                    Your request has been successfully cataloged under coordinate ZAB-{(Math.random() * 10000).toFixed(0)}.
                  </p>
                  <Button variant="secondary" onClick={() => setStatus("idle")} className="text-xs py-2 px-6">
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field (hidden for users, bots fill it) */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={e => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Your Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-zinc-950/50 border border-white/5 hover:border-white/10 focus:border-cyan-500/50 focus:outline-none rounded-lg px-4 py-3 text-sm text-white font-medium transition-all"
                        placeholder="e.g. Robert Drake"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Email Address</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-zinc-950/50 border border-white/5 hover:border-white/10 focus:border-cyan-500/50 focus:outline-none rounded-lg px-4 py-3 text-sm text-white font-medium transition-all"
                        placeholder="e.g. robert@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Organization</label>
                      <input
                        required
                        type="text"
                        value={formData.org}
                        onChange={e => setFormData({ ...formData, org: e.target.value })}
                        className="w-full bg-zinc-950/50 border border-white/5 hover:border-white/10 focus:border-cyan-500/50 focus:outline-none rounded-lg px-4 py-3 text-sm text-white font-medium transition-all"
                        placeholder="e.g. Sahakar Ltd"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Project Domain</label>
                      <select
                        value={formData.type}
                        onChange={e => setFormData({ ...formData, type: e.target.value })}
                        className="w-full bg-zinc-950 border border-white/5 hover:border-white/10 focus:border-cyan-500/50 focus:outline-none rounded-lg px-4 py-3 text-sm text-white font-medium transition-all appearance-none cursor-pointer"
                      >
                        <option value="SaaS">SaaS Platform</option>
                        <option value="ERP">Custom ERP / Dashboard</option>
                        <option value="Portal">Secure Institutional Portal</option>
                        <option value="Web">Premium High-Performance Web</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Brief Specifications</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-zinc-950/50 border border-white/5 hover:border-white/10 focus:border-cyan-500/50 focus:outline-none rounded-lg px-4 py-3 text-sm text-white font-medium transition-all resize-none"
                      placeholder="Outline target timeline, goals, and architectural requirements..."
                    />
                  </div>

                  <Button
                    variant="glow"
                    type="submit"
                    className="w-full py-4 text-xs font-bold uppercase tracking-wider mt-4"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "LOGGING INITIATION..." : "TRANSMIT INITIATION SIGNAL"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
