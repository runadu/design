import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

import type { ThemeMode } from "../types";

type SiteMotionBackgroundProps = {
  theme: ThemeMode;
};

export default function SiteMotionBackground({
  theme,
}: SiteMotionBackgroundProps) {
  const shouldReduceMotion = useReducedMotion();
  const isDark = theme === "dark";
  const [canTrackPointer, setCanTrackPointer] = useState(false);

  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);

  const progressX = useSpring(rawX, { stiffness: 110, damping: 22, mass: 0.35 });
  const progressY = useSpring(rawY, { stiffness: 110, damping: 24, mass: 0.4 });

  const gridOpacity = useTransform(progressY, [0, 1], [0.3, 0.55]);
  const glowX = useTransform(progressX, [0, 1], ["18%", "82%"]);
  const glowY = useTransform(progressY, [0, 1], ["18%", "82%"]);
  const pointLeft = useTransform(rawX, (value) => `${value * 100}%`);
  const pointTop = useTransform(rawY, (value) => `${value * 100}%`);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const updatePointerMode = () => {
      setCanTrackPointer(mediaQuery.matches);
    };

    updatePointerMode();
    mediaQuery.addEventListener("change", updatePointerMode);

    return () => {
      mediaQuery.removeEventListener("change", updatePointerMode);
    };
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || !canTrackPointer) {
      rawX.set(0.5);
      rawY.set(0.5);
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      rawX.set(Math.min(1, Math.max(0, event.clientX / window.innerWidth)));
      rawY.set(Math.min(1, Math.max(0, event.clientY / window.innerHeight)));
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [canTrackPointer, rawX, rawY, shouldReduceMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[radial-gradient(circle_at_top_right,rgba(175,95,60,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_26%)]"
            : "bg-[radial-gradient(circle_at_top_right,rgba(175,95,60,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(175,95,60,0.04),transparent_28%)]"
        }`}
      />

      <div
        className="absolute inset-0 md:hidden"
        style={{
          opacity: isDark ? 0.42 : 0.34,
          backgroundImage: `
            linear-gradient(to right, ${isDark ? "rgba(255,255,255,0.035)" : "rgba(24,24,27,0.035)"} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? "rgba(255,255,255,0.035)" : "rgba(24,24,27,0.035)"} 1px, transparent 1px),
            linear-gradient(to right, ${isDark ? "rgba(255,255,255,0.06)" : "rgba(24,24,27,0.05)"} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? "rgba(255,255,255,0.06)" : "rgba(24,24,27,0.05)"} 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px, 24px 24px, 96px 96px, 96px 96px",
          backgroundPosition: "-1px -1px, -1px -1px, -1px -1px, -1px -1px",
        }}
      />

      <motion.div
        style={{ opacity: gridOpacity }}
        className="absolute inset-0 hidden md:block"
      >
        <motion.div
          style={{
            left: glowX,
            top: glowY,
            willChange: "transform",
          }}
          className={`absolute h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
            isDark ? "bg-[#AF5F3C]/10" : "bg-[#AF5F3C]/8"
          }`}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${isDark ? "rgba(255,255,255,0.05)" : "rgba(24,24,27,0.05)"} 1px, transparent 1px),
              linear-gradient(to bottom, ${isDark ? "rgba(255,255,255,0.05)" : "rgba(24,24,27,0.05)"} 1px, transparent 1px),
              linear-gradient(to right, ${isDark ? "rgba(255,255,255,0.08)" : "rgba(24,24,27,0.08)"} 1px, transparent 1px),
              linear-gradient(to bottom, ${isDark ? "rgba(255,255,255,0.08)" : "rgba(24,24,27,0.08)"} 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px, 28px 28px, 112px 112px, 112px 112px",
            backgroundPosition: "-1px -1px, -1px -1px, -1px -1px, -1px -1px",
          }}
        />

        <motion.div
          style={{ top: pointTop }}
          className="absolute left-0 right-0 h-px -translate-y-1/2 bg-[#AF5F3C]"
        />

        <motion.div
          style={{ left: pointLeft }}
          className="absolute top-0 bottom-0 w-px -translate-x-1/2 bg-[#AF5F3C]"
        />

        <motion.div
          style={{
            left: pointLeft,
            top: pointTop,
          }}
          className="absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#AF5F3C]"
        />
      </motion.div>
    </div>
  );
}
