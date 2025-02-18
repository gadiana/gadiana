import "./App.css";
import Navigation from "./components/navigation";
import Hero from "./components/hero";
import About from "./components/about";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
    </>
  );
}

export default App;
