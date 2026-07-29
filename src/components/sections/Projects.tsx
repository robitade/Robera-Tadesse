"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { projects as initialProjects, Project } from "@/data/projects";

const categories = ["All", "Web", "App", "SaaS", "Branding"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projectList, setProjectList] = useState<Project[]>(initialProjects);

  useEffect(() => {
    fetch(`/api/projects?t=${Date.now()}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.projects) {
          setProjectList(data.projects);
        }
      })
      .catch((err) => console.error("Error loading dynamic projects:", err));
  }, []);

  const filteredProjects = projectList.filter((project) => {
    if (activeCategory === "All") return true;
    return (
      project.tags.includes(activeCategory) ||
      (activeCategory === "Web" && project.tags.includes("Landing Page"))
    );
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-transparent overflow-hidden">
      {/* 
        Figma Background Ambient Glow Ellipses:
        - Left Ellipse: #48A1FB at 50% opacity (rgba(72, 161, 251, 0.5)), Layer blur 851.1
        - Right Ellipse: #FEA048 at 50% opacity (rgba(254, 160, 72, 0.5)), Layer blur 851.1
      */}
      <div
        className="absolute top-10 -left-64 w-[600px] h-[700px] rounded-full pointer-events-none z-0 opacity-70"
        style={{
          backgroundColor: "rgba(72, 161, 251, 0.4)",
          filter: "blur(220px)",
        }}
      />
      <div
        className="absolute top-20 -right-64 w-[600px] h-[700px] rounded-full pointer-events-none z-0 opacity-70"
        style={{
          backgroundColor: "rgba(254, 160, 72, 0.4)",
          filter: "blur(220px)",
        }}
      />
      {/* Secondary lower ambient glows for long page scrolling balance */}
      <div
        className="absolute bottom-20 -left-64 w-[600px] h-[800px] rounded-full pointer-events-none z-0 opacity-80"
        style={{
          backgroundColor: "rgba(72, 161, 251, 0.4)",
          filter: "blur(240px)",
        }}
      />
      <div
        className="absolute bottom-10 -right-64 w-[600px] h-[800px] rounded-full pointer-events-none z-0 opacity-80"
        style={{
          backgroundColor: "rgba(254, 160, 72, 0.4)",
          filter: "blur(240px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 space-y-3">
          <h2 className="font-architects text-[36px] md:text-[50px] font-normal text-white tracking-tight">
            Selected Projects
          </h2>
          <p className="font-architects text-[28px] md:text-[42px] font-normal text-white/80 max-w-4xl mx-auto leading-relaxed">
            A few case studies across fintech, SaaS, e-commerce, and platforms.
          </p>
        </AnimatedSection>

        {/* Filter Tabs Bar */}
        <AnimatedSection delay={0.1} className="flex justify-center mb-16">
          <div className="bg-[#0A0D12]/90 border border-white/10 p-1.5 rounded-full inline-flex items-center gap-1 shadow-2xl backdrop-blur-md">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white text-black shadow-md"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Project Cards List */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Sleek 2px smooth gradient card border */}
                <div
                  className="relative rounded-[20px] p-[2px] transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                  style={{
                    background:
                      "linear-gradient(135deg, #EFCA99 0%, #FFFFFF 12%, rgba(255, 255, 255, 0.18) 40%, rgba(255, 255, 255, 0.18) 60%, #FFFFFF 88%, #EFCA99 100%)",
                  }}
                >
                  {/* Inner Card Content */}
                  <div className="rounded-[18px] bg-[#07090C] p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden backdrop-blur-md">
                    {/* Left Column: Direct Project Image Showcase */}
                    <div className="lg:col-span-6 relative aspect-[16/10] rounded-[16px] overflow-hidden shadow-2xl">
                      <Link href={`/projects/${project.slug}`} className="block w-full h-full">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover rounded-[16px] transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-[16px]">
                            <span className="text-4xl font-light text-white/40">
                              {project.title}
                            </span>
                          </div>
                        )}
                      </Link>
                    </div>

                    {/* Right Column: Project Details & CTAs */}
                    <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
                      <Link href={`/projects/${project.slug}`} className="block group/title">
                        <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-snug group-hover/title:text-white/90 transition-colors">
                          {project.title}
                        </h3>
                      </Link>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        {/* View Case Study Button */}
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-2.5 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-all duration-300 text-sm shadow-lg group/btn"
                        >
                          <span>View Case Study</span>
                          <ArrowUpRight
                            size={16}
                            className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                          />
                        </Link>

                        {/* See Sample Design Button with White Stroke */}
                        <a
                          href={project.sampleUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 border border-white text-white font-medium px-6 py-3 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 text-sm shadow-lg group/sampleBtn"
                        >
                          <span>See Sample Design</span>
                          <ArrowUpRight
                            size={16}
                            className="transition-transform group-hover/sampleBtn:translate-x-0.5 group-hover/sampleBtn:-translate-y-0.5"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See More Button */}
        <AnimatedSection delay={0.2} className="text-center pt-12">
          <button className="bg-white text-black font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-all duration-300 text-sm shadow-xl cursor-pointer hover:scale-105 active:scale-95">
            See More
          </button>
        </AnimatedSection>

        {/* Soft section fade-out */}
        <div className="pt-20 flex justify-center">
          <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}

