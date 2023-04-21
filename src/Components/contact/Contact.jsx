import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pe8p8ei', 'service_pe8p8ei', form.current, 'YOUR_PUBLIC_KEY')
     
    e.target.reset()
  };

  return (
    <section id = 'contact'>
       <div className='contact-title'>
         <h2> Contact Me</h2>
         <h5> Let's Create Something Amazing Together </h5>
       </div>
       <div className='contact-container'>
        <div className='contact-options'>
          <article className = 'contact-option'>
            <MdEmail className='.contact-option-icon'/>
            <h4> Email  </h4>
            <h5> jellacustodio.work@gmail.com</h5>
            <a href='mailto:jellacustodio.work@gmail.com'>
              Send Message
            </a>
          </article>
        
        <article className = 'contact-option'>
          <BsLinkedin className='.contact-option-icon'/>
            <h4> Linkedin  </h4>
            <h5> Jella Marie Custodio</h5>
            <a href='www.linkedin.com/in/jella-marie-custodio-4943ba21a'>
              Send Message
            </a>
          </article>

          <article className = 'contact-option'>
          <BsTelegram className='.contact-option-icon'/>
            <h4> Telegram  </h4>
            <h5> @jellacustodio</h5>
            <a href='https://web.telegram.org/k/#@jellacustodio'>
              Send Message
            </a>
          </article>
        </div>

        <form ref = {form} onSubmit ={sendEmail}>
          <input type='text' name = 'name' placeholder ='Your Full Name' required/> 
          <input type='email' name = 'email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder ='YourMessage' required>          </textarea>
        </form>

        <button type= 'submit' className= 'contact-btn'> Send Message</button>
       </div>


       
       </section>

  )
}

export default Contact
