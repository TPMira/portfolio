import React from 'react'
import ME from '../../images/mira.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1- Years Working</small>
            </article>

            <div className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10- Worldwides</small>
            </div>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            I love technology and I think we have a lot to learn and create, my passion that I discovered recently was blockchain and my dream is to work with it,
             but I have a lot of experience with websites and databases and I always try my best to solve the problems that appear.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Takl</a>
        </div>
      </div>
    </section>
  )
}

export default About