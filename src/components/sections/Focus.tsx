"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";

const designAndResearch = [
  { label: "UI Design", color: "#F5A844" },
  { label: "UX Design", color: "#E05555" },
  { label: "Design Systems", color: "#4CAF50" },
  { label: "Visual Design", color: "#4DA3FF" },
  { label: "User Research", color: "#F5A844" },
  { label: "Usability Testing", color: "#4CAF50" },
  { label: "Wireframing", color: "#E05555" },
  { label: "Information Architecture", color: "#4DA3FF" },
  { label: "User Flows", color: "#F5A844" },
  { label: "Competitive Analysis", color: "#4CAF50" },
  { label: "Prototyping", color: "#E05555" },
  { label: "Branding", color: "#4DA3FF" },
];

const toolsAndDev = [
  { label: "Figma", color: "#4DA3FF" },
  { label: "Adobe XD", color: "#E05555" },
  { label: "Sketch", color: "#F5A844" },
  { label: "Adobe Photoshop", color: "#4CAF50" },
  { label: "Adobe Illustrator", color: "#E05555" },
  { label: "Framer", color: "#4DA3FF" },
  { label: "Slack", color: "#F5A844" },
  { label: "Agile", color: "#4CAF50" },
  { label: "Jira", color: "#4DA3FF" },
  { label: "Notion", color: "#BEFF00" },
  { label: "HTML/CSS", color: "#E05555" },
  { label: "React", color: "#4DA3FF" },
  { label: "Tailwind CSS", color: "#4CAF50" },
  { label: "Next.js", color: "#BEFF00" },
];

export default function Focus() {
  return (
    <section className="py-24 lg:py-32 relative bg-transparent overflow-hidden">
      {/* Focus statement — centered, narrower container */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center mb-14">
        <AnimatedSection>
          <p className="text-2xl md:text-3xl lg:text-4xl leading-snug font-medium">
            <span className="text-white/50">focus is on </span>
            <span className="text-white/50">scalable, high-converting</span>
            <br className="hidden md:block" />
            <span className="text-white/50">
              digital products blending strategy,{" "}
            </span>
            <span className="text-white font-bold">design,</span>
            <br className="hidden md:block" />
            <span className="text-white font-bold">
              {" "}
              and data to solve real problems
            </span>
          </p>
        </AnimatedSection>
      </div>

      {/* Multi-row Sliding Marquee — One seamless continuous slider track */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative space-y-4 overflow-hidden">
        {/* Row 1: Design & Research (Left movement) */}
        <div className="flex items-center animate-marquee-tags">
          {[0, 1].map((set) => (
            <div key={`row1-${set}`} className="flex items-center shrink-0 gap-3 pr-3">
              {designAndResearch.map((tag) => (
                <span
                  key={`r1-${set}-${tag.label}`}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.12] bg-white/[0.03] text-sm text-white/80 font-medium whitespace-nowrap shrink-0 hover:border-white/30 transition-colors"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{
                      backgroundColor: tag.color,
                      boxShadow: `0 0 6px ${tag.color}80`,
                    }}
                  />
                  {tag.label}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2: Tools & Development (Right movement) */}
        <div className="flex items-center animate-marquee-reverse">
          {[0, 1].map((set) => (
            <div key={`row2-${set}`} className="flex items-center shrink-0 gap-3 pr-3">
              {toolsAndDev.map((tag) => (
                <span
                  key={`r2-${set}-${tag.label}`}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.12] bg-white/[0.03] text-sm text-white/80 font-medium whitespace-nowrap shrink-0 hover:border-white/30 transition-colors"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{
                      backgroundColor: tag.color,
                      boxShadow: `0 0 6px ${tag.color}80`,
                    }}
                  />
                  {tag.label}
                </span>
              ))}
            </div>
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

