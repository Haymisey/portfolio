import React from "react";
import PacketTracer from "../../assets/certificates/Packet-Tracer.pdf";
import Dev from "../../assets/certificates/Development.pdf";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaGraduationCap, FaLaptopCode, FaCertificate, FaLightbulb } from "react-icons/fa"; // React Icons import
import "./About.css";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "Firebase", level: 60 },
  { name: "Stripe", level: 65 },
  { name: "MongoDB", level: 70 },
];

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        <h1>Hi👋! I’m Haymanot,</h1> <br/> a Full-Stack Developer passionate about building
        scalable and engaging web applications. I specialize in React.js and
        Node.js.
      </p>

      <VerticalTimeline>
        {/* Education */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2022"
          iconStyle={{ background: "#4CAF50", color: "#fff" }}
          icon={<FaGraduationCap />} // React Icon for education
        >
          <h4 className="vertical-timeline-element-title">High School Diploma</h4>
          <h5 className="vertical-timeline-element-subtitle">Gibson School Systems</h5>
          <p>
            Completed high school education with a focus on STEM subjects,
            fostering a passion for technology and problem-solving.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - Present"
          iconStyle={{ background: "#4CAF50", color: "#fff" }}
          icon={<FaGraduationCap />} // React Icon for education
        >
          <h4 className="vertical-timeline-element-title">
            Bachelor's in Software Engineering
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Addis Ababa University, Ethiopia
          </h5>
          <p>
            Pursuing a degree in Software Engineering, specializing in
            full-stack web development and artificial intelligence. Expected to
            graduate in 2027.
          </p>
        </VerticalTimelineElement>

        {/* Work Experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Present"
          iconStyle={{ background: "#2196F3", color: "#fff" }}
          icon={<FaLaptopCode />} // React Icon for work
        >
          <h4 className="vertical-timeline-element-title">Self-Taught Developer</h4>
          <h5 className="vertical-timeline-element-subtitle">Independent Learning</h5>
          <p>
            Built a strong foundation in web development through hands-on
            projects and self-paced courses:
          </p>
          <ul>
            <li>
              <strong>Evangadi Network Course:</strong> Mastered essential web
              development concepts and built responsive websites.
            </li>
            <li>
              <strong>FreeCodeCamp:</strong> Completed interactive tutorials in
              JavaScript, Frontend Libraries, and APIs.
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* Certificates */}
        <VerticalTimelineElement
          className="vertical-timeline-element--certificate"
          date="2023"
          iconStyle={{ background: "#FFC107", color: "#fff" }}
          icon={<FaCertificate />} // React Icon for certificate
        >
          <h4 className="vertical-timeline-element-title">Cisco Packet Tracer Certificate</h4>
          <h5 className="vertical-timeline-element-subtitle">Cisco Networking Academy</h5>
          <p>
            Gained hands-on experience in designing and simulating complex
            network infrastructures using Cisco Packet Tracer. Developed skills
            in routing, switching, and troubleshooting.
          </p>
          <a
            href={PacketTracer}
            target="_blank"
            rel="noopener noreferrer"
            className="timeline-btn"
          >
            View Certificate
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--certificate"
          date="2024"
          iconStyle={{ background: "#FFC107", color: "#fff" }}
          icon={<FaCertificate />} // React Icon for certificate
        >
          <h4 className="vertical-timeline-element-title">Web Development Certificate</h4>
          <h5 className="vertical-timeline-element-subtitle">Udacity</h5>
          <p>
            Completed an intensive course on Frontend web development, mastering
            HTML, CSS, and JS.
          </p>
          <a
            href={Dev}
            target="_blank"
            rel="noopener noreferrer"
            className="timeline-btn"
          >
            View Certificate
          </a>
        </VerticalTimelineElement>

        {/* Future Goals */}
        <VerticalTimelineElement
          className="vertical-timeline-element--future"
          date="2025"
          iconStyle={{ background: "#9C27B0", color: "#fff" }}
          icon={<FaLightbulb />} // React Icon for future goals
        >
          <h4 className="vertical-timeline-element-title">
            Build an AI-Powered Application
          </h4>
          <p>
            Plan to create an AI-based platform that enhances user experience
            and productivity.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* Skills */}
      <div className="skills">
        <h3>Skills</h3>
        <div className="skill-list">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  textColor: "#4CAF50",
                  pathColor: "#4CAF50",
                  trailColor: "#e0e0e0",
                })}
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
