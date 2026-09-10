import { leadership } from "../content/profile";
import { Reveal } from "./Reveal";
import { onSpotlightMove } from "../hooks/useSpotlight";

export function Leadership() {
  return (
    <section className="section section--wash" id="leadership">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="eyebrow">Leadership &amp; Community</span>
            <h2 className="section__title">Beyond the dashboards</h2>
            <p className="section__lede">
              34 of my certificates trace back to this side of the work — community leadership
              and volunteering in Syria and the UAE.
            </p>
          </div>
        </Reveal>
        <div className="leadership-list">
          {leadership.map((item, i) => (
            <Reveal key={item} delay={i * 80}>
              <div className="leadership-item spotlight" onPointerMove={onSpotlightMove}>
                <p>{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
