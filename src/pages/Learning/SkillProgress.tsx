import type { SkillGroup } from "../../data/Learning/learning";

interface SkillProgressProps {
  groups: SkillGroup[];
}

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  const isLearning = percentage < 75;

  return (
    <li className="skill-row">
      <span className="skill-name">{name}</span>
      <div
        className="skill-track"
        role="progressbar"
        aria-label={`${name} proficiency`}
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`skill-fill ${isLearning ? 'skill-fill--learning' : ''}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="skill-pct">{percentage}%</span>
    </li>
  );
}

export default function SkillProgress({ groups }: SkillProgressProps) {
  return (
    <section className="card skill-progress">
      <header className="card-header">
        <span className="card-icon" aria-hidden="true">▦</span>
        <h2 className="card-title">Skill Progress</h2>
      </header>

      {groups.map((group) => (
        <div key={group.category} className="skill-group">
          <p className="skill-group-label">{group.category}</p>
          <ul className="skill-list">
            {group.skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
