import { languages, person } from "../content/profile";
import { Reveal } from "./Reveal";
import { onSpotlightMove } from "../hooks/useSpotlight";

export function About() {
  return (
    <section className="section section--grey" id="about">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="eyebrow">About</span>
            <h2 className="section__title">What I actually do</h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="about">
            <p className="about__text">{person.objective}</p>
            <div className="about__languages spotlight" onPointerMove={onSpotlightMove}>
              <h3>Languages</h3>
              {languages.map((lang) => (
                <div className="about__language-row" key={lang.name}>
                  <span>{lang.name}</span>
                  <span>{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
