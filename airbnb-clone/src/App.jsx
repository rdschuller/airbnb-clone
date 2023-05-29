// import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './data'

export default function App() {
  const cardElements = cardData.map(card => {
    return <Card 
      key={card.id}
      title={card.title}
      price={card.price}
      rating={card.rating}
      reviewCount={card.stats.reviewCount}
      country={card.location}
      img={card.coverImg}
      openSpots={card.openSpots}
    />
  })
  
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='flex flex-nowrap gap-5 overflow-x-auto'>
        {cardElements}
      </section>
    </div>
  )
}
