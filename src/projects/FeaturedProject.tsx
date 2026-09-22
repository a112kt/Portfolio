"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiArrowUpRight, FiBell, FiGithub, FiHeart, FiMessageCircle, FiShoppingBag } from "react-icons/fi";
import { featuredProject } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

const featureChips = [
  { label: "Wishlist", Icon: FiHeart, className: "left-0 top-[16%]", delay: 0 },
  { label: "Cart", Icon: FiShoppingBag, className: "right-0 top-[30%]", delay: 0.8 },
  { label: "Chat", Icon: FiMessageCircle, className: "left-0 bottom-[18%]", delay: 1.4 },
  { label: "Notifications", Icon: FiBell, className: "right-0 bottom-[34%]", delay: 2 },
];

export function FeaturedProject() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  const floatY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} className="relative overflow-hidden rounded-[2rem] card-surface p-6 md:p-10 lg:p-14" aria-label={`Featured project: ${featuredProject.title}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(800px circle at 15% 0%, rgba(34,211,238,0.10), transparent 55%), radial-gradient(600px circle at 100% 100%, rgba(59,130,246,0.12), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Phone mockup */}
        <Reveal className="order-1 lg:order-none">
          <motion.div
            style={reduced ? undefined : { rotate, y: floatY }}
            className="relative mx-auto w-[240px] sm:w-[270px]"
          >
            {/* Glow */}
            <div className="absolute -inset-8 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />

            {/* Phone */}
            <div className="gradient-border relative aspect-[9/19] w-full overflow-hidden rounded-[2.6rem] bg-night shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
              <Image
                src={featuredProject.image}
                alt="Alluvo social commerce app running on a mobile device"
                fill
                sizes="(max-width: 640px) 240px, 270px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-transparent to-night/20" />

              {/* Dynamic island */}
              <div className="absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-night/80 backdrop-blur-md" aria-hidden="true" />

              {/* Status bar */}
              <div className="absolute inset-x-6 top-5 flex items-center justify-between text-[10px] font-medium text-white/90" aria-hidden="true">
                <span>9:41</span>
                <span>●●● ▮▮</span>
              </div>

              {/* Fake app overlay */}
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-night/55 p-3 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent to-electric text-sm font-bold text-night">
                    A
                  </span>
                  <div className="flex-1">
                    <p className="truncate text-xs font-semibold text-white">Alluvo Studio</p>
                    <p className="text-[10px] text-white/70">Shop the reel · Live now</p>
                  </div>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10">
                    <FiShoppingBag size={13} className="text-accent" />
                  </span>
                </div>
                <div className="mt-3 h-1.5 w-3/4 rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-accent to-electric" />
                </div>
              </div>
            </div>

            {/* Floating feature chips */}
            {featureChips.map(({ label, Icon, className, delay }, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + delay * 0.12, duration: 0.5 }}
                style={{ animation: `float ${6.5 + i * 1.1}s ease-in-out ${delay}s infinite` }}
                className={`absolute ${className} inline-flex items-center gap-1.5 rounded-full border border-line bg-abyss/85 px-3 py-1.5 text-[11px] font-medium text-ink backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]`}
              >
                <Icon size={13} className="text-accent" />
                {label}
              </motion.span>
            ))}
          </motion.div>
        </Reveal>

        {/* Content */}
        <div className="order-2 lg:order-none">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              Featured Project
            </span>
            <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Alluvo
              <span className="mt-2 block text-lg font-medium text-muted sm:text-xl">
                Social Commerce Mobile Application
              </span>
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              {featuredProject.description}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted/80">
              Tech Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {featuredProject.tech.map((t) => (
                <span key={t} className="rounded-full border border-line bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-ink">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted/80">
              Key Features
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {featuredProject.tags?.map((tag) => (
                <li key={tag} className="flex items-center gap-2 text-xs text-muted md:text-sm">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.28} className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <a href={featuredProject.demo || featuredProject.github || "#projects"} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Project <FiArrowUpRight size={17} />
              </a>
              <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <FiGithub size={17} /> GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}