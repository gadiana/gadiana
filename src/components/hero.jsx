import "./../styles/hero.css";
import gadiana from "./../assets/images/gadiana1.png";
import Button from "./button";

export default function navigation() {
  return (
    <div className="hero">
      <div className="container">
      <div className="contentContainer">
          <div>
            <div className="content-upper">
              <h1>
                Hello I'm <span id="name">Ezekiel</span>
              </h1>
              <br />
              <p className="occupation">Web Developer</p>
              <br />
              <p>
                An aspiring web developer with a strong in building
                user-friendly websites and applications. Eager to learn and grow
                in the field, constantly exploring new technologies and
                improving their skills.
              </p>
            </div>
            <div className="content-lower">
              <Button />
            </div>
          </div>
        </div>
        <div className="imageContainer">
        
        <div className="img-content">
          <img src={gadiana} alt="Logo" />
        </div>
      
    </div>
      </div>
    </div>
  );
}
