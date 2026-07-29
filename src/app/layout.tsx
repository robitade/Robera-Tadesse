import type { Metadata } from "next";
import { Inter, Architects_Daughter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const architectsDaughter = Architects_Daughter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-architects",
});

export const metadata: Metadata = {
  title: "Robbie Senior UI/UX Designer | Robera Tadesse",
  description:
    "Portfolio of Robbie (Robera Tadesse) — Senior UI/UX Designer with 2+ years of experience crafting thoughtful, user-centered digital experiences. Currently leading design at Zayno and freelancing on Upwork.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "Figma",
    "User Experience",
    "Robera Tadesse",
    "Robbie",
    "Portfolio",
    "Zayno",
    "Ethiopia UI Designer",
  ],
  authors: [{ name: "Robera Tadesse" }],
  icons: {
    icon: "/images/robbie pr.jpg",
    shortcut: "/images/robbie pr.jpg",
    apple: "/images/robbie pr.jpg",
  },
  openGraph: {
    title: "Robbie — Senior UI/UX Designer | Robera Tadesse",
    description:
      "Crafting thoughtful, user-centered digital experiences that drive real results.",
    type: "website",
    images: [
      {
        url: "/images/robbie pr.jpg",
        width: 1200,
        height: 1200,
        alt: "Robbie — Robera Tadesse | Senior UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robbie — Senior UI/UX Designer | Robera Tadesse",
    description:
      "Crafting thoughtful, user-centered digital experiences that drive real results.",
    images: ["/images/robbie pr.jpg"],
  },
};

import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Robera Tadesse",
    alternateName: "Robbie",
    jobTitle: "Senior UI/UX Designer",
    image: "/images/robbie pr.jpg",
    description:
      "Senior UI/UX Designer crafting scalable, high-converting digital products across fintech, SaaS, and e-commerce.",
    knowsAbout: ["UI/UX Design", "Product Design", "Figma", "User Research", "Prototyping"],
  };

  return (
    <html lang="en" className={`dark ${inter.variable} ${architectsDaughter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}



