import { education } from "../content/profile";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section className="section section--grey" id="education">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="eyebrow">Education</span>
            <h2 className="section__title">Where it started</h2>
          </div>
        </Reveal>

        <div className="education-layout">
          <Reveal className="education-photo-wrap">
            <div className="education-photo">
              <img
                src="/graduation-cutout.png"
                alt="Mufid Alkhamami at graduation"
                className="education-photo__img"
              />
              <div className="education-photo__shadow" />
            </div>
          </Reveal>

          <div className="timeline">
            {education.map((entry, i) => (
              <Reveal key={entry.school} delay={i * 80} className="timeline__row">
                <div className="timeline__item">
                  <div className="timeline__period">{entry.period}</div>
                  <div>
                    <h3 className="timeline__role">{entry.degree}</h3>
                    <p className="timeline__company">{entry.school}</p>
                    <p className="timeline__location">{entry.location}</p>
                    <ul className="timeline__highlights">
                      <li>{entry.highlight}</li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
