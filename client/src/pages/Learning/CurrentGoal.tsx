import type { LearningGoal } from '../../types/learning';

interface CurrentGoalProps {
  goal: LearningGoal;
}

export default function CurrentGoal({ goal }: CurrentGoalProps) {
  const { title, targetDate, currentFocus } = goal;

  return (
    <section className="bg-[#1a1d27] border border-white rounded-xl px-6 py-5">
      <header className="flex items-center gap-2 mb-5">
        <span className="text-sm text-[#7f77dd]" aria-hidden="true">◎</span>
        <h2 className="font-mono text-[11px] font-medium text-slate-200 uppercase tracking-wider m-0">
          Current Goal
        </h2>
      </header>

      <p className="text-[15px] font-medium text-slate-200 m-0 mb-1">{title}</p>
      <p className="font-mono text-xs text-slate-500 m-0 mb-5">Target → {targetDate}</p>

      <div>
        <p className="text-[10px] uppercase tracking-wider text-slate-500 m-0 mb-2">Current Focus</p>
        <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0" aria-label="Topics currently being studied">
          {currentFocus.map((topic) => (
            <li 
              key={topic} 
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#0f1117] border border-[#2a2d3e] text-slate-200"
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}