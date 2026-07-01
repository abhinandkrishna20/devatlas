import type { HeroStats } from "../../data/Learning/learning";

interface LearningHeroProps {
  stats: HeroStats;
}

export default function LearningHero({ stats }: LearningHeroProps) {
  const { startDate, targetRole, streakDays, overallProgress } = stats;

  return (
    <section className="learning-hero">
      <div className="hero-text">
        <p className="hero-eyebrow">DevAtlas / Learning</p>
        <h1 className="hero-title">Learning Dashboard</h1>
        <p className="hero-subtitle">
          Tracking the journey from hobby developer → professional {targetRole}
        </p>
      </div>

      <div className="hero-stats">
        <div className="stat-card">
          <span className="stat-label">Started</span>
          <span className="stat-value">{startDate}</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Target</span>
          <span className="stat-value">{targetRole} job</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Streak</span>
          <span className="stat-value stat-value--green">{streakDays} days</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Overall progress</span>
          <span className="stat-value stat-value--purple">{overallProgress}%</span>
          <div className="progress-track">
            <div
              className="progress-fill"
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
