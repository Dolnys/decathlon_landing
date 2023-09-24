import React from 'react'

export function Product({ title, price, rating, image }) {
  return (
    <div className='section-selling-card'>
      <img src={image} alt={title} className='section-selling-card-img' />
      <div className='section-selling-card-content'>
        <div className='section-selling-card-title'>
          <span>{title}</span>
        </div>
        <div className='section-selling-card-info'>
          <div className='section-selling-card-info-price'>
            <span>${price}</span>
          </div>
          <div className='section-selling-card-info-rate'>
            <span>{rating}</span>
            <img
              src={require('../assets/images/star.svg').default}
              alt='star'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
