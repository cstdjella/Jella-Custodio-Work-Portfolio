import React from 'react'
import './skills.css'
import HTML from '../../image/html.png'
import CSS from '../../image/css.png'
import Bootstrap from '../../image/bootstrap.png'
import Reactt from '../../image/react.png'
import JS from '../../image/js.png'


const Skills = () => {
  return (
   <section id = 'skills'>
     
        <div className='skills-title'>
          <h2> Skills </h2>
          <h5> What Skills I Have </h5>
        </div>

    <div className='skills-container'>
      <div className='skills-front'>
          <h3> Front-End Development </h3>

          <div className='skills-content'>
            <article className='skills-details'>
                <img src = {HTML} alt="" />
                  <div>
                    <h4> HTML </h4>
                    <small className='text-light'>
                      Experienced
                    </small>
                  </div>
            </article>

            <article className='skills-details'>
                <img src = {CSS} alt="" />
                  <div>
                  <h4> CSS </h4>
                  <small className='text-light'>
                    Experienced
                  </small>
                  </div>
            </article>

            <article className='skills-details'>
                <img src = {Bootstrap} alt="" />
                  <div>
                  <h4> Bootstrap </h4>
                  <small className='text-light'>
                    Experienced
                  </small>
                  </div>
            </article>

            <article className='skills-details'>
                <img src = {Reactt} alt="" />
                  <div>
                  <h4> React </h4>
                  <small className='text-light'>
                    Experienced
                  </small>`
                  </div>
            </article>
            <article className='skills-details'>
                <img src = {JS} alt="" />
                  <div>
                  <h4> JavaScript </h4>
                  <small className='text-light'>
                    Experienced
                  </small>
                  </div>
            </article>
          </div>
          </div>
        </div>
    
   </section>
  )
}

export default Skills
