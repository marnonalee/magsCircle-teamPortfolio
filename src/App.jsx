// App.jsx - Remove the inner HashRouter
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Project_1 from "./pages/Project_1";
import Project_2 from "./pages/Project_2";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          window.scrollTo({ top: element.offsetTop - 50, behavior: "smooth" });
        }
      }, 200);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project_1" element={<Project_1 />} />
        <Route path="/project_2" element={<Project_2 />} />
      </Routes>
    </div>
  );
}

export default App;
