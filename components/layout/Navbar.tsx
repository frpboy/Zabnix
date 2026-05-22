"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/helpers";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Insights", href: "/blog" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          visible ? "translate-y-0" : "-translate-y-full",
          scrolled
            ? "bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/8 py-4"
            : "bg-transparent border-b border-transparent py-6"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-[0.25em] text-white hover:text-cyan-400 transition-colors drop-shadow-[0_0_8px_rgba(0,210,255,0.2)]"
          >
            ZABNIX
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="glow"
              href="/contact"
              className="hidden sm:inline-flex py-2 px-5 text-xs font-bold uppercase tracking-wider"
            >
              Initiate Project
            </Button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-0 pt-24 pb-8 px-6 bg-[#0A0A0A] border-b border-white/8 z-40 md:hidden flex flex-col space-y-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <Button
              variant="glow"
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-xs font-bold uppercase tracking-wider"
            >
              Initiate Project
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
