import "./App.css";
import Navigation from "./components/navigation";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Tour from "./components/tour";
import Skill from "./components/skill";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navigation />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skill"><Skill /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <div id="tour"><Tour /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}

export default App;
