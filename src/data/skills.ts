export interface Skill {
  name: string;
  icon: string;
  category: "design" | "research" | "tools" | "development";
}

export const skills: Skill[] = [
  // Design
  { name: "UI Design", icon: "palette", category: "design" },
  { name: "UX Design", icon: "users", category: "design" },
  { name: "Visual Design", icon: "eye", category: "design" },
  { name: "Design Systems", icon: "layers", category: "design" },
  { name: "Interaction Design", icon: "mouse-pointer", category: "design" },
  { name: "Responsive Design", icon: "monitor-smartphone", category: "design" },
  { name: "Prototyping", icon: "play", category: "design" },
  { name: "Branding", icon: "hexagon", category: "design" },

  // Research
  { name: "User Research", icon: "search", category: "research" },
  { name: "Usability Testing", icon: "check-circle", category: "research" },
  { name: "Wireframing", icon: "layout", category: "research" },
  { name: "Information Architecture", icon: "sitemap", category: "research" },
  { name: "User Flows", icon: "git-branch", category: "research" },
  { name: "Competitive Analysis", icon: "bar-chart", category: "research" },

  // Tools
  { name: "Figma", icon: "figma", category: "tools" },
  { name: "Adobe XD", icon: "box", category: "tools" },
  { name: "Sketch", icon: "diamond", category: "tools" },
  { name: "Adobe Photoshop", icon: "image", category: "tools" },
  { name: "Adobe Illustrator", icon: "pen-tool", category: "tools" },
  { name: "Framer", icon: "frame", category: "tools" },
  { name: "Slack", icon: "message-square", category: "tools" },
  { name: "Agile", icon: "zap", category: "tools" },
  { name: "Jira", icon: "check-square", category: "tools" },
  { name: "Notion", icon: "file-text", category: "tools" },

  // Development
  { name: "HTML/CSS", icon: "code", category: "development" },
  { name: "React", icon: "component", category: "development" },
  { name: "Tailwind CSS", icon: "wind", category: "development" },
  { name: "Next.js", icon: "arrow-right", category: "development" },
];

export const categoryLabels: Record<string, string> = {
  design: "Design",
  research: "Research & Strategy",
  tools: "Tools",
  development: "Development",
};
