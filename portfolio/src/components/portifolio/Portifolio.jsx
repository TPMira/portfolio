import React from 'react'
import IMG1 from '../../assets/cd7.png'
import IMG3 from '../../assets/web3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG4,
    title: 'Mobile E-commerce with Flutter.',
    github: 'https://github.com/ThiagoDePaulaMira/Loja_Virtual_Upis',
    
  },
  {
    id: 2,
    image: IMG4,
    title: 'Mobile virtual store management.',
    github: 'https://github.com/ThiagoDePaulaMira/Gerenciamento_Loja_Upis',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Web3',
    github: 'https://github.com/ThiagoDePaulaMira/projetos/tree/master/Web%203.0',
    demo: 'https://dribbble.com'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Site Cold7',
    github: 'https://github.com/ThiagoDePaulaMira/CD7/tree/master/cd7',
    demo: 'https://cold7.netlify.app'    
  },
 
]


const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={ demo } className='btn btn-primary' target='_blank'>Live Demo</a>
                  
                </div>
              </article>
            )
          })
        }
      </div>      
    </section>
  )
}

export default Portifolio