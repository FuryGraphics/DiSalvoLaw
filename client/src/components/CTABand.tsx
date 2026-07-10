// DiSalvo Law Office — Full-width CTA Band
// Design: Light Theme — navy background for contrast, white text

import { Link } from "wouter";
import { Phone } from "lucide-react";
import FadeInUp from "./FadeInUp";
import { SITE } from "@/lib/siteData";

interface CTABandProps {
  heading?: string;
  subtext?: string;
}

export default function CTABand({
  heading = "Get Your Free Consultation Today",
  subtext = "Our team is available 24/7. Call us directly or fill out our contact form and we'll get back to you promptly.",
}: CTABandProps) {
  return (
    <section
      style={{ backgroundColor: "#1c1a17" }}
      className="py-20"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#b89c63] mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>READY TO TALK?</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#b4b8a8] mb-5 max-w-3xl mx-auto leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {heading}
          </h2>
          <p className="text-[#a8ac9c] text-base md:text-lg max-w-2xl mx-auto mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
            {subtext}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pg/contact" className="btn-primary text-sm px-8 py-4 min-w-[200px] text-center">
              CONTACT US →
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 text-sm px-8 py-4 min-w-[200px] text-center font-semibold tracking-wider uppercase transition-all duration-200"
              style={{ border: "2px solid rgba(180,184,168,0.5)", color: "#b4b8a8" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(180,184,168,0.1)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
            >
              <Phone className="w-4 h-4" />
              CALL {SITE.phone}
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
