import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Focus from "@/components/sections/Focus";
import HowItWorks from "@/components/sections/HowItWorks";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-bg-primary overflow-hidden">
        {/* Continuous atmospheric page canvas lighting */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Subtle vertical glow stream */}
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(72,161,251,0.04)_0%,transparent_70%)]" />
          <div className="absolute top-[40%] right-[10%] w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(254,160,72,0.03)_0%,transparent_70%)]" />
          <div className="absolute top-[70%] left-[5%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(72,161,251,0.04)_0%,transparent_70%)]" />
        </div>

        <Hero />
        <About />
        <Projects />
        <HowItWorks />
        <Testimonials />
        <Focus />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
