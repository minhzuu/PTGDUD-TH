import React from "react";
const SideBar = () => (
  <aside className="w-64 bg-white p-4 shadow-md h-screen flex flex-col">
    <h1 className="text-xl font-bold text-pink-500 mb-4">Logo</h1>
    <nav>
      <ul className="space-y-2">
        <li className="text-pink-500 font-semibold">Dashboard</li>
        <li>Projects</li>
        <li>Teams</li>
        <li>Analytics</li>
        <li>Messages</li>
        <li>Integrations</li>
      </ul>
    </nav>
    <div className="mt-auto bg-gray-100 p-4 rounded-lg text-center">
      <p className="text-sm">V2.0 is available</p>
      <button className="mt-2">Try now</button>
    </div>
  </aside>
);

export default SideBar;