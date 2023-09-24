/* eslint-disable */
import React from 'react'

export function Hero() {
  return (
    <section className='section-hero'>
      <div className='section-hero-hero'>
        <div className='section-hero-text-box'>
          <h1 className='section-hero-heading'>
            Discover and Find Your Own Fashion!
          </h1>
          <p className='section-hero-description'>
            Explore our curated collection of stylish <br /> clothing and
            accessories tailored to your
            <br /> unique taste.
          </p>
          <a href='#' className='section-hero-button'>
            Explore now
          </a>
        </div>
        <div className='section-hero-image-box'>
          <img
            src={require('../assets/images/hero.png')}
            className='section-hero-img'
            alt='Woman'
          />
        </div>
      </div>
    </section>
  )
}
