import React from "react";
import { FaSearch, FaBell, FaQuestionCircle } from "react-icons/fa";
import { useActiveNav } from "../hooks/useActiveNav";

const Header = () => {
  const { activeNavItem } = useActiveNav();

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm">
      <h2 className="text-lg font-bold text-pink-500">{activeNavItem}</h2>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg border-0 focus:ring-1 focus:ring-gray-200 w-64"
          />
        </div>
        <FaBell className="text-gray-500 text-xl cursor-pointer" />
        <FaQuestionCircle className="text-gray-500 text-xl cursor-pointer" />
        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-medium">
          C
        </div>
      </div>
    </header>
  );
};

export default Header;
