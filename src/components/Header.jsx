/* eslint-disable */
import React, { useState } from 'react'

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const openIconStyle = isNavOpen ? { display: 'none' } : { display: 'block' }
  const closeIconStyle = isNavOpen ? { display: 'block' } : { display: 'none' }

  return (
    <header className={`header ${isNavOpen ? 'nav-open' : ''}`}>
      <span className='header__logo'>Rivo</span>
      <nav className='main-nav'>
        <ul className='main-nav__list'>
          <li>
            <a className='main-nav-link' href='#'>
              Home
            </a>
          </li>
          <li>
            <a className='main-nav-link' href='#'>
              Shop
            </a>
          </li>
          <li>
            <a className='main-nav-link' href='#'>
              Features
            </a>
          </li>
          <li>
            <a className='main-nav-link' href='#'>
              Contact
            </a>
          </li>
          <li>
            <div className='main-nav__icon'>
              <img
                className='icon-mobile-nav--open'
                src={require('../assets/images/shopping-bag.svg').default}
                alt='basket icon'
              />
              <img
                className='icon-mobile-nav--close'
                src={require('../assets/images/ellipse.svg').default}
                alt='basket ellipse'
              />
            </div>
          </li>
          <li>
            <a className='main-nav-link nav-login' href='#'>
              Login
            </a>
          </li>
        </ul>
      </nav>
      <button className='main-nav-btn-mobile' onClick={toggleNav}>
        <img
          className='icon-mobile-nav icon-mobile-nav--open'
          src={require('../assets/images/burger.svg').default}
          alt='hamburger menu icon'
          style={openIconStyle}
        />
        <img
          className='icon-mobile-nav icon-mobile-nav--close'
          src={require('../assets/images/x.svg').default}
          alt='hamburger menu icon'
          style={closeIconStyle}
        />
      </button>
    </header>
  )
}
