import { useEffect, useState } from "react";
import "./../styles/hero.css";
import Button from "./button";
import gadiana1 from "./../assets/images/gadiana1.png"; // Import the new image
import dance2 from "./../assets/images/dance2.gif"; // Assuming you also need this

export default function Hero() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1020);

  useEffect(() => {
    // Prevent scroll during fade-in
    document.body.classList.add("no-scroll");
    const timer = setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 1000);

    // Handle screen resizing
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1020);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="container">
        <div className="contentContainer block">
          <div>
            <div className="content-upper">
              <h1 className="intro">
                Hello I'm <span id="name">Ezekiel</span>
              </h1>
              <p className="occupation">Web Developer</p>
              <br className="br-space" />
              <p className="description">
                An aspiring web developer with a knowledge in building
                user-friendly websites and applications.
              </p>
            </div>
            <div className="content-lower">
              <Button title="About Me" />
            </div>
          </div>
        </div>
        <div className="imageContainer block">
          <div className="img-content">
            <img src={isMobileView ? gadiana1 : dance2} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}
