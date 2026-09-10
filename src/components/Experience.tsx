import { experience } from "../content/profile";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="eyebrow">Experience</span>
            <h2 className="section__title">Where I&rsquo;ve worked</h2>
          </div>
        </Reveal>
        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80} className="timeline__row">
              <div className="timeline__item">
                <div className="timeline__meta">
                  <img src={job.logo} alt="" className="timeline__logo" />
                  <div className="timeline__period">{job.period}</div>
                </div>
                <div>
                  <div className="timeline__role-row">
                    <h3 className="timeline__role">{job.role}</h3>
                    {job.certificate && (
                      <a
                        href={job.certificate.href}
                        target="_blank"
                        rel="noreferrer"
                        className="timeline__cert-btn"
                      >
                        {job.certificate.label} ›
                      </a>
                    )}
                  </div>
                  <a
                    href={job.website}
                    target="_blank"
                    rel="noreferrer"
                    className="timeline__company"
                  >
                    {job.company} ›
                  </a>
                  <p className="timeline__location">{job.location}</p>
                  <ul className="timeline__highlights">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
