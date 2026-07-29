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
      <main>
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
