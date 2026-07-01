export type RoadmapItemState = 'done' | 'active' | 'todo';

export interface RoadmapItem {
  id: string;
  label: string;
  state: RoadmapItemState;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface LearningGoal {
  title: string;
  targetDate: string;
  currentFocus: string[];
}

export interface HeroStats {
  startDate: string;
  targetRole: string;
  streakDays: number;
  overallProgress: number;
}
