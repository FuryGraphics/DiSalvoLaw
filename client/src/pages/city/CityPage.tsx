// DiSalvo Law Office — City Page Template
// Design: Light Theme — white/cream backgrounds, navy text, red accents

import { Link } from "wouter";
import { MapPin, Phone, Clock, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import FadeInUp from "@/components/FadeInUp";
import { CITIES, PRACTICE_AREAS, SITE } from "@/lib/siteData";

interface CityPageProps {
  slug: string;
}

export default function CityPage({ slug }: CityPageProps) {
  const cityData = CITIES.find((c) => c.slug === slug);
  if (!cityData) return <div className="text-[#b4b8a8] p-20 text-center">City not found</div>;

  const { city, county, courthouse, courthouseAddress } = cityData;

  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <Navbar />
      <PageHero
        h1={`Criminal Defense Attorney ${city}, CA`}
        accentWord={city}
        subtext={`Serving ${city} and ${county} with aggressive criminal defense. Free consultation — available 24/7.`}
        breadcrumbs={[
          { label: "Areas Served" },
          { label: `${city}, CA` },
        ]}
      />

      {/* Intro */}
      <section className="py-16" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <FadeInUp>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9b8652] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>SERVING {city.toUpperCase()}, CA</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#b4b8a8] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Aggressive Criminal Defense in {city}, California
                </h2>
                <div className="space-y-4 text-[#9a9d90] text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <p>
                    If you or a loved one has been arrested or is facing criminal charges in {city}, California, you need an experienced criminal defense attorney on your side immediately. Attorney Mario DiSalvo of DiSalvo Law Office has been defending the rights of people throughout {county} and the Central Valley for over 20 years.
                  </p>
                  <p>
                    From DUI charges to serious felonies, from domestic violence allegations to drug crimes, DiSalvo Law Office provides the aggressive, personalized defense that {city} residents deserve. Attorney DiSalvo handles every case personally — you will never be handed off to a paralegal or junior associate.
                  </p>
                  <p>
                    Cases involving {city} residents are typically heard at the {courthouse}. Attorney DiSalvo has extensive experience in {county} courts and understands the local judges, prosecutors, and procedures that can make a critical difference in the outcome of your case.
                  </p>
                  <p>
                    Contact DiSalvo Law Office today for a free, confidential consultation. We are available 24 hours a day, 7 days a week, because criminal emergencies don't happen on a schedule. Call {SITE.phone} or fill out our contact form to get started.
                  </p>
                </div>
              </FadeInUp>
            </div>

            {/* Sidebar: Office Info */}
            <div>
              <FadeInUp delay={0.15}>
                <div className="p-6 mb-5 shadow-sm" style={{ backgroundColor: "#1c1a17", border: "1px solid #2a2723" }}>
                  <h3 className="text-[#b4b8a8] font-bold text-base mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>DiSalvo Law Office</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#b04a22] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[#b4b8a8] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{SITE.fullAddress}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#b04a22] shrink-0" />
                      <a href={`tel:${SITE.phoneRaw}`} className="text-[#b4b8a8] text-sm hover:text-[#b04a22] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>{SITE.phone}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-[#b04a22] shrink-0" />
                      <p className="text-[#9b8652] text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Open 24 Hours — 7 Days</p>
                    </div>
                  </div>
                  <div className="mt-5 space-y-2">
                    <Link href="/pg/contact" className="btn-primary block text-center text-xs py-3">FREE CONSULTATION</Link>
                    <a href={`tel:${SITE.phoneRaw}`} className="btn-outline-navy block text-center text-xs py-3">{SITE.phone}</a>
                  </div>
                </div>

                {/* Courthouse Info */}
                <div className="p-5 shadow-sm" style={{ backgroundColor: "#1c1a17", border: "1px solid #2a2723" }}>
                  <p className="text-[10px] text-[#9b8652] uppercase tracking-widest font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>LOCAL COURTHOUSE</p>
                  <p className="text-[#b4b8a8] text-sm font-semibold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{courthouse}</p>
                  <p className="text-[#8a8d80] text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>{courthouseAddress}</p>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas in City */}
      <section className="py-16" style={{ backgroundColor: "#1c1a17" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9b8652] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>PRACTICE AREAS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#b4b8a8] mb-10 max-w-2xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Practice Areas We Serve in {city}
            </h2>
          </FadeInUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRACTICE_AREAS.map((area, i) => (
              <FadeInUp key={area.slug} delay={i * 0.07}>
                <Link href={`/pg/${area.slug}`} className="group block p-6 h-full shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: "#000000", border: "1px solid #2a2723" }}>
                  <div className="text-3xl font-bold text-[#b04a22] mb-3 leading-none" style={{ fontFamily: "'Playfair Display', serif", opacity: 0.2 }}>{area.num}</div>
                  <h3 className="text-[#b4b8a8] font-bold text-base mb-2 group-hover:text-[#b04a22] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>{area.title}</h3>
                  <p className="text-[#9a9d90] text-xs leading-relaxed mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>{area.blurb}</p>
                  <span className="inline-flex items-center gap-1 text-[#b04a22] text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                    LEARN MORE <ChevronRight className="w-3 h-3" />
                  </span>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-16" style={{ backgroundColor: "#1c1a17" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9b8652] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>OUR OFFICE</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#b4b8a8] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Conveniently Located in Fresno</h2>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="overflow-hidden shadow-sm" style={{ border: "1px solid #2a2723", height: "350px" }}>
              <iframe
                title="DiSalvo Law Office Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.7!2d-119.7941!3d36.8175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945e0b0b0b0b0b%3A0x0!2s5151+N+Palm+Ave+Suite+100+Fresno+CA+93704!5e0!3m2!1sen!2sus!4v1234567890"
              />
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Internal Links to Other Cities */}
      <section className="py-12" style={{ backgroundColor: "#1c1a17" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9b8652] mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>OTHER CITIES WE SERVE</p>
            <div className="flex flex-wrap gap-3">
              {CITIES.filter((c) => c.slug !== slug).map((c) => (
                <Link
                  key={c.slug}
                  href={`/pg/${c.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-[#9a9d90] hover:text-[#b04a22] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <ChevronRight className="w-3 h-3 text-[#b04a22]" />
                  {c.city}
                </Link>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
}
