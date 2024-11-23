import React from "react";
import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="mailto:haymanotseyoum3@gmail.com" className="icon-link" title="Email">
          <FaEnvelope />
        </a>
        <a href="https://github.com/Haymisey" className="icon-link" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/haymanot-seyoum-285643295/" className="icon-link" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://t.me/haymihhm" className="icon-link" title="Telegram">
          <FaTelegramPlane />
        </a>
      </div>
    </section>
  );
};

export default Contact;
