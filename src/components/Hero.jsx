import React from 'react';
import '../styles.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Hello, I'm James Warren</h1>
                <p>FULL STACK DEVELOPER.</p>
                <a href="#portfolio" className="btn">View My Work</a>
            </div>
        </section>
    );
};

export default Hero;