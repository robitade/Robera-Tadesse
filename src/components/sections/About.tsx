"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";


const experiences = [
  {
    role: "Senior UI/UX Designer",
    company: "Zayno · Full-time",
    period: "Oct 2025 → Now",
  },
  {
    role: "UI/UX Designer",
    company: "Upwork · Freelance",
    period: "Mar 2025 → Now",
  },
  {
    role: "UI/UX Designer",
    company: "Infnova Tech · Part-time",
    period: "Aug 2025 → Jan 2026",
  },
  {
    role: "UI Designer",
    company: "NextPulse Labs · Part time",
    period: "Jul 2024 → Sep 2025",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative bg-transparent overflow-hidden">
      {/* Background ambient lighting effects matching Projects theme */}
      <div
        className="absolute top-10 -left-64 w-[600px] h-[600px] rounded-full pointer-events-none opacity-35 z-0"
        style={{
          backgroundColor: "rgba(72, 161, 251, 0.4)",
          filter: "blur(200px)",
        }}
      />
      <div
        className="absolute bottom-10 -right-64 w-[600px] h-[600px] rounded-full pointer-events-none opacity-35 z-0"
        style={{
          backgroundColor: "rgba(254, 160, 72, 0.4)",
          filter: "blur(200px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Titles */}
        <AnimatedSection className="text-center mb-16 md:mb-20 space-y-3">
          <span className="font-architects text-[32px] md:text-[42px] font-normal text-white/90 block tracking-wide">
            Who Am I
          </span>
          <h2 className="font-architects text-[36px] md:text-[50px] font-normal text-white tracking-tight leading-tight">
            Designing Digital Products since 2024
          </h2>
        </AnimatedSection>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Photo */}
          <AnimatedSection className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden group">
              <Image
                src="/images/robbie_old.png"
                alt="Robbie — Robera Tadesse"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 420px"
                priority
              />
              {/* Bottom vignette gradient blending naturally into dark background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080A] via-transparent to-transparent opacity-80" />
            </div>
          </AnimatedSection>


          {/* Right Column: Bio & Experience Table */}
          <AnimatedSection delay={0.2} className="lg:col-span-7 space-y-8">
            {/* Bio Paragraph */}
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">
              A UI/UX designer helping startups build scalable, high converting digital products.
              I lead design at Zayno, with freelance work across Upwork and independent clients
              blending a background in statistics with design thinking across fintech, SaaS, and e-commerce.
            </p>

            {/* Experience Table Card */}
            <div className="relative rounded-[20px] border border-white/10 bg-[#0B0F14]/90 backdrop-blur-md p-6 md:p-8 shadow-2xl overflow-hidden">
              {/* Blue accent line highlight on the left edge */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#48A1FB] via-[#3B82F6] to-transparent" />

              <div className="divide-y divide-white/10">
                {experiences.map((exp) => (
                  <div
                    key={exp.role + exp.company}
                    className="py-4 first:pt-0 last:pb-0 grid grid-cols-12 items-center gap-2 md:gap-4 text-sm"
                  >
                    <div className="col-span-5 md:col-span-5 text-white font-medium">
                      {exp.role}
                    </div>
                    <div className="col-span-4 md:col-span-4 text-white/70 text-xs md:text-sm">
                      {exp.company}
                    </div>
                    <div className="col-span-3 md:col-span-3 text-white/60 text-xs md:text-sm text-right whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Hook Numbers / Client Metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-1">
              <div className="rounded-2xl border border-white/10 bg-[#0B0F14]/80 p-4 text-center backdrop-blur-md hover:border-white/20 transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:scale-105 transition-transform">
                  40+
                </div>
                <div className="text-xs sm:text-sm text-white/60 font-medium mt-1">
                  Projects Done
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0B0F14]/80 p-4 text-center backdrop-blur-md hover:border-white/20 transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:scale-105 transition-transform">
                  2+
                </div>
                <div className="text-xs sm:text-sm text-white/60 font-medium mt-1">
                  Years Exp.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0B0F14]/80 p-4 text-center backdrop-blur-md hover:border-white/20 transition-all duration-300 group">
                <div className="inline-flex items-center justify-center gap-1.5 text-xl sm:text-2xl font-bold text-[#BEFF00] tracking-tight group-hover:scale-105 transition-transform">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BEFF00] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#BEFF00]"></span>
                  </span>
                  Active
                </div>
                <div className="text-xs sm:text-sm text-white/60 font-medium mt-1">
                  Available for Hire
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Soft section fade-out */}
        <div className="pt-20 flex justify-center">
          <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}

