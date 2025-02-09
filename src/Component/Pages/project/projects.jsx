import React from 'react';
import './Project.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my skills and projects.',
    imageUrl: '/path/to/portfolio-image.jpg',
  },
  {
    title: 'E-commerce Platform',
    description: 'An online marketplace with product listings, cart, and payment integration.',
    imageUrl: '/path/to/ecommerce-image.jpg',
  },
  {
    title: 'Weather App',
    description: 'A real-time weather app that provides forecasts and weather updates.',
    imageUrl: '/path/to/weather-image.jpg',
  },
  // Add more projects as needed
];

const Project = () => {
  return (
    <div className="project-section">
      <h2 className="section-title">My Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
