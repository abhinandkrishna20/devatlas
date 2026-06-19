import Card from "../../components/ui/Card";

const About: React.FC = () => {
  return (
    <div >
     <Card>
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
     </Card>
    </div>
  );
};

export default About;
