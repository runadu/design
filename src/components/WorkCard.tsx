import { motion, useReducedMotion } from "motion/react";
import { ExternalLink } from "lucide-react";
import type { Locale, WorkItem } from "../types";
import { getLocalizedArray, getLocalizedText } from "../types";

type WorkCardProps = {
  item: WorkItem;
  locale: Locale;
  onOpenLightbox: (images: string[], startIndex: number, title: string) => void;
};

export default function WorkCard({
  item,
  locale,
  onOpenLightbox,
}: WorkCardProps) {
  const title = getLocalizedText(locale, item.title);
  const description = getLocalizedText(locale, item.description);
  const tags = getLocalizedArray(locale, item.tags);
  const note = getLocalizedText(locale, item.note);
  const shouldReduceMotion = useReducedMotion();

  const hasMedia = Boolean(item.video || (item.images?.length || 0) > 0);
  const multipleImages = (item.images?.length || 0) > 1;
  const singleImage = (item.images?.length || 0) === 1;

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="rounded-2xl border border-zinc-200/80 bg-white/70 p-6 transition 
    hover:border-[#AF5F3C]/25 hover:bg-[#AF5F3C]/6 md:p-8 
    dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/15 dark:hover:bg-white/[0.05]"
    >
      <div
        className={`grid gap-8 ${
          hasMedia
            ? "lg:grid-cols-[480px_1fr] xl:grid-cols-[580px_1fr] 2xl:grid-cols-[680px_1fr]"
            : ""
        }`}
      >
        <div className="space-y-5">
          <div className="space-y-3">
            {item.year && (
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400 dark:text-white/30">
                {item.year}
              </p>
            )}

            <h5 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              {title}
            </h5>

            {description && (
              <p className="max-w-[58ch] text-sm leading-7 text-zinc-600 dark:text-white/65">
                {description}
              </p>
            )}
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1 text-[12px] text-zinc-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/60"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          )}

          {note && (
            <p className="text-sm leading-6 text-zinc-500 dark:text-white/45">
              {note}
            </p>
          )}

          {item.links && item.links.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-1">
              {item.links.map((link) => (
                <motion.a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.03 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="
                    inline-flex items-center gap-2 rounded-full border 
                    border-zinc-200 bg-white text-zinc-800
                    dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100
                    px-4 py-2 text-sm font-medium transition
                    hover:border-[#AF5F3C]/90 hover:bg-[#AF5F3C]/90 hover:text-white
                    dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
                >
                  <span>{getLocalizedText(locale, link.label)}</span>
                  <ExternalLink size={16} />
                </motion.a>
              ))}
            </div>
          )}
        </div>

        <div className="m-auto space-y-4">
          {singleImage && item.images && (
            <motion.button
              type="button"
              onClick={() => onOpenLightbox(item.images!, 0, title)}
              whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden rounded-xl border border-zinc-200 text-left dark:border-white/10"
            >
              <motion.img
                src={item.images[0]}
                alt={title}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                transition={{ duration: 0.35 }}
                className="aspect-[16/9] w-full object-cover"
              />
            </motion.button>
          )}

          {multipleImages && item.images && (
            <div className="grid grid-cols-3 gap-3">
              {item.images.map((img, index) => (
                <motion.button
                  key={img}
                  type="button"
                  onClick={() => onOpenLightbox(item.images!, index, title)}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden rounded-xl border border-zinc-200 text-left dark:border-white/10"
                >
                  <motion.img
                    src={img}
                    alt={`${title} ${index + 1}`}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
                    transition={{ duration: 0.3 }}
                    className="aspect-square h-full w-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          )}

          {item.video && (
            <video
              controls
              className="w-full rounded-xl border border-zinc-200 dark:border-white/10"
            >
              <source src={item.video} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </motion.article>
  );
}
