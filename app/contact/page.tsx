"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Button from "@/components/common/Button";
import GlowWrapper from "@/components/common/GlowWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Shield, CheckCircle2, MessageSquare, Calendar, Clock, ChevronRight } from "lucide-react";

export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    type: "SaaS",
    message: "",
    honeypot: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Calendly Mock State
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [schedulerStep, setSchedulerStep] = useState<"date" | "time" | "confirm" | "success">("date");
  const [clientEmail, setClientEmail] = useState("");

  const dates = [
    { day: "Mon", num: "25", label: "May 25, 2026" },
    { day: "Tue", num: "26", label: "May 26, 2026" },
    { day: "Wed", num: "27", label: "May 27, 2026" },
    { day: "Thu", num: "28", label: "May 28, 2026" },
    { day: "Fri", num: "29", label: "May 29, 2026" },
  ];

  const times = ["09:30 AM", "11:00 AM", "02:00 PM", "04:30 PM"];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
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

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientEmail) return;
    setSchedulerStep("success");
  };

  const resetScheduler = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setClientEmail("");
    setSchedulerStep("date");
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-24">
        {/* Contact Hero */}
        <Section className="relative overflow-hidden">
          <GlowWrapper position="top-right" size="lg" className="absolute inset-0 pointer-events-none" />
          <Container>
            <div className="max-w-3xl py-12">
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">Establish Connection</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4">
                Initiate Your Project
              </h1>
              <p className="text-zinc-400 mt-6 leading-relaxed text-base md:text-lg">
                Transmit your system specifications or schedule a direct architecture session with our engineering leads.
              </p>
            </div>
          </Container>
        </Section>

        {/* Channels Grid */}
        <Section gridBackground className="bg-[#080808] border-t border-white/5 pb-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Form Column */}
              <div className="lg:col-span-7">
                <div className="glass-panel p-8 md:p-10 rounded-xl border-white/8 relative">
                  <h2 className="text-lg font-bold text-white tracking-wide mb-6">Transmission Signal Form</h2>
                  
                  {formStatus === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <CheckCircle2 size={48} className="text-cyan-400 mb-6 animate-bounce" />
                      <h3 className="text-xl font-bold text-white mb-2">Signal Sent</h3>
                      <p className="text-zinc-400 text-xs md:text-sm max-w-sm leading-relaxed mb-6">
                        Your specifications have been recorded under ID ZAB-{(Math.random() * 10000).toFixed(0)}. A system architect will respond shortly.
                      </p>
                      <Button variant="secondary" onClick={() => setFormStatus("idle")} className="text-xs py-2 px-6">
                        Send Another Signal
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
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
                            className="w-full bg-zinc-950/50 border border-white/5 focus:border-cyan-500/50 focus:outline-none rounded-lg px-4 py-3 text-sm text-white font-medium transition-all"
                            placeholder="Robert Drake"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Email Address</label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-zinc-950/50 border border-white/5 focus:border-cyan-500/50 focus:outline-none rounded-lg px-4 py-3 text-sm text-white font-medium transition-all"
                            placeholder="robert@company.com"
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
                            className="w-full bg-zinc-950/50 border border-white/5 focus:border-cyan-500/50 focus:outline-none rounded-lg px-4 py-3 text-sm text-white font-medium transition-all"
                            placeholder="Sahakar Ltd"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Project Domain</label>
                          <select
                            value={formData.type}
                            onChange={e => setFormData({ ...formData, type: e.target.value })}
                            className="w-full bg-zinc-950 border border-white/5 focus:border-cyan-500/50 focus:outline-none rounded-lg px-4 py-3 text-sm text-white font-medium cursor-pointer"
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
                          className="w-full bg-zinc-950/50 border border-white/5 focus:border-cyan-500/50 focus:outline-none rounded-lg px-4 py-3 text-sm text-white font-medium resize-none transition-all"
                          placeholder="Outline targets, scale metrics, and integrations..."
                        />
                      </div>

                      <Button
                        variant="glow"
                        type="submit"
                        className="w-full py-4 text-xs font-bold uppercase tracking-wider mt-4"
                        disabled={formStatus === "submitting"}
                      >
                        {formStatus === "submitting" ? "LOGGING INITIATION..." : "TRANSMIT INITIATION SIGNAL"}
                      </Button>
                    </form>
                  )}
                </div>
              </div>

              {/* Instant Channels & Interactive Scheduler */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Instant WhatsApp & Email */}
                <div className="glass-panel p-6 rounded-xl border-white/5 space-y-6">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Instant Communication</h3>
                  
                  <div className="flex gap-4 items-center p-4 bg-zinc-950/50 rounded-lg border border-white/5 hover:border-cyan-500/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">WhatsApp Dispatch</div>
                      <a 
                        href="https://wa.me/919999999999?text=Hello%20Zabnix%20Team,%20I%20would%20like%20to%20discuss%20a%20project%20brief." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-white hover:text-cyan-400 transition-colors flex items-center gap-1 mt-0.5"
                      >
                        Launch Direct Chat <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center p-4 bg-zinc-950/50 rounded-lg border border-white/5 hover:border-cyan-500/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">Secure Email</div>
                      <a href="mailto:initiations@zabnix.com" className="text-xs font-semibold text-white hover:text-cyan-400 transition-colors block mt-0.5">
                        initiations@zabnix.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Interactive Calendly Mock */}
                <div className="glass-panel p-6 rounded-xl border-white/5 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyan-400" /> Architecture Briefing
                    </h3>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase">30 Min Session</span>
                  </div>

                  <AnimatePresence mode="wait">
                    {schedulerStep === "date" && (
                      <motion.div
                        key="date"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-4"
                      >
                        <p className="text-zinc-400 text-xs leading-relaxed">
                          Select a target briefing date:
                        </p>
                        <div className="grid grid-cols-5 gap-2">
                          {dates.map((d) => (
                            <button
                              key={d.num}
                              onClick={() => {
                                setSelectedDate(d.label);
                                setSchedulerStep("time");
                              }}
                              className="bg-zinc-950/50 border border-white/5 rounded-lg py-3 text-center hover:border-cyan-500/40 hover:bg-zinc-900 transition-all cursor-pointer"
                            >
                              <div className="text-[9px] uppercase font-bold text-zinc-500">{d.day}</div>
                              <div className="text-sm font-bold text-white mt-1">{d.num}</div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {schedulerStep === "time" && (
                      <motion.div
                        key="time"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-4"
                      >
                        <div className="flex justify-between items-center">
                          <p className="text-zinc-400 text-xs">
                            Select time for <span className="text-cyan-400 font-semibold">{selectedDate}</span>:
                          </p>
                          <button
                            onClick={() => setSchedulerStep("date")}
                            className="text-[10px] text-zinc-500 hover:text-white transition-colors"
                          >
                            Back
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                          {times.map((t) => (
                            <button
                              key={t}
                              onClick={() => {
                                setSelectedTime(t);
                                setSchedulerStep("confirm");
                              }}
                              className="bg-zinc-950/50 border border-white/5 rounded-lg py-2.5 text-center text-xs font-semibold text-zinc-300 hover:border-cyan-500/40 hover:text-white hover:bg-zinc-900 transition-all cursor-pointer"
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {schedulerStep === "confirm" && (
                      <motion.div
                        key="confirm"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="space-y-4"
                      >
                        <div className="flex justify-between items-center">
                          <div className="text-xs text-zinc-400">
                            Confirm Slot: <span className="text-cyan-400 font-semibold">{selectedDate}</span> at <span className="text-cyan-400 font-semibold">{selectedTime}</span>
                          </div>
                          <button
                            onClick={() => setSchedulerStep("time")}
                            className="text-[10px] text-zinc-500 hover:text-white transition-colors"
                          >
                            Back
                          </button>
                        </div>

                        <form onSubmit={handleScheduleSubmit} className="space-y-3">
                          <input
                            required
                            type="email"
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            placeholder="Your email address"
                            className="w-full bg-zinc-950 border border-white/5 focus:border-cyan-500/50 focus:outline-none rounded-lg px-4 py-2.5 text-xs text-white"
                          />
                          <button
                            type="submit"
                            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            Confirm Booking
                          </button>
                        </form>
                      </motion.div>
                    )}

                    {schedulerStep === "success" && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-center py-6 space-y-4"
                      >
                        <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto text-cyan-400">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Briefing Confirmed</h4>
                          <p className="text-[11px] text-zinc-400 mt-1 max-w-[240px] mx-auto leading-relaxed">
                            Meeting set for {selectedDate} at {selectedTime}. Calendar invitation routed to <span className="text-white">{clientEmail}</span>.
                          </p>
                        </div>
                        <button
                          onClick={resetScheduler}
                          className="text-[10px] text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-widest font-bold"
                        >
                          Book another slot
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="font-mono text-[9px] text-zinc-600 tracking-wider space-y-1 pl-2">
                  <p>HQ SECURITY STATE: ACTIVE</p>
                  <p>SUPPORT BACKING: SAHAKAR GROUP COOPERATIVES</p>
                </div>

              </div>

            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
