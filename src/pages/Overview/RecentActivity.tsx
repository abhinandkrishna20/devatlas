import Card from "../../components/ui/Card"

const RecentActivity: React.FC = () => {
  return (
    <div >   
       <Card>
        <h3 className="text-xl font-semibold leading-tight text-gray-900">📚 Recent Activity</h3>
      <p className="text-sm text-gray-800 mb-4 leading-relaxed">Here are some of my recent activities on GitHub:</p>  
      <ul className="text-sm text-gray-800 mb-4 leading-relaxed">
        <li className="list-disc ml-5">Pushed code to DevAtlas repository</li>
        <li className="list-disc ml-5">Opened a pull request for an open source project</li>
        <li className="list-disc ml-5">Commented on an issue in a repository</li>
      </ul>
       </Card>
       </div>
  );
}
export default RecentActivity;