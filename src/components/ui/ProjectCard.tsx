"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import PillTag from "./PillTag";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="rounded-2xl bg-bg-secondary border border-border overflow-hidden transition-all duration-300 card-glow hover:border-border-light">
          {/* Project Image / Placeholder */}
          <div className="aspect-[16/10] bg-bg-elevated relative overflow-hidden">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-bg-elevated to-bg-secondary">
                <span className="text-5xl font-bold text-border-light/50 select-none group-hover:text-accent/20 transition-colors duration-300">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}
            {/* Hover overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Arrow indicator on hover */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <ArrowUpRight size={18} className="text-black" />
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <PillTag key={tag} size="sm" variant="outline">
                  {tag}
                </PillTag>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
              <a
                href={project.sampleUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 border border-white text-white font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 text-xs shadow-sm"
              >
                <span>See Sample Design</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
