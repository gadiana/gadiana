import "./../styles/navigation.css";

export default function Navigation() {

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navigation-container">
      <div className="navigation-content">
        <div className="left-section">
          <h1 className="logoName">Ezekiel</h1>
        </div>
        <div className="right-section">
          <div className="link-container">
            <a href="#about" className="link" onClick={(e) => handleScroll(e, "about")}>
              About Me
            </a>
            <a href="#" className="link">
              Education
            </a>
            <a href="#" className="link">
              Projects
            </a>
            <a href="#" className="link">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="menuContainer">
        <i class="bx bx-menu"></i>
      </div>
    </div>
  );
}
