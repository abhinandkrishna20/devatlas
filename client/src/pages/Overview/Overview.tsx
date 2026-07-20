
import About from "./About";
import GithubStats from "./GithubStats";
import LearningProgress from "./LearningProgress";
import PortfolioStat from "./PortfolioStat";
import Profile from "./Profile";
import RecentActivity from "./RecentActivity";
const Overview: React.FC = () => {
  return (
    <div>
    <div className="flex flex-1 h-full p-4 gap-4">
     
      <Profile />
    <About />
      
    </div>
    <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-4">

   <LearningProgress />
<RecentActivity />
 <PortfolioStat />
   <GithubStats />
      
  </div>
    </div>
  );
};

export default Overview;
