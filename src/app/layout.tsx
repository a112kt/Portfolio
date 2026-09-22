import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

// Update with the deployed URL once live.
const siteUrl = "https://ashrakat-raafat.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ashrakat Raafat Elabd | Frontend & Mobile Developer",
    template: "%s | Ashrakat Raafat Elabd",
  },
  description:
    "Frontend Developer specializing in React.js, Next.js, and React Native. I build modern, responsive web and mobile applications with clean, maintainable code.",
  keywords: [
    "Ashrakat Raafat Elabd",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "React Native Developer",
    "Mobile App Developer",
    "TypeScript",
    "Tanta Egypt",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.name,
    title: "Ashrakat Raafat Elabd | Frontend & Mobile Developer",
    description:
      "Frontend Developer specializing in React.js, Next.js, and React Native.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashrakat Raafat Elabd | Frontend & Mobile Developer",
    description:
      "Frontend Developer specializing in React.js, Next.js, and React Native.",
  },
  icons: {
    icon: "/icon.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-night font-sans text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-night"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              jobTitle: "Frontend Developer & Mobile Application Developer",
              description: site.description,
              email: site.email,
              address: { "@type": "PostalAddress", addressLocality: "Tanta", addressCountry: "EG" },
              knowsAbout: [
                "React.js",
                "Next.js",
                "React Native",
                "TypeScript",
                "Redux Toolkit",
                "React Query",
                "Tailwind CSS",
              ],
              sameAs: [site.linkedin, site.github],
            }),
          }}
        />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}