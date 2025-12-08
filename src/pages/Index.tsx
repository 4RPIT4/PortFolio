import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Arpita Singh | Tech Student & Web Designer Portfolio</title>
        <meta
          name="description"
          content="Arpita Singh is a BE CSE student and aspiring frontend developer from Uttar Pradesh, India. Explore her portfolio showcasing web design projects and technical skills."
        />
        <meta
          name="keywords"
          content="Arpita Singh, Frontend Developer, Web Designer, Portfolio, CSE Student, India"
        />
        <meta property="og:title" content="Arpita Singh | Tech Student & Web Designer Portfolio" />
        <meta
          property="og:description"
          content="Explore Arpita Singh's portfolio - a creative tech student passionate about frontend design and web development."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://arpita-portfolio.lovable.app" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Leadership />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
