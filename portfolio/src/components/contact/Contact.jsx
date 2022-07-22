import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b8s29as', 'template_xrq1o3b', form.current, 'IEPRLJbVNulAYcLSW')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>cd7mira@gmail.com</h5>
            <a href='mailto:cd7mira@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Thiago__Mira</h5>
            <a href='https://www.instagram.com/thiago__mira/' target='_blank'>Contact me</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='You Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact