import LearningHero from '../Learning/LearningHero';
import CurrentGoal from '../Learning/CurrentGoal';
import SkillProgress from '../Learning/SkillProgress';
import ActiveRoadmap from '../Learning/ActiveRoadmap';

// import ActiveRoadmap from '../Learning/ActiveRoadmap';

import {
  heroStats,
  currentGoal,
  skillGroups,
  roadmapItems,
} from "../../data/Learning/learningData";




export default function Learning() {
  return (
    <main className="learning-page">
      <LearningHero stats={heroStats} />

      <div className="learning-grid">
        <div className="learning-col">
          <CurrentGoal goal={currentGoal} />
          <SkillProgress groups={skillGroups} />
        </div>

        <ActiveRoadmap initialItems={roadmapItems} />
      </div>
    </main>
  );
}
