import React from "react";
import {
  FiGrid,
  FiFolder,
  FiUsers,
  FiPieChart,
  FiMessageSquare,
  FiCode,
} from "react-icons/fi";
import NavLink from "./NavLink";
import { useActiveNav } from "../hooks/useActiveNav";

const SideBar = () => {
  const { setActive } = useActiveNav();

  const handleNavigation = (item) => {
    console.log(`Navigated to: ${item}`);
    // You can perform additional actions here when navigation changes
    // Such as loading data, updating UI state, etc.
  };

  return (
    <aside className="w-64 bg-white p-4 shadow-md h-screen flex flex-col">
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">🎨</span>
        <h1 className="text-xl font-bold">Logo</h1>
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          <NavLink icon={<FiGrid />} onClick={handleNavigation}>
            Dashboard
          </NavLink>
          <NavLink icon={<FiFolder />} onClick={handleNavigation}>
            Projects
          </NavLink>
          <NavLink icon={<FiUsers />} onClick={handleNavigation}>
            Teams
          </NavLink>
          <NavLink icon={<FiPieChart />} onClick={handleNavigation}>
            Analytics
          </NavLink>
          <NavLink icon={<FiMessageSquare />} onClick={handleNavigation}>
            Messages
          </NavLink>
          <NavLink icon={<FiCode />} onClick={handleNavigation}>
            Integrations
          </NavLink>
        </ul>
      </nav>

      <div className="mt-auto bg-gray-100 p-4 rounded-lg text-center">
        <div className="flex justify-center mb-3">
          <img
            src="/illustration.svg"
            alt="Upgrade illustration"
            className="h-24"
          />
        </div>
        <p className="text-sm font-bold">V2.0 is available</p>
        <button className="mt-2 text-sm border border-gray-300 rounded-md py-1 px-4 hover:bg-gray-200 transition-colors">
          Try now
        </button>
        <div className="text-xs text-gray-500 mt-2">Made with Volly</div>
      </div>
    </aside>
  );
};

export default SideBar;
