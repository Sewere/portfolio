import React, { useState } from 'react';
import styles from '../styles/ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string; // URL of the project image
    details: string; // Detailed information about the project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, details }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            {/* Card */}
            <div className={styles.card} onClick={openModal}>
                <img src={image} alt={title} className={styles.cardImage} />
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardDescription}>{description}</p>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className={styles.modalBackdrop} onClick={closeModal}>
                    <div
                        className={styles.modal}
                        onClick={(e) => e.stopPropagation()} // Prevent modal closure when clicking inside
                    >
                        <button className={styles.closeButton} onClick={closeModal}>
                            &times;
                        </button>
                        <img src={image} alt={title} className={styles.modalImage} />
                        <h2 className={styles.modalTitle}>{title}</h2>
                        <p className={styles.modalDetails}>{details}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;
