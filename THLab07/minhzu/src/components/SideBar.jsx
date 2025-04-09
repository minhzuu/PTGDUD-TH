import React from "react";
import v20 from "../assets/images/v2.0_update.png";
import logo from "../assets/images/logo.png";
import {
  FaHome,
  FaProjectDiagram,
  FaUsers,
  FaChartBar,
  FaComments,
  FaPuzzlePiece,
} from "react-icons/fa";

const SideBar = () => {
  const menuItems = [
    { icon: <FaHome />, text: "Dashboard", active: true },
    { icon: <FaProjectDiagram />, text: "Projects" },
    { icon: <FaUsers />, text: "Teams" },
    { icon: <FaChartBar />, text: "Analytics" },
    { icon: <FaComments />, text: "Messages" },
    { icon: <FaPuzzlePiece />, text: "Integrations" },
  ];

  return (
    <aside className="w-[250px] h-screen bg-white border-r border-gray-100 flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-auto h-auto object-contain" />
          <span className="text-xl font-semibold text-rose-500">Logo</span>
        </div>
      </div>
      <nav className="p-4 flex-1">
        <ul className="flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer transition-all
                ${
                  item.active
                    ? "bg-rose-500 text-white"
                    : "text-gray-600 hover:bg-gray-50 hover:text-rose-500"
                }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.text}</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mx-4 mb-6 p-6 bg-gray-50 rounded-xl text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-[120px] h-[120px]">
            <img
              src={v20}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-sm text-gray-600 font-medium">V2.0 is available</p>
          <button className="px-4 py-2 bg-white rounded text-sm text-rose-500 font-medium hover:bg-gray-100 transition-colors">
            Try now
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
