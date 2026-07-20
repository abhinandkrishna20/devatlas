import Card from "../../components/ui/Card";

import profile from "../../assets/profile.jpeg";
const Profile: React.FC = () => {
  return (
    <div >
        <Card >
            <div className="inline-block p-[3px] rounded-full bg-gradient-to-tr from-amber-500 via-red-500 to-purple-600 mb-4 [perspective:1000px] transition-transform duration-700 [transform-style:preserve-3d] ease-in-out hover:[transform:rotateY(360deg)]">
          <div className="p-[2px] bg-white rounded-full">
            <img 
              src={profile} 
              alt="Profile" 
              className="rounded-full w-40 h-40 object-cover block" 
            />
          </div>
        </div>
        <div className="mb-4">
        <h1 className="text-2xl font-semibold leading-tight text-slate-200">Abhinand Krishna A</h1>
        <h2 className="text-xl font-light text-slate-400">@abhinandkrishna</h2>
      </div>
      <p className="text-sm text-slate-100 mb-4 leading-relaxed">
        Full Stack Dev | Learn Coding | Open Source Enthusiast | Talks about Technologies |
      </p>
        </Card>
    </div>
  );
}  
export default Profile;