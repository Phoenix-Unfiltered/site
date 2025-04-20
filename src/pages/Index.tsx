
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BlogPreview from "@/components/BlogPreview";
import Toolbox from "@/components/Toolbox";
import FrikkiesCorner from "@/components/FrikkiesCorner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <FrikkiesCorner />
        <BlogPreview />
        <Toolbox />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
