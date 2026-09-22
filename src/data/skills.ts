import type { IconType } from "react-icons";
import {
  SiAxios,
  SiBootstrap,
  SiChakraui,
  SiCss,
  SiExpo,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { RiBracesLine } from "react-icons/ri";
import { TbBrandVscode } from "react-icons/tb";

export interface Skill {
  name: string;
  icon: IconType;
  basic?: boolean;
}

export interface SkillCategory {
  title: string;
  caption: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    caption: "The foundation of everything I build.",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    title: "Mobile",
    caption: "Cross-platform apps from a single codebase.",
    skills: [
      { name: "React Native", icon: SiReact },
      { name: "Expo", icon: SiExpo },
    ],
  },
  {
    title: "State Management",
    caption: "Predictable client state and data fetching.",
    skills: [
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Context API", icon: RiBracesLine },
      { name: "React Query", icon: SiReactquery },
      { name: "RTK Query", icon: SiRedux },
    ],
  },
  {
    title: "UI",
    caption: "Component systems and design-token driven styling.",
    skills: [
      { name: "Material UI", icon: SiMui },
      { name: "Chakra UI", icon: SiChakraui },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "APIs",
    caption: "Consuming and wiring real data.",
    skills: [
      { name: "REST APIs", icon: FaNetworkWired },
      { name: "Axios", icon: SiAxios },
    ],
  },
  {
    title: "Backend",
    caption: "Enough to ship full features with confidence.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, basic: true },
      { name: "Express.js", icon: SiExpress, basic: true },
    ],
  },
  {
    title: "Database",
    caption: "Storing and querying real application data.",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Tools",
    caption: "The daily workflow toolbox.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: TbBrandVscode },
      { name: "Figma", icon: SiFigma },
    ],
  },
];