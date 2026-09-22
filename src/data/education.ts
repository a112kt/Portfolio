export interface EducationItem {
  title: string;
  subtitle: string;
  period?: string;
  tag: string;
}

export const education: EducationItem[] = [
  {
    title: "Bachelor of Engineering",
    subtitle: "Computer and Control Engineering",
    tag: "University",
  },
  {
    title: "Frontend Development Diploma",
    subtitle: "Route Academy",
    period: "2024 – 2025",
    tag: "Diploma",
  },
  {
    title: "Frontend Development Track",
    subtitle: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "2025 – 2026",
    tag: "Program",
  },
  {
    title: "React Native Development",
    subtitle: "Udemy",
    tag: "Course",
  },
  {
    title: "React.js & Next.js Development",
    subtitle: "Udemy",
    tag: "Course",
  },
];