import "./App.css";
import Navigation from "./components/navigation";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Tour from "./components/tour";
import Skill from "./components/skill";
import Projects from "./components/projects";
import Contact from "./components/contact";
import ParticlesBackground from "./components/particles";
import Certificate from "./components/cretificate";
import Blog from "./components/blog";
import BlogPage from "./components/page";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// This inner component can now safely use useLocation
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <>
      <Navigation />
      <ParticlesBackground />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="hero"><Hero /></div>
              <div id="about"><About /></div>
              <div id="skill"><Skill /></div>
              <div id="experience"><Experience /></div>
              <div id="projects"><Projects /></div>
              <div id="tour"><Blog /></div>
              <div id="cert"><Certificate /></div>
              <div id="contact"><Contact /></div>
            </>
          }
        />
        <Route path="/blog-page" element={<BlogPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
    </Router>
  );
}

export default App;
