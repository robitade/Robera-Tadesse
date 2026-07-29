"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < images.length;
  const activeImage = isOpen ? images[currentIndex] : null;

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % images.length;
    onNavigate(nextIndex);
  }, [currentIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    onNavigate(prevIndex);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock scroll on body when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  return (
    <AnimatePresence>
      {isOpen && activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8"
          onClick={onClose}
        >
          {/* Top Bar: Counter & Close */}
          <div
            className="absolute top-6 left-6 right-6 flex items-center justify-between z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-white/70 text-sm font-medium px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
              {currentIndex + 1} / {images.length}
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 border border-white/10 cursor-pointer"
              aria-label="Close fullscreen view"
            >
              <X size={20} />
            </button>
          </div>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200 border border-white/10 cursor-pointer hover:scale-110 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Image Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-[90vw] max-h-[85vh] w-auto h-auto rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt={`Fullscreen view ${currentIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-xl select-none"
            />
          </motion.div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200 border border-white/10 cursor-pointer hover:scale-110 active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
