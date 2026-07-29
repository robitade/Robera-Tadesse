"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { testimonials as initialTestimonials, Testimonial } from "@/data/testimonials";

export default function Testimonials() {
  const [testimonialList, setTestimonialList] = useState<Testimonial[]>(initialTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    fetch(`/api/testimonials?t=${Date.now()}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.testimonials) {
          setTestimonialList(data.testimonials);
        }
      })
      .catch((err) => console.error("Error loading dynamic testimonials:", err));
  }, []);

  // Number of slide pages for smooth horizontal sliding
  const totalSlides = testimonialList.length;

  // Auto-play horizontal slider timer (slides every 4 seconds unless hovered)
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative bg-transparent overflow-hidden">
      {/* Figma background ambient glow */}
      <div
        className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30 z-0"
        style={{
          backgroundColor: "rgba(254, 160, 72, 0.4)",
          filter: "blur(180px)",
        }}
      />
      <div
        className="absolute bottom-10 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 z-0"
        style={{
          backgroundColor: "rgba(72, 161, 251, 0.3)",
          filter: "blur(180px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16 space-y-3">
          <h2 className="font-architects text-[36px] md:text-[50px] font-normal text-white tracking-tight">
            Testimonials
          </h2>
          <p className="font-architects text-[28px] md:text-[42px] font-normal text-white/80 max-w-4xl mx-auto leading-relaxed">
            A few notes from teams I&apos;ve shipped with.
          </p>
        </AnimatedSection>

        {/* Testimonials Horizontal Carousel Slider Track */}
        <AnimatedSection delay={0.1} className="relative">
          <div
            className="overflow-hidden rounded-[24px] py-4 -mx-2 px-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${activeIndex * 350}px`,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              {testimonialList.map((item, index) => (
                <div
                  key={item.author + index}
                  className="w-[320px] sm:w-[360px] lg:w-[380px] shrink-0 group relative rounded-[20px] p-[1.5px] flex flex-col transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 50%, rgba(72,161,251,0.2) 100%)",
                  }}
                >
                  <div className="rounded-[18px] bg-[#07090D] p-6 md:p-8 flex flex-col justify-between h-full min-h-[260px] relative overflow-hidden backdrop-blur-md">
                    {/* Quote Text */}
                    <p className="text-white/90 text-sm md:text-[15px] leading-relaxed font-light mb-8">
                      {item.quote}
                    </p>

                    {/* Author Meta — No interior line */}
                    <div className="flex items-center justify-between pt-2 mt-auto">
                      <div className="space-y-1">
                        <h4 className="text-white font-medium text-sm md:text-base">
                          {item.author}
                        </h4>
                        <p className="text-white/60 text-xs md:text-sm font-light">
                          {item.role}
                        </p>
                        <p className="text-white/40 text-xs">{item.date}</p>
                      </div>

                      {/* Author Avatar Image */}
                      {item.avatar ? (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0">
                          <Image
                            src={item.avatar}
                            alt={item.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-medium text-sm shrink-0">
                          {item.author.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Controls: Arrows & Active Indicator Dots */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15 transition-all cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2.5">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeIndex === idx
                      ? "w-8 h-2.5 bg-white shadow-md"
                      : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15 transition-all cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </AnimatedSection>

        {/* Soft section fade-out */}
        <div className="pt-20 flex justify-center">
          <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}

