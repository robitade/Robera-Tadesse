"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PillTagProps {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "default" | "accent" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export default function PillTag({
  children,
  icon,
  variant = "default",
  size = "md",
  className = "",
}: PillTagProps) {
  const variants = {
    default: "bg-bg-elevated border border-border-light text-text-secondary",
    accent: "bg-accent/10 border border-accent/30 text-accent",
    outline: "bg-transparent border border-border-light text-text-muted",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
  };

  return (
    <motion.span
      className={`inline-flex items-center gap-2 rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05, borderColor: "rgba(190, 255, 0, 0.4)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.span>
  );
}
