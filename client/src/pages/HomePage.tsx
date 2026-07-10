// DiSalvo Law Office — Homepage (/pg/home)
// Design: Bright/Light Theme — white/cream backgrounds, navy text, red/gold accents

import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, Star, ChevronRight, CheckCircle2, Clock, MessageSquare, CreditCard, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/FadeInUp";
import CTABand from "@/components/CTABand";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE, PRACTICE_AREAS, ADDITIONAL_PRACTICE_AREAS, CITIES, REVIEWS, HOME_FAQS } from "@/lib/siteData";

const ATTORNEY_IMG = "/Logos%20and%20images/di%20salvo%20portrait.jpeg";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1c1a17 0%, #000000 50%, #1c1a17 100%)",
        }}
      >
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e2a3a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        {/* Red accent line left */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#b04a22]" style={{ opacity: 0.6 }} />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#9b8652] mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                FRESNO, CALIFORNIA
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#b4b8a8] leading-[1.1] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Fighting For Your<br />
                Rights With{" "}
                <em className="not-italic text-[#9b8652]">20+ Years</em>
                <br />
                of Proven Defense
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-[#9a9d90] text-base md:text-lg mb-8 max-w-lg leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Criminal defense in Fresno and the Central Valley — aggressive advocacy from an attorney who answers the phone.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-col sm:flex-row gap-3 mb-12"
              >
                <Link href="/pg/contact" className="btn-primary text-sm px-7 py-4 text-center">
                  FREE CONSULTATION
                </Link>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="btn-outline-navy text-sm px-7 py-4 text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  CALL {SITE.phone}
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-[#2a2723]"
              >
                {SITE.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl md:text-3xl font-bold text-[#b4b8a8] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-[#8a8d80] uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Attorney Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative overflow-hidden shadow-2xl" style={{ background: "#1c1a17", border: "1px solid #2a2723" }}>
                <img
                  src={ATTORNEY_IMG}
                  alt="Attorney Mario DiSalvo"
                  className="w-full object-cover"
                  style={{ aspectRatio: "3/4", maxHeight: "480px", objectPosition: "top" }}
                />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)" }}>
                  <p className="text-[#b4b8a8] font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {SITE.attorney}
                  </p>
                  <p className="text-[#b89c63] text-xs font-semibold tracking-widest uppercase mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Attorney At Law
                  </p>
                </div>
              </div>

              {/* Credentials Grid */}
              <div className="grid grid-cols-2 gap-px mt-px" style={{ background: "#2a2723" }}>
                {[
                  { icon: <Clock className="w-3.5 h-3.5" />, label: "Availability", value: "Open 24 / 7" },
                  { icon: <MessageSquare className="w-3.5 h-3.5" />, label: "Consultation", value: "Always Free" },
                  { icon: <CreditCard className="w-3.5 h-3.5" />, label: "Payment", value: "Flexible Plans" },
                  { icon: <MapPin className="w-3.5 h-3.5" />, label: "Location", value: "Fresno, CA" },
                ].map((item, i) => (
                  <div key={i} className="p-4 flex items-start gap-3" style={{ backgroundColor: "#1c1a17" }}>
                    <span className="text-[#9b8652] mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-[10px] text-[#8a8d80] uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>{item.label}</p>
                      <p className="text-[#b4b8a8] text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LAW SPECIALTIES ── */}
      <section id="specialties" className="py-20" style={{ backgroundColor: "#1c1a17" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9b8652] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              LAW SPECIALTIES
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#b4b8a8] mb-12 max-w-2xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Comprehensive Criminal Defense in Fresno
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-6">
            {PRACTICE_AREAS.map((area, i) => (
              <FadeInUp key={area.slug} delay={i * 0.08}>
                <div className="group p-8 border border-[#2a2723] hover:border-[#b04a22] transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: "#000000" }}>
                  <div className="flex items-start gap-5">
                    <span className="text-4xl font-bold text-[#b04a22] leading-none" style={{ fontFamily: "'Playfair Display', serif", opacity: 0.2 }}>
                      {area.num}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#b4b8a8] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {area.title}
                      </h3>
                      <p className="text-[#9a9d90] text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {area.blurb}
                      </p>
                      <Link
                        href={`/pg/${area.slug}`}
                        className="inline-flex items-center gap-1.5 text-[#b04a22] text-xs font-semibold uppercase tracking-wider hover:gap-3 transition-all"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        LEARN MORE <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          {/* Additional practice areas */}
          <FadeInUp delay={0.4}>
            <div className="mt-8 p-6 border border-[#2a2723]" style={{ backgroundColor: "#1c1a17" }}>
              <p className="text-sm text-[#8a8d80] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Also handling:</p>
              <div className="flex flex-wrap gap-3">
                {ADDITIONAL_PRACTICE_AREAS.map((p) => (
                  <Link
                    key={p.anchor}
                    href={`/pg/criminal-defense-fresno#${p.anchor}`}
                    className="inline-flex items-center gap-1.5 text-sm text-[#b4b8a8] hover:text-[#b04a22] transition-colors font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <ChevronRight className="w-3 h-3 text-[#b04a22]" />
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ── SERVING REGION BAND ── */}
      <section className="py-12" style={{ backgroundColor: "#1c1a17" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <FadeInUp>
              <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#b89c63] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                SERVING THE CENTRAL VALLEY
              </p>
              <p className="text-[#a8ac9c] text-base max-w-2xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                We represent clients across{" "}
                <strong className="text-[#b4b8a8]">Fresno County</strong>,{" "}
                <strong className="text-[#b4b8a8]">Madera County</strong>,{" "}
                <strong className="text-[#b4b8a8]">Tulare County</strong>,{" "}
                <strong className="text-[#b4b8a8]">Kings County</strong>, and{" "}
                <strong className="text-[#b4b8a8]">Merced County</strong> — in state and federal courts throughout California's Central Valley.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="shrink-0 p-6 text-center" style={{ backgroundColor: "rgba(180,184,168,0.07)", border: "1px solid rgba(180,184,168,0.12)", minWidth: "180px" }}>
                <div className="text-3xl font-bold text-[#b4b8a8] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>1,000+</div>
                <div className="text-[11px] text-[#a8ac9c] uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>Cases Defended<br />in California</div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ── MEET YOUR ATTORNEY ── */}
      <section id="about" className="py-20" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Photo */}
            <FadeInUp>
              <div className="relative">
                <div className="relative overflow-hidden shadow-xl" style={{ border: "1px solid #2a2723" }}>
                  <img
                    src={ATTORNEY_IMG}
                    alt="Attorney Mario DiSalvo"
                    className="w-full object-cover object-top"
                    style={{ aspectRatio: "4/5" }}
                  />
                </div>
                {/* Stat overlay */}
                <div
                  className="absolute bottom-6 left-6 p-5 text-center"
                  style={{ backgroundColor: "#b04a22", minWidth: "140px" }}
                >
                  <div className="text-2xl font-bold text-[#b4b8a8]" style={{ fontFamily: "'Playfair Display', serif" }}>1,000+</div>
                  <div className="text-[10px] text-[#b4b8a8]/80 uppercase tracking-wider mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>CASES DEFENDED<br />IN CALIFORNIA</div>
                </div>
              </div>
            </FadeInUp>

            {/* Right: Bio */}
            <FadeInUp delay={0.15}>
              <p className="section-label mb-3">MEET YOUR ATTORNEY</p>
              <h2 className="section-heading text-3xl md:text-4xl mb-6">
                {SITE.attorney}, Attorney At Law
              </h2>
              <div className="space-y-4 text-[#9a9d90] text-sm leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p>
                  DiSalvo Law Office is a dedicated criminal defense firm serving Fresno and the entire Central Valley. Attorney Mario DiSalvo brings over 20 years of courtroom experience to every case, offering each client a highly personalized level of service that is rare among Fresno law firms.
                </p>
                <p>
                  When you call DiSalvo Law Office, you reach an attorney — not a paralegal, not a receptionist. Mario DiSalvo knows your case and is ready to fight for you from day one.
                </p>
                <p>
                  From DUI charges to serious felonies, Mario DiSalvo has the experience, knowledge, and tenacity to build the strongest possible defense for your case. He understands what is at stake — your freedom, your family, and your future.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "20+ years of criminal defense experience in California",
                  "All misdemeanors and felonies handled",
                  "Direct attorney access — 24/7 availability",
                  "Flexible, affordable payment plans",
                  "Free initial consultation — no obligation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#b4b8a8]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <CheckCircle2 className="w-4 h-4 text-[#b04a22] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/pg/contact" className="btn-primary text-xs px-7 py-3.5">
                SCHEDULE A CONSULTATION
              </Link>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ── CLIENT REVIEWS ── */}
      <section id="reviews" className="py-20" style={{ backgroundColor: "#1c1a17" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <p className="section-label mb-3">CLIENT REVIEWS</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
              <h2 className="section-heading text-3xl md:text-4xl">What Our Clients Say</h2>
              <div className="sm:ml-auto flex items-center gap-3 shrink-0">
                <div>
                  <div className="flex text-[#9b8652] gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-[#b4b8a8] font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>5.0</p>
                </div>
                <div className="pl-3 border-l border-[#2a2723]">
                  <p className="text-[#8a8d80] text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>Google Reviews</p>
                  <a href={SITE.googleReviews} target="_blank" rel="noopener noreferrer" className="text-[#9b8652] text-xs hover:underline" style={{ fontFamily: "'Inter', sans-serif" }}>
                    View All Reviews →
                  </a>
                </div>
              </div>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="p-7 h-full flex flex-col shadow-sm" style={{ backgroundColor: "#1c1a17", border: "1px solid #2a2723" }}>
                  <div className="flex text-[#9b8652] gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="text-[#b4b8a8] text-sm leading-relaxed flex-1 mb-5 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "{review.quote}"
                  </p>
                  <div>
                    <p className="text-[#b4b8a8] font-semibold text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{review.name}</p>
                    <p className="text-[#8a8d80] text-xs mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>{review.caseType}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.3}>
            <div className="mt-8 text-center">
              <a
                href={SITE.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#9b8652] hover:text-[#b4b8a8] transition-colors font-semibold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                VIEW ALL GOOGLE REVIEWS <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQAccordion faqs={HOME_FAQS} heading="Common Questions About Criminal Defense" />

      {/* ── CTA BAND ── */}
      <CTABand />

      <Footer />
    </div>
  );
}
