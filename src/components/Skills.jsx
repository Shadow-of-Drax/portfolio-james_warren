import React from 'react';
import '../styles.css';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                <div className="skill-item">
                    <h3>HTML & CSS</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{width: '90%'}}></div>
                    </div>
                </div>
                <div className="skill-item">
                    <h3>JavaScript</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{width: '80%'}}></div>
                    </div>
                </div>
                <div className="skill-item">
                    <h3>React.js</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{width: '75%'}}></div>
                    </div>
                </div>
                <div className="skill-item">
                    <h3>Node.js</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{width: '70%'}}></div>
                    </div>
                </div>
                <div className="skill-item">
                    <h3>MongoDB</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{width: '65%'}}></div>
                    </div>
                </div>
                <div className="skill-item">
                    <h3>Communication</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{width: '100%'}}></div>
                    </div> 
                </div>
                <div className="skill-item">
                    <h3>Leadership</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{width: '100%'}}></div>
                    </div> 
                </div>
                <div className="skill-item">
                    <h3>Project Management</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{width: '100%'}}></div>
                    </div> 
                </div>   
            </div>
        </section>
    );
};

export default Skills;