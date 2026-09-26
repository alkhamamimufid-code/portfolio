import { CountUp } from "./CountUp";
import { EfficiencyPanel, ReconciliationPanel, SpeedPanel } from "./ImpactVisuals";
import { RowsMotion, SatisfactionMotion } from "./MetricMotions";
import { Reveal } from "./Reveal";
import { dataSources, departments } from "../content/story";

const handlingDetails = ["Connectivity", "Scheduled refreshes", "Troubleshooting", "Enhancements"];

export function ByTheNumbers() {
  return (
    <section className="section section--dark numbers" id="numbers" aria-labelledby="numbers-title">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="eyebrow">By the numbers</span>
            <h2 className="section__title" id="numbers-title">
              Scale you can measure
            </h2>
            <p className="section__lede">Real figures from the systems I run and build — before and after.</p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="chain" role="group" aria-label="Scale of the reporting estate">
            <div className="chain__node chain__node--hover" tabIndex={0}>
              <span className="chain__value">
                <CountUp value={50} suffix="+" />
              </span>
              <span className="chain__label">Enterprise dashboards</span>
              <span className="chain__reveal">{handlingDetails.join(" · ")}</span>
            </div>

            <span className="chain__link" aria-hidden="true" />

            <div className="chain__node chain__node--hover" tabIndex={0}>
              <span className="chain__value">
                <CountUp value={8} />
              </span>
              <span className="chain__label">Departments</span>
              <span className="chain__reveal">{departments.join(" · ")}</span>
            </div>

            <span className="chain__link" aria-hidden="true" />

            <div className="chain__node chain__node--hover" tabIndex={0}>
              <span className="chain__value chain__value--word">Multiple</span>
              <span className="chain__label">Data sources</span>
              <span className="chain__reveal">{dataSources.join(" · ")}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="tiles tiles--pair">
            <RowsMotion />
            <SatisfactionMotion />
          </div>
        </Reveal>

        <div className="ba-grid">
          <Reveal>
            <SpeedPanel />
          </Reveal>
          <Reveal delay={80}>
            <ReconciliationPanel />
          </Reveal>
          <Reveal delay={160}>
            <EfficiencyPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
