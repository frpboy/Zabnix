import Loader from "@/components/common/Loader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Ecosystem from "@/components/sections/Ecosystem";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import About from "@/components/sections/About";
import CareersPreview from "@/components/sections/CareersPreview";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <Services />
        <Products />
        <Ecosystem />
        <ProjectsPreview />
        <About />
        <CareersPreview />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
