import { Fragment, useState } from "react";
import { Icon } from "./Icons";
import { Reveal } from "./Reveal";
import { flows } from "../content/story";

export function DataEcosystem() {
  const [active, setActive] = useState<Record<string, number>>({ reporting: 0, automation: 0 });

  return (
    <section
      className="section section--dark ecosystem"
      id="ecosystem"
      aria-labelledby="ecosystem-title"
    >
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="eyebrow">Data ecosystem</span>
            <h2 className="section__title" id="ecosystem-title">
              The systems behind the dashboards
            </h2>
            <p className="section__lede">
              I don&rsquo;t just make dashboards &mdash; I build the pipelines that feed them and
              the workflows around them. Select a step to see what happens there.
            </p>
          </div>
        </Reveal>

        {flows.map((flow, f) => (
          <Reveal key={flow.id} delay={f * 100}>
            <div className="flow">
              <div className="flow__head">
                <h3>{flow.title}</h3>
                <span>{flow.caption}</span>
              </div>
              <ol className={`flow__row flow__row--${flow.nodes.length}`}>
                {flow.nodes.map((node, i) => (
                  <Fragment key={node.title}>
                    <li className="flow__item">
                      <button
                        type="button"
                        className={`flow__node glass-dark${active[flow.id] === i ? " is-active" : ""}`}
                        onMouseEnter={() => setActive((a) => ({ ...a, [flow.id]: i }))}
                        onFocus={() => setActive((a) => ({ ...a, [flow.id]: i }))}
                        onClick={() => setActive((a) => ({ ...a, [flow.id]: i }))}
                      >
                        <Icon name={node.icon} className="flow__icon" />
                        <strong>{node.title}</strong>
                        <span>{node.sub}</span>
                      </button>
                      {active[flow.id] === i && <p className="flow__node-detail">{node.detail}</p>}
                    </li>
                    {i < flow.nodes.length - 1 && (
                      <li className="flow__link" aria-hidden="true">
                        <span />
                      </li>
                    )}
                  </Fragment>
                ))}
              </ol>
              <p className="flow__detail" key={active[flow.id]} aria-live="polite">
                {flow.nodes[active[flow.id]].detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
