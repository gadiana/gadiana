import "./../styles/hero.css";
import dog from "./../assets/images/smileDog.gif";
import Button from "./button";

export default function navigation() {
  return (
    <div className="hero">
      <div className="halfContainer">
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
      </div>
      <div className="halfContainer">
        <div className="contentContainer">
          <div className="img-content">
            <img src={dog} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
