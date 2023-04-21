import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id = 'about'>
       <div className='about-left'>
      <div className='about-title'>
        <h2> About Me</h2 >
        <h5> Getting to Know</h5>
      </div>

      <div className='about-container'> 
      <div className='about-content'>
        <div className='about-cards'>
            <article className='about-card'>
              <h5> Education</h5>
              <small> Computer Engineering student </small>
            </article>

            <article className='about-card'>
              <h5> Experience</h5>
              <small> Internship - Web Developer </small>
            </article>
        </div>
        </div>

        <div className='about-right'>
              <p>
                Hi! I'm Jella Marie D. Custodio. 
                <span>A graduating computer 
                engineering student from Tuy, Batangas. Currently I'm doing 
                my Internship at TERAVISION CORP as a Web Developer Intern where
                I learn professional skills like HTML, CSS, JAVASCRIPT, and REACT JS.</span>
              </p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default About
