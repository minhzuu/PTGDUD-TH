import DataTable from "./DataTable";
import SideBar from "./SideBar";
import Header from "./Header";
import Overview from "./Overview";
import React from "react";

const Home = () => {
  return (
    <>
      <SideBar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-dark mb-6">Overview</h2>
          <Overview />
          <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-dark">
                Detailed report
              </h2>
              <div className="flex gap-4">
                <button className="px-4 py-2 rounded-md bg-primary text-white font-medium hover:opacity-90 transition-opacity">
                  Import
                </button>
                <button className="px-4 py-2 rounded-md border border-primary text-primary font-medium hover:bg-gray-50 transition-colors">
                  Export
                </button>
              </div>
            </div>
            <DataTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
