import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Overview from "../pages/Overview/Overview";
import Projects from "../pages/Projects/Projects";
import Learning from "../pages/Learning/Learning";
import Notes from "../pages/Notes/Notes";
import Roadmaps from "../pages/Roadmaps/Roadmaps";
import Achievements from "../pages/Achievements/Achievements";
import Blog from "../pages/Blog/Blog";
import Resources from "../pages/Resources/Resources";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Overview />} />
        <Route path="projects" element={<Projects />} />
        <Route path="learning" element={<Learning />} />
        <Route path="notes" element={<Notes />} />
        <Route path="roadmaps" element={<Roadmaps />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="blog" element={<Blog />} />
        <Route path="resources" element={<Resources />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;