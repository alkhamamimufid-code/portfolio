import { useState } from "react";
import type { CSSProperties } from "react";
import { skillGroups } from "../content/profile";
import { Reveal } from "./Reveal";

const ACCENTS = ["#0b7d72", "#26689a", "#0e7490", "#2a9d8f", "#3b82c4"];

export function Skills() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const total = skillGroups.reduce((n, g) => n + g.skills.length, 0);
  const matches = q
    ? skillGroups.reduce((n, g) => n + g.skills.filter((s) => s.toLowerCase().includes(q)).length, 0)
    : total;

  return (
    <section className="section section--foam" id="skills">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="eyebrow">Skills</span>
            <h2 className="section__title">Full toolbox</h2>
            <p className="section__lede">
              Everything at a glance, grouped by area. Type to find a specific tool.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="sk-find glass">
            <svg className="sk-find__icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="m20 20-3.5-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              className="sk-find__input"
              placeholder="Search a tool, e.g. DAX, SQL, SharePoint"
              aria-label="Filter skills"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Escape" && setQuery("")}
            />
            {q && (
              <button type="button" className="sk-find__clear" aria-label="Clear search" onClick={() => setQuery("")}>
                ×
              </button>
            )}
            <span className={`sk-find__count${q && matches === 0 ? " is-empty" : ""}`} aria-live="polite">
              {q ? `${matches} / ${total}` : total}
            </span>
          </div>
        </Reveal>

        <div className="sk-grid">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={(gi % 3) * 70}>
              <article
                className="sk-card glass"
                style={{ "--c": ACCENTS[gi % ACCENTS.length] } as CSSProperties}
              >
                <header className="sk-card__head">
                  <span className="sk-card__index">0{gi + 1}</span>
                  <h3>{group.label}</h3>
                  <span className="sk-card__count">{group.skills.length}</span>
                </header>
                <ul className="sk-card__chips">
                  {group.skills.map((skill) => {
                    const dim = q !== "" && !skill.toLowerCase().includes(q);
                    return (
                      <li key={skill} className={`sk-chip${dim ? " is-dim" : ""}`}>
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
