import "./App.css";
import { LiquidGlassFilterDefs } from "./components/LiquidGlassButton";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StatBand } from "./components/StatBand";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Certificates } from "./components/Certificates";
import { Skills } from "./components/Skills";
import { Leadership } from "./components/Leadership";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="page">
      <LiquidGlassFilterDefs />
      <Header />
      <Hero />
      <StatBand />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Certificates />
      <Skills />
      <Leadership />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
