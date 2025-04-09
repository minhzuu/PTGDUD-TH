import React from "react";
import { FaBell, FaQuestionCircle, FaMicrophone } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Header = () => (
  <header className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-100">
    <h2 className="text-xl font-semibold text-rose-500">Dashboard</h2>
    <div className="flex items-center gap-6">
      <div className="relative flex items-center">
        <FiSearch className="absolute left-3 text-gray-400 text-base" />
        <input
          type="text"
          placeholder="Search..."
          className="w-[300px] py-2 pl-10 pr-4 border border-gray-200 rounded-lg text-sm bg-gray-50/50 focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="text-lg text-gray-500 hover:text-gray-700 transition-colors p-1">
          <FaBell />
        </button>
        <button className="text-lg text-gray-500 hover:text-gray-700 transition-colors p-1">
          <FaQuestionCircle />
        </button>
        <button className="text-lg text-gray-500 hover:text-gray-700 transition-colors p-1">
          <FaMicrophone />
        </button>
      </div>
      <div className="pl-4 border-l border-gray-100">
        <div className="w-8 h-8 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors"></div>
      </div>
    </div>
  </header>
);

export default Header;
