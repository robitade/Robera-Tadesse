import { NextResponse } from "next/server";
import { getStoredTestimonials, saveTestimonials } from "@/lib/testimonialsStore";
import { Testimonial } from "@/data/testimonials";

export const dynamic = "force-dynamic";

export async function GET() {
  const testimonials = getStoredTestimonials();
  return NextResponse.json({ success: true, testimonials });
}

export async function POST(request: Request) {
  try {
    const newTestimonial: Testimonial = await request.json();
    const testimonials = getStoredTestimonials();

    const updatedTestimonials = [newTestimonial, ...testimonials];
    saveTestimonials(updatedTestimonials);

    return NextResponse.json({ success: true, testimonials: updatedTestimonials });
  } catch (error) {
    console.error("Failed to add testimonial:", error);
    return NextResponse.json({ success: false, message: "Failed to add testimonial" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { index, testimonial }: { index: number; testimonial: Testimonial } = await request.json();
    const testimonials = getStoredTestimonials();

    if (index < 0 || index >= testimonials.length) {
      return NextResponse.json({ success: false, message: "Testimonial not found" }, { status: 404 });
    }

    testimonials[index] = testimonial;
    saveTestimonials(testimonials);

    return NextResponse.json({ success: true, testimonials });
  } catch (error) {
    console.error("Failed to update testimonial:", error);
    return NextResponse.json({ success: false, message: "Failed to update testimonial" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const indexStr = searchParams.get("index");

    if (indexStr === null) {
      return NextResponse.json({ success: false, message: "Missing index parameter" }, { status: 400 });
    }

    const index = parseInt(indexStr, 10);
    const testimonials = getStoredTestimonials();

    if (isNaN(index) || index < 0 || index >= testimonials.length) {
      return NextResponse.json({ success: false, message: "Invalid index" }, { status: 400 });
    }

    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    saveTestimonials(updatedTestimonials);

    return NextResponse.json({ success: true, testimonials: updatedTestimonials });
  } catch (error) {
    console.error("Failed to delete testimonial:", error);
    return NextResponse.json({ success: false, message: "Failed to delete testimonial" }, { status: 500 });
  }
}
