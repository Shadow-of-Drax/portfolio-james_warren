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
          content="Full-stack web developer with 22 years of Army service. Recently earned a certificate in Full Stack development from Udemy, with newly developed skills in React.js, JavaScript, CSS, and responsive web development. Excited to use my skills and programming techniques to best serve users."
        />
        <ProjectCardContainer />

        <Skills />

        <Footer />
      </>
    );
  }
}

export default App;
