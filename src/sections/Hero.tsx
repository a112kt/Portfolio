"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import {
  SiExpo,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { site } from "@/data/site";

const easing = [0.22, 1, 0.36, 1] as const;

const ROTATING = ["React.js", "Next.js", "React Native"];

const floatingIcons = [
  { Icon: SiReact, className: "left-[4%] top-[16%] text-cyan-300", size: 30, delay: 0 },
  { Icon: SiNextdotjs, className: "right-[8%] top-[12%] text-white", size: 34, delay: 0.8 },
  { Icon: SiTypescript, className: "left-[10%] bottom-[22%] text-sky-400", size: 26, delay: 1.6 },
  { Icon: SiRedux, className: "right-[6%] bottom-[28%] text-violet-400", size: 30, delay: 0.4 },
  { Icon: SiExpo, className: "left-[24%] top-[62%] text-white", size: 24, delay: 1.1 },
  { Icon: SiTailwindcss, className: "right-[20%] top-[48%] text-cyan-300", size: 24, delay: 2 },
];

const PARTICLES = [
  { left: "6%", bottom: "30%", size: 3, duration: 13, delay: 0 },
  { left: "18%", bottom: "14%", size: 2, duration: 16, delay: 2 },
  { left: "30%", bottom: "46%", size: 2.5, duration: 12, delay: 4 },
  { left: "44%", bottom: "20%", size: 3, duration: 18, delay: 1 },
  { left: "58%", bottom: "52%", size: 2, duration: 14, delay: 6 },
  { left: "70%", bottom: "26%", size: 2.5, duration: 17, delay: 3 },
  { left: "82%", bottom: "38%", size: 3, duration: 15, delay: 5 },
  { left: "91%", bottom: "16%", size: 2, duration: 12, delay: 7 },
  { left: "38%", bottom: "68%", size: 2, duration: 19, delay: 8 },
  { left: "64%", bottom: "74%", size: 2.5, duration: 16, delay: 2.5 },
  { left: "12%", bottom: "78%", size: 2, duration: 20, delay: 9 },
  { left: "88%", bottom: "60%", size: 2, duration: 13, delay: 4.5 },
];

function useParallax(maxX = 22, maxY = 16) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 });
  const tx = useTransform(sx, [-0.5, 0.5], [maxX, -maxX]);
  const ty = useTransform(sy, [-0.5, 0.5], [maxY, -maxY]);

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return { tx, ty, onMouseMove };
}

export function Hero() {
  const reduced = useReducedMotion();
  const { tx, ty, onMouseMove } = useParallax();
  const [rotating, setRotating] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setRotating((i) => (i + 1) % ROTATING.length), 2600);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16 md:pt-28"
      onMouseMove={onMouseMove}
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-grid mask-fade-x opacity-60" />
        <motion.div
          style={reduced ? undefined : { x: tx, y: ty }}
          className="absolute -top-32 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-electric/20 blur-[140px]"
        />
        <motion.div
          style={reduced ? undefined : { x: tx, y: ty }}
          className="absolute top-1/3 left-[-12%] h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[130px]"
        />
        <div className="absolute bottom-[-20%] left-1/2 h-[30rem] w-[44rem] -translate-x-1/2 rounded-full bg-electric/10 blur-[150px]" />
        {!reduced
          ? PARTICLES.map((p, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-accent/50"
                style={{
                  left: p.left,
                  bottom: p.bottom,
                  width: p.size,
                  height: p.size,
                  animation: `rise ${p.duration}s linear ${p.delay}s infinite`,
                  opacity: 0,
                }}
              />
            ))
          : null}
      </div>

      <div className="container-shell relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left column */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing }}
            className="mb-6 inline-flex"
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: easing }}
            className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Hi, I&rsquo;m <span className="text-gradient">Ashrakat</span> 👋
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: easing }}
            className="mt-4 font-display text-[1.7rem] font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]"
          >
            Frontend Developer
            <span className="block">&amp; Mobile App Developer</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: easing }}
            className="mt-5 flex h-9 items-center"
            aria-live="off"
          >
            <span className="inline-flex items-center gap-3 font-display text-lg font-semibold text-muted sm:text-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotating}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: easing }}
                  className="inline-block"
                >
                  <span className="text-gradient">{ROTATING[rotating]}</span>
                  {rotating < ROTATING.length - 1 && (
                    <span className="ml-3 text-ink/40">•</span>
                  )}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: easing }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            Fresh graduate Computer and Control Engineer passionate about building
            modern, responsive web and mobile applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: easing }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <FiArrowRight size={17} />
            </a>
            <a href={site.resume} className="btn-ghost" download>
              <FiDownload size={17} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: easing }}
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
            >
              Let&rsquo;s Work Together
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <span className="hidden h-5 w-px bg-line sm:block" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/5 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              >
                <FiLinkedin size={17} />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/5 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              >
                <FiGithub size={17} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right column — floating tech visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: easing }}
          className="relative hidden h-[30rem] md:block lg:h-[34rem]"
          aria-hidden="true"
        >
          <motion.div
            style={reduced ? undefined : { x: tx, y: ty }}
            className="absolute inset-0 grid place-items-center"
          >
            <div className="relative h-56 w-56 sm:h-64 sm:w-64">
              <div className="absolute inset-0 rotate-45 rounded-[2.5rem] bg-gradient-to-br from-accent/60 to-electric/60 opacity-25 blur-2xl" />
              <div className="absolute inset-0 rotate-45 rounded-[2.5rem] border border-accent/25 card-surface">
                <div className="absolute inset-4 rounded-[1.8rem] border border-accent/20 bg-abyss" />
              </div>
              <div className="absolute inset-0 -z-10 rotate-[35deg] scale-90 rounded-[2.5rem] border border-white/5" />
            </div>
          </motion.div>

          {floatingIcons.map(({ Icon, className, size, delay }) => (
            <motion.div
              key={className}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 + delay * 0.15, ease: easing }}
              className="absolute z-10"
              style={{ animation: `float ${6.5 + delay * 1.2}s ease-in-out ${delay}s infinite` }}
            >
              <motion.span
                style={reduced ? undefined : { x: tx, y: ty }}
                className={`grid h-14 w-14 place-items-center rounded-2xl border border-line bg-white/[0.06] backdrop-blur-xl shadow-[0_16px_40px_-16px_rgba(0,0,0,0.7)] sm:h-16 sm:w-16 ${className}`}
              >
                <Icon size={size} />
              </motion.span>
            </motion.div>
          ))}

          <motion.div
            style={reduced ? undefined : { x: tx, y: ty }}
            className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 glass rounded-2xl px-5 py-3 text-center shadow-[0_18px_50px_-20px_rgba(0,0,0,0.7)]"
          >
            <p className="text-xs text-muted">Based in</p>
            <p className="font-display text-sm font-semibold text-ink">Tanta, Egypt</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Location chip visible on small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="container-shell absolute bottom-6 left-0 right-0 md:hidden"
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-3.5 py-1.5 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {site.location}
        </p>
      </motion.div>
    </section>
  );
}