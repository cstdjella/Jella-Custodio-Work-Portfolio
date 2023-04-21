import React from 'react'
import './intro.css'
import Github from '../../image/github.png'
import LinkedIn from '../../image/linkedin.png'
import Instagram from '../../image/instagram.png'
import Vector from '../../image/Vector-2.png'
import arrow1 from '../../image/arrow1.png'
import arrow2 from '../../image/arrow2.png'
import Profile from '../../image/Profile.png'

const Intro = () => {
  return (
    <div className='intro'>
      <div className='intro-left'>
        <div className='intro-name'>
        <span> Hi there!</span>
        <span>I'm Jella</span>
        <span>An aspiring WEB DEVELOPER that have a passion 
            for creating </span>
        <span>interactive and visually 
            appealing websites. </span>
        </div>

        <div className='intro-icons'>
            <img src = {Github} alt=""/>
            <img src = {LinkedIn} alt=""/>
            <img src = {Instagram} alt=""/>
        </div>
      </div>
        <div className='intro-right'>
            <img src = {Vector} alt=""/>
            <img src = {arrow1} alt=""/>
            <img src = {arrow2} alt=""/>
            <img src = {Profile} alt=""/>
        </div>

    </div>
  )
}

export default Intro
