import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard'; // Adjust the path as necessary

export const metadata = {
  title: 'Portfolio - Projects',
  description: 'The projects page of my portfolio.',
};

export default function Projects() {
  // Example projects data
  const projects = [
    {
      id: 1,
      logo: 'path/to/project1/logo.png',
      name: 'Project 1',
      content: 'Description of Project 1...',
      link: 'http://example.com/project1'
    },
    {
      id: 2,
      logo: 'path/to/project2/logo.png',
      name: 'Project 2',
      content: 'Description of Project 2...',
      link: 'http://example.com/project2'
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            logo={project.logo}
            name={project.name}
            content={project.content}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
