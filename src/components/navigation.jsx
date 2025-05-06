import { useState, useEffect } from "react";
import "./../styles/navigation.css";

export default function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setAtTop(currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    setMenuOpen(false);
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`navigation-container ${visible ? "visible" : "hidden"} ${atTop ? "at-top" : ""}`}>
      <div className="navigation-content">
        <div className="left-section">
          <a href="#top" className="logoLink" onClick={(e) => handleScrollToSection(e, "top")}>
            <h1 className="logoName">Ezekiel</h1>
          </a>
        </div>
        <div className="right-section">
          <div className="link-container">
            <a href="#about" className="link" onClick={(e) => handleScrollToSection(e, "about")}>
              About Me
            </a>
            <a href="#skill" className="link" onClick={(e) => handleScrollToSection(e, "skill")}>
              Skills
            </a>
            <a href="#experience" className="link" onClick={(e) => handleScrollToSection(e, "experience")}>
              Experience
            </a>
            <a href="#projects" className="link" onClick={(e) => handleScrollToSection(e, "projects")}>
              Projects
            </a>
            <a href="#tour" className="link" onClick={(e) => handleScrollToSection(e, "tour")}>
              Blogs
            </a>
            <a href="#cert" className="link" onClick={(e) => handleScrollToSection(e, "cert")}>
              Certificates
            </a>
            <a href="#contact" className="link" onClick={(e) => handleScrollToSection(e, "contact")}>
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="menuContainer" onClick={() => setMenuOpen(true)}>
        <i className="bx bx-menu"></i>
      </div>

      {menuOpen && (
        <div className="mobileMenu">
          <button className="exit-button" onClick={() => setMenuOpen(false)}>✕</button>
          <a href="#top" className="link" onClick={(e) => handleScrollToSection(e, "top")}>
            Home
          </a>
          <a href="#about" className="link" onClick={(e) => handleScrollToSection(e, "about")}>
            About Me
          </a>
          <a href="#skill" className="link" onClick={(e) => handleScrollToSection(e, "skill")}>
            Skills
          </a>
          <a href="#experience" className="link" onClick={(e) => handleScrollToSection(e, "experience")}>
            Experience
          </a>
          <a href="#projects" className="link" onClick={(e) => handleScrollToSection(e, "projects")}>
            Projects
          </a>
          <a href="#tour" className="link" onClick={(e) => handleScrollToSection(e, "tour")}>
            Blogs
          </a>
          <a href="#contact" className="link" onClick={(e) => handleScrollToSection(e, "contact")}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
