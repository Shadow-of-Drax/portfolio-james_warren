import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar.js";
import Landing from "./components/Landing/Landing.js";
import Jumbotron from "./components/Jumbotron/Jumbotron.js";
import ProjectCardContainer from "./components/ProjectCardContainer/ProjectCardContainer.js";
import Skills from "./components/Skills/Skills.js";
import Footer from "./components/Footer/Footer.js";
import Background from "./components/media/background-1.jpg";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Landing
          title="James Warren"
          content="Full Stack Developer"
          image={Background}
        />
        <Jumbotron
          title="About Me"
          content="Hello! I'm James Warren, a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. My journey began with a successful career in the U.S. Army, where I honed my skills in project management, leadership, and adaptability. These experiences have equipped me with a unique perspective on teamwork and problem-solving, which I now apply to my work in web development.
                    I have recently completed a comprehensive web development bootcamp, where I gained proficiency in JavaScript, React.js, Node.js, and database management with MongoDB and PostgreSQL. My projects, such as a streaming service and a pet boarding website, showcase my ability to create engaging and functional web applications that meet user needs.
                    I thrive in collaborative environments and am always eager to learn and implement new technologies. With my background in leadership and training, I excel at mentoring others and contributing to team success. Whether it's developing user-friendly interfaces or managing project workflows, I am committed to delivering high-quality results.
                    Feel free to check out my work on GitHub and my portfolio website, and don’t hesitate to reach out if you’re interested in collaborating!"
        />
        <ProjectCardContainer />

        <Skills />

        <Footer />
      </>
    );
  }
}

export default App;
