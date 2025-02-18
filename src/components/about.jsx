import "./../styles/about.css";
import computing from "./../assets/images/gadiana1.png";
import Button from "./button";

export default function navigation() {
  return (
    <div className="about">
        <div className="container">
            <div className="about-image-container">
                <div className="img-about">
                    <div className="overlay"></div>
                    <img className="img-content" src={computing} alt="Logo" />
                </div>
            </div>

            <div class="about-section">          
                <div class="about-container">
                        <h1 class="big">About</h1>
                        <h2>About Me</h2>
                
                </div>
                <p class="about-text">
                    An aspiring web developer with hands-on experience in designing and
                    developing several simple websites. Has knowledge and experience in HTML,
                    CSS, JavaScript, and PHP with a strong passion for creating user-friendly
                    and visually appealing web solutions. Eager to apply my skills and expand my
                    expertise in a dynamic and challenging environment.
                </p>
                <ul class="about-info">
                    <li><span>Name:</span> <span>Jhon Ezekiel Gadiana</span></li>
                    <li><span>Date of birth:</span> <span>May 9, 2003</span></li>
                    <li><span>Address:</span> <span>Kasanyangan, Zamboanga City</span></li>
                    <li><span>Zip code:</span> <span>7000</span></li>
                    <li><span>Email:</span> <span>gadiana.jhonezekiel@gmail.com</span></li>
                    <li><span>Phone:</span> <span>+63 936 420 2029</span></li>
                </ul>
                <div class="button-container">
                    <Button />
                </div>
            </div>

        </div>
    </div>
  );
}
