// DiSalvo Law Office — 404 Not Found Page
// Design: Light Theme
import { Link } from "wouter";
import { Scale } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <Scale className="w-10 h-10 text-[#cc1f1f] mb-6" />
      <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gray-500 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
        ERROR 404
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-[#1e2a3a] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        Page Not Found
      </h1>
      <p className="text-gray-600 text-base max-w-md mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/pg/home" className="btn-primary text-sm px-7 py-3.5">
          GO HOME
        </Link>
        <Link href="/pg/contact" className="btn-outline-navy text-sm px-7 py-3.5">
          CONTACT US
        </Link>
      </div>
    </div>
  );
}
