import DataTable from "./Datatable";
import SideBar from "./SideBar";
import Header from "./Header";
import Overview from "./Overview";
import React from "react";
import { useActiveNav } from "../hooks/useActiveNav";

const Home = () => {
  const { activeNavItem } = useActiveNav();

  // Render different content based on the active navigation item
  const renderContent = () => {
    switch (activeNavItem) {
      case "Dashboard":
        return (
          <>
            <Overview />
            <DataTable />
          </>
        );
      case "Projects":
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Projects</h2>
            <p className="text-gray-600">
              Projects content will be displayed here.
            </p>
          </div>
        );
      case "Teams":
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Teams</h2>
            <p className="text-gray-600">
              Teams content will be displayed here.
            </p>
          </div>
        );
      case "Analytics":
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Analytics</h2>
            <p className="text-gray-600">
              Analytics content will be displayed here.
            </p>
          </div>
        );
      case "Messages":
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Messages</h2>
            <p className="text-gray-600">
              Messages content will be displayed here.
            </p>
          </div>
        );
      case "Integrations":
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Integrations</h2>
            <p className="text-gray-600">
              Integrations content will be displayed here.
            </p>
          </div>
        );
      default:
        return (
          <>
            <Overview />
            <DataTable />
          </>
        );
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 bg-gray-50 min-h-screen">
        <Header />
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;
