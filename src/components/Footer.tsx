import { MdArrowUpward } from "react-icons/md";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { navLinks, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-abyss/60">
      <div className="container-shell py-10 md:py-14">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent to-electric font-display text-lg font-bold text-night shadow-[0_8px_24px_-8px_rgba(34,211,238,0.8)]">
            {site.monogram}
          </span>
          <p className="font-display text-xl font-semibold text-ink">
            {site.name}
          </p>
          <p className="max-w-md text-sm text-muted">
            {site.headline}
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-underline text-muted transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              aria-label="Email Ashrakat"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/5 text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <FiMail size={18} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/5 text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white/5 text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <FiGithub size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed &amp; built with Next.js, Tailwind CSS &amp; Motion
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="link-underline flex items-center gap-1.5 text-muted transition-colors hover:text-ink"
          >
            Back to top <MdArrowUpward />
          </a>
        </div>
      </div>
    </footer>
  );
}