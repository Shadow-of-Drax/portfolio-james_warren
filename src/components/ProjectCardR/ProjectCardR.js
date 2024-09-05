import React from 'react';
import './ProjectCardR.css';

const cardR = (props) => {
  return (
    <section className ={props.bga}>
      <div className = 'contentR'>
        <h4>{props.title}</h4>
        <p>
          <strong>Tools Used: {props.techUsed}</strong>
          <br/>
          <br/>
          {props.description}

          </p>
          <div className = 'gitHubIcon'>
            <a href={props.githubLink} target='_blank'>
              <img src={props.gitHubIcon} />
            </a>
          </div>
      </div>
      <div className = 'imageR'>
        <a href={props.projectLink} target="_blank">
          <img src={props.projectImage}/>
        </a>
      </div>

    </section>
  )
}

export default cardR;