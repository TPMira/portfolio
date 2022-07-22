import React from 'react'

import { BiCheck } from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lightweight layouts.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visual design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Colors.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Usability.</p>
            </li>
            
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Developent</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Blockchain integration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Forms.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>E-commerce.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creaction</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I write often.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I give examples.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I always keep up to date.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Do your keyword research.</p>
            </li>
            
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services