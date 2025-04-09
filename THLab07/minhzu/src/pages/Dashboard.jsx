import React from "react";
import Header from "../components/Header";
import Overview from "../components/Overview";
import DataTable from "../components/DataTable";
import { FaFileImport, FaFileExport } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex-1 bg-gray-100 min-h-screen">
      <Header />
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Overview</h2>
        <Overview />

        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Detailed report
            </h2>
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-md bg-rose-500 text-white font-medium hover:bg-rose-600 transition-colors flex items-center gap-2">
                <FaFileImport className="text-sm" />
                <span>Import</span>
              </button>
              <button className="px-4 py-2 rounded-md border border-rose-500 text-rose-500 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                <FaFileExport className="text-sm" />
                <span>Export</span>
              </button>
            </div>
          </div>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
