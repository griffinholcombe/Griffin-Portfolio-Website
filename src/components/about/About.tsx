import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <div className="about-text-section">
          <p className="about-description">
            Fully committed to the philosophy of life-long learning, I'm a full
            stack software engineer with a deep passion for all things web
            development and artificial intelligence. The unique combination of
            creativity, logic, technology and never running out of new things to
            discover, drives my excitement and passion for software engineering.
            When I'm not developing I spend my time reading, finding new ways to
            stay fit, and bettering myself.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <h4>Full Stack Development</h4>
              <p>Experienced in both frontend and backend technologies</p>
            </div>
            <div className="highlight-item">
              <h4>AI & Machine Learning</h4>
              <p>
                Passionate about artificial intelligence and its applications
              </p>
            </div>
            <div className="highlight-item">
              <h4>Continuous Learning</h4>
              <p>Always exploring new technologies and methodologies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
