import Card from "../../components/ui/Card";

const PortfolioStat: React.FC = () => {
  return (
    <div >
      <Card>
        <h3 className="text-xl font-semibold leading-tight ">📈 Stats on my portfolio</h3>
      <p className="text-sm  mb-4 leading-relaxed">
        Here are my works on portfolio:
      </p>
      <ul className="text-sm  mb-4 leading-relaxed">
        <li className="list-disc ml-5">Projects: 1</li>
        <li className="list-disc ml-5">Notes: 2</li>
        <li className="list-disc ml-5">Blogs: 2</li>
        <li className="list-disc ml-5">XP: 20</li>
      </ul> 
      </Card>
    </div>
  );
};

export default PortfolioStat;