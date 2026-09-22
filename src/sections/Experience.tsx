"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { Reveal, staggerContainer, staggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  const reduced = useReducedMotion();
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start 85%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const lineWidth = useTransform(scaleY, (v) => `${v * 100}%`);

  return (
    <section id="experience" className="relative overflow-hidden py-24 md:py-32" aria-label="Experience">
      <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-[140px]" aria-hidden="true" />

      <div className="container-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've"
          accent="applied my craft"
          description="Building real products for real users — from client briefs to deployed, responsive interfaces."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Track */}
          <div className="absolute left-5 top-0 h-full w-px rounded-full bg-line sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true">
            <motion.div
              style={{ height: lineWidth }}
              className="w-full rounded-full bg-gradient-to-b from-accent via-accent-soft to-electric shadow-[0_0_16px_rgba(34,211,238,0.6)]"
            />
          </div>

          <ol className="space-y-10">
            {experience.map((item) => (
              <li key={item.role} className="relative">
                <div className="absolute left-5 top-6 -translate-x-1/2 sm:left-1/2" aria-hidden="true">
                  <span className="relative grid h-9 w-9 place-items-center rounded-full border border-accent/40 bg-abyss">
                    <span className="absolute inset-0 rounded-full bg-accent/20 blur-md" />
                    <FiBriefcase size={15} className="relative text-accent" />
                  </span>
                </div>

                <motion.div
                  initial={reduced ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="ml-12 sm:ml-0 sm:pl-[calc(50%+3rem)]"
                >
                  <div className="rounded-2xl card-surface p-6 transition-colors duration-300 hover:border-accent/40 md:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-semibold text-ink">{item.role}</h3>
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted/80">
                      {item.type}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted">{item.summary}</p>

                    <div className="mt-5 rounded-xl border border-accent/20 bg-accent/[0.06] px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Main project
                      </p>
                      <p className="font-display text-base font-semibold text-ink">
                        {item.mainProject}
                      </p>
                    </div>

                    <motion.div
                      variants={staggerContainer(0.06, 0.15)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="mt-5 flex flex-wrap gap-2"
                    >
                      {item.tech.map((t) => (
                        <motion.span
                          key={t}
                          variants={staggerItem(10)}
                          className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-12 text-center" delay={0.1}>
          <p className="text-sm text-muted">
            Open to{" "}
            <a href="#contact" className="font-semibold text-accent link-underline">
              freelance projects
            </a>{" "}
            and full-time frontend opportunities.
          </p>
        </Reveal>
      </div>
    </section>
  );
}