"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle, FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

const inputClass =
  "w-full rounded-xl border border-line bg-white/[0.04] px-4 py-3 text-sm text-ink placeholder:text-muted/60 outline-none transition-all duration-300 focus:border-accent/60 focus:bg-accent/[0.05] focus:shadow-[0_0_0_4px_rgba(34,211,238,0.12)]";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = String(data.get("subject") || "Portfolio message");
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const body = [`Hi Ashrakat,`, ``, message, ``, `— ${name}${email ? ` (${email})` : ""}`].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    form.reset();
    window.setTimeout(() => setSent(false), 5000);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32" aria-label="Contact">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-grid mask-fade-x opacity-40" />
        <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-electric/15 blur-[130px] animate-orb" />
        <div className="absolute bottom-0 left-[-10%] h-80 w-80 rounded-full bg-accent/10 blur-[120px] animate-orb-slow" />
      </div>

      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              Contact
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Let&rsquo;s Build Something <span className="text-gradient">Together</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Have a project, opportunity, or idea? I&rsquo;d love to hear about it.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${site.email}`} className="btn-primary">
                <FiMail size={17} /> Send Email
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <FiLinkedin size={17} /> LinkedIn
              </a>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <FiGithub size={17} /> GitHub
              </a>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.15} className="mx-auto mt-14 max-w-2xl">
          <form onSubmit={onSubmit} className="rounded-3xl card-surface p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">
                  Name
                </label>
                <input id="contact-name" name="name" type="text" required placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">
                  Email
                </label>
                <input id="contact-email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="contact-subject" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">
                Subject
              </label>
              <input id="contact-subject" name="subject" type="text" required placeholder="What's this about?" className={inputClass} />
            </div>

            <div className="mt-5">
              <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="mt-7 flex flex-col items-center gap-3">
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message <FiSend size={16} />
              </button>
              <AnimatePresence>
                {sent ? (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-accent"
                    role="status"
                  >
                    <FiCheckCircle /> Your email app is opening — thanks for reaching out!
                  </motion.p>
                ) : null}
              </AnimatePresence>
              <p className="text-xs text-muted/70">
                Prefer direct? Email me at{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-accent hover:underline">
                  {site.email}
                </a>
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}