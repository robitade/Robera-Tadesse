import fs from "fs";
import path from "path";
import { Project, projects as initialProjects } from "@/data/projects";

const dataFilePath = path.join(process.cwd(), "src", "data", "store", "projects.json");

function ensureDirectoryExists(filePath: string) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function getStoredProjects(): Project[] {
  try {
    ensureDirectoryExists(dataFilePath);
    if (!fs.existsSync(dataFilePath)) {
      fs.writeFileSync(dataFilePath, JSON.stringify(initialProjects, null, 2), "utf-8");
      return initialProjects;
    }
    const rawData = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(rawData) as Project[];
  } catch (error) {
    console.error("Error reading projects store:", error);
    return initialProjects;
  }
}

export function saveProjects(projects: Project[]): void {
  try {
    ensureDirectoryExists(dataFilePath);
    fs.writeFileSync(dataFilePath, JSON.stringify(projects, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing projects store:", error);
    throw error;
  }
}
