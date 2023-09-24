import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Selling } from './components/Selling'

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Selling />
      </main>
      <script src='assets/scripts/main.js'></script>
    </div>
  )
}
