"use client";

import { useState } from "react";
import { Testimonial } from "@/data/testimonials";
import { X, Upload, Loader2, Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialModalProps {
  testimonial?: Testimonial | null;
  index?: number | null;
  onClose: () => void;
  onSave: (testimonial: Testimonial, index?: number | null) => Promise<void>;
}

export default function TestimonialModal({
  testimonial,
  index,
  onClose,
  onSave,
}: TestimonialModalProps) {
  const isEditing = index !== null && index !== undefined;

  const [quote, setQuote] = useState(testimonial?.quote || "");
  const [author, setAuthor] = useState(testimonial?.author || "");
  const [role, setRole] = useState(testimonial?.role || "");
  const [company, setCompany] = useState(testimonial?.company || "");
  const [date, setDate] = useState(testimonial?.date || "Mar 2026");
  const [avatar, setAvatar] = useState(testimonial?.avatar || "");

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setAvatar(data.url);
      } else {
        alert(data.message || "Upload failed");
      }
    } catch {
      alert("Error uploading avatar");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quote || !author) {
      setError("Quote and author name are required.");
      return;
    }

    setSaving(true);
    setError(null);

    const formattedTestimonial: Testimonial = {
      quote: quote.trim(),
      author: author.trim(),
      role: role.trim(),
      company: company.trim(),
      date: date.trim(),
      avatar: avatar.trim() || undefined,
    };

    try {
      await onSave(formattedTestimonial, index);
      onClose();
    } catch (err: any) {
      setError(err?.message || "Failed to save testimonial");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#090D13] border border-white/20 rounded-[24px] w-full max-w-lg shadow-2xl relative overflow-hidden text-white my-auto">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#BEFF00]/10 border border-[#BEFF00]/20 flex items-center justify-center text-[#BEFF00]">
              <Quote size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                {isEditing ? "Edit Testimonial" : "Add Client Testimonial"}
              </h2>
              <p className="text-xs text-white/50">Manage feedback displayed in the Testimonial section.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-white/10 hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-xl p-3">
              {error}
            </p>
          )}

          <div>
            <label className="block text-xs text-white/70 mb-1.5 font-medium">Client Quote / Feedback</label>
            <textarea
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              rows={4}
              placeholder='"Robbie delivered exceptional design work that boosted our conversion..."'
              required
              className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/70 mb-1.5 font-medium">Author Name</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Biruk Girma"
                required
                className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
              />
            </div>

            <div>
              <label className="block text-xs text-white/70 mb-1.5 font-medium">Role / Title</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="CEO & Co-founder"
                className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/70 mb-1.5 font-medium">Company Name</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Sumuni"
                className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
              />
            </div>

            <div>
              <label className="block text-xs text-white/70 mb-1.5 font-medium">Date</label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Jan 2026"
                className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
              />
            </div>
          </div>

          {/* Avatar Upload */}
          <div>
            <label className="block text-xs text-white/70 mb-1.5 font-medium">Author Avatar Photo</label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                placeholder="/images/Biruk (2).png"
                className="flex-1 bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
              />
              <label className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium px-4 py-3 rounded-xl cursor-pointer transition-colors shrink-0">
                {uploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
                <span>Upload</span>
                <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
              </label>
            </div>
            {avatar && (
              <div className="relative w-12 h-12 rounded-full border border-white/20 overflow-hidden mt-2">
                <Image src={avatar} alt="Avatar Preview" fill className="object-cover" />
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-white/20 text-white hover:bg-white/10 text-xs font-medium transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2.5 rounded-xl bg-[#BEFF00] text-black font-semibold text-xs hover:bg-[#9acc00] transition-all flex items-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
            >
              {saving ? <Loader2 size={14} className="animate-spin" /> : isEditing ? "Save Changes" : "Add Testimonial"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
