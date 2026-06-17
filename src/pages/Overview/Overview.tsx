import profile from "../../assets/profile.jpeg";
const Overview: React.FC = () => {
  return (
    <div>
    <div className="flex flex-1 h-full">
      <div className="card bg-gray-100 shadow-lg rounded-lg p-6   max-w-md ">
        <img src={profile} alt="Profile" className="rounded-full w-32 h-32 object-cover mb-4" />
        {/* <h2 className="text-2xl font-bold mb-4">Welcome to DevAtlas</h2>
        <p className="text-gray-700 mb-4">
          DevAtlas is your personal development dashboard. Here you can track your projects, learning progress, notes, roadmaps, achievements, and more.
        </p> */}
{/* // add a profile card with name and username */}
        <div className="mb-4">
        <h1 className="text-2xl font-semibold leading-tight text-gray-900">Abhinand Krishna A</h1>
        <h2 className="text-xl font-light text-gray-500">@abhinandkrishna</h2>
      </div>
      <p className="text-sm text-gray-800 mb-4 leading-relaxed">
        Full Stack Dev | Learn Coding | Open Source Enthusiast | Talks about Technologies |
      </p>
      
      </div>
      <div className="card flex-row bg-gray-100 shadow-lg rounded-lg p-6  max-w-4xl ml-4">
      
      {/* // about me section with a list of points */}
      <div className="mb-4">
          <h3 className="text-xl font-semibold leading-tight text-gray-900">Hey👋, There</h3>
          <ul className="text-sm text-gray-800 mb-4 leading-relaxed">
            <li className="list-disc ml-5">Hello 🌍, I’m @abhinandkrishna20</li>
            <li className="list-disc ml-5"> 👀 I’m interested in Web Development</li>
            <li className="list-disc ml-5"> 🌱 I’m currently learning React and TypeScript</li>
            <li className="list-disc ml-5"> 💞️ I’m looking to collaborate on Open Source Projects</li>
            <li className="list-disc ml-5"> 📫 How to reach me @ am.abhinandkrishna@gmail.com</li>
            </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold leading-tight text-gray-900">🛠️ Languages and Tools </h3>
        <ul className="text-sm text-gray-800 mb-4 leading-relaxed">
          <li className="list-disc ml-5">JavaScript</li> 
          <li className="list-disc ml-5">TypeScript</li>
          <li className="list-disc ml-5">React</li>
          <li className="list-disc ml-5">Node.js</li>  
        </ul>
      </div>


      </div>
      
    </div>
    <div className="flex flex-col md:flex-row mt-4 gap-4">

   

     <div className="card bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-4xl mt-4">
      <h3 className="text-xl font-semibold leading-tight text-gray-900">📈 Stats on my portfolio</h3>
      <p className="text-sm text-gray-800 mb-4 leading-relaxed">
        Here are my works on portfolio:
      </p>
      <ul className="text-sm text-gray-800 mb-4 leading-relaxed">
        <li className="list-disc ml-5">Projects: 1</li>
        <li className="list-disc ml-5">Notes: 2</li>
        <li className="list-disc ml-5">Blogs: 2</li>
        <li className="list-disc ml-5">XP: 20</li>
      </ul> </div>
    <div className="card bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-4xl mt-4">
      <h3 className="text-xl font-semibold leading-tight text-gray-900">📈 GitHub Stats</h3>
      <p className="text-sm text-gray-800 mb-4 leading-relaxed">
        Here are some of my GitHub stats:
      </p>
      <ul className="text-sm text-gray-800 mb-4 leading-relaxed">
        <li className="list-disc ml-5">Total Repositories: 10</li>
        <li className="list-disc ml-5">Total Stars: 50</li>
        <li className="list-disc ml-5">Total Forks: 20</li>
        <li className="list-disc ml-5">Total Contributions: 100</li>
      </ul> </div>
      <div className="card bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-4xl mt-4">
      <h3 className="text-xl font-semibold leading-tight text-gray-900">📊 Learning Progress</h3>
      <p className="text-sm text-gray-800 mb-4 leading-relaxed">  Here are some of my Learning Progress:</p>
      <ul className="text-sm text-gray-800 mb-4 leading-relaxed">
        <li className="list-disc ml-5">JavaScript     70%</li>
        <li className="list-disc ml-5">TypeScript   60%</li>
        <li className="list-disc ml-5">React        50%</li>
        <li className="list-disc ml-5">Node.js      40%</li>
      </ul> </div>
      <div className="card bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-4xl mt-4">
      <h3 className="text-xl font-semibold leading-tight text-gray-900">📚 Recent Activity</h3>
      <p className="text-sm text-gray-800 mb-4 leading-relaxed">Here are some of my recent activities on GitHub:</p>  
      <ul className="text-sm text-gray-800 mb-4 leading-relaxed">
        <li className="list-disc ml-5">Pushed code to DevAtlas repository</li>
        <li className="list-disc ml-5">Opened a pull request for an open source project</li>
        <li className="list-disc ml-5">Commented on an issue in a repository</li>
      </ul>
      </div>
  </div>
    </div>
  );
};

export default Overview;
