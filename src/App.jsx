import { useState } from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Shop from './Components/Shop/Shop'
import Delivery from './Components/Delivery/Delivery'
import Review from './Components/Review/Review'
import FAQ from './Components/FAQ/FAQ'
import NewsPaper from './Components/NewsPaper/NewsPaper'
import Footer from './Components/Footer/Footer'
import QuickView from './Components/QuickView/QuickView'

function App() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const addToCart = (product) => {
    alert(`Added ${product.name} to cart!`);
    console.log("Added to cart:", product);
  }

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
  }

  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
  }

  return (
    <div className="min-h-screen bg-[#f6f1e7] text-[#1b1b1b]">
      <Header />
      <Hero />
      <Shop
        onAddToCart={addToCart}
        onQuickView={handleQuickView}
      />
      <Delivery />
      <Review />
      <FAQ />
      <NewsPaper />
      <Footer />

      {/* QuickView Modal */}
      <QuickView
        product={quickViewProduct}
        onClose={handleCloseQuickView}
        onAddToCart={addToCart}
      />
    </div>
  )
}

export default App