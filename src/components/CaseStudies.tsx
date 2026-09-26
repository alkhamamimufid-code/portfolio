import { useState } from "react";
import { ClockCount } from "./CountUp";
import { Icon } from "./Icons";
import { BarRow } from "./ImpactVisuals";
import { Reveal } from "./Reveal";
import { caseStudies } from "../content/story";
import type { CaseVisual } from "../content/story";

const WORKFLOW_STEPS = ["Email", "SharePoint", "Excel validation", "Approval", "Tracking"];

function ResultVisual({ kind }: { kind: CaseVisual }) {
  if (kind === "speed") {
    return (
      <div className="ba ba--flat is-in">
        <BarRow tag="Before" width={100} tone="before" value={<ClockCount from={240} to={240} />} />
        <BarRow tag="After" width={3.4} tone="after" value={<ClockCount from={240} to={8} />} />
      </div>
    );
  }
  if (kind === "limit") {
    return (
      <div className="ba ba--flat is-in">
        <BarRow tag="Native cap" width={1} tone="before" value="~150K" />
        <BarRow tag="With flow" width={100} tone="after" value="15M" />
      </div>
    );
  }
  if (kind === "reconciliation") {
    return (
      <div className="cs__swap">
        <div className="cs__swap-side">
          <span className="ba__tag">Before</span>
          <span className="cs__swap-people">
            {Array.from({ length: 5 }, (_, i) => (
              <Icon key={i} name="user" />
            ))}
          </span>
          <b>Monthly</b>
        </div>
        <Icon name="arrow" className="cs__swap-arrow" />
        <div className="cs__swap-side cs__swap-side--after">
          <span className="ba__tag">After</span>
          <span className="cs__swap-people">
            <Icon name="user" />
          </span>
          <b>Hourly</b>
        </div>
      </div>
    );
  }
  return (
    <div className="cs__steps" aria-label="Workflow steps">
      {WORKFLOW_STEPS.map((step, i) => (
        <span key={step} className="cs__step" style={{ animationDelay: `${i * 120}ms` }}>
          {step}
        </span>
      ))}
      <span className="cs__click">1 click</span>
    </div>
  );
}

export function CaseStudies() {
  const [selected, setSelected] = useState(0);
  const study = caseStudies[selected];

  return (
    <section className="section section--tide" id="case-studies" aria-labelledby="cases-title">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="eyebrow">Case studies</span>
            <h2 className="section__title" id="cases-title">
              Problem &rarr; result
            </h2>
            <p className="section__lede">Four projects, each from the problem I was handed to the result it delivered.</p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="cs">
            <div className="cs__tabs" role="tablist" aria-label="Case studies">
              {caseStudies.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={selected === i}
                  aria-controls="case-panel"
                  id={`case-tab-${c.id}`}
                  className={`cs__tab${selected === i ? " is-selected" : ""}`}
                  onClick={() => setSelected(i)}
                >
                  <span className="cs__tab-index">0{i + 1}</span>
                  {c.title}
                </button>
              ))}
            </div>

            <div
              className="cs__panel glass"
              role="tabpanel"
              id="case-panel"
              aria-labelledby={`case-tab-${study.id}`}
              key={study.id}
            >
              <div className="cs__step-col">
                <span className="cs__label">Problem</span>
                <p>{study.problem}</p>
              </div>
              <div className="cs__step-col">
                <span className="cs__label">Approach</span>
                <p>{study.approach}</p>
              </div>
              <div className="cs__step-col">
                <span className="cs__label">Technology</span>
                <ul className="career__tech">
                  {study.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="cs__step-col cs__step-col--result">
                <span className="cs__label">Result</span>
                <ResultVisual kind={study.visual} />
                <p className="cs__result">{study.result}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
