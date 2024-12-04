import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2024 Severi Pälikkö. All rights reserved.</p>
            <p>
                Made with ❤️ using React and TypeScript. Check out the{' '}
                <a href="https://github.com/username/portfolio" target="_blank" rel="noopener noreferrer">
                    source code
                </a>.
            </p>
        </footer>
    );
};

export default Footer;
