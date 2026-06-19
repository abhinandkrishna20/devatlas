import Card from "../../components/ui/Card";

const LearningProgress: React.FC = () => {
    return (
        <div >
            <Card>
                <h3 className="text-xl font-semibold leading-tight text-gray-900">📊 Learning Progress</h3>
                <p className="text-sm text-gray-800 mb-4 leading-relaxed">  Here are some of my Learning Progress:</p>
                <ul className="text-sm text-gray-800 mb-4 leading-relaxed">
                    <li className="list-disc ml-5">JavaScript     70%</li>
                    <li className="list-disc ml-5">TypeScript   60%</li>
                    <li className="list-disc ml-5">React        50%</li>
                    <li className="list-disc ml-5">Node.js      40%</li>
                </ul>
            </Card>
        </div>
    );
};

export default LearningProgress;