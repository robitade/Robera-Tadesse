import { NextResponse } from "next/server";
import { getStoredProjects, saveProjects } from "@/lib/projectsStore";
import { Project } from "@/data/projects";

export const dynamic = "force-dynamic";

export async function GET() {
  const projects = getStoredProjects();
  return NextResponse.json({ success: true, projects });
}

export async function POST(request: Request) {
  try {
    const newProject: Project = await request.json();
    const projects = getStoredProjects();

    // Check slug duplication
    if (projects.some((p) => p.slug === newProject.slug)) {
      return NextResponse.json(
        { success: false, message: "A project with this slug already exists." },
        { status: 400 }
      );
    }

    const updatedProjects = [newProject, ...projects];
    saveProjects(updatedProjects);

    return NextResponse.json({ success: true, projects: updatedProjects });
  } catch (error) {
    console.error("Failed to add project:", error);
    return NextResponse.json({ success: false, message: "Failed to add project" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedProject: Project = await request.json();
    const projects = getStoredProjects();

    const index = projects.findIndex((p) => p.slug === updatedProject.slug);
    if (index === -1) {
      return NextResponse.json({ success: false, message: "Project not found" }, { status: 404 });
    }

    projects[index] = updatedProject;
    saveProjects(projects);

    return NextResponse.json({ success: true, projects });
  } catch (error) {
    console.error("Failed to update project:", error);
    return NextResponse.json({ success: false, message: "Failed to update project" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ success: false, message: "Missing slug parameter" }, { status: 400 });
    }

    const projects = getStoredProjects();
    const updatedProjects = projects.filter((p) => p.slug !== slug);
    saveProjects(updatedProjects);

    return NextResponse.json({ success: true, projects: updatedProjects });
  } catch (error) {
    console.error("Failed to delete project:", error);
    return NextResponse.json({ success: false, message: "Failed to delete project" }, { status: 500 });
  }
}
