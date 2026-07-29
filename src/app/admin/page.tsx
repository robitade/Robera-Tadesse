"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Testimonial } from "@/data/testimonials";
import ProjectModal from "@/components/admin/ProjectModal";
import TestimonialModal from "@/components/admin/TestimonialModal";
import {
  FolderKanban,
  Quote,
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  LogOut,
  Sparkles,
  Loader2,
  CheckCircle2,
  Star,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"projects" | "testimonials">("projects");
  const [projects, setProjects] = useState<Project[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState<number | null>(null);
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);

  const router = useRouter();

  // Load projects and testimonials
  const fetchData = async () => {
    setLoading(true);
    try {
      const [projRes, testRes] = await Promise.all([
        fetch("/api/projects"),
        fetch("/api/testimonials"),
      ]);

      const projData = await projRes.json();
      const testData = await testRes.json();

      if (projData.success) setProjects(projData.projects);
      if (testData.success) setTestimonials(testData.testimonials);
    } catch (error) {
      console.error("Error fetching admin data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  };

  // Projects CRUD
  const handleSaveProject = async (project: Project) => {
    const isEdit = projects.some((p) => p.slug === project.slug);
    const method = isEdit ? "PUT" : "POST";

    const res = await fetch("/api/projects", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    });

    const data = await res.json();
    if (res.ok && data.success) {
      setProjects(data.projects);
    } else {
      throw new Error(data.message || "Failed to save project");
    }
  };

  const handleDeleteProject = async (slug: string) => {
    if (!confirm(`Are you sure you want to delete project "${slug}"?`)) return;

    try {
      const res = await fetch(`/api/projects?slug=${slug}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok && data.success) {
        setProjects(data.projects);
      } else {
        alert(data.message || "Delete failed");
      }
    } catch {
      alert("Failed to delete project");
    }
  };

  const handleToggleFeatured = async (project: Project) => {
    const updated = { ...project, featured: !project.featured };
    await handleSaveProject(updated);
  };

  // Testimonials CRUD
  const handleSaveTestimonial = async (testimonial: Testimonial, index?: number | null) => {
    const isEdit = index !== null && index !== undefined;
    const method = isEdit ? "PUT" : "POST";
    const payload = isEdit ? { index, testimonial } : testimonial;

    const res = await fetch("/api/testimonials", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (res.ok && data.success) {
      setTestimonials(data.testimonials);
    } else {
      throw new Error(data.message || "Failed to save testimonial");
    }
  };

  const handleDeleteTestimonial = async (index: number) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;

    try {
      const res = await fetch(`/api/testimonials?index=${index}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok && data.success) {
        setTestimonials(data.testimonials);
      } else {
        alert(data.message || "Delete failed");
      }
    } catch {
      alert("Failed to delete testimonial");
    }
  };

  return (
    <div className="min-h-screen bg-[#06080a] text-white flex flex-col">
      {/* Top Admin Navigation Header */}
      <header className="border-b border-white/10 bg-[#090D13]/90 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 overflow-hidden">
              <Image src="/images/robbie.jpg" alt="Robbie" width={40} height={40} className="object-cover" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white leading-tight">Robbie Portfolio Admin</h1>
              <p className="text-xs text-white/50">Manage Projects, Case Studies & Client Reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <span>View Portfolio</span>
              <ExternalLink size={14} />
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-full border border-rose-500/30 text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
            >
              <LogOut size={14} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex-1 w-full space-y-8">
        {/* Metric Cards Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-white/10 bg-[#090D13] p-6 space-y-2">
            <div className="flex items-center justify-between text-white/60">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Projects</span>
              <FolderKanban size={18} className="text-[#BEFF00]" />
            </div>
            <div className="text-3xl font-bold text-white">{projects.length}</div>
            <p className="text-xs text-white/40">Portfolio case study projects</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#090D13] p-6 space-y-2">
            <div className="flex items-center justify-between text-white/60">
              <span className="text-xs font-semibold uppercase tracking-wider">Featured on Home</span>
              <Sparkles size={18} className="text-[#BEFF00]" />
            </div>
            <div className="text-3xl font-bold text-[#BEFF00]">
              {projects.filter((p) => p.featured).length}
            </div>
            <p className="text-xs text-white/40">Visible on homepage grid</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#090D13] p-6 space-y-2">
            <div className="flex items-center justify-between text-white/60">
              <span className="text-xs font-semibold uppercase tracking-wider">Client Reviews</span>
              <Quote size={18} className="text-[#BEFF00]" />
            </div>
            <div className="text-3xl font-bold text-white">{testimonials.length}</div>
            <p className="text-xs text-white/40">Testimonials slider tracks</p>
          </div>
        </div>

        {/* Tab Switcher & Primary Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 p-1 bg-white/[0.04] border border-white/10 rounded-full">
            <button
              onClick={() => setActiveTab("projects")}
              className={`flex items-center gap-2 text-xs md:text-sm font-semibold px-6 py-2.5 rounded-full transition-all cursor-pointer ${
                activeTab === "projects"
                  ? "bg-[#BEFF00] text-black shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <FolderKanban size={16} />
              <span>Projects ({projects.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("testimonials")}
              className={`flex items-center gap-2 text-xs md:text-sm font-semibold px-6 py-2.5 rounded-full transition-all cursor-pointer ${
                activeTab === "testimonials"
                  ? "bg-[#BEFF00] text-black shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Quote size={16} />
              <span>Testimonials ({testimonials.length})</span>
            </button>
          </div>

          {activeTab === "projects" ? (
            <button
              onClick={() => {
                setSelectedProject(null);
                setIsProjectModalOpen(true);
              }}
              className="inline-flex items-center gap-2 bg-[#BEFF00] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#9acc00] transition-all text-xs md:text-sm cursor-pointer shadow-xl"
            >
              <Plus size={16} />
              <span>Add New Project</span>
            </button>
          ) : (
            <button
              onClick={() => {
                setSelectedTestimonial(null);
                setSelectedTestimonialIndex(null);
                setIsTestimonialModalOpen(true);
              }}
              className="inline-flex items-center gap-2 bg-[#BEFF00] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#9acc00] transition-all text-xs md:text-sm cursor-pointer shadow-xl"
            >
              <Plus size={16} />
              <span>Add Testimonial</span>
            </button>
          )}
        </div>

        {/* Tab 1: Projects Management */}
        {activeTab === "projects" && (
          <div className="space-y-4">
            {loading ? (
              <div className="py-20 text-center text-white/50 flex flex-col items-center gap-3">
                <Loader2 size={32} className="animate-spin text-[#BEFF00]" />
                <p className="text-sm">Loading projects database...</p>
              </div>
            ) : projects.length === 0 ? (
              <div className="py-16 text-center text-white/50 bg-[#090D13] border border-white/10 rounded-2xl p-8 space-y-3">
                <p className="text-base text-white">No projects found.</p>
                <p className="text-xs text-white/40">Click "Add New Project" above to create your first portfolio item.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {projects.map((proj) => (
                  <div
                    key={proj.slug}
                    className="bg-[#090D13] border border-white/15 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:border-white/30 transition-all shadow-xl"
                  >
                    {/* Thumbnail & Title Info */}
                    <div className="flex items-start md:items-center gap-4">
                      <div className="relative w-20 h-16 rounded-xl border border-white/15 bg-black overflow-hidden shrink-0">
                        {proj.image ? (
                          <Image src={proj.image} alt={proj.title} fill className="object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs text-white/40">
                            No Img
                          </div>
                        )}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base font-bold text-white">{proj.title}</h3>
                          <span className="text-xs font-mono text-white/40">/{proj.slug}</span>
                        </div>
                        <p className="text-xs text-white/60 line-clamp-1 max-w-xl font-light">
                          {proj.description}
                        </p>
                        <div className="flex items-center gap-2 pt-1">
                          {proj.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full text-white/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions & Status Toggles */}
                    <div className="flex items-center gap-3 shrink-0 self-end md:self-center pt-2 md:pt-0">
                      <button
                        onClick={() => handleToggleFeatured(proj)}
                        className={`inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-full border transition-all cursor-pointer ${
                          proj.featured
                            ? "bg-[#BEFF00]/10 border-[#BEFF00]/40 text-[#BEFF00]"
                            : "bg-white/5 border-white/10 text-white/40 hover:text-white"
                        }`}
                      >
                        <Star size={14} className={proj.featured ? "fill-[#BEFF00]" : ""} />
                        <span>{proj.featured ? "Featured" : "Hidden"}</span>
                      </button>

                      <Link
                        href={`/projects/${proj.slug}`}
                        target="_blank"
                        className="p-2.5 rounded-xl border border-white/15 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                        title="View Live Page"
                      >
                        <ExternalLink size={16} />
                      </Link>

                      <button
                        onClick={() => {
                          setSelectedProject(proj);
                          setIsProjectModalOpen(true);
                        }}
                        className="p-2.5 rounded-xl border border-white/15 text-[#BEFF00] hover:bg-[#BEFF00]/10 transition-colors cursor-pointer"
                        title="Edit Project"
                      >
                        <Edit2 size={16} />
                      </button>

                      <button
                        onClick={() => handleDeleteProject(proj.slug)}
                        className="p-2.5 rounded-xl border border-rose-500/20 text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                        title="Delete Project"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Testimonials Management */}
        {activeTab === "testimonials" && (
          <div className="space-y-4">
            {loading ? (
              <div className="py-20 text-center text-white/50 flex flex-col items-center gap-3">
                <Loader2 size={32} className="animate-spin text-[#BEFF00]" />
                <p className="text-sm">Loading testimonials...</p>
              </div>
            ) : testimonials.length === 0 ? (
              <div className="py-16 text-center text-white/50 bg-[#090D13] border border-white/10 rounded-2xl p-8 space-y-3">
                <p className="text-base text-white">No testimonials found.</p>
                <p className="text-xs text-white/40">Click "Add Testimonial" above to add client feedback.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testimonials.map((test, index) => (
                  <div
                    key={index}
                    className="bg-[#090D13] border border-white/15 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-xl relative overflow-hidden"
                  >
                    <div className="space-y-3">
                      <p className="text-sm text-white/90 italic font-light leading-relaxed">
                        "{test.quote}"
                      </p>

                      <div className="flex items-center gap-3 pt-2">
                        {test.avatar && (
                          <div className="w-10 h-10 rounded-full border border-white/20 relative overflow-hidden shrink-0">
                            <Image src={test.avatar} alt={test.author} fill className="object-cover" />
                          </div>
                        )}
                        <div>
                          <h4 className="text-sm font-bold text-white">{test.author}</h4>
                          <p className="text-xs text-[#BEFF00] font-medium">{test.role}</p>
                          <p className="text-[11px] text-white/40">{test.date}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-3 border-t border-white/10">
                      <button
                        onClick={() => {
                          setSelectedTestimonial(test);
                          setSelectedTestimonialIndex(index);
                          setIsTestimonialModalOpen(true);
                        }}
                        className="p-2 rounded-lg border border-white/15 text-[#BEFF00] hover:bg-[#BEFF00]/10 transition-colors cursor-pointer text-xs flex items-center gap-1.5 px-3"
                      >
                        <Edit2 size={14} />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => handleDeleteTestimonial(index)}
                        className="p-2 rounded-lg border border-rose-500/20 text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer text-xs flex items-center gap-1.5 px-3"
                      >
                        <Trash2 size={14} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Render Project Modal */}
      {isProjectModalOpen && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setIsProjectModalOpen(false)}
          onSave={handleSaveProject}
        />
      )}

      {/* Render Testimonial Modal */}
      {isTestimonialModalOpen && (
        <TestimonialModal
          testimonial={selectedTestimonial}
          index={selectedTestimonialIndex}
          onClose={() => setIsTestimonialModalOpen(false)}
          onSave={handleSaveTestimonial}
        />
      )}
    </div>
  );
}
