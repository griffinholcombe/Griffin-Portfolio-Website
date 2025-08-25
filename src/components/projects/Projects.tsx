import React from "react";
import "./Projects.css";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "Currently developing a portfolio website through fullstack development as freelance work. The website includes multiple pages, images, videos to showcase a media major's various works.",
      technologies: ["React", "TypeScript", "CSS", "HTML"],
      image: "/assets/project/screenshots/portfoliowebsite.png",
      link: "https://github.com/yourusername/project1",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project-item ${
            index % 2 === 0 ? "text-right" : "text-left"
          }`}
        >
          <div className="project-content">
            <div className="project-text">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
            </div>
            <div className="project-image">
              <div className="image-placeholder">
                <span>Project Screenshot</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
