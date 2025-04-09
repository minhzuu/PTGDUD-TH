import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
