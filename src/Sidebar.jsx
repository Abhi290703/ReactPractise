import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [query, setQuery] = useState("");

  const links = [
    { name: "React Setup", path: "/" },
    { name: "Components", path: "/components" },
    { name: "Props", path: "/props" },
    { name: "State & Counter", path: "/state" },
    { name: "useEffect & Todo", path: "/useeffect" },
    { name: "Lists & Keys", path: "/listkeys" },
    { name: "Conditional Rendering", path: "/cr" },
  ];

  const filteredLinks = links.filter(link =>
    link.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <motion.div
      animate={{ width: isOpen ? 250 : 70 }}
      className="bg-gray-900 dark:bg-gray-800 text-white h-screen p-4 fixed left-0 flex flex-col"
    >
      <button onClick={() => setIsOpen(!isOpen)} className="mb-5 text-white">
        {isOpen ? <X size={28}/> : <Menu size={28}/>}
      </button>

      {isOpen && (
        <div className="flex items-center gap-2 bg-gray-700 p-2 rounded-lg">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search topic..."
            className="bg-transparent w-full outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      )}

      <ul className="mt-6 space-y-1 flex-1 overflow-y-auto">
        {filteredLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md transition ${
                isActive ? "bg-indigo-600" : "hover:bg-gray-700"
              }`
            }
          >
            {isOpen && link.name}
          </NavLink>
        ))}
      </ul>

      <div className="mt-auto">{isOpen && <span className="text-sm">Theme</span>}</div>
      <ThemeToggle />
    </motion.div>
  );
}