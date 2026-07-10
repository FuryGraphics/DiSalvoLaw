// DiSalvo Law Office — Navbar
// Design: Light/Bright Theme — white bg, navy text, red CTA button
// Mobile: hamburger drawer

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { SITE, PRACTICE_AREAS, ADDITIONAL_PRACTICE_AREAS, CITIES } from "@/lib/siteData";

const allSpecialties = [
  ...PRACTICE_AREAS.map((p) => ({ title: p.title, href: `/pg/${p.slug}` })),
  ...ADDITIONAL_PRACTICE_AREAS.map((p) => ({
    title: p.title,
    href: `/pg/criminal-defense-fresno#${p.anchor}`,
  })),
];

const areasServed = CITIES.map((c) => ({
  title: c.city,
  href: `/pg/${c.slug}`,
}));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [mobileSpecialties, setMobileSpecialties] = useState(false);
  const [mobileAreas, setMobileAreas] = useState(false);
  const [location] = useLocation();

  const specialtiesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const legalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (specialtiesRef.current && !specialtiesRef.current.contains(e.target as Node)) setSpecialtiesOpen(false);
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) setAreasOpen(false);
      if (legalRef.current && !legalRef.current.contains(e.target as Node)) setLegalOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navBg = scrolled
    ? "bg-[#1c1a17]/97 backdrop-blur-md border-b border-[#2a2723] shadow-sm"
    : "bg-[#1c1a17] border-b border-[#2a2723]";

  const dropdownVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18 } },
    exit: { opacity: 0, y: -6, scale: 0.97, transition: { duration: 0.12 } },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[70px]">
            {/* Brand */}
            <Link href="/pg/home" className="flex items-center gap-2 group">
              <img
                src="/Logos%20and%20images/logo%20without%20text.png"
                alt="DiSalvo Law crest"
                className="w-9 h-9 object-contain"
              />
              <div className="leading-tight">
                <span className="font-bold text-[#b4b8a8] text-base tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  DiSalvo <span className="text-[#b04a22]">Law</span>
                </span>
                <div className="text-[10px] text-[#8a8d80] tracking-widest uppercase leading-none">Office</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link href="/pg/home" className="text-[11px] font-semibold tracking-widest uppercase text-[#9a9d90] hover:text-[#b04a22] px-3 py-2 transition-colors">
                HOME
              </Link>

              {/* Law Specialties Dropdown */}
              <div ref={specialtiesRef} className="relative">
                <button
                  onClick={() => { setSpecialtiesOpen(!specialtiesOpen); setAreasOpen(false); setLegalOpen(false); }}
                  className="flex items-center gap-1 text-[11px] font-semibold tracking-widest uppercase text-[#9a9d90] hover:text-[#b04a22] px-3 py-2 transition-colors"
                >
                  LAW SPECIALTIES
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${specialtiesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {specialtiesOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 mt-1 w-56 bg-[#1c1a17] border border-[#2a2723] shadow-xl py-2 z-50"
                    >
                      {allSpecialties.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setSpecialtiesOpen(false)}
                          className="block px-4 py-2.5 text-sm text-[#b4b8a8] hover:text-[#b04a22] hover:bg-[#14120f] transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Areas Served Dropdown */}
              <div ref={areasRef} className="relative">
                <button
                  onClick={() => { setAreasOpen(!areasOpen); setSpecialtiesOpen(false); setLegalOpen(false); }}
                  className="flex items-center gap-1 text-[11px] font-semibold tracking-widest uppercase text-[#9a9d90] hover:text-[#b04a22] px-3 py-2 transition-colors"
                >
                  AREAS SERVED
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${areasOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {areasOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 mt-1 w-52 bg-[#1c1a17] border border-[#2a2723] shadow-xl py-2 z-50"
                    >
                      {areasServed.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setAreasOpen(false)}
                          className="block px-4 py-2.5 text-sm text-[#b4b8a8] hover:text-[#b04a22] hover:bg-[#14120f] transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/pg/about" className="text-[11px] font-semibold tracking-widest uppercase text-[#9a9d90] hover:text-[#b04a22] px-3 py-2 transition-colors">
                ABOUT
              </Link>
              <Link href="/pg/home#reviews" className="text-[11px] font-semibold tracking-widest uppercase text-[#9a9d90] hover:text-[#b04a22] px-3 py-2 transition-colors">
                REVIEWS
              </Link>
              <Link href="/pg/contact" className="text-[11px] font-semibold tracking-widest uppercase text-[#9a9d90] hover:text-[#b04a22] px-3 py-2 transition-colors">
                CONTACT
              </Link>

              {/* Legal Dropdown */}
              <div ref={legalRef} className="relative">
                <button
                  onClick={() => { setLegalOpen(!legalOpen); setSpecialtiesOpen(false); setAreasOpen(false); }}
                  className="flex items-center gap-1 text-[11px] font-semibold tracking-widest uppercase text-[#9a9d90] hover:text-[#b04a22] px-3 py-2 transition-colors"
                >
                  LEGAL
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${legalOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {legalOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full right-0 mt-1 w-48 bg-[#1c1a17] border border-[#2a2723] shadow-xl py-2 z-50"
                    >
                      <Link href="/pg/privacy-policy" onClick={() => setLegalOpen(false)} className="block px-4 py-2.5 text-sm text-[#b4b8a8] hover:text-[#b04a22] hover:bg-[#14120f] transition-colors">Privacy Policy</Link>
                      <Link href="/pg/terms-and-conditions" onClick={() => setLegalOpen(false)} className="block px-4 py-2.5 text-sm text-[#b4b8a8] hover:text-[#b04a22] hover:bg-[#14120f] transition-colors">Terms & Conditions</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop Right: Phone + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="text-sm font-semibold text-[#b4b8a8] hover:text-[#b04a22] transition-colors tracking-wide"
              >
                {SITE.phone}
              </a>
              <Link
                href="/pg/contact"
                className="btn-primary text-xs px-5 py-2.5"
              >
                FREE CONSULTATION
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-[#b4b8a8]"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[60]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-[#1c1a17] z-[70] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between p-5 border-b border-[#2a2723]">
                <span className="flex items-center gap-2 font-bold text-[#b4b8a8] text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <img src="/Logos%20and%20images/logo%20without%20text.png" alt="DiSalvo Law crest" className="w-8 h-8 object-contain" />
                  DiSalvo <span className="text-[#b04a22]">Law</span>
                </span>
                <button onClick={() => setMobileOpen(false)} className="text-[#8a8d80] hover:text-[#b4b8a8] p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="p-5 space-y-1">
                <Link href="/pg/home" className="block py-3 text-sm font-semibold tracking-widest uppercase text-[#b4b8a8] hover:text-[#b04a22] border-b border-[#2a2723]">HOME</Link>

                {/* Mobile Specialties */}
                <div>
                  <button
                    onClick={() => setMobileSpecialties(!mobileSpecialties)}
                    className="flex items-center justify-between w-full py-3 text-sm font-semibold tracking-widest uppercase text-[#b4b8a8] hover:text-[#b04a22] border-b border-[#2a2723]"
                  >
                    LAW SPECIALTIES
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSpecialties ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileSpecialties && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 space-y-1">
                          {allSpecialties.map((item) => (
                            <Link key={item.href} href={item.href} className="block py-2 text-sm text-[#9a9d90] hover:text-[#b04a22] transition-colors">
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Areas */}
                <div>
                  <button
                    onClick={() => setMobileAreas(!mobileAreas)}
                    className="flex items-center justify-between w-full py-3 text-sm font-semibold tracking-widest uppercase text-[#b4b8a8] hover:text-[#b04a22] border-b border-[#2a2723]"
                  >
                    AREAS SERVED
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileAreas ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAreas && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 space-y-1">
                          {areasServed.map((item) => (
                            <Link key={item.href} href={item.href} className="block py-2 text-sm text-[#9a9d90] hover:text-[#b04a22] transition-colors">
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/pg/about" className="block py-3 text-sm font-semibold tracking-widest uppercase text-[#b4b8a8] hover:text-[#b04a22] border-b border-[#2a2723]">ABOUT</Link>
                <Link href="/pg/home#reviews" className="block py-3 text-sm font-semibold tracking-widest uppercase text-[#b4b8a8] hover:text-[#b04a22] border-b border-[#2a2723]">REVIEWS</Link>
                <Link href="/pg/contact" className="block py-3 text-sm font-semibold tracking-widest uppercase text-[#b4b8a8] hover:text-[#b04a22] border-b border-[#2a2723]">CONTACT</Link>
                <Link href="/pg/privacy-policy" className="block py-3 text-sm font-semibold tracking-widest uppercase text-[#b4b8a8] hover:text-[#b04a22] border-b border-[#2a2723]">PRIVACY POLICY</Link>
                <Link href="/pg/terms-and-conditions" className="block py-3 text-sm font-semibold tracking-widest uppercase text-[#b4b8a8] hover:text-[#b04a22] border-b border-[#2a2723]">TERMS</Link>
              </nav>

              <div className="p-5 space-y-3 border-t border-[#2a2723]">
                <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2 text-sm font-semibold text-[#b4b8a8]">
                  <Phone className="w-4 h-4 text-[#b04a22]" />
                  {SITE.phone}
                </a>
                <Link href="/pg/contact" className="btn-primary block text-center text-xs py-3">
                  FREE CONSULTATION
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating mobile call button */}
      <a
        href={`tel:${SITE.phoneRaw}`}
        className="fixed bottom-5 right-5 z-40 lg:hidden flex items-center gap-2 bg-[#b04a22] text-[#b4b8a8] text-xs font-bold tracking-wider uppercase px-4 py-3 shadow-lg"
        style={{ borderRadius: "2px" }}
      >
        <Phone className="w-4 h-4" />
        CALL NOW
      </a>
    </>
  );
}
