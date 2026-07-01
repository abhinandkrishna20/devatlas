import type { HeroStats } from "../../data/Learning/learning";
// import './learning_style.css';
interface LearningHeroProps {
  stats: HeroStats;
}

export default function LearningHero({ stats }: LearningHeroProps) {
  const { startDate, targetRole, streakDays, overallProgress } = stats;

  return (
    <section className="bg-[#1a1d27] border border-white rounded-xl p-8 pb-7 mb-5">
      <div className="mb-6">
        <p className="font-mono text-[11px] tracking-widest uppercase text-slate-500 m-0 mb-2">
          DevAtlas / Learning
        </p>
        <h1 className="font-mono text-2xl font-medium text-slate-200 m-0 mb-1.5">
          Learning Dashboard
        </h1>
        <p className="text-sm text-slate-500 m-0">
          Tracking the journey from hobby developer → professional {targetRole}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
        <div className="bg-[#0f1117] border border-[#2a2d3e] rounded-lg p-3 px-4 flex flex-col gap-1">
          <span className="text-[11px] text-slate-500">Started</span>
          <span className="font-mono text-base font-medium text-slate-200">{startDate}</span>
        </div>

        <div className="bg-[#0f1117] border border-[#2a2d3e] rounded-lg p-3 px-4 flex flex-col gap-1">
          <span className="text-[11px] text-slate-500">Target</span>
          <span className="font-mono text-base font-medium text-slate-200">{targetRole} job</span>
        </div>

        <div className="bg-[#0f1117] border border-[#2a2d3e] rounded-lg p-3 px-4 flex flex-col gap-1">
          <span className="text-[11px] text-slate-500">Streak</span>
          <span className="font-mono text-base font-medium text-emerald-500">{streakDays} days</span>
        </div>

        <div className="bg-[#0f1117] border border-[#2a2d3e] rounded-lg p-3 px-4 flex flex-col gap-1">
          <span className="text-[11px] text-slate-500">Overall progress</span>
          <span className="font-mono text-base font-medium text-[#7f77dd]">{overallProgress}%</span>
          <div className="h-1 bg-[#2a2d3e] rounded-full overflow-hidden mt-1">
            <div
              className="h-full bg-[#7f77dd] rounded-full transition-[width] duration-400 ease-out"
              style={{ width: `${overallProgress}%` }}
              role="progressbar"
              aria-valuenow={overallProgress}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
