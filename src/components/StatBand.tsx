import { stats } from "../content/profile";
import { Reveal } from "./Reveal";

export function StatBand() {
  return (
    <section className="section section--dark">
      <div className="container">
        <Reveal>
          <div className="stat-band">
            {stats.map((s) => (
              <div className="stat-band__item" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
