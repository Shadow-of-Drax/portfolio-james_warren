import React from 'react'
import './ProjectCardContainer.css'

import ProjectCardL from '../ProjectCardL/ProjectCardL.js';
import ProjectCardR from '../ProjectCardR/ProjectCardR.js';

import GitHubIcon from '../../media/github-logo.png';
import Cannon from '../../media/Cannon.jpeg';
import Battleshippreview from '../../media/Battleshippreview.png';
import Ricdalrevolver from '../../media/Ricdalrevolver.png';

const projectCardContainer = (props) => {
  return(
    <div className="cardContainer">
      <ProjectCardL
        projectLink='https://github.com/Shadow-of-Drax/Portfolio/tree/main/Battleship'
        projectImage={Battleshippreview}
        title='Battleship'
        techUsed='html'
        description='Simple Battleship game created using HTML.'
        githubLink='https://github.com/Shadow-of-Drax/Portfolio/tree/main/Battleship'
        gitHubIcon={GitHubIcon}
        bga="bg1"
      />
      <ProjectCardR
        projectLink='https://github.com/Shadow-of-Drax/Portfolio/tree/main/my-blog'
        projectImage={Cannon}
        title='My Blog'
        techUsed='React.js, HTML, CSS, JavaScript'
        description='Blog created using React.js, HTML, CSS, and JavaScript.'
        githubLink='https://github.com/Shadow-of-Drax/Portfolio/tree/main/my-blog'
        gitHubIcon={GitHubIcon}
        bga='bg3'
      />
      <ProjectCardL
        projectLink='https://github.com/Shadow-of-Drax/Portfolio/tree/main/mini-netflix'
        projectImage={Ricdalrevolver}
        title='Mini Netflix'
        techUsed='React.js, HTML, CSS, JavaScript'
        description='Netflix clone created using React.js, HTML, CSS, and JavaScript.'
        githubLink='https://github.com/Shadow-of-Drax/Portfolio/tree/main/mini-netflix'
        gitHubIcon={GitHubIcon}
        bga="bg5"
      />
    </div>

  )
}

export default projectCardContainer;