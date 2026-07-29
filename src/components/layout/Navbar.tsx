"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "Home", sectionId: "hero", href: "/" },
  { label: "About", sectionId: "about", href: "/#about" },
  { label: "Projects", sectionId: "projects", href: "/#projects" },
  { label: "Testimonial", sectionId: "testimonials", href: "/#testimonials" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    if (!isHomePage) return;

    // Determine active section based on scroll position
    const sections = navLinks.map((link) => link.sectionId);
    let current = "hero";

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          current = sectionId;
        }
      }
    }
    setActiveSection(current);
  }, [isHomePage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const getLinkTarget = (link: typeof navLinks[0]) => {
    if (isHomePage) {
      return link.sectionId === "hero" ? "#hero" : `#${link.sectionId}`;
    }
    return link.href;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-bg-primary/85 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href={isHomePage ? "#hero" : "/"}
              className="text-xl font-bold text-white hover:text-white/80 transition-colors cursor-pointer"
            >
              robbie<span className="text-white">.</span>
            </Link>

            {/* Desktop Nav — Center */}
            <div className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] px-1.5 py-1.5">
              {navLinks.map((link) => {
                const target = getLinkTarget(link);
                const isActive = isHomePage && activeSection === link.sectionId;

                return (
                  <Link
                    key={link.label}
                    href={target}
                    className={`text-sm px-5 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-white text-black font-semibold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right side — Resume + Let's Talk */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://drive.google.com/file/d/1Wr3ABFlCKWlnwXRbEbE0npOr9GBbPC4O/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full border border-white/20 text-white hover:border-white/40 hover:bg-white/[0.05] transition-all duration-200"
              >
                Resume
                <Download size={14} />
              </a>
              <Link
                href={isHomePage ? "#contact" : "/#contact"}
                className="inline-flex items-center text-sm px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-200 cursor-pointer"
              >
                Let&apos;s Talk
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl pt-20 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 p-8">
              {navLinks.map((link) => {
                const target = getLinkTarget(link);
                const isActive = isHomePage && activeSection === link.sectionId;

                return (
                  <Link
                    key={link.label}
                    href={target}
                    onClick={() => setIsMobileOpen(false)}
                    className={`text-2xl font-semibold transition-colors ${
                      isActive ? "text-white" : "text-white/50 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="https://drive.google.com/file/d/1Wr3ABFlCKWlnwXRbEbE0npOr9GBbPC4O/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="inline-flex items-center gap-2 text-lg px-5 py-3 rounded-full border border-white/20 text-white"
              >
                Resume
                <Download size={16} />
              </a>
              <Link
                href={isHomePage ? "#contact" : "/#contact"}
                onClick={() => setIsMobileOpen(false)}
                className="inline-flex items-center text-lg px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-200 cursor-pointer"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
