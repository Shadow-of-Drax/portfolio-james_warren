import React from "react";
import "./Skills.css";

const skills = (props) => {
  return (
    <section className="skills">
      <div className="inner">
        <h2>Skills</h2>
      </div>
      <div className="container">
        <div
          className="skillCard"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.07)" }}
        >
          <h4>Web Development</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap4</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>Git/GitHub</li>
          </ul>
        </div>
        <div
          className="skillCard"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.14)" }}
        >
          <h4>Workspace Skills</h4>
          <ul>
            <li>Fluent in English</li>
            <li>Exceptional Communicator</li>
            <li>Windows and Mac OS</li>
            <li>Critical Thinker</li>
            <li>Problem Solver</li>
            <li>Team Player</li>
            <li>Time Management</li>
            <li>Adaptable</li>
            <li>Organization</li>
            <li>Attention to Detail</li>
            <li>Leadership</li>
            <li>Self-Motivated</li>
            <li>Accountable</li>
            <li>Quick Learner</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default skills;
