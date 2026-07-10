// DiSalvo Law Office — FAQ Accordion
// Design: Light Theme — white/cream background, navy text

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import FadeInUp from "./FadeInUp";

interface FAQ {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  heading?: string;
}

export default function FAQAccordion({ faqs, heading = "Frequently Asked Questions" }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-20" style={{ backgroundColor: "#1c1a17" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9b8652] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#b4b8a8] mb-12 max-w-2xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{heading}</h2>
        </FadeInUp>

        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <FadeInUp key={i} delay={i * 0.04}>
              <div className="border-b border-[#2a2723]">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                >
                  <span
                    className="text-base font-medium text-[#b4b8a8] group-hover:text-[#b04a22] transition-colors pr-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center text-[#b04a22]">
                    {openIdx === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIdx === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p
                        className="text-[#9a9d90] text-sm leading-relaxed pb-5"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
