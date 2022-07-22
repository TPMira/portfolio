import React from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Cold7</a>
      
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portifolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.instagram.com/thiago__mira/' target={'_blank'}><BsInstagram/></a>
        <a href='https://github.com/ThiagoDePaulaMira' target={'_blank'}><FaGithub/></a>
        <a href='https://www.linkedin.com/in/thiago-mira-36b077179/' target={'_blank'}><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Cold7. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer