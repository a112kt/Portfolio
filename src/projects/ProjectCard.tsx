"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 20 });
  const sry = useSpring(ry, { stiffness: 180, damping: 20 });
  const rotateX = useTransform(srx, [-0.5, 0.5], [-5, 5]);
  const rotateY = useTransform(sry, [-0.5, 0.5], [5, -5]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rx.set((e.clientY - rect.top) / rect.height - 0.5);
    ry.set((e.clientX - rect.left) / rect.width - 0.5);
  }

  function onMouseLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={reduced ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ y: -8 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl card-surface transition-shadow duration-300 hover:shadow-[0_30px_80px_-30px_rgba(34,211,238,0.35)]",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent transition-opacity duration-300 opacity-60 group-hover:opacity-30" />

        {/* Category badge */}
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-night/60 px-3 py-1 text-[11px] font-medium text-accent backdrop-blur-md">
          {project.categoryLabel}
        </span>

        {/* Hover actions */}
        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 opacity-0 translate-y-3 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          {(() => {
            const primaryHref = project.demo || project.github;
            if (primaryHref) {
              return (
                <a
                  href={primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-night shadow-lg transition-transform hover:scale-105"
                >
                  {project.demo ? "Live Demo" : "View Project"}
                  {project.demo ? <FiExternalLink size={14} /> : <FiArrowUpRight size={15} />}
                </a>
              );
            }
            return (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-night shadow-lg">
                View Project <FiArrowUpRight size={15} />
              </span>
            );
          })()}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-night/70 text-ink backdrop-blur-md transition-colors hover:border-accent/60 hover:text-accent"
            >
              <FiGithub size={17} />
            </a>
          ) : null}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-muted transition-colors duration-300 group-hover:border-accent/35 group-hover:text-ink"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}