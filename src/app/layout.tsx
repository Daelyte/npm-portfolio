import { Inter } from "next/font/google";
import "./globals.css";
import CardNav from "@/components/CardNav";
import Footer from "@/components/Footer";
import ToastContext from "@/context/ToastContext";
import { Analytics } from "@vercel/analytics/react";
import FaultyTerminal from "@/components/FaultyTerminal";
import ASCIIText from "@/components/ASCIIText";
import StructuredData from "@/components/StructuredData";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

const url = process.env.SITE_URL;

export const metadata = {
  metadataBase: new URL(url || 'https://framearchitech.com'),
  title: {
    default: "JMFG | James M. F. Greer - Portfolio & Creative Works",
    template: "%s | JMFG"
  },
  description: "Creative technologist, developer, and storyteller. Explore interactive experiences, technical projects, and narrative works by James M. F. Greer.",
  keywords: ["James Greer", "JMFG", "portfolio", "web developer", "creative technologist", "interactive design", "storytelling", "projects"],
  authors: [{ name: "James M. F. Greer" }],
  creator: "James M. F. Greer",
  publisher: "James M. F. Greer",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: url,
    title: "JMFG | James M. F. Greer - Portfolio & Creative Works",
    description: "Creative technologist, developer, and storyteller. Explore interactive experiences, technical projects, and narrative works.",
    siteName: "JMFG",
    images: [
      {
        url: `${url}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "JMFG Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JMFG | James M. F. Greer - Portfolio & Creative Works",
    description: "Creative technologist, developer, and storyteller. Explore interactive experiences, technical projects, and narrative works.",
    creator: "@jamesgreer",
    images: [`${url}/images/og-image.png`],
  },
  icons: {
    shortcut: `${url}/images/icons/favicon-16x16.png`,
    apple: `${url}/images/icons/apple-touch-icon.png`,
    icon: [
      { url: `${url}/images/icons/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
      { url: `${url}/images/icons/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
    ],
  },
  manifest: `${url}/site.webmanifest`,
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    {
      label: "About",
      bgColor: "rgba(14, 165, 233, 0.1)",
      textColor: "#fff",
      links: [
        { label: "Who I Am", href: "/about", ariaLabel: "About Me" },
        { label: "My Story", href: "/about#story", ariaLabel: "My Story" }
      ]
    },
    {
      label: "Work", 
      bgColor: "rgba(168, 85, 247, 0.1)",
      textColor: "#fff",
      links: [
        { label: "Projects", href: "/projects", ariaLabel: "View Projects" },
        { label: "Blog", href: "/blog", ariaLabel: "Read Blog" },
        { label: "Resume", href: "/resume", ariaLabel: "View Resume" }
      ]
    },
    {
      label: "Connect",
      bgColor: "rgba(34, 197, 94, 0.1)", 
      textColor: "#fff",
      links: [
        { label: "Get in Touch", href: "/contact", ariaLabel: "Contact Me" },
        { label: "LinkedIn", href: "#", ariaLabel: "LinkedIn Profile" }
      ]
    }
  ];

  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className}  flex flex-col min-h-screen dark `} suppressHydrationWarning>
        <ScrollProgress />
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <FaultyTerminal
            scale={2.2}
            gridMul={[2, 1]}
            digitSize={1.3}
            timeScale={0.8}
            pause={false}
            scanlineIntensity={0}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0.42}
            tint="#ff00ff"
            mouseReact={true}
            mouseStrength={1.1}
            pageLoadAnimation={true}
            brightness={0.4}
          />
        </div>
        <CardNav
          logo="/images/jg_logo_.png"
          logoAlt="James G. Portfolio"
          items={navItems}
          baseColor="rgba(255, 255, 255, 0.05)"
          menuColor="#fff"
          buttonBgColor="#3b82f6"
          buttonTextColor="#fff"
        />
        <div style={{ position: 'fixed', top: '20px', right: '20px', width: '200px', height: '200px', zIndex: 98, pointerEvents: 'none' }}>
          <ASCIIText
            text="^.^;"
            enableWaves={true}
            asciiFontSize={8}
          />
        </div>
        <ToastContext />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
