import Card from "../../components/ui/Card";
const GithubStats: React.FC = () => {
  return (
    <div >
     <Card>
       <h3 className="text-xl font-semibold leading-tight ">📈 GitHub Stats</h3>
      <p className="text-sm  mb-4 leading-relaxed">
        Here are some of my GitHub stats:
      </p>
      <ul className="text-sm  mb-4 leading-relaxed">
        <li className="list-disc ml-5">Total Repositories: 10</li>
        <li className="list-disc ml-5">Total Stars: 50</li>
        <li className="list-disc ml-5">Total Forks: 20</li>
        <li className="list-disc ml-5">Total Contributions: 100</li>
      </ul> 
     </Card>
    </div>
  );
};

export default GithubStats;