import React from "react";
import Header from "../components/Header";

const Projects = () => {
  return (
    <div className="flex-1 bg-gray-100 min-h-screen">
      <Header />
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Projects</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-600">Projects content will go here.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
