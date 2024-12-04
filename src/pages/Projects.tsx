import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
    const projectData = [
        {
            title: "Portfolio Website",
            description: "A modern portfolio to showcase my work, built with React, TypeScript, and Vite.",
            techStack: ["React", "TypeScript", "CSS Modules", "Framer Motion"],
            githubLink: "https://github.com/username/portfolio",
            liveDemo: "https://yourportfolio.com",
        },
        {
            title: "Task Manager App",
            description: "A simple task management app with drag-and-drop functionality and backend integration.",
            techStack: ["React", "Redux", "Node.js", "MongoDB"],
            githubLink: "https://github.com/username/task-manager",
        },
        {
            title: "Weather Dashboard",
            description: "A weather app showing live forecasts using the OpenWeatherMap API.",
            techStack: ["React", "APIs", "JavaScript"],
            githubLink: "https://github.com/username/weather-dashboard",
            liveDemo: "https://yourweatherdashboard.com",
        },
    ];

    return (
        <div>
            <h1>My Projects</h1>
            <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {projectData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
