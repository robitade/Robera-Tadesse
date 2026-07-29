import fs from "fs";
import path from "path";
import { Testimonial, testimonials as initialTestimonials } from "@/data/testimonials";

const dataFilePath = path.join(process.cwd(), "src", "data", "store", "testimonials.json");

function ensureDirectoryExists(filePath: string) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function getStoredTestimonials(): Testimonial[] {
  try {
    ensureDirectoryExists(dataFilePath);
    if (!fs.existsSync(dataFilePath)) {
      fs.writeFileSync(dataFilePath, JSON.stringify(initialTestimonials, null, 2), "utf-8");
      return initialTestimonials;
    }
    const rawData = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(rawData) as Testimonial[];
  } catch (error) {
    console.error("Error reading testimonials store:", error);
    return initialTestimonials;
  }
}

export function saveTestimonials(testimonials: Testimonial[]): void {
  try {
    ensureDirectoryExists(dataFilePath);
    fs.writeFileSync(dataFilePath, JSON.stringify(testimonials, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing testimonials store:", error);
    throw error;
  }
}
