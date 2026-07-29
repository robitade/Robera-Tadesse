import { notFound } from "next/navigation";
import { getStoredProjects } from "@/lib/projectsStore";
import CaseStudyLayout from "@/components/project/CaseStudyLayout";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getStoredProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const projects = getStoredProjects();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Robbie | UI/UX Designer`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const projects = getStoredProjects();
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];

  const prevProject =
    projectIndex > 0
      ? projects[projectIndex - 1]
      : projects[projects.length - 1];

  const nextProject =
    projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : projects[0];

  return (
    <>
      <Navbar />
      <CaseStudyLayout
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />
      <Footer />
    </>
  );
}
