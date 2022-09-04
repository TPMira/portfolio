import React from 'react'
import CV from '../../images/Currículo_Thiago.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className= 'btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA