import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BlogLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
    </div>
  );
};

export default BlogLayout;