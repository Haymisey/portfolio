import React from "react";
import "./Project.css";
import Netflix from "../../assets/images/Netflix.png";
import Amazon from "../../assets/images/Amazon.png";
import Spotify from "../../assets/images/Spotify.png";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project_list">
        <div className="project">
          <img src={Spotify} alt="Spotify"></img>

          <h3>Spotify Clone</h3>
          <p>Music streaming app built with React.js and Node.js.</p>
          <a href="https://github.com/Haymisey/Spotify-Clone">GitHub</a>
        </div>
        <div className="project">
          <img src={Netflix} alt="Netflix"></img>
          <h3>Netflix Clone</h3>
          <p>Movie streaming app with dynamic API integration.</p>
          <a href="https://github.com/Haymisey/Netflix-clone">GitHub</a>
        </div>
        <div className="project">
          <img src={Amazon} alt="Amazon"></img>
          <h3>Amazon Clone</h3>
          <p>
            E-commerce platform with features like user authentication, cart
            management, and payment integration using Stripe.
          </p>
          <a href="https://github.com/HaymiSey/Amazon-Clone">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
