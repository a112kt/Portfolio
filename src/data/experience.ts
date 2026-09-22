export interface ExperienceItem {
  role: string;
  type: string;
  period: string;
  summary: string;
  mainProject: string;
  highlights: string[];
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Freelance Frontend Developer",
    type: "Freelance & Client Work",
    period: "Recent",
    summary:
      "Working directly with clients to design, build, and maintain responsive web experiences — from requirement discussions through delivery and iteration.",
    mainProject: "Horizon Educational Platform",
    highlights: [
      "Responsive UI",
      "Component-based architecture",
      "Client state & data fetching",
      "Performance & accessibility",
    ],
    tech: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "React Query",
      "Chakra UI",
      "Material UI",
      "REST APIs",
      "Responsive UI",
    ],
  },
];