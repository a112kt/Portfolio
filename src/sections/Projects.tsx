"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { FeaturedProject } from "@/projects/FeaturedProject";
import { ProjectCard } from "@/projects/ProjectCard";
import { ProjectFilters } from "@/projects/ProjectFilters";
import { projects, type ProjectFilter } from "@/data/projects";

const easing = [0.22, 1, 0.36, 1] as const;

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32" aria-label="Projects">
      <div className="absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-electric/10 blur-[150px]" aria-hidden="true" />

      <div className="container-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="A few things I've"
          accent="built"
          description="From mobile commerce to real-time apps — projects focused on performance, clean components, and a polished user experience."
        />

        <FeaturedProject />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: easing }}
          className="mt-16"
        >
          <ProjectFilters active={filter} onChange={setFilter} />
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                exit={{ opacity: 0, scale: 0.92, y: 10, transition: { duration: 0.22, ease: easing } }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: easing }}
                className="flex"
              >
                <ProjectCard project={project} className="w-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}