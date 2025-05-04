import React, { useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa"; // Import social media icons
import "./../styles/contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the default form submission

    emailjs
      .sendForm(
        "service_75ch9do", // Service ID
        "template_fdbxf1e", // Template ID
        form.current, // Form reference
        "xCl6jT7Rz04d3mK1N" // Public Key (User ID)
      )
      .then(
        (result) => {
          console.log("Email Sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className="contact">
      <div className="container">
        <div className="container-contact">
          <h2 className="section-title">Contact</h2>

          <form ref={form} onSubmit={sendEmail}>
            <div className="message-container">
              <div className="inputContainer">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  className="name-container inputFields"
                  required
                />
              </div>
              <div className="inputContainer">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="email-container inputFields"
                  required
                />
              </div>
              <div className="inputContainer">
                <label htmlFor="message">Message:</label>
                <textarea
                  name="message"
                  className="text-container inputFields"
                  placeholder="Enter your message here"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button className="send-button" type="submit">Send Message</button>
            </div>
          </form>

          {/* Social Links Section */}
          <div className="social-links">
            <a
              href="https://github.com/gadiana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jhon-ezekiel-gadiana-5100bb362"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/johnezekiel.gadiana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/zekelkiel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gadiana.jhonezekiel@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
