import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Haymi</h1>
      <p>Full-Stack Developer</p>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
