"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background ambient light glows — Unified seamless page canvas */}
      <div className="absolute top-0 left-0 w-[60%] h-[70%] bg-[radial-gradient(ellipse_at_20%_30%,rgba(72,161,251,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[50%] h-[60%] bg-[radial-gradient(ellipse_at_80%_70%,rgba(254,160,72,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(72,161,251,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-24">
        {/* Main headline */}
        <div className="space-y-1 md:space-y-2 mb-0">
          {/* Line 1: My name is [photo] robbie, */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-tight"
          >
            <span className="text-white/90">My name is </span>
            {/* Profile photo badge */}
            <motion.span
              className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/15 border border-white/25 overflow-hidden align-middle mx-1"
              style={{
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.15), 0 4px 15px rgba(0,0,0,0.3)",
              }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
            >
              <Image
                src="/images/robbie.jpg"
                alt="Robbie"
                width={56}
                height={56}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 15%" }}
              />
            </motion.span>
            <span className="text-white"> robbie,</span>
          </motion.h1>

          {/* Line 2: I am Product Designer [figma icon] */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-tight"
          >
            <span className="text-white/90">I am </span>
            <span className="text-white">Product Designer </span>
            {/* Figma/Design icon badge — solid blue with intense glow */}
            <motion.span
              className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#4DA3FF] align-middle mx-1"
              style={{
                rotate: -6,
                boxShadow:
                  "0 0 30px rgba(77, 163, 255, 0.7), 0 0 60px rgba(77, 163, 255, 0.4), 0 0 100px rgba(77, 163, 255, 0.2), 0 4px 15px rgba(0,0,0,0.3)",
              }}
              whileHover={{ scale: 1.1, rotate: -3 }}
              transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
            >
              {/* Figma logo — white stroke only */}
              <svg width="22" height="32" viewBox="0 0 38 57" fill="none" className="md:w-6 md:h-9">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" stroke="white" strokeWidth="2.5" fill="none" />
                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" stroke="white" strokeWidth="2.5" fill="none" />
                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" stroke="white" strokeWidth="2.5" fill="none" />
                <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" stroke="white" strokeWidth="2.5" fill="none" />
                <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" stroke="white" strokeWidth="2.5" fill="none" />
              </svg>
            </motion.span>
          </motion.h1>

          {/* Line 3: I also love [globe icon] development */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-tight"
          >
            <span className="text-white/60">I also love </span>
            {/* Globe/Dev icon badge — solid orange with intense glow */}
            <motion.span
              className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#F5A844] align-middle mx-1"
              style={{
                rotate: 6,
                boxShadow:
                  "0 0 30px rgba(245, 168, 68, 0.7), 0 0 60px rgba(245, 168, 68, 0.4), 0 0 100px rgba(245, 168, 68, 0.2), 0 4px 15px rgba(0,0,0,0.3)",
              }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
            >
              {/* Globe icon — white */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" />
                <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="white" strokeWidth="1.8" />
                <path d="M3.5 8C5.5 9 8.5 9.5 12 9.5C15.5 9.5 18.5 9 20.5 8" stroke="white" strokeWidth="1.2" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="1.8" />
                <path d="M3.5 16C5.5 15 8.5 14.5 12 14.5C15.5 14.5 18.5 15 20.5 16" stroke="white" strokeWidth="1.2" />
              </svg>
            </motion.span>
            <span className="text-white"> development</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="max-w-xl mx-auto text-text-secondary text-base md:text-lg leading-relaxed mt-6"
        >
          Senior UI/UX designer at Zayno. Building scalable, high-converting
          products across fintech, SaaS, and e-commerce.
        </motion.p>

        {/* 2+ Years badge + CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <Button href="#contact" variant="primary" size="lg">
            Hire Me
          </Button>
          <Button href="#projects" variant="secondary" size="lg">
            View Projects
          </Button>
        </motion.div>

        {/* 2+ years experience pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.95 }}
          className="flex items-center justify-center mt-6"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-text-secondary">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            2+ Years of Experience
          </span>
        </motion.div>
      </div>

      {/* Worked With section — sliding marquee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10 mt-auto pb-12 md:pb-16 w-full"
      >
        <p className="text-center text-text-muted text-sm tracking-widest uppercase mb-8">
          Worked With
        </p>
        {/* Marquee — aligned with navbar max-w-7xl */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative overflow-hidden">

          {/* Sliding track */}
          <div className="flex items-center animate-marquee">
            {[0, 1].map((set) => (
              <div key={set} className="flex items-center shrink-0">
                {[
                  { src: "/images/applizy.png", alt: "Applizy" },
                  { src: "/images/Addisparking.png", alt: "Addis Parking" },
                  { src: "/images/Zayno.png", alt: "Zayno" },
                  { src: "/images/Afriwork.png", alt: "Afriwork" },
                  { src: "/images/USP.png", alt: "USP" },
                  { src: "/images/Selam.png", alt: "Selam" },
                ].map((logo) => (
                  <div
                    key={`${set}-${logo.alt}`}
                    className="flex items-center justify-center shrink-0 w-[calc(100%/6)] px-6"
                    style={{ minWidth: "calc(80rem / 6)" }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={40}
                      className="h-6 md:h-8 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity duration-300 brightness-0 invert"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom seamless transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent pointer-events-none z-20" />
    </section>
  );
}
