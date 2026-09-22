import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

/**
 * Consistent eyebrow + display heading used at the top of every section.
 * `accent` renders as a styled gradient suffix (e.g. "Projects I" + accent "build").
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <div
        className={cn(
          "flex items-center gap-2.5",
          centered ? "justify-center" : "justify-start"
        )}
      >
        <span className="h-8 w-1 rounded-full bg-gradient-to-b from-accent to-electric" />
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </span>
      </div>

      <h2
        className={cn(
          "mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl",
          centered ? "text-center" : ""
        )}
      >
        {title}{" "}
        {accent ? <span className="text-gradient">{accent}</span> : null}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg",
            centered ? "mx-auto text-center" : ""
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}