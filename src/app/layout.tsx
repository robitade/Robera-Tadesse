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
  title: "Robbie — Senior UI/UX Designer | Robera Tadesse",
  description:
    "Portfolio of Robbie (Robera Tadesse) — Senior UI/UX Designer with 2+ years of experience crafting thoughtful, user-centered digital experiences. Currently leading design at Zayno and freelancing on Upwork.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "Figma",
    "User Experience",
    "Robera Tadesse",
    "Portfolio",
  ],
  authors: [{ name: "Robera Tadesse" }],
  openGraph: {
    title: "Robbie — Senior UI/UX Designer",
    description:
      "Crafting thoughtful, user-centered digital experiences that drive real results.",
    type: "website",
  },
};

import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${architectsDaughter.variable}`}>
      <body className="bg-bg-primary text-text-primary antialiased transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}



