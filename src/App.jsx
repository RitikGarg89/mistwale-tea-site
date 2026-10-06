import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Shop from './Components/Shop/Shop'
import Delivery from './Components/Delivery/Delivery'
import Review from './Components/Review/Review'
import FAQ from './Components/FAQ/FAQ'
import NewsPaper from './Components/NewsPaper/NewsPaper'

function App() {


  const addToCart = (product) => {
    alert(`Added ${product.name} to cart!`);
    console.log("Added to cart:", product);
  }

  const quickView = (product) => {
    alert(`Quick view ${product.name}`);
    console.log("Quick view:", product);
  }

  return (
    <div className="min-h-screen bg-[#f6f1e7] text-[#1b1b1b]">
      <Header />
      <Hero />
      <Shop
        onAddToCart={addToCart}
        onQuickView={quickView}
      />
      <Delivery />
      <Review />
      <FAQ />
      <NewsPaper />
    </div>
  )
}

export default App