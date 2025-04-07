import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Teams from "../pages/Teams";
import Analytics from "../pages/Analytics";
import Messages from "../pages/Messages";
import Integrations from "../pages/Integrations";

const Home = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 bg-gray-50 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/integrations" element={<Integrations />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
