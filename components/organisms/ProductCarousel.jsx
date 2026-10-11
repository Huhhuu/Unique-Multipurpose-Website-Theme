import { useState, useRef } from 'react'
import ProductCard from '@/components/molecules/ProductCard'

export default function ProductCarousel({ products = [] }) {
  const [favorites, setFavorites] = useState({})
  const [addedItems, setAddedItems] = useState({})
  const [activeSlide, setActiveSlide] = useState(0)
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const carouselRef = useRef(null)
  const scrollRafRef = useRef(null)

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleBuy = (id) => {
    setAddedItems((prev) => ({ ...prev, [id]: true }))
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [id]: false }))
    }, 1600)
  }

  const handleScroll = (e) => {
    const container = e.currentTarget
    if (!container || !container.children.length) return

    if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current)
    scrollRafRef.current = requestAnimationFrame(() => {
      const containerCenter = container.scrollLeft + container.offsetWidth / 2
      let closestIndex = 0
      let minDistance = Infinity

      Array.from(container.children).forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2
        const distance = Math.abs(containerCenter - childCenter)
        if (distance < minDistance) {
          minDistance = distance
          closestIndex = index
        }
      })

      setActiveSlide(closestIndex)
    })
  }

  const scrollToSlide = (index) => {
    setActiveSlide(index)
    if (carouselRef.current) {
      const card = carouselRef.current.children[index]
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    }
  }

  return (
    <div>
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-6 lg:pb-0 no-scrollbar -mr-5 sm:-mr-8 lg:mr-0 pr-6 sm:pr-8 lg:pr-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:overflow-visible"
        onScroll={handleScroll}
      >
        {products.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            index={idx}
            isFavorite={Boolean(favorites[product.id])}
            isAdded={Boolean(addedItems[product.id])}
            isHighlighted={hoveredIdx === idx}
            onToggleFavorite={() => toggleFavorite(product.id)}
            onBuy={() => handleBuy(product.id)}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          />
        ))}
      </div>

      <div className="flex sm:hidden items-center justify-center gap-1.5 mt-5">
        {products.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollToSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
              activeSlide === idx ? 'w-6 bg-primary' : 'w-1.5 bg-gray-200'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
