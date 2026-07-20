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
    <main className="max-w-[1100px] mx-auto p-6 pt-8 pb-16 font-sans rounded-xl bg-gray-800">
      <LearningHero stats={heroStats} />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-5 items-start">
        <div className="flex flex-col gap-5">
          <CurrentGoal goal={currentGoal} />
          <SkillProgress groups={skillGroups} />
        </div>

        <ActiveRoadmap initialItems={roadmapItems} />
      </div>
    </main>
  );
}
