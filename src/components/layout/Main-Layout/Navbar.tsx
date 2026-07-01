import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="bg-[#1a1d27] text-slate-200 p-4 h-16 border-b flex items-center px-4">
      <h1 className="text-xl font-bold">
        <NavLink to="/" className="hover:text-gray-300">
          DevAtlas
        </NavLink>
      </h1>
    </header>
    
  );
};

export default Navbar;
