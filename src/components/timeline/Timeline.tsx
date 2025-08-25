import React from "react";
import "./Timeline.css";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    title: "Sofware Engineer Developer Intern",
    company: "BNY",
    period: "June 2025 - August 2025",
    description:
      "Developed full stack applications for internal company use while working closely alongside other engineers on the team. Participated in agile ceremonies and devlivered high quality products through trunk based development.",
    technologies: ["Java", "Html/CSS", "SQL", "Angular", "Springboot"],
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-job-title">{exp.title}</h3>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <h4 className="timeline-company">{exp.company}</h4>
              <p className="timeline-description">{exp.description}</p>
              {exp.technologies && (
                <div className="timeline-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="timeline-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
