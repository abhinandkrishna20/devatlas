import type { SkillGroup } from "../../data/Learning/learning";
// import './learning_style.css';
interface SkillProgressProps {
  groups: SkillGroup[];
}

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  const isLearning = percentage < 75;

  return (
   <li className="flex items-center gap-2.5">
      <span className="text-sm text-slate-200 min-w-[86px]">{name}</span>
      <div
        className="flex-1 h-1.5 bg-[#0f1117] rounded-full overflow-hidden border border-[#2a2d3e]"
        role="progressbar"
        aria-label={`${name} proficiency`}
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`h-full rounded-full transition-[width] duration-400 ease-out ${
            isLearning ? 'bg-amber-500' : 'bg-[#7f77dd]'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="font-mono text-[11px] text-slate-500 min-w-8 text-right">{percentage}%</span>
    </li>
  );
}

export default function SkillProgress({ groups }: SkillProgressProps) {
  return (
   <section className="bg-[#1a1d27] border border-white rounded-xl px-6 py-5">
      <header className="flex items-center gap-2 mb-5">
        <span className="text-sm text-[#7f77dd]" aria-hidden="true">▦</span>
        <h2 className="font-mono text-[11px] font-medium text-slate-200 uppercase tracking-wider m-0">
          Skill Progress
        </h2>
      </header>

      <div className="flex flex-col gap-5">
        {groups.map((group) => (
          <div key={group.category}>
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-2.5">
              {group.category}
            </p>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
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
      </div>
    </section>
  );
}
