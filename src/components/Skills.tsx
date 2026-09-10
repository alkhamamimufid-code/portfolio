import { featuredSkills, skillGroups } from "../content/profile";
import { skillIcons } from "./SkillIcons";
import { Reveal } from "./Reveal";
import { onSpotlightMove } from "../hooks/useSpotlight";

export function Skills() {
  return (
    <section className="section section--grey" id="skills">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <span className="eyebrow">Skills</span>
            <h2 className="section__title">Toolbox</h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="featured-skills">
            {featuredSkills.map((skill) => {
              const Icon = skillIcons[skill.icon];
              return (
                <div className="featured-skill spotlight" key={skill.name} onPointerMove={onSpotlightMove}>
                  <span className="featured-skill__sheen" aria-hidden="true" />
                  <span className="featured-skill__icon">{Icon && <Icon />}</span>
                  <span className="featured-skill__name">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="skills">
            {skillGroups.map((group) => (
              <div className="skills__group" key={group.label}>
                <h3>{group.label}</h3>
                <div className="tag-cloud">
                  {group.skills.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
