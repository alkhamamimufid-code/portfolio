import { useState } from "react";
import { Icon } from "./Icons";
import { Reveal } from "./Reveal";
import { capabilities, platform } from "../content/story";
import type { CapabilityNode } from "../content/story";

const PLATFORM = "Power Platform";

function NodeDetail({ node }: { node: CapabilityNode }) {
  // Keyed by label so the entrance animation replays for each selection.
  return (
    <div className="cap__detail" key={node.label} aria-live="polite">
      <Icon name={node.icon} className="cap__detail-icon" />
      <div>
        <strong>{node.label}</strong>
        <p>{node.use}</p>
      </div>
    </div>
  );
}

export function Capabilities() {
  const [active, setActive] = useState<Record<string, number>>({});
  const pick = (group: string, i: number) => setActive((a) => ({ ...a, [group]: i }));
  const idx = (group: string) => active[group] ?? 0;

  return (
    <section className="section section--sky" id="build" aria-labelledby="build-title">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="eyebrow">What I build</span>
            <h2 className="section__title" id="build-title">
              One connected toolset
            </h2>
            <p className="section__lede">
              Reporting, workflow and data engineering work as one system. Hover or tap any tool to
              see what I actually used it for.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="cap">
            <div className="cap__cols">
              {capabilities.map((cap) => (
                <div className="cap__col glass" key={cap.id}>
                  <header className="cap__head">
                    <span className="cap__head-icon">
                      <Icon name={cap.icon} />
                    </span>
                    <div>
                      <h3>{cap.title}</h3>
                      <span>{cap.subtitle}</span>
                    </div>
                  </header>
                  <ul className="cap__nodes">
                    {cap.nodes.map((node, i) => (
                      <li key={node.label}>
                        <button
                          type="button"
                          className={`cap__node${idx(cap.title) === i ? " is-active" : ""}`}
                          onMouseEnter={() => pick(cap.title, i)}
                          onFocus={() => pick(cap.title, i)}
                          onClick={() => pick(cap.title, i)}
                        >
                          <Icon name={node.icon} />
                          {node.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <NodeDetail node={cap.nodes[idx(cap.title)]} />
                </div>
              ))}
            </div>

            <div className="cap__platform glass">
              <span className="cap__platform-title">Microsoft Power Platform</span>
              <ul className="cap__platform-nodes">
                {platform.map((node, i) => (
                  <li key={node.label}>
                    <button
                      type="button"
                      className={`cap__node${idx(PLATFORM) === i ? " is-active" : ""}`}
                      onMouseEnter={() => pick(PLATFORM, i)}
                      onFocus={() => pick(PLATFORM, i)}
                      onClick={() => pick(PLATFORM, i)}
                    >
                      <Icon name={node.icon} />
                      {node.label}
                    </button>
                  </li>
                ))}
              </ul>
              <NodeDetail node={platform[idx(PLATFORM)]} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
