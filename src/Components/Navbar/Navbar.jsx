import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
        <div className='nav-left'>
            <div className='nav-name'> jmdc. </div>
        </div>

        <div className='nav-right'>
            <div className='nav-list'>
                <ul>
                    <li> 
                        <a href =" "> Home </a> </li>
                    <li> About </li>
                    <li> Works </li>
                </ul>
            </div>

            <button className='button'> Contact
            </button>
        </div>
      
    </div>
  )
}

export default Navbar
