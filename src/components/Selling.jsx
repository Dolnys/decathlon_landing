/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Product } from './Product'

export function Selling() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?limit=3`
        )
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('An error occurred while downloading products:', error)
      }
      setIsLoading(false)
    }
    getProducts()
  }, [])

  const handleSeeAllClick = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=9`)
      const newProd = await response.json()
      setProducts((prevProducts) => [...newProd])
    } catch (error) {
      console.error('An error occurred while downloading products:', error)
    }
    setIsLoading(false)
  }

  return (
    <section className='section-selling'>
      <div className='section-selling-container'>
        <span className='section-selling-heading'>Best selling</span>
        <h2 className='section-selling-description'>
          Get in on the trend with our curated selection of best-selling styles.
        </h2>
      </div>

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
          See all&nbsp;&nbsp;&rarr;
        </a>
      </div>
    </section>
  )
}
