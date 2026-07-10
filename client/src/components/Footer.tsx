// DiSalvo Law Office — Footer
// Design: Light Theme — navy footer (contrast), red/gold accents

import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, PRACTICE_AREAS, ADDITIONAL_PRACTICE_AREAS, CITIES } from "@/lib/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#1c1a17", fontFamily: "'Inter', sans-serif" }}>
      {/* Main Footer Grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Firm Info */}
          <div className="lg:col-span-1">
            <Link href="/pg/home" className="flex items-center gap-2 mb-4">
              <img src="/Logos%20and%20images/logo%20without%20text.png" alt="DiSalvo Law crest" className="w-9 h-9 object-contain" />
              <span className="font-bold text-[#b4b8a8] text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
                DiSalvo <span className="text-[#b04a22]">Law</span>
              </span>
            </Link>
            <p className="text-[#a8ac9c] text-sm leading-relaxed mb-5">
              A dedicated criminal defense firm serving Fresno and the Central Valley. Attorney Mario DiSalvo fights aggressively for your rights.
            </p>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="text-[#b4b8a8] font-bold text-lg hover:text-[#b04a22] transition-colors block mb-2"
            >
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="text-[#a8ac9c] text-sm hover:text-[#b4b8a8] transition-colors block"
            >
              {SITE.email}
            </a>
          </div>

          {/* Col 2: Law Specialties */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#b89c63] mb-4">
              Law Specialties
            </h3>
            <ul className="space-y-2">
              {PRACTICE_AREAS.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/pg/${p.slug}`}
                    className="text-[#a8ac9c] text-sm hover:text-[#b4b8a8] transition-colors"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
              {ADDITIONAL_PRACTICE_AREAS.map((p) => (
                <li key={p.anchor}>
                  <Link
                    href={`/pg/criminal-defense-fresno#${p.anchor}`}
                    className="text-[#a8ac9c] text-sm hover:text-[#b4b8a8] transition-colors"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#b89c63] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link href="/pg/home" className="text-[#a8ac9c] text-sm hover:text-[#b4b8a8] transition-colors">Home</Link></li>
              <li><Link href="/pg/about" className="text-[#a8ac9c] text-sm hover:text-[#b4b8a8] transition-colors">About the Firm</Link></li>
              <li><Link href="/pg/home#reviews" className="text-[#a8ac9c] text-sm hover:text-[#b4b8a8] transition-colors">Client Reviews</Link></li>
              <li><Link href="/pg/contact" className="text-[#a8ac9c] text-sm hover:text-[#b4b8a8] transition-colors">Contact Us</Link></li>
              <li><Link href="/pg/privacy-policy" className="text-[#a8ac9c] text-sm hover:text-[#b4b8a8] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/pg/terms-and-conditions" className="text-[#a8ac9c] text-sm hover:text-[#b4b8a8] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Col 4: Areas We Serve */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#b89c63] mb-4">
              Areas We Serve
            </h3>
            <ul className="space-y-2">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/pg/${c.slug}`}
                    className="text-[#a8ac9c] text-sm hover:text-[#b4b8a8] transition-colors"
                  >
                    {c.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Office */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#b89c63] mb-4">
              Offices
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-[#b4b8a8] font-semibold text-sm mb-1">FRESNO</p>
                <div className="flex items-start gap-2 text-[#a8ac9c] text-sm">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#b04a22]" />
                  <span>{SITE.address}<br />{SITE.city}, {SITE.state} {SITE.zip}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#a8ac9c] text-sm">
                <Phone className="w-3.5 h-3.5 shrink-0 text-[#b04a22]" />
                <a href={`tel:${SITE.phoneRaw}`} className="hover:text-[#b4b8a8] transition-colors">{SITE.phone}</a>
              </div>
              <div className="flex items-center gap-2 text-[#a8ac9c] text-sm">
                <Mail className="w-3.5 h-3.5 shrink-0 text-[#b04a22]" />
                <a href={`mailto:${SITE.email}`} className="hover:text-[#b4b8a8] transition-colors">{SITE.email}</a>
              </div>
              <div className="mt-3 pt-3 border-t border-[#b4b8a8]/10">
                <p className="text-[#b89c63] text-xs font-semibold tracking-wide">Open 24 Hours</p>
                <p className="text-[#7d8072] text-xs mt-0.5">Available for emergencies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#b4b8a8]/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#7d8072] text-xs">
              © {year} DiSalvo Law Office. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/pg/privacy-policy" className="text-[#7d8072] text-xs hover:text-[#b4b8a8] transition-colors">Privacy Policy</Link>
              <span className="text-[#9a9d90]">·</span>
              <Link href="/pg/terms-and-conditions" className="text-[#7d8072] text-xs hover:text-[#b4b8a8] transition-colors">Terms & Conditions</Link>
            </div>
          </div>
          <p className="text-[#8a8d80] text-[11px] mt-4 leading-relaxed">
            The information on this website is for general informational purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. Receipt or viewing of this information does not constitute an attorney-client relationship. Past results do not guarantee future outcomes. DiSalvo Law Office is a California law corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}
