// DiSalvo Law Office — Terms and Conditions Page
// Design: Light Theme
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FadeInUp from "@/components/FadeInUp";
import { SITE } from "@/lib/siteData";

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <Navbar />
      <PageHero
        h1="Terms and Conditions"
        breadcrumbs={[{ label: "Terms & Conditions" }]}
        showCTA={false}
      />
      <section className="py-16" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div style={{ fontFamily: "'Inter', sans-serif", color: "#8a8d80", lineHeight: "1.8" }}>
              <p className="text-[#8a8d80] text-sm mb-8">Last updated: January 1, 2025</p>

              <h2 className="text-[#b4b8a8] text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>1. Acceptance of Terms</h2>
              <p className="mb-6 text-sm">By accessing and using the DiSalvo Law Office website (www.disalvo-law.com), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.</p>

              <h2 className="text-[#b4b8a8] text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>2. No Attorney-Client Relationship</h2>
              <p className="mb-6 text-sm">The information provided on this website is for general informational purposes only and does not constitute legal advice. Viewing this website, contacting us through the website, or submitting a contact form does not create an attorney-client relationship. An attorney-client relationship is only formed when you have signed a written retainer agreement with DiSalvo Law Office.</p>

              <h2 className="text-[#b4b8a8] text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>3. No Legal Advice</h2>
              <p className="mb-6 text-sm">Nothing on this website should be taken as legal advice for any individual case or situation. The information provided is general in nature and may not apply to your specific circumstances. You should consult with a qualified attorney regarding your particular legal matter.</p>

              <h2 className="text-[#b4b8a8] text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>4. Past Results</h2>
              <p className="mb-6 text-sm">Any case results or testimonials described on this website are not a guarantee or prediction of the outcome of any future case. Every case is different, and results depend on the specific facts and circumstances of each matter.</p>

              <h2 className="text-[#b4b8a8] text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>5. Intellectual Property</h2>
              <p className="mb-6 text-sm">All content on this website, including text, graphics, logos, and images, is the property of DiSalvo Law Office and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>

              <h2 className="text-[#b4b8a8] text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>6. Limitation of Liability</h2>
              <p className="mb-6 text-sm">DiSalvo Law Office shall not be liable for any damages arising from your use of or inability to use this website, or from any errors or omissions in the content of this website.</p>

              <h2 className="text-[#b4b8a8] text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>7. Governing Law</h2>
              <p className="mb-6 text-sm">These Terms and Conditions are governed by the laws of the State of California. Any disputes arising from the use of this website shall be resolved in the courts of Fresno County, California.</p>

              <h2 className="text-[#b4b8a8] text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>8. Contact Information</h2>
              <p className="mb-6 text-sm">
                DiSalvo Law Office<br />
                {SITE.fullAddress}<br />
                Phone: {SITE.phone}<br />
                Email: {SITE.email}
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>
      <Footer />
    </div>
  );
}
