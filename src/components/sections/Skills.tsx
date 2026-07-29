"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Search,
  Layers,
  Smartphone,
  Users,
  Layout,
  Pen,
  Code,
  PenTool,
  Image as ImageIcon,
  FileText,
  GitBranch,
  BarChart3,
  CheckCircle,
  Wind,
  ArrowRight,
  MonitorSmartphone,
  Play,
  Hexagon,
  Frame,
  StickyNote,
  Eye,
  MousePointer,
  Diamond,
  Box,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import PillTag from "@/components/ui/PillTag";
import { skills, categoryLabels } from "@/data/skills";
import { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  palette: <Palette size={14} />,
  search: <Search size={14} />,
  layers: <Layers size={14} />,
  smartphone: <Smartphone size={14} />,
  users: <Users size={14} />,
  layout: <Layout size={14} />,
  figma: <Pen size={14} />,
  code: <Code size={14} />,
  "pen-tool": <PenTool size={14} />,
  image: <ImageIcon size={14} />,
  "file-text": <FileText size={14} />,
  "git-branch": <GitBranch size={14} />,
  "bar-chart": <BarChart3 size={14} />,
  "check-circle": <CheckCircle size={14} />,
  wind: <Wind size={14} />,
  "arrow-right": <ArrowRight size={14} />,
  "monitor-smartphone": <MonitorSmartphone size={14} />,
  play: <Play size={14} />,
  hexagon: <Hexagon size={14} />,
  frame: <Frame size={14} />,
  "sticky-note": <StickyNote size={14} />,
  eye: <Eye size={14} />,
  "mouse-pointer": <MousePointer size={14} />,
  diamond: <Diamond size={14} />,
  box: <Box size={14} />,
  component: <Layers size={14} />,
  sitemap: <Layout size={14} />,
};

export default function Skills() {
  const categories = ["design", "research", "tools", "development"] as const;

  return (
    <section id="skills" className="py-24 lg:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Skills & Tools"
            subtitle="The tools and methodologies I use to bring ideas to life."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(
              (s) => s.category === category
            );
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                  {categoryLabels[category]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => (
                    <PillTag
                      key={skill.name}
                      icon={iconMap[skill.icon]}
                    >
                      {skill.name}
                    </PillTag>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
