import React from "react";
import Header from "../components/Header";

const Teams = () => {
  return (
    <div className="flex-1 bg-gray-100 min-h-screen">
      <Header />
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Teams</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-600">Teams content will go here.</p>
        </div>
      </div>
    </div>
  );
};

export default Teams;
