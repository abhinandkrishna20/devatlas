import type { LearningGoal } from '../../types/learning';

interface CurrentGoalProps {
  goal: LearningGoal;
}

export default function CurrentGoal({ goal }: CurrentGoalProps) {
  const { title, targetDate, currentFocus } = goal;

  return (
    <section className="card current-goal">
      <header className="card-header">
        <span className="card-icon" aria-hidden="true">◎</span>
        <h2 className="card-title">Current Goal</h2>
      </header>

      <p className="goal-title">{title}</p>
      <p className="goal-date">Target → {targetDate}</p>

      <div className="focus-block">
        <p className="focus-label">Current Focus</p>
        <ul className="focus-tags" aria-label="Topics currently being studied">
          {currentFocus.map((topic) => (
            <li key={topic} className="focus-tag">
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
