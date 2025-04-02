import DataTable from "./Datatable";
import SideBar from "./SideBar";
import Header from "./Header";
import Overview from "./Overview";
import React from "react";
const Home = () => {
    return (
      <div className="flex">
        <SideBar />
        <div className="flex-1 bg-gray-50 min-h-screen">
          <Header />
          <Overview />
          <DataTable />
        </div>
      </div>
    );
  }
export default Home;