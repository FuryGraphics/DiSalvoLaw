// DiSalvo Law Office — Criminal Defense Hub Page (/pg/criminal-defense-fresno)
// Design: Light Theme
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import FAQAccordion from "@/components/FAQAccordion";
import FadeInUp from "@/components/FadeInUp";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { ADDITIONAL_PRACTICE_AREAS, PRACTICE_AREAS, SITE } from "@/lib/siteData";

const faqs = [
  { q: "What should I do immediately after being arrested in Fresno?", a: "Remain calm, exercise your right to remain silent, and ask for an attorney immediately. Do not answer any questions from police without your attorney present. Call DiSalvo Law Office at (559) 442-1552 as soon as possible." },
  { q: "Can a criminal defense attorney get my charges dropped?", a: "In many cases, yes. Attorney DiSalvo reviews every case for constitutional violations, lack of evidence, improper police procedures, and other grounds for dismissal. While no outcome can be guaranteed, a thorough defense strategy maximizes your chances." },
  { q: "What is the difference between a misdemeanor and a felony in California?", a: "Misdemeanors are less serious offenses punishable by up to one year in county jail. Felonies are more serious and can result in state prison sentences, loss of civil rights, and other long-term consequences. Both require experienced legal representation." },
  { q: "How long does a criminal case take in Fresno?", a: "The timeline varies significantly depending on the charges, complexity of the case, and court schedules. Misdemeanors may resolve in weeks; felony cases can take months or longer. Attorney DiSalvo works to resolve cases as efficiently as possible while achieving the best outcome." },
  { q: "Will I have to go to trial?", a: "Most criminal cases are resolved through negotiation, plea agreements, or dismissal before trial. However, if a fair resolution cannot be reached, Attorney DiSalvo is fully prepared to take your case to trial and fight for your rights in court." },
  { q: "Can I get my criminal record expunged in California?", a: "California allows expungement of many criminal convictions under Penal Code 1203.4. If you have completed probation and meet other eligibility requirements, you may be able to have your record cleared. Contact us to discuss your eligibility." },
];

export default function CriminalDefensePage() {
  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <Navbar />
      <PageHero
        h1="Criminal Defense Attorney Fresno, CA"
        accentWord="Criminal Defense"
        subtext="Aggressive criminal defense representation in Fresno and the Central Valley. Free consultation — available 24/7."
        breadcrumbs={[{ label: "Criminal Defense" }]}
      />

      {/* Intro */}
      <section className="py-16" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <FadeInUp>
                <p className="text-[#b4b8a8] text-base leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  When you are facing criminal charges in Fresno, every decision you make in the hours and days following your arrest can have a profound impact on the outcome of your case. Attorney Mario DiSalvo has spent over 20 years defending the rights of people accused of crimes throughout Fresno County and the Central Valley.
                </p>
                <p className="text-[#9a9d90] text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Whether you are facing a misdemeanor or a serious felony, DiSalvo Law Office provides the aggressive, personalized defense you need. From the moment you call, you will work directly with Attorney DiSalvo — not a paralegal or junior associate. He is available 24 hours a day, 7 days a week, because criminal emergencies don't happen on a schedule.
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

      {/* All Practice Areas Grid */}
      <section className="py-16" style={{ backgroundColor: "#1c1a17" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9b8652] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>PRACTICE AREAS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#b4b8a8] mb-10 max-w-2xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>All Criminal Defense Services</h2>
          </FadeInUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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

            {/* Additional Areas */}
            {ADDITIONAL_PRACTICE_AREAS.map((area, i) => (
              <FadeInUp key={area.anchor} delay={(PRACTICE_AREAS.length + i) * 0.07}>
                <div id={area.anchor} className="p-6 h-full shadow-sm" style={{ backgroundColor: "#000000", border: "1px solid #2a2723" }}>
                  <h3 className="text-[#b4b8a8] font-bold text-base mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{area.title}</h3>
                  <p className="text-[#9a9d90] text-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Contact DiSalvo Law Office to discuss your {area.title.toLowerCase()} case. Attorney DiSalvo handles all aspects of criminal defense in Fresno and the Central Valley.
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={faqs} heading="Criminal Defense — Common Questions" />
      <CTABand />
      <Footer />
    </div>
  );
}
