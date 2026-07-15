import { motion, useReducedMotion } from "motion/react";
import type { Locale, SectionData } from "../types";
import { getLocalizedText } from "../types";
import WorkCard from "./WorkCard";

type PortfolioSectionProps = {
  section: SectionData;
  locale: Locale;
  onOpenLightbox: (images: string[], startIndex: number, title: string) => void;
};

export default function PortfolioSection({
  section,
  locale,
  onOpenLightbox,
}: PortfolioSectionProps) {
  const sectionTitle = getLocalizedText(locale, section.title);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={section.id}
      className="scroll-mt-24"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55 }}
    >
      <motion.div
        className="mb-8 md:mb-10"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, delay: 0.05 }}
      >
        <p className="mb-2 text-xs uppercase tracking-[0.24em] text-zinc-400 dark:text-white/30">
          Projects
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
          {sectionTitle}
        </h2>
      </motion.div>

      <div className="space-y-6">
        {section.items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : index * 0.06 }}
          >
            <WorkCard
              item={item}
              locale={locale}
              onOpenLightbox={onOpenLightbox}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
