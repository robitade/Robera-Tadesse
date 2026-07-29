"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="rounded-2xl bg-bg-secondary border border-border p-8 relative group hover:border-border-light transition-all duration-300 card-glow"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Quote icon */}
      <div className="mb-4 relative">
        <Quote className="w-8 h-8 text-accent/30 group-hover:text-accent/50 transition-colors duration-300" />
      </div>

      {/* Star rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-accent/70 text-accent/70" />
        ))}
      </div>

      {/* Quote text */}
      <p className="text-text-secondary text-base leading-relaxed mb-8 relative">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 relative">
        {/* Avatar placeholder */}
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-accent font-semibold text-sm border border-accent/15">
          {testimonial.author
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-text-primary font-semibold text-sm">
            {testimonial.author}
          </p>
          <p className="text-text-muted text-xs">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
