/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Product } from './Product'

export function Selling() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?limit=${showAll ? 9 : 3}`
        )
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('An error occurred while downloading products:', error)
      }
      setIsLoading(false)
    }
    getProducts()
  }, [showAll])

  const handleSeeAllClick = () => {
    setShowAll(!showAll)
  }

  return (
    <section className='section-selling'>
      <div className='section-selling-container'>
        <span className='section-selling-heading'>Best selling</span>
        <h2 className='section-selling-description'>
          Get in on the trend with our curated selection of best-selling styles.
        </h2>
      </div>
      {isLoading && <div className='loading'>Loading... </div>}
      <div className='section-selling-offer'>
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating.rate}
            image={product.image}
          />
        ))}
      </div>

      <div>
        <a
          href='#'
          className='section-selling-button'
          onClick={(e) => {
            e.preventDefault()
            handleSeeAllClick()
          }}
        >
          {showAll ? 'See less' : 'See all'}&nbsp;&nbsp;
          {showAll ? '\u2191' : '\u2192'}
        </a>
      </div>
    </section>
  )
}
