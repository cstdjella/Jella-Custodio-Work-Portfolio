import React from 'react'
import './works.css'

import Git1 from '../../image/git1.png'
import Git2 from '../../image/git2.png'
import Git3 from '../../image/git3.png'

const Works = () => {
  return (
   <section id = 'works'>
     <div className='works-title'>
     <h2> Works </h2>
    <h5> My Recent Sample Works </h5>
        </div>
 

    <div className="works-container">
        <article className='works-item'>
            <div className="works-image">
                <img src = {Git1} alt=""/>
            </div>
                <h3> Creating Website with ReactJs </h3>
                <div className='works-item-cta'>
                <a href = "https://github.com/cstdjella/FirstWebsite-with-React-Js.git" 
                className='works-btn' target='blank'> Github </a>
                </div>
        </article>

        <article className='works-item'>
            <div className="works-image">
                <img src = {Git2} alt=""/>
            </div>
                <h3> Restaurant Website with ReactJs</h3>
                <div>
                <a href = "https://github.com/cstdjella/Responsive-Restaurant-Website-with-ReactJs.git" 
                className='works-btn' > Github </a>                                                 
                </div>
        </article>

        <article className='works-item'>
            <div className="works-image">
                <img src = {Git3} alt=""/>
            </div>
                <h3> Food Ordering with React NextJs  </h3>
                <div>
                <a href = "https://github.com/cstdjella/Food-Ordering-App-Using-React-Next.js.git" 
                className='works-btn' target='blank'> Github </a>
                </div>
        </article>

        

    </div>
   </section>
  )
}

export default Works
