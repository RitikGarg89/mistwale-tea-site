import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import ProductCard from './Components/ProductCard/ProductCard'

function App() {

  const PRODUCTS = [
    { id: 101, name: "Assam Breakfast Black Tea", category: "Black", price: 349, stock: 40, image: "/images/product-101-assam-breakfast.webp", desc: "Strong, malty CTC tea from Upper Assam estates. Perfect with milk and a little sugar in the morning." },
    { id: 102, name: "Darjeeling First Flush", category: "Black", price: 1299, stock: 12, image: "/images/product-102-darjeeling-first-flush.webp", desc: "Delicate, floral spring harvest leaves with a muscatel note. Best without milk.", rating: 4.8, reviews: 128 },
    { id: 103, name: "Kashmiri Kahwa", category: "Green", price: 549, stock: 25, image: "/images/product-103-kashmiri-kahwa.webp", desc: "Green tea with saffron, cardamom, cinnamon and almond flakes." },
    { id: 104, name: "Masala Chai Blend", category: "Black", price: 399, stock: 60, image: "/images/product-104-masala-chai-blend.webp", desc: "Bold Assam leaves with ginger, cardamom, clove and black pepper. Our bestseller.", rating: 4.7, reviews: 342 },
    { id: 105, name: "Nilgiri Green Tea", category: "Green", price: 449, stock: 30, image: "/images/product-105-nilgiri-green-tea.webp", desc: "Smooth, grassy green tea from the Blue Mountains of the south." },
    { id: 106, name: "Chamomile & Tulsi", category: "Herbal", price: 499, stock: 18, image: "/images/product-106-chamomile-tulsi.webp", desc: "Caffeine-free calming blend of chamomile flowers and holy basil." },
    { id: 107, name: "Hibiscus Rose Infusion", category: "Herbal", price: 599, stock: 0, image: "/images/product-107-hibiscus-rose-infusion.webp", desc: "Tangy hibiscus with rose petals. Lovely iced." },
    { id: 108, name: "Tea Lover's Sampler Gift Box", category: "Gifts", price: 1899, stock: 9, image: "/images/product-108-tea-lovers-sampler.webp", desc: "Six of our favourite teas in a wooden gift box with a brewing guide." }
  ];

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
      {PRODUCTS.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
          onQuickView={quickView}
        />
      ))}
    </div>
  )
}

export default App