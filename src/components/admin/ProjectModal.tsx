"use client";

import { useState } from "react";
import { Project, ProcessStep } from "@/data/projects";
import { X, Upload, Plus, Trash2, Loader2, Sparkles } from "lucide-react";
import Image from "next/image";

interface ProjectModalProps {
  project?: Project | null;
  onClose: () => void;
  onSave: (project: Project) => Promise<void>;
}

export default function ProjectModal({ project, onClose, onSave }: ProjectModalProps) {
  const isEditing = !!project;

  const [slug, setSlug] = useState(project?.slug || "");
  const [title, setTitle] = useState(project?.title || "");
  const [description, setDescription] = useState(project?.description || "");
  const [tags, setTags] = useState(project?.tags?.join(", ") || "Web, SaaS");
  const [image, setImage] = useState(project?.image || "");
  const [sampleUrl, setSampleUrl] = useState(project?.sampleUrl || "https://www.figma.com/");
  const [featured, setFeatured] = useState(project?.featured ?? true);

  // Case Study details
  const [overview, setOverview] = useState(project?.caseStudy?.overview || "");
  const [role, setRole] = useState(project?.caseStudy?.role || "Lead UI/UX Designer");
  const [duration, setDuration] = useState(project?.caseStudy?.duration || "3 weeks");
  const [tools, setTools] = useState(project?.caseStudy?.tools?.join(", ") || "Figma, Framer");
  const [problem, setProblem] = useState(project?.caseStudy?.problem || "");
  const [outcome, setOutcome] = useState(project?.caseStudy?.outcome || "");
  const [galleryImages, setGalleryImages] = useState<string[]>(project?.caseStudy?.images || []);

  const [processSteps, setProcessSteps] = useState<ProcessStep[]>(
    project?.caseStudy?.process || [
      { title: "Discovery & User Research", description: "Conducted interviews and user journeys." },
    ]
  );

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle title change and auto slug if creating
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isEditing && !slug) {
      setSlug(
        val
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "")
      );
    }
  };

  // Image Upload handler
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, targetField: "cover" | "gallery") => {
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
        if (targetField === "cover") {
          setImage(data.url);
        } else {
          setGalleryImages([...galleryImages, data.url]);
        }
      } else {
        alert(data.message || "Upload failed");
      }
    } catch {
      alert("Error uploading image");
    } finally {
      setUploading(false);
    }
  };

  const handleAddProcessStep = () => {
    setProcessSteps([...processSteps, { title: "New Phase", description: "Description of phase..." }]);
  };

  const handleRemoveProcessStep = (index: number) => {
    setProcessSteps(processSteps.filter((_, i) => i !== index));
  };

  const handleProcessStepChange = (index: number, field: keyof ProcessStep, val: string) => {
    const updated = [...processSteps];
    updated[index] = { ...updated[index], [field]: val };
    setProcessSteps(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !slug) {
      setError("Title and slug are required.");
      return;
    }

    setSaving(true);
    setError(null);

    const formattedProject: Project = {
      slug: slug.trim().toLowerCase(),
      title: title.trim(),
      description: description.trim(),
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      image: image || null,
      featured,
      sampleUrl: sampleUrl.trim(),
      caseStudy: {
        overview: overview.trim(),
        role: role.trim(),
        duration: duration.trim(),
        tools: tools.split(",").map((t) => t.trim()).filter(Boolean),
        problem: problem.trim(),
        process: processSteps,
        outcome: outcome.trim(),
        images: galleryImages,
      },
    };

    try {
      await onSave(formattedProject);
      onClose();
    } catch (err: any) {
      setError(err?.message || "Failed to save project");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      <div className="bg-[#090D13] border border-white/20 rounded-[24px] w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden text-white my-auto">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#BEFF00]/10 border border-[#BEFF00]/20 flex items-center justify-center text-[#BEFF00]">
              <Sparkles size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                {isEditing ? `Edit Project: ${project.title}` : "Create New Project"}
              </h2>
              <p className="text-xs text-white/50">Manage project overview, case study details, and gallery images.</p>
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
        <form onSubmit={handleSubmit} className="p-6 space-y-8 overflow-y-auto flex-1">
          {error && (
            <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-xl p-3">
              {error}
            </p>
          )}

          {/* Section 1: Basic Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#BEFF00]">
              1. Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/70 mb-1.5 font-medium">Project Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g. Applizy SaaS Platform"
                  required
                  className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
                />
              </div>

              <div>
                <label className="block text-xs text-white/70 mb-1.5 font-medium">URL Slug</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="applizy"
                  disabled={isEditing}
                  required
                  className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#BEFF00] disabled:opacity-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/70 mb-1.5 font-medium">Short Card Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                placeholder="Brief summary displayed on homepage project cards..."
                className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <label className="block text-xs text-white/70 mb-1.5 font-medium">Tags (comma separated)</label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="SaaS, Web, App"
                  className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
                />
              </div>

              <div>
                <label className="block text-xs text-white/70 mb-1.5 font-medium">Sample Design URL (Figma Link)</label>
                <input
                  type="url"
                  value={sampleUrl}
                  onChange={(e) => setSampleUrl(e.target.value)}
                  placeholder="https://www.figma.com/design/..."
                  className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="featuredToggle"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="w-5 h-5 accent-[#BEFF00] cursor-pointer"
              />
              <label htmlFor="featuredToggle" className="text-sm font-medium text-white cursor-pointer">
                Featured on Homepage Grid
              </label>
            </div>
          </div>

          {/* Section 2: Cover Image & Upload */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#BEFF00]">
              2. Main Cover Image
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="/images/applizy.png"
                className="flex-1 bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
              />
              <label className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium px-5 py-3 rounded-xl cursor-pointer transition-colors shrink-0">
                {uploading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                <span>Upload Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, "cover")}
                  className="hidden"
                />
              </label>
            </div>
            {image && (
              <div className="relative w-40 h-24 rounded-xl border border-white/20 overflow-hidden mt-2">
                <Image src={image} alt="Preview" fill className="object-cover" />
              </div>
            )}
          </div>

          {/* Section 3: Case Study Content */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#BEFF00]">
              3. Case Study Details
            </h3>

            <div>
              <label className="block text-xs text-white/70 mb-1.5 font-medium">Overview</label>
              <textarea
                value={overview}
                onChange={(e) => setOverview(e.target.value)}
                rows={3}
                placeholder="Full case study background & goals..."
                className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-white/70 mb-1.5 font-medium">Role</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
                />
              </div>

              <div>
                <label className="block text-xs text-white/70 mb-1.5 font-medium">Duration</label>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
                />
              </div>

              <div>
                <label className="block text-xs text-white/70 mb-1.5 font-medium">Tools (comma separated)</label>
                <input
                  type="text"
                  value={tools}
                  onChange={(e) => setTools(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/70 mb-1.5 font-medium">Problem Statement</label>
              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                rows={3}
                placeholder="Describe the challenge or initial problem..."
                className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
              />
            </div>

            {/* Design Process Steps */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs text-white/70 font-medium uppercase tracking-wider">
                  Design Process Steps ({processSteps.length})
                </label>
                <button
                  type="button"
                  onClick={handleAddProcessStep}
                  className="inline-flex items-center gap-1.5 text-xs text-[#BEFF00] hover:underline cursor-pointer"
                >
                  <Plus size={14} /> Add Step
                </button>
              </div>

              {processSteps.map((step, idx) => (
                <div key={idx} className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#BEFF00]">Step 0{idx + 1}</span>
                    {processSteps.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveProcessStep(idx)}
                        className="text-white/40 hover:text-rose-400 p-1 cursor-pointer"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    value={step.title}
                    onChange={(e) => handleProcessStepChange(idx, "title", e.target.value)}
                    placeholder="Step Title"
                    className="w-full bg-white/[0.04] border border-white/15 rounded-lg px-3 py-2 text-white text-sm"
                  />
                  <textarea
                    value={step.description}
                    onChange={(e) => handleProcessStepChange(idx, "description", e.target.value)}
                    rows={2}
                    placeholder="Step Description..."
                    className="w-full bg-white/[0.04] border border-white/15 rounded-lg px-3 py-2 text-white text-xs"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-xs text-white/70 mb-1.5 font-medium">Business Impact & Outcomes</label>
              <textarea
                value={outcome}
                onChange={(e) => setOutcome(e.target.value)}
                rows={3}
                placeholder="Measurable results, metric increases, user retention..."
                className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#BEFF00]"
              />
            </div>
          </div>

          {/* Section 4: Secondary Gallery Showcase Images */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#BEFF00]">
                4. Secondary Case Study Images ({galleryImages.length})
              </h3>
              <label className="inline-flex items-center gap-1.5 text-xs text-[#BEFF00] hover:underline cursor-pointer">
                <Upload size={14} /> Upload Gallery Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, "gallery")}
                  className="hidden"
                />
              </label>
            </div>

            {galleryImages.length === 0 ? (
              <p className="text-xs text-white/40 italic">No secondary gallery images added yet.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {galleryImages.map((imgUrl, i) => (
                  <div key={i} className="relative group rounded-xl border border-white/15 overflow-hidden h-24 bg-black">
                    <Image src={imgUrl} alt={`Gallery ${i}`} fill className="object-cover" />
                    <button
                      type="button"
                      onClick={() => setGalleryImages(galleryImages.filter((_, idx) => idx !== i))}
                      className="absolute top-1 right-1 bg-black/80 hover:bg-rose-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Modal Actions */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 text-sm font-medium transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="px-8 py-3 rounded-xl bg-[#BEFF00] text-black font-semibold text-sm hover:bg-[#9acc00] transition-all flex items-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
            >
              {saving ? <Loader2 size={16} className="animate-spin" /> : isEditing ? "Save Changes" : "Create Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
