import type { HeroStats, LearningGoal, SkillGroup, RoadmapItem } from '../types/learning';

export const heroStats: HeroStats = {
  startDate: 'June 15, 2026',
  targetRole: 'React Developer',
  streakDays: 18,
  overallProgress: 45,
};

export const currentGoal: LearningGoal = {
  title: 'Become job-ready React developer',
  targetDate: 'September 15, 2026',
  currentFocus: ['TypeScript', 'React Router', 'Tailwind CSS'],
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript', percentage: 90 },
      { name: 'TypeScript', percentage: 60 },
      { name: 'React', percentage: 80 },
      { name: 'Tailwind', percentage: 70 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', percentage: 50 },
      { name: 'Express', percentage: 40 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', percentage: 75 },
      { name: 'Vite', percentage: 70 },
    ],
  },
];

export const roadmapItems: RoadmapItem[] = [
  { id: 'html', label: 'HTML', state: 'done' },
  { id: 'css', label: 'CSS', state: 'done' },
  { id: 'js', label: 'JavaScript', state: 'done' },
  { id: 'es6', label: 'ES6+', state: 'done' },
  { id: 'react-basics', label: 'React basics', state: 'done' },
  { id: 'components', label: 'Components', state: 'done' },
  { id: 'hooks', label: 'Hooks', state: 'done' },
  { id: 'react-router', label: 'React Router', state: 'done' },
  { id: 'typescript', label: 'TypeScript', state: 'active' },
  { id: 'context', label: 'Context API', state: 'todo' },
  { id: 'redux', label: 'Redux Toolkit', state: 'todo' },
  { id: 'react-query', label: 'React Query', state: 'todo' },
  { id: 'testing', label: 'Testing Library', state: 'todo' },
  { id: 'nextjs', label: 'Next.js', state: 'todo' },
  { id: 'performance', label: 'Performance', state: 'todo' },
  { id: 'auth', label: 'Authentication', state: 'todo' },
  { id: 'deployment', label: 'Deployment', state: 'todo' },
  { id: 'portfolio', label: 'Portfolio & job apps', state: 'todo' },
];
