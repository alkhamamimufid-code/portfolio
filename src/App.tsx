import "./App.css";
import "./visuals.css";
import { LiquidGlassFilterDefs } from "./components/LiquidGlassButton";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ByTheNumbers } from "./components/ByTheNumbers";
import { About } from "./components/About";
import { Capabilities } from "./components/Capabilities";
import { DataEcosystem } from "./components/DataEcosystem";
import { Experience } from "./components/Experience";
import { CaseStudies } from "./components/CaseStudies";
import { Education } from "./components/Education";
import { Certificates } from "./components/Certificates";
import { Skills } from "./components/Skills";
import { Leadership } from "./components/Leadership";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { HeroStack } from "./components/HeroStack";
import { SectionFx } from "./components/SectionFx";

function App() {
  return (
    <div className="page">
      <LiquidGlassFilterDefs />
      <Header />
      <SectionFx />
      <main>
        <HeroStack>
          <Hero />
          <ByTheNumbers />
        </HeroStack>
        <About />
        <HeroStack>
          <Capabilities />
          <DataEcosystem />
        </HeroStack>
        <Experience />
        <CaseStudies />
        <Education />
        <Certificates />
        <Skills />
        <Leadership />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
