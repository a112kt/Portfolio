"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SiNextdotjs, SiReact, SiRedux, SiTailwindcss } from "react-icons/si";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { Reveal, staggerContainer, staggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

const chips = [
  { Icon: SiReact, label: "React", className: "left-[-6%] top-[6%]", delay: 0 },
  { Icon: SiNextdotjs, label: "Next.js", className: "right-[-4%] top-[30%]", delay: 0.6 },
  { Icon: SiTailwindcss, label: "Tailwind", className: "left-[-4%] bottom-[24%]", delay: 1.1 },
  { Icon: SiRedux, label: "Redux", className: "right-[8%] bottom-[4%]", delay: 1.6 },
];

const focus = [
  { title: "Performance", text: "Fast, smooth interfaces users actually enjoy." },
  { title: "Clean code", text: "Reusable components and maintainable architecture." },
  { title: "Responsive", text: "Pixel-consistent across every screen size." },
];

export function About() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden py-24 md:py-32" aria-label="About me">
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[130px]" aria-hidden="true" />
      <div className="container-shell grid items-center gap-16 lg:grid-cols-2">
        {/* Visual */}
        <Reveal className="relative order-1 mx-auto w-full max-w-md lg:order-none">
          <motion.div
            style={reduced ? undefined : { y }}
            className="relative"
          >
            <div className="gradient-border relative aspect-square w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/images/ashrakat.jpg"
                alt={`Portrait of ${site.name}`}
                width={800}
                height={800}
                sizes="(max-width: 768px) 90vw, 480px"
                className="h-full w-full object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl glass px-4 py-3">
                <div>
                  <p className="font-display text-sm font-semibold text-ink">{site.name}</p>
                  <p className="text-xs text-muted">{site.title}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-medium text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                  Open to work
                </span>
              </div>
            </div>

            {/* Floating chips */}
            {chips.map(({ Icon, label, className, delay }) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + delay * 0.15, duration: 0.5 }}
                className={`absolute ${className} inline-flex items-center gap-2 rounded-full border border-line bg-abyss/80 px-3.5 py-2 text-xs font-medium text-ink backdrop-blur-xl shadow-[0_14px_36px_-14px_rgba(0,0,0,0.8)]`}
                style={{ animation: `float ${7 + delay * 1.4}s ease-in-out ${delay}s infinite` }}
              >
                <Icon className="text-accent" size={16} />
                {label}
              </motion.span>
            ))}
          </motion.div>
        </Reveal>

        {/* Content */}
        <div className="order-2 lg:order-none">
          <SectionHeading
            align="left"
            eyebrow="About Me"
            title="Building interfaces that"
            accent="feel effortless"
          />

          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              I&rsquo;m a <span className="font-semibold text-ink">Frontend Developer</span> and{" "}
              <span className="font-semibold text-ink">Mobile Application Developer</span> with hands-on
              experience building responsive web applications and React Native mobile applications.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              I enjoy creating <span className="font-semibold text-ink">clean, reusable, and scalable interfaces</span>{" "}
              while focusing on performance, usability, and maintainable component-based architecture.
            </p>
          </Reveal>

          <motion.div
            variants={staggerContainer(0.1, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {focus.map((f) => (
              <motion.div
                key={f.title}
                variants={staggerItem(16)}
                className="rounded-2xl card-surface p-4 transition-colors hover:border-accent/40"
              >
                <p className="font-display text-sm font-semibold text-ink">{f.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{f.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.2} className="mt-9">
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-center gap-3">
                <FiMapPin className="shrink-0 text-accent" />
                <span>{site.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-4 w-4 shrink-0 place-items-center text-accent">@</span>
                <a href={`mailto:${site.email}`} className="link-underline text-muted hover:text-ink">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-4 w-4 shrink-0 place-items-center text-accent">
                  <FiArrowUpRight size={15} />
                </span>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-muted hover:text-ink"
                >
                  github.com/{site.github.split("/").pop()}
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}