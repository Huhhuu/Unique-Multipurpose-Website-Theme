import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import ecommerceData from '@/data/ecommerce-theme.json'

export default function PopularProducts() {
  const { popularProducts } = ecommerceData
  const [favorites, setFavorites] = useState({})
  const [addedItems, setAddedItems] = useState({})
  const [activeSlide, setActiveSlide] = useState(0)
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const carouselRef = useRef(null)

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleBuy = (id) => {
    setAddedItems((prev) => ({ ...prev, [id]: true }))
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [id]: false }))
    }, 1600)
  }

  const scrollRafRef = useRef(null)

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
    <section className="relative bg-transparent pt-0 pb-20 sm:pb-28 overflow-visible">
      <Container className="overflow-visible">
        <div className="bg-white rounded-3xl lg:rounded-4xl shadow-card-soft border border-gray-100/80 p-5 sm:p-8 md:p-10 lg:p-12 xl:p-14 overflow-visible">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="w-full md:w-auto text-center md:text-left">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-h2 text-dark tracking-tight leading-tight">
                {popularProducts.title.replace(popularProducts.highlightWord, '')}
                <span className="text-primary">{popularProducts.highlightWord}</span>
              </h2>
            </div>

            <Link
              href={popularProducts.actionUrl}
              className="hidden md:inline-flex items-center gap-2.5 bg-primary hover:bg-blue-700 text-white font-medium text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 group"
            >
              <span>{popularProducts.actionText}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-6 lg:pb-0 no-scrollbar -mr-5 sm:-mr-8 lg:mr-0 pr-6 sm:pr-8 lg:pr-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:overflow-visible"
            onScroll={handleScroll}
          >
            {popularProducts.products.map((product, idx) => {
              const isFav = Boolean(favorites[product.id])
              const isAdded = addedItems[product.id]
              const isHighlighted = hoveredIdx === idx

              return (
                <motion.div
                  key={product.id}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`w-64 sm:w-auto flex-shrink-0 sm:flex-shrink snap-center sm:snap-align-none flex flex-col p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 min-w-0 ${
                    isHighlighted
                      ? 'bg-white shadow-card-hover border-gray-100/90 -mb-6 md:-mb-10 relative z-20'
                      : 'bg-transparent border-transparent mb-0 relative z-10'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
                >
                  <div
                    className="relative aspect-square rounded-xl p-5 sm:p-6 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105"
                    style={{ backgroundColor: product.bgBoxColor }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFavorite(product.id)}
                      aria-label={`Yêu thích ${product.name}`}
                      className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-transform active:scale-75 focus:outline-none"
                    >
                      <svg
                        className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-200 ${
                          isFav
                            ? 'fill-secondary-rose text-secondary-rose'
                            : 'fill-transparent text-gray-400 hover:text-secondary-rose'
                        }`}
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>

                    <div className="relative w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 640px) 260px, (max-width: 1024px) 280px, 280px"
                      />
                    </div>
                  </div>

                  <div className="mt-3.5 sm:mt-4 px-1 pb-1 flex items-center justify-between gap-2 min-w-0">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-b2 sm:text-sub1 font-semibold text-dark tracking-tight leading-snug truncate">
                        {product.name}
                      </h3>
                      <div className="flex items-baseline mt-1 gap-1.5 flex-wrap">
                        <span className="font-heading font-extrabold text-base sm:text-lg lg:text-h5 text-dark leading-none whitespace-nowrap">
                          {product.price}
                          <span className="text-xs sm:text-sm font-bold text-primary ml-0.5">
                            {product.currency}
                          </span>
                        </span>
                        <span className="text-xs text-gray-400 line-through font-medium whitespace-nowrap">
                          {product.originalPrice}
                          {product.currency}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleBuy(product.id)}
                      className={`shrink-0 font-heading font-bold text-xs uppercase tracking-wider px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-200 shadow-sm active:scale-95 ${
                        isAdded
                          ? 'bg-emerald-500 text-white'
                          : 'bg-primary hover:bg-blue-700 text-white hover:shadow-md'
                      }`}
                    >
                      {isAdded ? '✓' : 'BUY'}
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="flex justify-center items-center gap-1.5 mt-8 md:hidden">
            {popularProducts.products.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => scrollToSlide(i)}
                aria-label={`Chuyển tới sản phẩm ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === i ? 'w-8 bg-primary' : 'w-2 bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
