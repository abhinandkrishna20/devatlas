import { Outlet } from "react-router-dom";
// import Navbar from "../..layout/Blog/Navbar";
import Navbar from "../Main-Layout/Navbar";
// import Footer from "../Footer";
import Footer from "../Main-Layout/Footer";

const BlogLayout = () => {
  return (
    // 1. h-screen-ah mathittu min-h-screen pottaal, content yevlo perusa irukko avlo thooram page grow aagum.
    // 2. flex flex-col pottaal vertical flow aligned-ah irukum.
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      <Navbar />
      
      {/* 3. flex-1 space fill pannikkum.
        4. overflow-auto-va thookiyachu, so ippo page normal-ah smoothly browser window-la scroll aagum.
      */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 py-6">
        <Outlet />
      </main>
      
      {/* 5. Content complete-ah scroll aagi mudinja pin thaan footer neat-ah bottom-la kaatum. */}
      <Footer />

    </div>
  );
};

export default BlogLayout;