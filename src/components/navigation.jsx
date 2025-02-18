import "./../styles/navigation.css";

export default function Navigation() {
  return (
    <div className="navigation-container">
      <div className="navigation-content">
        <div className="left-section">
          <h1 className="logoName">Ezekiel</h1>
        </div>
        <div className="right-section">
          <div className="link-container">
            <a href="#" className="link">
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
