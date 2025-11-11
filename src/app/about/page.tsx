import { Metadata } from "next";
import About from "@/components/About";

const url = process.env.SITE_URL;

export const metadata: Metadata = {
  title: "About James G. | AI Development Specialist & Technical Educator",
  description:
    "AI-Powered Development Specialist transitioning into technical sales and education. Expertise in AI-assisted workflows (Claude, GPT-4, GitHub Copilot), psychology-driven product design, and modern web technologies (React, TypeScript, Next.js).",
  keywords: [
    "AI Development",
    "AI-Assisted Development",
    "Technical Sales Engineer",
    "Developer Advocate",
    "AI Solutions Consultant",
    "GitHub Copilot",
    "Claude AI",
    "GPT-4",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Behavioral Economics",
    "Psychology-Driven Design",
    "AI Training",
    "Customer Success Engineer",
  ],
  authors: [{ name: "James G." }],
  creator: "James G.",
  publisher: "James G.",
  openGraph: {
    type: "profile",
    title: "About James G. | AI Development Specialist & Technical Educator",
    description:
      "AI Development Specialist with hands-on experience in AI-assisted workflows, transitioning into technical sales and education roles. Expertise in React, TypeScript, Next.js, and psychology-driven product design.",
    url: `${url}/about`,
    siteName: "James G. Portfolio",
    images: [
      {
        url: `${url}/images/og-about.jpg`,
        width: 1200,
        height: 630,
        alt: "James G. - AI Development Specialist",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About James G. | AI Development Specialist & Technical Educator",
    description:
      "AI Development Specialist with expertise in AI-assisted workflows, psychology-driven design, and modern web technologies.",
    images: [`${url}/images/og-about.jpg`],
  },
  alternates: {
    canonical: `${url}/about`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function AboutPage() {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "James G.",
      jobTitle: "AI Development Specialist & Technical Educator",
      description:
        "AI-Powered Development Specialist transitioning into technical sales and education roles in AI solutions.",
      url: `${url}/about`,
      sameAs: [
        // Add your social media profiles here
        // "https://linkedin.com/in/yourprofile",
        // "https://github.com/yourprofile",
        // "https://twitter.com/yourprofile",
      ],
      knowsAbout: [
        "AI-Assisted Development",
        "GitHub Copilot",
        "Claude AI",
        "GPT-4",
        "React",
        "TypeScript",
        "Next.js",
        "Behavioral Economics",
        "Psychology-Driven Design",
        "Technical Sales",
        "Developer Advocacy",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "AI Development Specialist",
        occupationLocation: {
          "@type": "Country",
          name: "United States",
        },
        skills: [
          "AI-Assisted Development",
          "React",
          "TypeScript",
          "Next.js",
          "Technical Sales",
          "Customer Education",
        ],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <About />
    </>
  );
}
