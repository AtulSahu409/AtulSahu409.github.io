import React from 'react'
import { useState } from 'react'
import "./Header.css"
const Header = () => {
    const[Toggle,showMenu]=useState(false)
  return (
    <div>
        <header className='header'>
            <nav className='nav container'>
                <a href='#home' className='nav__logo'>Atul</a>
                
                <div className={Toggle?"nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href='#home' className='nav__link active-link' >
                                <i className='uil uil-estate nav__icon'></i>Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#about' className='nav__link'>
                                <i className='uil uil-user nav__icon'></i>About
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#Skills' className='nav__link'>
                                <i className='uil uil-file-alt nav__icon'></i>Skill
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#Qualification' className='nav__link'>
                            <i class="uil uil-graduation-cap nav__icon"></i>Qualification
                            </a>
                        </li>
                        {/* <li className='nav__item'>
                            <a href='#git' className='nav__link'>
                            <i class="uil uil-graduation-cap nav__icon"></i>git
                            </a>
                        </li> */}
                        <li className='nav__item'>
                            <a href='#Project'className='nav__link' >
                                <i className='uil uil-briefcase-alt nav__icon'></i>Project
                            </a>
                        </li>
                        
                        <li className='nav__item'>
                            <a href='#Contact' className='nav__link'>
                                <i className='uil uil-message nav__icon'></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)}></i>

                </div>
                <div className='nav__toggle' onClick={()=>showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header