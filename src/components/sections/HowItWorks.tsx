"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Research",
    description:
      "Kickoff call to understand business goals, target users, competitors, and scope. This is where expectations are set and requirements are gathered.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes → UI design → iterations based on feedback. This is the bulk of the work, and usually deserves the most visual weight in the layout.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Refining and handing off with clarity ready for engineering, testing, and launch.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 lg:py-36 relative bg-transparent">
      {/* Seamless transition gradients */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg-primary via-bg-primary/40 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent pointer-events-none z-10" />

      {/* Figma 306x306 #48A1FB 76% layer blur ambient glow spots */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[306px] h-[306px] rounded-full pointer-events-none z-0 opacity-80"
        style={{
          backgroundColor: "rgba(72, 161, 251, 0.76)",
          filter: "blur(140px)",
        }}
      />
      <div
        className="absolute top-1/4 left-10 w-[306px] h-[306px] rounded-full pointer-events-none z-0 opacity-50"
        style={{
          backgroundColor: "rgba(72, 161, 251, 0.76)",
          filter: "blur(160px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-10 w-[306px] h-[306px] rounded-full pointer-events-none z-0 opacity-50"
        style={{
          backgroundColor: "rgba(72, 161, 251, 0.76)",
          filter: "blur(160px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <h2 className="font-architects text-[36px] md:text-[50px] font-normal text-white text-center mb-16 tracking-tight">
            Here&apos;s how it works
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group relative"
            >
              {/* Sleek, smooth 2px gradient card border frame */}
              <div
                className="relative rounded-[20px] p-[2px] transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                style={{
                  background:
                    "linear-gradient(135deg, #EFCA99 0%, #FFFFFF 12%, rgba(255, 255, 255, 0.18) 40%, rgba(255, 255, 255, 0.18) 60%, #FFFFFF 88%, #EFCA99 100%)",
                }}
              >
                {/* Inner Card Content */}
                <div
                  className="rounded-[18px] p-8 md:p-10 flex flex-col justify-between min-h-[380px] relative overflow-hidden backdrop-blur-md"
                  style={{
                    backgroundColor: "#0A0A0A",
                    backgroundImage:
                      "linear-gradient(160deg, rgba(10, 10, 10, 0.98) 0%, rgba(10, 10, 10, 0.95) 60%, rgba(12, 24, 38, 0.6) 100%)",
                  }}
                >
                  {/* Subtle inner bottom-right blue glow (#48A1FB) */}
                  <div
                    className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity"
                    style={{
                      backgroundColor: "rgba(72, 161, 251, 0.35)",
                      filter: "blur(50px)",
                    }}
                  />

                {/* Top Step Number */}
                <div className="relative z-10">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white block mb-12">
                    {step.number}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          ))}
        </div>

        {/* Soft section fade-out */}
        <div className="pt-20 flex justify-center">
          <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}


