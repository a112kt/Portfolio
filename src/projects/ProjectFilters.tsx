"use client";

import { motion } from "framer-motion";
import { PROJECT_FILTERS, type ProjectFilter } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  active: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
}

export function ProjectFilters({ active, onChange }: ProjectFiltersProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects"
      className="flex flex-wrap items-center justify-center gap-2"
    >
      {PROJECT_FILTERS.map((filter) => {
        const isActive = active === filter.value;
        return (
          <button
            key={filter.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.value)}
            className={cn(
              "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300",
              isActive ? "text-night" : "text-muted hover:text-ink"
            )}
          >
            {isActive ? (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-electric shadow-[0_8px_24px_-8px_rgba(34,211,238,0.7)]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            ) : null}
            <span className="relative z-10">{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}