// DiSalvo Law Office — FadeInUp scroll-triggered animation wrapper
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function FadeInUp({ children, delay = 0, className = "", once = true }: FadeInUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as any }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
