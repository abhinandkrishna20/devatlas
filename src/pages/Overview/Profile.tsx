import Card from "../../components/ui/Card";

import profile from "../../assets/profile.jpeg";
const Profile: React.FC = () => {
  return (
    <div >
        <Card>
            <img src={profile} alt="Profile" className="rounded-full w-32 h-32 object-cover mb-4" />
       
        <div className="mb-4">
        <h1 className="text-2xl font-semibold leading-tight text-gray-900">Abhinand Krishna A</h1>
        <h2 className="text-xl font-light text-gray-500">@abhinandkrishna</h2>
      </div>
      <p className="text-sm text-gray-800 mb-4 leading-relaxed">
        Full Stack Dev | Learn Coding | Open Source Enthusiast | Talks about Technologies |
      </p>
        </Card>
    </div>
  );
}  
export default Profile;