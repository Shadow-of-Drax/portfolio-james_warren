import React from 'react'
import './Footer.css'

import GitHub from '../../media/github-logo.png';
import LinkedIn from '../../media/linkedin.png';
import Email from '../../media/email.png';
import Resume from '../../media/writing.png';

const footer = (props) => {
  return (
    <footer className = 'footer'>
      <div className='box'>
        <a href="https://github.com/Shadow-of-Drax" target='_blank'>
          <img src = {GitHub}/>
        </a>
      </div>
      <div className='box'>
        <a href='https://www.linkedin.com/in/jameswarren83' target='_blank'>
          <img src = {LinkedIn} />
        </a>
      </div>
      <div className='box'>
        <a href = "mailto: james.r.warren83@gmail.com">
          <img src = {Email} />
        </a>
      </div>
      <div className='box'>
        <a href = '' target='_blank'>
          <img src = {Resume} />
        </a>
      </div>
    </footer>
  )
}

export default footer;