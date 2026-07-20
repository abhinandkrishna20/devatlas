import { useState } from 'react';
import type { RoadmapItem, RoadmapItemState } from '../../types/learning';
// import './learning_style.css';
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
    done: 'bg-emerald-500 border-emerald-500',
    active: 'bg-amber-500 border-amber-500',
    todo: 'bg-[#0f1117] border-[#2a2d3e]',
  }[item.state];

  const labelClass = {
    done: 'text-slate-500 line-through decoration-emerald-500',
    active: 'text-slate-200 font-medium',
    todo: 'text-slate-200',
  }[item.state];

  return (
    <li className="flex items-center gap-2.5 py-1.25">
      <button
        className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 cursor-pointer transition-colors duration-150 p-0 hover:border-[#7f77dd] ${stateClass}`}
        onClick={() => onToggle(item.id)}
        aria-label={`${item.label} — ${item.state}. Click to toggle.`}
        aria-pressed={item.state === 'done'}
      />
      <span className={`text-[13px] ${labelClass}`}>{item.label}</span>
      {item.state === 'active' && (
        <span 
          className="font-mono text-[10px] px-1.75 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/30" 
          aria-label="Currently in progress"
        >
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
    <section className="relative bg-[#1a1d27] border border-white rounded-xl px-6 py-5">
      <header className="flex items-center gap-2 mb-5">
        <span className="text-sm text-[#7f77dd]" aria-hidden="true">⊞</span>
        <h2 className="font-mono text-[11px] font-medium text-slate-200 uppercase tracking-wider m-0">
          Active Roadmap
        </h2>
        <span className="ml-auto font-mono text-[11px] text-slate-500" aria-live="polite">
          {pct}% · {doneCount} of {total}
        </span>
      </header>

      <p className="font-mono text-xs text-slate-500 -mt-3 mb-4">React Developer 2026</p>

      {/* Vertical Progress Line */}
      <div className="absolute left-7 top-[4.5rem] bottom-6 w-[2px] bg-[#2a2d3e] rounded-full overflow-hidden" aria-hidden="true">
        <div 
          className="w-full bg-[#7f77dd] rounded-full transition-[height] duration-500 ease-out" 
          style={{ height: `${pct}%` }} 
        />
      </div>

      <ul className="list-none p-0 pl-6 m-0 flex flex-col" aria-label="React developer roadmap checklist">
        {items.map((item) => (
          <RoadmapRow key={item.id} item={item} onToggle={handleToggle} />
        ))}
      </ul>
    </section>
  );
}
