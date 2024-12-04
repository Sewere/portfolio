import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : undefined}>
                Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : undefined}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? styles.activeLink : undefined}>
                Projects
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : undefined}>
                Contact
            </NavLink>
        </nav>
    );
};

export default Navbar;
