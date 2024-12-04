import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from '../styles/ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    githubLink: string;
    liveDemo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, githubLink, liveDemo }) => {
    return (
        <motion.div
            className={styles.card}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.techStack}>
                {techStack.map((tech, index) => (
                    <span key={index} className={styles.techBadge}>
                        {tech}
                    </span>
                ))}
            </div>
            <div className={styles.links}>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <FaGithub /> GitHub
                </a>
                {liveDemo && (
                    <a href={liveDemo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <FaExternalLinkAlt /> Live Demo
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
