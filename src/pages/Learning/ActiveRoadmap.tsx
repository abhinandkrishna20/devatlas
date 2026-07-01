import { useState } from 'react';
import type { RoadmapItem, RoadmapItemState } from '../../types/learning';

interface ActiveRoadmapProps {
  initialItems: RoadmapItem[];
}

function RoadmapRow({
  item,
  onToggle,
}: {
  item: RoadmapItem;
  onToggle: (id: string) => void;
}) {
  const stateClass = {
    done: 'rm-dot--done',
    active: 'rm-dot--active',
    todo: '',
  }[item.state];

  const labelClass = {
    done: 'rm-label--done',
    active: 'rm-label--active',
    todo: '',
  }[item.state];

  return (
    <li className="rm-row">
      <button
        className={`rm-dot ${stateClass}`}
        onClick={() => onToggle(item.id)}
        aria-label={`${item.label} — ${item.state}. Click to toggle.`}
        aria-pressed={item.state === 'done'}
      />
      <span className={`rm-label ${labelClass}`}>{item.label}</span>
      {item.state === 'active' && (
        <span className="rm-badge" aria-label="Currently in progress">
          in progress
        </span>
      )}
    </li>
  );
}

function nextState(current: RoadmapItemState): RoadmapItemState {
  if (current === 'done') return 'todo';
  if (current === 'todo') return 'done';
  if (current === 'active') return 'done';
  return 'todo';
}

export default function ActiveRoadmap({ initialItems }: ActiveRoadmapProps) {
  const [items, setItems] = useState<RoadmapItem[]>(initialItems);

  const doneCount = items.filter((i) => i.state === 'done').length;
  const total = items.length;
  const pct = Math.round((doneCount / total) * 100);

  function handleToggle(id: string) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, state: nextState(item.state) } : item
      )
    );
  }

  return (
    <section className="card active-roadmap">
      <header className="card-header">
        <span className="card-icon" aria-hidden="true">⊞</span>
        <h2 className="card-title">Active Roadmap</h2>
        <span className="rm-counter" aria-live="polite">
          {pct}% · {doneCount} of {total}
        </span>
      </header>

      <p className="rm-subtitle">React Developer 2026</p>

      <div className="rm-track-wrapper" aria-hidden="true">
        <div className="rm-track">
          <div className="rm-track-fill" style={{ height: `${pct}%` }} />
        </div>
      </div>

      <ul className="rm-list" aria-label="React developer roadmap checklist">
        {items.map((item) => (
          <RoadmapRow key={item.id} item={item} onToggle={handleToggle} />
        ))}
      </ul>
    </section>
  );
}
