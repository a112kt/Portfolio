export type ProjectCategory = "web" | "mobile" | "freelance";

export type ProjectFilter = "all" | ProjectCategory;

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  image: string;
  imageAlt: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  tags?: string[];
}

export const PROJECT_FILTERS: Array<{ value: ProjectFilter; label: string }> = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "freelance", label: "Freelance" },
];

// GITHUB_REPO = "https://github.com/a112kt" — replace with specific repo URLs when available.
const GITHUB = "https://github.com/a112kt";

export const featuredProject: Project = {
  id: "alluvo",
  title: "Alluvo",
  category: "mobile",
  categoryLabel: "Mobile",
  description:
    "Alluvo is a social commerce mobile application that turns reels and short videos into a full shopping journey — discover products, save favorites, chat with the store, and check out seamlessly, all inside one app.",
  image: "/images/projects/alluvo.jpg",
  imageAlt: "Social commerce shopping experience on a smartphone screen mockup",
  tech: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "React Query", "Axios"],
  github: GITHUB,
  demo: "",
  featured: true,
  tags: [
    "Reels shopping",
    "Product discovery",
    "Wishlist",
    "Cart & checkout",
    "Chat",
    "Notifications",
    "AI-assisted interactions",
    "Brand Mode",
  ].map((t) => t),
};

export const projects: Project[] = [
  {
    id: "horizon",
    title: "Horizon Educational Platform",
    category: "freelance",
    categoryLabel: "Freelance",
    description:
      "An interactive e-learning platform delivered for a freelance client — structured course content, student dashboards, and a smooth, responsive learning experience.",
    image: "/images/projects/horizon.jpg",
    imageAlt: "Educational platform with online learning dashboards on a laptop",
    tech: ["React.js", "Next.js", "Chakra UI", "Material UI", "Redux Toolkit", "React Query"],
    github: GITHUB,
    demo: "",
  },
  {
    id: "dashboard",
    title: "Admin Dashboard",
    category: "web",
    categoryLabel: "Web",
    description:
      "A data-rich admin dashboard with analytics charts and management views, built with a clean component architecture and type-safe data fetching.",
    image: "/images/projects/dashboard.jpg",
    imageAlt: "Analytics dashboard UI with charts and data visualizations",
    tech: ["Next.js", "React.js", "TypeScript", "Material UI", "Redux Toolkit", "RTK Query", "Recharts"],
    github: GITHUB,
    demo: "",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Web Application",
    category: "web",
    categoryLabel: "Web",
    description:
      "A modern online store with a product catalog, filtering, cart, and checkout flow — fast, responsive, and built for conversion.",
    image: "/images/projects/ecommerce.jpg",
    imageAlt: "Modern online shopping storefront interface mockup",
    tech: ["React.js", "Redux Toolkit", "React Query", "Tailwind CSS"],
    github: GITHUB,
    demo: "",
  },
  {
    id: "chat",
    title: "Real-Time Chat Application",
    category: "web",
    categoryLabel: "Web",
    description:
      "A real-time messaging application with live conversations, presence, and instant updates powered by WebSockets and REST APIs.",
    image: "/images/projects/chat.jpg",
    imageAlt: "Messaging application chat interface mockup",
    tech: ["React.js", "Socket.io", "REST APIs"],
    github: GITHUB,
    demo: "",
  },
];