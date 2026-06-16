import {NavLink} from 'react-router-dom'
const Sidebar: React.FC = () => {
    const menuItems = [

    { name: "Overview", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Learning", path: "/learning" },
  { name: "Notes", path: "/notes" },
  { name: "Roadmaps", path: "/roadmaps" },
  { name: "Achievements", path: "/achievements" },
  { name: "Blog", path: "/blog" },
  { name: "Resources", path: "/resources" },
    ];
  return (
    <aside className="w-64 border-r p-4">
     <ul className="space-y-2">
      {menuItems.map((item) => (
        <li key={item.path}>
          <NavLink to={item.path} className="hover:bg-gray-200 p-2 block rounded px-3 py-2 hover:bg-gray-100">
            {item.name}
          </NavLink>
        </li>
      ))}
     </ul>
    </aside>
  );
};

export default Sidebar;
