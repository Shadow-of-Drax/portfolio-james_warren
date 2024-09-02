import React from 'react';
import '../styles.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">My Portfolio</div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;