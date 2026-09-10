import { useEffect, useState } from "react";
import { person, featuredSkills } from "../content/profile";
import { LiquidGlassButton } from "./LiquidGlassButton";
import { skillIcons } from "./SkillIcons";
import { onSpotlightMove } from "../hooks/useSpotlight";

const HERO_SKILLS = [...featuredSkills, { name: "AI", icon: "ai" }];

export function Hero() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), 30);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero-section${entered ? " hero-section--entered" : ""}`} id="top">
      <span className="hero__accent-block hero__accent-block--a" aria-hidden="true" />
      <span className="hero__accent-block hero__accent-block--b" aria-hidden="true" />

      <div className="hero container">
        <span className="hero__eyebrow hero__enter">{person.role}</span>

        <div className="hero__stage hero__enter">
          <h1 className="hero__name">
            <span className="hero__name-line">MUFID</span>
            <span className="hero__name-line hero__name-line--outline">ALKHAMAMI</span>
          </h1>

          <div className="hero__portrait-frame">
            <img
              className="hero__portrait"
              src="/hero-portrait-cutout.png"
              alt="Portrait of Mufid Alkhamami"
            />
          </div>
        </div>

        <span className="hero__float-badge hero__enter">
          <span className="hero__float-badge-dot" />
          Available for work
        </span>

        <div className="featured-skills hero__skills hero__enter">
          {HERO_SKILLS.map((skill) => {
            const Icon = skillIcons[skill.icon];
            return (
              <div className="featured-skill spotlight" key={skill.name} onPointerMove={onSpotlightMove}>
                <span className="featured-skill__sheen" aria-hidden="true" />
                <span className="featured-skill__icon">{Icon && <Icon />}</span>
                <span className="featured-skill__name">{skill.name}</span>
              </div>
            );
          })}
        </div>

        <p className="hero__tagline hero__enter">{person.tagline}</p>

        <div className="hero__actions hero__enter">
          <LiquidGlassButton href="#contact">Get in touch</LiquidGlassButton>
          <LiquidGlassButton href={person.cvPath} download>
            Download CV ›
          </LiquidGlassButton>
        </div>
      </div>
    </section>
  );
}
