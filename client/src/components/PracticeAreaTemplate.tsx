// DiSalvo Law Office — Practice Area Page Template
// Design: Light Theme — white/cream backgrounds, navy text, red accents

import { Link } from "wouter";
import { CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import FAQAccordion from "@/components/FAQAccordion";
import FadeInUp from "@/components/FadeInUp";
import { PRACTICE_AREAS, CITIES, SITE } from "@/lib/siteData";

interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface PracticeAreaTemplateProps {
  slug: string;
  h1: string;
  accentWord?: string;
  intro: string;
  whatWeHandle: string[];
  processSteps: ProcessStep[];
  whyPrivate: string;
  faqs: FAQ[];
  relatedAreas?: string[];
  relatedCities?: string[];
}

export default function PracticeAreaTemplate({
  slug,
  h1,
  accentWord,
  intro,
  whatWeHandle,
  processSteps,
  whyPrivate,
  faqs,
  relatedAreas = [],
  relatedCities = [],
}: PracticeAreaTemplateProps) {
  const currentArea = PRACTICE_AREAS.find((p) => p.slug === slug);
  const related = PRACTICE_AREAS.filter((p) => relatedAreas.includes(p.slug));
  const relatedCityData = CITIES.filter((c) => relatedCities.includes(c.slug));

  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <Navbar />
      <PageHero
        h1={h1}
        accentWord={accentWord}
        subtext={`Aggressive ${currentArea?.title || "criminal defense"} representation in Fresno, CA. Free consultation — available 24/7.`}
        breadcrumbs={[
          { label: "Practice Areas", href: "/pg/criminal-defense-fresno" },
          { label: currentArea?.title || h1 },
        ]}
      />

      {/* Intro */}
      <section className="py-16" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <FadeInUp>
                <p className="text-[#b4b8a8] text-base leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {intro}
                </p>
              </FadeInUp>
            </div>
            <div>
              <FadeInUp delay={0.15}>
                <div className="p-6 shadow-sm" style={{ backgroundColor: "#1c1a17", border: "1px solid #2a2723" }}>
                  <h3 className="text-[#b4b8a8] font-bold text-base mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Quick Contact</h3>
                  <p className="text-[#9a9d90] text-sm mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Available 24/7 for criminal defense emergencies.</p>
                  <Link href="/pg/contact" className="btn-primary block text-center text-xs py-3 mb-3">FREE CONSULTATION</Link>
                  <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-navy block text-center text-xs py-3">{SITE.phone}</a>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-16" style={{ backgroundColor: "#1c1a17" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9b8652] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>WHAT WE HANDLE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#b4b8a8] mb-10 max-w-2xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              {currentArea?.title} Cases We Defend
            </h2>
          </FadeInUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whatWeHandle.map((item, i) => (
              <FadeInUp key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 p-4 shadow-sm" style={{ backgroundColor: "#000000", border: "1px solid #2a2723" }}>
                  <CheckCircle2 className="w-4 h-4 text-[#b04a22] mt-0.5 shrink-0" />
                  <span className="text-[#b4b8a8] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-16" style={{ backgroundColor: "#1c1a17" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9b8652] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>THE PROCESS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#b4b8a8] mb-12 max-w-2xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>How We Build Your Defense</h2>
          </FadeInUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="relative p-6 h-full shadow-sm" style={{ backgroundColor: "#1c1a17", border: "1px solid #2a2723" }}>
                  <div className="text-4xl font-bold text-[#b04a22] mb-4 leading-none" style={{ fontFamily: "'Playfair Display', serif", opacity: 0.2 }}>
                    {step.step}
                  </div>
                  <h3 className="text-[#b4b8a8] font-bold text-base mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                  <p className="text-[#9a9d90] text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{step.body}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why Private Attorney */}
      <section className="py-16" style={{ backgroundColor: "#1c1a17" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeInUp>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9b8652] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>WHY HIRE A PRIVATE ATTORNEY</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#b4b8a8] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Don't Face This Alone</h2>
              <p className="text-[#9a9d90] text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {whyPrivate}
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion faqs={faqs} heading={`${currentArea?.title || ""} — Common Questions`} />

      {/* Internal Links */}
      {(related.length > 0 || relatedCityData.length > 0) && (
        <section className="py-16" style={{ backgroundColor: "#1c1a17" }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {related.length > 0 && (
                <FadeInUp>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9b8652] mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>RELATED PRACTICE AREAS</p>
                  <div className="space-y-2">
                    {related.map((area) => (
                      <Link key={area.slug} href={`/pg/${area.slug}`} className="flex items-center gap-2 text-[#b4b8a8] hover:text-[#b04a22] text-sm transition-colors group" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <ArrowRight className="w-3.5 h-3.5 text-[#b04a22] group-hover:translate-x-1 transition-transform" />
                        {area.title}
                      </Link>
                    ))}
                  </div>
                </FadeInUp>
              )}
              {relatedCityData.length > 0 && (
                <FadeInUp delay={0.1}>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9b8652] mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>NEARBY CITIES WE SERVE</p>
                  <div className="space-y-2">
                    {relatedCityData.map((city) => (
                      <Link key={city.slug} href={`/pg/${city.slug}`} className="flex items-center gap-2 text-[#b4b8a8] hover:text-[#b04a22] text-sm transition-colors group" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <ArrowRight className="w-3.5 h-3.5 text-[#b04a22] group-hover:translate-x-1 transition-transform" />
                        Criminal Defense Attorney {city.city}, CA
                      </Link>
                    ))}
                  </div>
                </FadeInUp>
              )}
            </div>
          </div>
        </section>
      )}

      <CTABand />
      <Footer />
    </div>
  );
}
