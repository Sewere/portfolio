import React from 'react';
import styles from '../styles/Contact.module.css';
import { FiMail, FiPhone } from 'react-icons/fi';

const Contact: React.FC = () => {
    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.title}>Get in Touch</h1>
            <p className={styles.subtitle}>
                Have a question, collaboration idea, or just want to say hello? I'd love to hear from you!
            </p>

            {/* Contact Form */}
            <form className={styles.contactForm}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" className={styles.input} />

                <label htmlFor="email" className={styles.label}>Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" className={styles.input} />

                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" name="message" placeholder="Your Message" className={styles.textarea} />

                <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
                <p>
                    <FiMail className={styles.icon} />{' '}
                    <a href="mailto:severipalikko@gmail.com" className={styles.link}>
                        severipalikko@gmail.com
                    </a>
                </p>
                <p>
                    <FiPhone className={styles.icon} />{' '}
                    <span className={styles.phone}>+358 40 517 8242</span>
                </p>
            </div>
        </div>
    );
};

export default Contact;
