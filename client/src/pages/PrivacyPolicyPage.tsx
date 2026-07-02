// DiSalvo Law Office — Privacy Policy Page
// Design: Light Theme
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FadeInUp from "@/components/FadeInUp";
import { SITE } from "@/lib/siteData";

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: "#faf8f5", minHeight: "100vh" }}>
      <Navbar />
      <PageHero
        h1="Privacy Policy"
        breadcrumbs={[{ label: "Privacy Policy" }]}
        showCTA={false}
      />
      <section className="py-16" style={{ backgroundColor: "#faf8f5" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="prose max-w-none" style={{ fontFamily: "'Inter', sans-serif", color: "#4b5563", lineHeight: "1.8" }}>
              <p className="text-gray-500 text-sm mb-8">Last updated: January 1, 2025</p>

              <h2 className="text-[#1e2a3a] text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>1. Information We Collect</h2>
              <p className="mb-6 text-sm">DiSalvo Law Office ("we," "us," or "our") collects information you provide directly to us, such as when you fill out a contact form, call our office, or send us an email. This may include your name, phone number, email address, and information about your legal matter.</p>

              <h2 className="text-[#1e2a3a] text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>2. How We Use Your Information</h2>
              <p className="mb-6 text-sm">We use the information we collect to respond to your inquiries, provide legal services, communicate with you about your case, and improve our website. We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as required by law.</p>

              <h2 className="text-[#1e2a3a] text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>3. Attorney-Client Privilege</h2>
              <p className="mb-6 text-sm">Information you share with us through our contact form or by phone may be protected by attorney-client privilege once an attorney-client relationship is established. However, submitting a contact form or calling our office does not by itself create an attorney-client relationship.</p>

              <h2 className="text-[#1e2a3a] text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>4. Cookies and Analytics</h2>
              <p className="mb-6 text-sm">Our website may use cookies and similar tracking technologies to analyze website traffic and improve your browsing experience. We use Google Analytics to understand how visitors interact with our site. You can opt out of Google Analytics by installing the Google Analytics opt-out browser add-on.</p>

              <h2 className="text-[#1e2a3a] text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>5. Data Security</h2>
              <p className="mb-6 text-sm">We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>

              <h2 className="text-[#1e2a3a] text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>6. Third-Party Links</h2>
              <p className="mb-6 text-sm">Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>

              <h2 className="text-[#1e2a3a] text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>7. Contact Us</h2>
              <p className="mb-6 text-sm">If you have questions about this Privacy Policy, please contact us at:<br /><br />
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
