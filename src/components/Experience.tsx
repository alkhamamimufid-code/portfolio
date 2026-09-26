import { useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { Icon } from "./Icons";
import { Reveal } from "./Reveal";
import { useReveal } from "../hooks/useReveal";
import { career } from "../content/story";
import { education, experience } from "../content/profile";

const COLLAPSED_COUNT = 3;

function highlightsFor(orgId: string) {
  if (orgId === "iust") return education[0]?.highlight ? [education[0].highlight] : [];
  const job = experience.find(
    (e) => e.company.toLowerCase().includes(orgId) || orgId.includes(e.company.toLowerCase().split(" ")[0])
  );
  return job?.highlights ?? [];
}

function extrasFor(orgId: string) {
  return experience.find(
    (e) => e.company.toLowerCase().includes(orgId) || orgId.includes(e.company.toLowerCase().split(" ")[0])
  );
}

export function Experience() {
  const [selected, setSelected] = useState(career.length - 1);
  const [open, setOpen] = useState(false);
  const { ref, visible } = useReveal<HTMLDivElement>();
  const stage = career[selected];
  const highlights = highlightsFor(stage.id);
  const extras = extrasFor(stage.id);
  const collapsible = highlights.length > COLLAPSED_COUNT + 1;
  const shown = collapsible && !open ? highlights.slice(0, COLLAPSED_COUNT) : highlights;

  const select = (i: number) => {
    setSelected(i);
    setOpen(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (selected + (e.key === "ArrowRight" ? 1 : -1) + career.length) % career.length;
    select(next);
    const tabs = e.currentTarget.querySelectorAll<HTMLButtonElement>("[role=tab]");
    tabs[next]?.focus();
  };

  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="eyebrow">Experience</span>
            <h2 className="section__title" id="experience-title">
              From reports to enterprise systems
            </h2>
            <p className="section__lede">
              Each step widened the scope &mdash; from dashboards for one team to the reporting and
              automation estate of a department network. Select a stage to explore it.
            </p>
          </div>
        </Reveal>

        <div
          ref={ref}
          className={`career${visible ? " is-in" : ""}`}
          style={{ "--n": career.length, "--progress": selected / (career.length - 1) } as CSSProperties}
        >
          <div className="career__rail" aria-hidden="true">
            <span className="career__rail-fill" />
          </div>

          <div className="career__tabs" role="tablist" aria-label="Career stages" onKeyDown={onKeyDown}>
            {career.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                id={`stage-tab-${s.id}`}
                aria-selected={selected === i}
                aria-controls="stage-panel"
                tabIndex={selected === i ? 0 : -1}
                className={`career__stage career__stage--${s.kind}${selected === i ? " is-selected" : ""}${i <= selected ? " is-reached" : ""}`}
                onClick={() => select(i)}
                onMouseEnter={() => select(i)}
              >
                <span className="career__dot">
                  <img src={s.logo} alt="" loading="lazy" decoding="async" width="40" height="40" />
                </span>
                <span className="career__org">{s.org}</span>
                <span className="career__period">{s.period}</span>
              </button>
            ))}
          </div>

          <div
            className="career__panel glass"
            role="tabpanel"
            id="stage-panel"
            aria-labelledby={`stage-tab-${stage.id}`}
            key={stage.id}
          >
            <div className="career__panel-head">
              <div>
                <div className="career__role-row">
                  <h3>{stage.role}</h3>
                  {extras?.certificate && (
                    <a
                      href={extras.certificate.href}
                      target="_blank"
                      rel="noreferrer"
                      className="timeline__cert-btn"
                    >
                      {extras.certificate.label} ›
                    </a>
                  )}
                </div>
                <span>
                  {extras?.website ? (
                    <a href={extras.website} target="_blank" rel="noreferrer" className="timeline__company">
                      {stage.org} ›
                    </a>
                  ) : (
                    stage.org
                  )}{" "}
                  · {stage.period}
                </span>
              </div>
              <Icon name={stage.kind === "education" ? "cap" : "building"} className="career__panel-icon" />
            </div>

            <p className="career__headline">{stage.headline}</p>

            <ul className="career__metrics">
              {stage.metrics.map((m) => (
                <li key={m.label}>
                  <b>{m.value}</b>
                  <span>{m.label}</span>
                </li>
              ))}
            </ul>

            <ul className="career__tech" aria-label="Technologies">
              {stage.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            {shown.length > 0 && (
              <>
                <ul className="timeline__highlights career__highlights">
                  {shown.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                {collapsible && (
                  <button
                    type="button"
                    className="timeline__toggle"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                  >
                    {open ? "Show fewer" : `Show all ${highlights.length} highlights`}
                    <span aria-hidden="true">{open ? " ↑" : " ↓"}</span>
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
