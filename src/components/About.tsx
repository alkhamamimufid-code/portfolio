import { languages, person } from "../content/profile";
import { pillars, positioning } from "../content/story";
import { Icon } from "./Icons";
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
            <div className="about__main">
              <p className="about__statement">{positioning}</p>
              <ul className="pillars">
                {pillars.map((p) => (
                  <li className="pillar" key={p.title}>
                    <span className="pillar__icon">
                      <Icon name={p.icon} />
                    </span>
                    <div>
                      <h3>{p.title}</h3>
                      <p>{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <details className="about__more">
                <summary>Full professional summary</summary>
                <p className="about__text">{person.objective}</p>
              </details>
            </div>
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
