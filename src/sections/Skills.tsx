"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { staggerContainer, staggerItem } from "@/components/Reveal";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 md:py-32" aria-label="Skills">
      <div className="absolute -right-40 top-0 h-[26rem] w-[26rem] rounded-full bg-electric/10 blur-[140px]" aria-hidden="true" />
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I"
          accent="work with"
          description="The tools and frameworks I use to ship modern, production-ready web and mobile interfaces."
        />

        <motion.div
          variants={staggerContainer(0.07, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={staggerItem(22)}
              className="group relative rounded-3xl card-surface p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_24px_60px_-24px_rgba(34,211,238,0.35)]"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(420px circle at 50% 0%, rgba(34,211,238,0.10), transparent 60%)",
                }}
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-base font-semibold text-ink">{category.title}</h3>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-muted/80">
                    {category.skills.length}
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted">{category.caption}</p>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group/skill relative flex items-center gap-2 rounded-xl border border-line/70 bg-white/[0.03] px-2.5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-accent/10"
                        title={skill.basic ? `${skill.name} — Basic Understanding` : skill.name}
                      >
                        <Icon
                          size={17}
                          className="shrink-0 text-muted transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:text-accent"
                        />
                        <span className="truncate text-xs font-medium text-ink/85 transition-colors duration-300 group-hover/skill:text-ink">
                          {skill.name}
                        </span>
                        {skill.basic ? (
                          <span className="absolute -top-2 -right-1 rounded-full bg-accent/90 px-1.5 py-px text-[9px] font-semibold uppercase tracking-wide text-night">
                            Basic
                          </span>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 text-center text-xs text-muted/70"
        >
          Node.js &amp; Express.js are shown at a{" "}
          <span className="font-semibold text-muted">Basic Understanding</span> level.
        </motion.p>
      </div>
    </section>
  );
}