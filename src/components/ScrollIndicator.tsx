import { motion, useScroll, useSpring, useTransform } from "motion/react";

import type { ThemeMode } from "../types";

type ScrollIndicatorProps = {
  theme: ThemeMode;
};

export default function ScrollIndicator({ theme }: ScrollIndicatorProps) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  const thumbTop = useTransform(progress, [0, 1], ["1.5%", "98.5%"]);
  const isDark = theme === "dark";
  const dashColor = isDark ? "rgba(255,255,255,0.18)" : "rgba(24,24,27,0.16)";

  return (
    <div className="pointer-events-none fixed right-4 top-1/2 z-40 hidden w-6 -translate-y-1/2 items-center justify-center md:flex">
      <div className="relative h-[55vh] max-h-60 min-h-20 w-full">
        <div
          className="absolute inset-y-0 left-1/2 w-[7px] -translate-x-1/2"
          style={{
            backgroundImage: `repeating-linear-gradient(to bottom, transparent 0 11px, ${dashColor} 11px 14px, transparent 14px 28px)`,
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        />

        <motion.div
          style={{ top: thumbTop }}
          className={`absolute left-1/2 h-[3px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full ${
            isDark ? "bg-white/82" : "bg-zinc-900/70"
          }`}
        />
      </div>
    </div>
  );
}
