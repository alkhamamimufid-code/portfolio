import { projects } from "../content/profile";
import { Reveal } from "./Reveal";
import { onSpotlightMove } from "../hooks/useSpotlight";

export function Projects() {
  return (
    <section className="section section--wash" id="projects">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="eyebrow">Projects</span>
            <h2 className="section__title">Selected work</h2>
            <p className="section__lede">
              Pulled from performance reviews and shipped dashboards — the ones with a number
              attached.
            </p>
          </div>
        </Reveal>
        <div className="projects__grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 80}>
              <article className="project-card spotlight" onPointerMove={onSpotlightMove}>
                <div className="project-card__top">
                  <h3 className="project-card__title">{p.title}</h3>
                  <span className="project-card__when">
                    <span className="project-card__period">{p.period}</span>
                    <span className="project-card__company">{p.company}</span>
                  </span>
                </div>
                <span className="project-card__impact">{p.impact}</span>
                <p className="project-card__desc">{p.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
