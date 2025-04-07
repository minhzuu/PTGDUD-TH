import React from "react";
import {
  FiGrid,
  FiFolder,
  FiUsers,
  FiPieChart,
  FiMessageSquare,
  FiCode,
} from "react-icons/fi";

const SideBar = () => (
  <aside className="w-64 bg-white p-4 shadow-md h-screen flex flex-col">
    <div className="flex items-center mb-6">
      <span className="text-2xl mr-2">🎨</span>
      <h1 className="text-xl font-bold">Logo</h1>
    </div>

    <nav className="flex-1">
      <ul className="space-y-4">
        <li className="bg-pink-500 text-white rounded-md p-2 flex items-center">
          <FiGrid className="mr-3" /> Dashboard
        </li>
        <li className="text-gray-600 p-2 flex items-center">
          <FiFolder className="mr-3" /> Projects
        </li>
        <li className="text-gray-600 p-2 flex items-center">
          <FiUsers className="mr-3" /> Teams
        </li>
        <li className="text-gray-600 p-2 flex items-center">
          <FiPieChart className="mr-3" /> Analytics
        </li>
        <li className="text-gray-600 p-2 flex items-center">
          <FiMessageSquare className="mr-3" /> Messages
        </li>
        <li className="text-gray-600 p-2 flex items-center">
          <FiCode className="mr-3" /> Integrations
        </li>
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

export default SideBar;
