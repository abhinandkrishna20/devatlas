import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {Outlet} from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col bg-[#1a1d27] text-slate-200">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
     
    </div>
  );
};

export default MainLayout;
