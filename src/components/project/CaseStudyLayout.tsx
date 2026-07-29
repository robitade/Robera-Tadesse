"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import type { Project } from "@/data/projects";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ImageLightbox from "@/components/ui/ImageLightbox";

interface CaseStudyLayoutProps {
  project: Project;
  prevProject?: Project;
  nextProject?: Project;
}

export default function CaseStudyLayout({
  project,
  prevProject,
  nextProject,
}: CaseStudyLayoutProps) {
  const caseStudy = project.caseStudy;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Collect all available project images into an array for sequential gallery viewing
  const allImages: string[] = [
    ...(project.image ? [project.image] : []),
    ...(caseStudy?.images || []),
  ];

  return (
    <article className="min-h-screen bg-[#05070A] text-white pt-24 pb-20 relative overflow-hidden">
      {/* Background ambient lighting effects */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-25 z-0"
        style={{
          backgroundColor: "rgba(254, 160, 72, 0.35)",
          filter: "blur(200px)",
        }}
      />

      {/* Lightbox Modal */}
      <ImageLightbox
        images={allImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => setLightboxIndex(index)}
      />

      {/* Back navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 relative z-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>

      {/* Main 2-Column Hero Showcase matching user reference design */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-24 relative z-10">
        {/* Left Column: Large Project Image Frame (60% width) */}
        <AnimatedSection className="lg:col-span-7">
          <div
            onClick={() => project.image && setLightboxIndex(0)}
            className="rounded-[24px] bg-[#0A0D12] border border-white/15 p-2 sm:p-3 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] group cursor-zoom-in relative"
          >
            <div className="w-full aspect-[16/10] rounded-[18px] overflow-hidden relative bg-[#07090C]">
              {project.image ? (
                <>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover rounded-[18px] transition-transform duration-700 group-hover:scale-[1.03]"
                    priority
                  />
                  {/* Zoom hint overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-[18px]">
                    <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white font-medium px-4 py-2 rounded-full text-xs border border-white/20">
                      <ZoomIn size={14} /> Click for full screen
                    </span>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-white/5">
                  <span className="text-xl text-white/40">{project.title}</span>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Right Column: Project Details Panel (40% width) */}
        <AnimatedSection delay={0.15} className="lg:col-span-5 space-y-7 flex flex-col justify-between">
          {/* Header Row: Title & Top Right Arrow Navigation */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                {project.title}
              </h1>

              {/* Prev / Next Arrow Navigation (< >) */}
              <div className="flex items-center gap-2 pt-1 shrink-0">
                {prevProject && (
                  <Link
                    href={`/projects/${prevProject.slug}`}
                    className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shadow-md"
                    title={`Previous: ${prevProject.title}`}
                  >
                    <ChevronLeft size={18} />
                  </Link>
                )}
                {nextProject && (
                  <Link
                    href={`/projects/${nextProject.slug}`}
                    className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95 shadow-md"
                    title={`Next: ${nextProject.title}`}
                  >
                    <ChevronRight size={18} />
                  </Link>
                )}
              </div>
            </div>

            {/* Social / Link badge */}
            <div className="flex items-center gap-2">
              <a
                href={project.sampleUrl || "https://www.figma.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                title="External Link"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
            {project.description}
          </p>

          {/* White Pill CTA Button */}
          <div>
            <a
              href={project.sampleUrl || "https://www.figma.com/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black font-semibold px-7 py-3.5 rounded-full hover:bg-white/90 transition-all text-sm shadow-xl cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>See Sample Design</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* 2-Column Metadata Grid (Styles & Type/Role) */}
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
            {/* Left Column: Styles / Tags */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-white/50 font-medium">
                Styles & Tags
              </h4>
              <div className="space-y-1">
                {project.tags.map((tag) => (
                  <div key={tag} className="text-sm font-semibold text-white">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Type & Role */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-white/50 font-medium">
                Role & Duration
              </h4>
              <div className="space-y-1">
                <div className="text-sm font-semibold text-white">
                  {caseStudy?.role || "UI/UX Designer"}
                </div>
                {caseStudy?.duration && (
                  <div className="text-xs text-white/70">
                    {caseStudy.duration}
                  </div>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Secondary Case Study Gallery Images Grid */}
      {caseStudy?.images && caseStudy.images.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6 mb-24 relative z-10">
          <h3 className="text-xl font-bold text-white mb-4">Project Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.images.map((img, idx) => {
              const globalIndex = (project.image ? 1 : 0) + idx;
              return (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(globalIndex)}
                  className="rounded-[20px] bg-[#0A0D12] border border-white/15 p-3 sm:p-4 overflow-hidden shadow-xl group cursor-zoom-in relative"
                >
                  <div className="w-full aspect-[16/10] rounded-[16px] overflow-hidden relative">
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover rounded-[16px] block transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Zoom hint overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-[16px]">
                      <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white font-medium px-4 py-2 rounded-full text-xs border border-white/20">
                        <ZoomIn size={14} /> Click for full screen
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Extended Case Study Details: Problem, Process, & Business Impact */}
      {caseStudy && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16 mb-24">
          {/* Problem & Challenge Card */}
          {caseStudy.problem && (
            <AnimatedSection>
              <div className="rounded-[24px] bg-[#090D13]/90 border border-white/15 p-8 md:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#E05555] via-[#F5A844] to-transparent" />
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                  The Problem & Challenge
                </h2>
                <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">
                  {caseStudy.problem}
                </p>
              </div>
            </AnimatedSection>
          )}

          {/* Design Process & Strategy */}
          {caseStudy.process && caseStudy.process.length > 0 && (
            <AnimatedSection className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Design Process & Strategy
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {caseStudy.process.map((step, idx) => (
                  <div
                    key={step.title}
                    className="relative rounded-[20px] p-[2px] bg-gradient-to-br from-white/20 via-white/10 to-transparent"
                  >
                    <div className="rounded-[18px] bg-[#07090C] p-6 md:p-8 h-full space-y-3 relative overflow-hidden">
                      <span className="text-3xl md:text-4xl font-light text-white/30 block">
                        0{idx + 1}
                      </span>
                      <h3 className="text-xl font-medium text-white tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-white/70 text-sm md:text-base leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Business Impact & Key Outcomes */}
          {caseStudy.outcome && (
            <AnimatedSection>
              <div className="rounded-[24px] bg-[#090D13]/90 border border-white/15 p-8 md:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-white via-white/40 to-transparent" />
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight flex items-center gap-3">
                  <span>🚀</span> Business Impact & Results
                </h2>
                <p className="text-white/90 text-base md:text-lg leading-relaxed font-light">
                  {caseStudy.outcome}
                </p>
              </div>
            </AnimatedSection>
          )}

          {/* High-Converting Client Hook Box */}
          <AnimatedSection>
            <div className="rounded-[24px] bg-white border border-white/80 p-8 md:p-12 text-center space-y-6 shadow-[0_20px_60px_rgba(255,255,255,0.12)] relative overflow-hidden">
              {/* Ellipses with Layer Blur */}
              <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-emerald-500/15 blur-[90px] pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-slate-200/80 blur-[80px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] rounded-full bg-white blur-[100px] pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-950 tracking-tight">
                  Want similar results for your product?
                </h2>
                <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-medium">
                  Let&apos;s collaborate to design scalable, high-converting digital products tailored to your users.
                </p>
                <div className="pt-2 flex justify-center">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2.5 bg-slate-950 text-white font-semibold px-8 py-4 rounded-full hover:bg-slate-800 transition-all text-base shadow-xl cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <span>Hire Me</span>
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      )}

      {/* Next Project Footer */}
      {nextProject && (
        <div className="border-t border-white/10 pt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
            <div>
              <p className="text-xs text-white/50 uppercase tracking-wider mb-1">
                Next Project
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {nextProject.title}
              </h3>
            </div>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-all text-sm shadow-md"
            >
              <span>View Next</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </article>
  );
}

