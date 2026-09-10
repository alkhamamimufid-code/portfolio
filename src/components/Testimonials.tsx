import { testimonials } from "../content/profile";
import { Reveal } from "./Reveal";
import { onSpotlightMove } from "../hooks/useSpotlight";

export function Testimonials() {
  return (
    <section className="section section--dark">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="eyebrow">Recommendations</span>
            <h2 className="section__title">What colleagues say</h2>
          </div>
        </Reveal>
        <div className="testimonials">
          {testimonials.map((t, i) => (
            <Reveal key={t.quote} delay={(i % 6) * 80}>
              <div className="testimonial glass-dark spotlight" onPointerMove={onSpotlightMove}>
                <p className="testimonial__quote">&ldquo;{t.quote}&rdquo;</p>
                {t.name && (
                  <span className="testimonial__name">
                    {t.name}
                    {t.role && <span className="testimonial__role"> · {t.role}</span>}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
