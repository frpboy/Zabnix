import Link from "next/link";
import Container from "@/components/common/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    platform: [
      { label: "Services", href: "/services" },
      { label: "Solutions", href: "/solutions" },
      { label: "Industries", href: "/industries" },
      { label: "Products", href: "/products" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Insights", href: "/blog" },
    ],
    social: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "GitHub", href: "https://github.com/frpboy/Zabnix" },
      { label: "Twitter", href: "https://twitter.com" },
    ],
  };

  return (
    <footer className="relative bg-[#070707] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Decorative gradient beam line at the top */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      {/* Soft background glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16">
          {/* Brand block */}
          <div className="space-y-6">
            <Link href="/" className="text-xl font-bold tracking-[0.25em] text-white">
              ZABNIX
            </Link>
            <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
              Engineering high-performance enterprise platforms, custom software solutions, and premium web architectures.
            </p>
            <div className="pt-2 text-xs font-semibold text-zinc-400 tracking-wider uppercase">
              Backed by <span className="text-white font-bold tracking-normal">Sahakar Group</span>
            </div>
          </div>

          {/* Platform Columns */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Platform</h4>
            <ul className="space-y-4">
              {links.platform.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Columns */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {links.company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Connect</h4>
            <ul className="space-y-4">
              {links.social.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600 gap-4">
          <p>&copy; {currentYear} ZABNIX. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#privacy" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-zinc-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
