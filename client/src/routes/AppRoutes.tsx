import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/Main-Layout/MainLayout";
import Overview from "../pages/Overview/Overview";
import Projects from "../pages/Projects/Projects";
import Learning from "../pages/Learning/Learning";
import Notes from "../pages/Notes/Notes";
import Roadmaps from "../pages/Roadmaps/Roadmaps";
import Achievements from "../pages/Achievements/Achievements";
import Blog from "../pages/Blog/Blog";
import Resources from "../pages/Resources/Resources";
import BlogLayout from "../components/layout/Blog/BlogLayout";
import BlogDetail from "../pages/Blog/BlogDetail";
const AppRoutes = () => {
  return (
    <Routes>
      {/* GROUP 1: MainLayout — Navbar + Sidebar */}
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

        {/* GROUP 2: BlogLayout — Navbar only, no Sidebar */}
      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<Blog />} />
        <Route path=":id" element={<BlogDetail />} />  // for later
        
      </Route>
    </Routes>
  );
};

export default AppRoutes;