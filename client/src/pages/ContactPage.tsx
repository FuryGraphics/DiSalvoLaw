// DiSalvo Law Office — Contact Page (/pg/contact)
// Design: Light Theme — NO chat widget on this page
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FadeInUp from "@/components/FadeInUp";
import { SITE } from "@/lib/siteData";

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <Navbar />
      <PageHero
        h1="Contact DiSalvo Law Office"
        subtext="Available 24/7 for criminal defense emergencies. Your first consultation is always free."
        breadcrumbs={[{ label: "Contact" }]}
        showCTA={false}
      />

      <section className="py-20" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <FadeInUp>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9b8652] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>GET IN TOUCH</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#b4b8a8] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>We're Here When You Need Us Most</h2>
              <p className="text-[#9a9d90] text-sm leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                If you or a loved one has been arrested or is facing criminal charges in Fresno or the Central Valley, do not wait. Contact DiSalvo Law Office immediately for a free, confidential consultation.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { icon: <Phone className="w-5 h-5 text-[#b04a22]" />, label: "Phone", value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
                  { icon: <Mail className="w-5 h-5 text-[#b04a22]" />, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                  { icon: <MapPin className="w-5 h-5 text-[#b04a22]" />, label: "Address", value: SITE.fullAddress, href: "#map" },
                  { icon: <Clock className="w-5 h-5 text-[#b04a22]" />, label: "Hours", value: "Open 24 Hours — 7 Days a Week", href: undefined },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0 shadow-sm" style={{ backgroundColor: "#1c1a17", border: "1px solid #2a2723" }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-[#8a8d80] uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#b4b8a8] text-sm font-medium hover:text-[#b04a22] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>{item.value}</a>
                      ) : (
                        <p className="text-[#b4b8a8] text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps Embed */}
              <div id="map" className="overflow-hidden shadow-sm" style={{ border: "1px solid #2a2723", height: "280px" }}>
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

            {/* Right: LeadConnector Form */}
            <FadeInUp delay={0.15}>
              <div className="p-8 shadow-sm" style={{ backgroundColor: "#1c1a17", border: "1px solid #2a2723" }}>
                <h3 className="text-xl font-bold text-[#b4b8a8] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Send Us a Message</h3>
                <p className="text-[#8a8d80] text-sm mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>All information is kept strictly confidential.</p>

                {/* LeadConnector Embedded Form */}
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/iqPXCJn6JiSQfDQue6X5"
                  style={{ width: "100%", height: "503px", border: "none", borderRadius: "10px" }}
                  id="inline-iqPXCJn6JiSQfDQue6X5"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Website Form (DiSalvo Law Office)"
                  data-height="503"
                  data-layout-iframe-id="inline-iqPXCJn6JiSQfDQue6X5"
                  data-form-id="iqPXCJn6JiSQfDQue6X5"
                  title="Website Form (DiSalvo Law Office)"
                />

                <p className="text-[#8a8d80] text-[11px] text-center mt-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Submitting this form does not create an attorney-client relationship.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
