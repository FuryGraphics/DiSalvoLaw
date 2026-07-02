// DiSalvo Law Office — Inner Page Hero
// Design: Light Theme — navy hero for contrast, white text, red accent

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SITE } from "@/lib/siteData";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  h1: string;
  accentWord?: string;
  subtext?: string;
  breadcrumbs?: Breadcrumb[];
  showCTA?: boolean;
}

export default function PageHero({
  h1,
  accentWord,
  subtext,
  breadcrumbs = [],
  showCTA = true,
}: PageHeroProps) {
  const renderH1 = () => {
    if (!accentWord) return <span>{h1}</span>;
    const idx = h1.indexOf(accentWord);
    if (idx === -1) return <span>{h1}</span>;
    return (
      <>
        {h1.slice(0, idx)}
        <span className="text-[#cc1f1f]">{accentWord}</span>
        {h1.slice(idx + accentWord.length)}
      </>
    );
  };

  return (
    <section
      className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1e2a3a 0%, #2d3f55 50%, #1a2535 100%)",
      }}
    >
      {/* Subtle red glow */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #cc1f1f 0%, transparent 70%)" }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 mb-6 flex-wrap"
            aria-label="Breadcrumb"
          >
            <Link href="/pg/home" className="text-gray-400 text-xs hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-gray-500" />
                {crumb.href ? (
                  <Link href={crumb.href} className="text-gray-400 text-xs hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-200 text-xs">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {renderH1()}
        </motion.h1>

        {/* Red accent underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-1 bg-[#cc1f1f] mb-6"
        />

        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-300 text-base md:text-lg max-w-2xl mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {subtext}
          </motion.p>
        )}

        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link href="/pg/contact" className="btn-primary text-xs px-6 py-3 text-center">
              FREE CONSULTATION
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center justify-center text-xs px-6 py-3 text-center font-semibold tracking-wider uppercase transition-all duration-200"
              style={{ border: "2px solid rgba(255,255,255,0.4)", color: "#ffffff" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
            >
              CALL {SITE.phone}
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
