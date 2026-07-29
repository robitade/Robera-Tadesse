"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IconBadgeProps {
  icon: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function IconBadge({
  icon,
  size = "md",
  className = "",
}: IconBadgeProps) {
  const sizes = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
  };

  return (
    <motion.span
      className={`inline-flex items-center justify-center rounded-xl bg-accent/15 text-accent glow-accent-sm ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {icon}
    </motion.span>
  );
}
