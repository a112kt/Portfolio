"use client";

import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { education } from "@/data/education";
import { staggerContainer, staggerItem } from "@/components/Reveal";

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-24 md:py-32" aria-label="Education and training">
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-electric/10 blur-[140px]" aria-hidden="true" />

      <div className="container-shell">
        <SectionHeading
          eyebrow="Education"
          title="Learning"
          accent="never stops"
          description="Engineering foundations, dedicated bootcamps, and focused courses that shaped how I build software."
        />

        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {education.map((item, i) => (
            <motion.article
              key={`${item.title}-${i}`}
              variants={staggerItem(22)}
              className="group relative flex flex-col rounded-2xl card-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_24px_60px_-24px_rgba(34,211,238,0.3)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-electric/20 text-accent transition-transform duration-300 group-hover:scale-110">
                  <LuGraduationCap size={22} />
                </span>
                <span className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
                  {item.tag}
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm font-medium text-muted">{item.subtitle}</p>

              {item.period ? (
                <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent/80">
                  <FiCalendar size={13} />
                  {item.period}
                </p>
              ) : (
                <span className="mt-3 text-xs text-muted/60">&nbsp;</span>
              )}

              <div className="mt-auto pt-4">
                <div className="h-px w-full bg-line" />
              </div>
            </motion.article>
          ))}

          <Reveal className="sm:col-span-2 lg:col-span-1" delay={0.15}>
            <div className="flex h-full flex-col justify-center rounded-2xl gradient-border p-6">
              <p className="font-display text-lg font-semibold text-ink">Continuous learner</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                I keep sharpening my React, Next.js, and React Native skills — and exploring what&rsquo;s
                new in the frontend ecosystem.
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Always shipping <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
              </span>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}