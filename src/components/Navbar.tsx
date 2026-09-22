"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)));
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-line bg-night/70 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(2,10,20,0.8)]" : "bg-transparent"
      )}
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-accent via-accent-soft to-electric"
        style={{ scaleX: progress }}
      />
      <nav
        aria-label="Primary"
        className="container-shell flex h-16 items-center justify-between md:h-[4.5rem]"
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          aria-label={`${site.name} — back to top`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent to-electric font-display text-sm font-bold text-night shadow-[0_6px_20px_-6px_rgba(34,211,238,0.8)]">
            {site.monogram}
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-ink">
            Ashrakat<span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-accent" : "text-muted hover:text-ink"
                  )}
                >
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-gradient-to-r from-accent to-electric"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="btn-primary !px-5 !py-2.5"
          >
            Let&rsquo;s Talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/5 text-ink transition-colors hover:border-accent/50 lg:hidden"
        >
          {open ? <MdClose size={22} /> : <MdOutlineMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line bg-night/95 backdrop-blur-2xl lg:hidden"
          >
            <ul className="container-shell flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      active === link.href.slice(1)
                        ? "bg-accent/10 text-accent"
                        : "text-ink/80 hover:bg-white/5"
                    )}
                  >
                    {link.label}
                    <span className="text-accent/60">→</span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.3 }}
                className="mt-2 border-t border-line pt-4"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Let&rsquo;s Work Together
                </a>
              </motion.li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}