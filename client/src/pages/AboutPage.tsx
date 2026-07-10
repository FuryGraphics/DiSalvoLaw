// DiSalvo Law Office — About Page (/pg/about)
// Design: Light Theme
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import FadeInUp from "@/components/FadeInUp";
import { SITE } from "@/lib/siteData";

const ATTORNEY_IMG = "/Logos%20and%20images/di%20salvo%20portrait.jpeg";

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <Navbar />
      <PageHero
        h1="Meet Your Attorney — Mario DiSalvo"
        subtext="Over 20 years of aggressive criminal defense in Fresno and the Central Valley."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Bio Section */}
      <section className="py-20" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <FadeInUp>
              <div className="relative">
                <img
                  src={ATTORNEY_IMG}
                  alt="Attorney Mario DiSalvo"
                  className="w-full object-cover object-top shadow-xl"
                  style={{ border: "1px solid #2a2723", aspectRatio: "4/5" }}
                />
                <div className="absolute bottom-6 left-6 p-5" style={{ backgroundColor: "#b04a22" }}>
                  <div className="text-2xl font-bold text-[#b4b8a8]" style={{ fontFamily: "'Playfair Display', serif" }}>1,000+</div>
                  <div className="text-[10px] text-[#b4b8a8]/80 uppercase tracking-wider mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>CASES DEFENDED</div>
                </div>
              </div>
            </FadeInUp>

            {/* Bio Text */}
            <FadeInUp delay={0.15}>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9b8652] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>MEET YOUR ATTORNEY</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#b4b8a8] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Mario DiSalvo, Attorney At Law</h2>

              <div className="space-y-5 text-[#9a9d90] text-sm leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p>
                  Mario DiSalvo founded DiSalvo Law Office with a single mission: to provide the people of Fresno and the Central Valley with the aggressive, personalized criminal defense they deserve. With over 20 years of experience in California's courts, Attorney DiSalvo has built a reputation as a tenacious advocate who never backs down from a fight.
                </p>
                <p>
                  Attorney DiSalvo understands that a criminal charge is not just a legal matter — it is a threat to your freedom, your family, your career, and your future. That is why he approaches every case with the same intensity and dedication, whether you are facing a misdemeanor or a serious felony.
                </p>
                <p>
                  From DUI defense to violent crimes, from drug charges to domestic violence allegations, Mario DiSalvo has the courtroom experience and legal knowledge to build the strongest possible defense for your case. He personally handles every client's matter — you will never be handed off to a junior associate or paralegal.
                </p>
                <p>
                  When you call DiSalvo Law Office, you reach Mario DiSalvo directly. He is available 24 hours a day, 7 days a week, because he knows that legal emergencies don't happen on a 9-to-5 schedule. Your first consultation is always free, and flexible payment plans are available to ensure that quality legal representation is accessible to everyone.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "20+ years of criminal defense experience in California",
                  "Admitted to the California State Bar",
                  "Fresno County Superior Court — extensive trial experience",
                  "All misdemeanors and felonies handled",
                  "Direct attorney access — 24/7 availability",
                  "Free initial consultation — no obligation",
                  "Flexible, affordable payment plans",
                  "Serving Fresno, Clovis, Madera, Visalia, and surrounding areas",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#b4b8a8]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <CheckCircle2 className="w-4 h-4 text-[#b04a22] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/pg/contact" className="btn-primary text-xs px-7 py-3.5">
                SCHEDULE A FREE CONSULTATION
              </Link>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Why Hire a Private Attorney */}
      <section className="py-20" style={{ backgroundColor: "#1c1a17" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9b8652] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>WHY PRIVATE COUNSEL</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#b4b8a8] mb-10 max-w-2xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Hire a Private Criminal Defense Attorney?
            </h2>
          </FadeInUp>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Dedicated Attention",
                body: "Public defenders carry enormous caseloads — sometimes hundreds of cases at once. When you hire Mario DiSalvo, you get an attorney who knows your case inside and out and has the time to build a real defense strategy.",
              },
              {
                title: "Proactive Defense",
                body: "A private attorney can begin investigating your case immediately — before charges are even filed. Early intervention can mean the difference between a dismissed case and a conviction.",
              },
              {
                title: "Direct Communication",
                body: "You will always be able to reach Attorney DiSalvo directly. No voicemail black holes, no waiting weeks for a callback. He is available 24/7 because your case matters.",
              },
            ].map((item, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="p-7 h-full shadow-sm" style={{ backgroundColor: "#000000", border: "1px solid #2a2723" }}>
                  <div className="w-8 h-1 bg-[#b04a22] mb-4" />
                  <h3 className="text-lg font-bold text-[#b4b8a8] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                  <p className="text-[#9a9d90] text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{item.body}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
}
