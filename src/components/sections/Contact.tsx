"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/robbietade@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: `[Portfolio] ${formData.subject || "New Inquiry"}`,
            message: formData.message,
          }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        // Fallback: trigger native mailto
        window.location.href = `mailto:robbietade@gmail.com?subject=${encodeURIComponent(
          formData.subject || "Portfolio Contact"
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        setIsSubmitted(true);
      }
    } catch {
      // Fallback: trigger native mailto
      window.location.href = `mailto:robbietade@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Portfolio Contact"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12 md:mb-14 space-y-3">
          <h2 className="font-architects text-[36px] md:text-[50px] font-normal text-white tracking-tight">
            Let&apos;s build something together
          </h2>
          <p className="font-architects text-[28px] md:text-[42px] font-normal text-white/80 max-w-4xl mx-auto leading-relaxed">
            Have a project in mind? Drop me a message.
          </p>
        </AnimatedSection>

        {/* Contact Form Container */}
        <AnimatedSection delay={0.15}>
          <div className="max-w-3xl mx-auto rounded-[28px] bg-[#090D13]/90 border border-white/15 p-8 sm:p-10 md:p-12 shadow-2xl backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name and E mail */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-white/90 text-sm font-medium block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#05070A] border border-white/15 rounded-full px-6 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email or Phone Number */}
                <div className="space-y-2">
                  <label className="text-white/90 text-sm font-medium block">
                    Email or Phone Number
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email or phone number"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#05070A] border border-white/15 rounded-full px-6 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Subject */}
              <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium block">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What is it about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#05070A] border border-white/15 rounded-full px-6 py-3.5 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none transition-colors"
                />
              </div>

              {/* Row 3: Message */}
              <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium block">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#05070A] border border-white/15 rounded-[20px] p-6 text-sm text-white placeholder:text-white/30 focus:border-white/50 focus:outline-none resize-none transition-colors"
                />
              </div>

              {/* Row 4: Submit Button */}
              <div className="pt-2 flex justify-start">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-6 py-3.5 text-sm font-medium"
                  >
                    <span>✓</span> Message sent to robbietade@gmail.com!
                  </motion.div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-white text-black font-medium px-7 py-3.5 rounded-full hover:bg-white/90 transition-all duration-300 text-sm shadow-xl cursor-pointer hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowUpRight size={16} />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

