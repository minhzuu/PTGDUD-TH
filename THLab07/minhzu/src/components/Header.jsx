import React from "react";
import { FaBell, FaQuestionCircle } from "react-icons/fa";
const Header = () => (
  <header className="flex justify-between items-center p-4 bg-white shadow-md">
    <h2 className="text-lg font-bold text-pink-500">Dashboard</h2>
    <div className="flex items-center space-x-4">
      <input type="text" placeholder="Search..." className="border p-2 rounded-lg" />
      <FaBell className="text-gray-500 text-lg cursor-pointer" />
      <FaQuestionCircle className="text-gray-500 text-lg cursor-pointer" />
      <div className="w-8 h-8 rounded-full bg-gray-300"></div>
    </div>
  </header>
);
export default Header;