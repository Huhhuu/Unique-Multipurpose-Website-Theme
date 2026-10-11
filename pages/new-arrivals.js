import { useState, useMemo } from 'react'
import Layout from '@/components/layout/Layout'
import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import ProductCard from '@/components/products/ProductCard'
import ProductQuickView from '@/components/products/ProductQuickView'
import ProductPerks from '@/components/products/ProductPerks'
import productsData from '@/data/products-data.json'

export default function NewArrivalsPage({ products }) {
  const [activeTab, setActiveTab] = useState('all')
  const [favorites, setFavorites] = useState(['prod-7', 'prod-9', 'prod-11'])
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [cartCount, setCartCount] = useState(0)

  const newDrops = useMemo(() => {
    return products.filter((p) => p.isNew)
  }, [products])

  const summerCollection = useMemo(() => {
    return products.filter((p) =>
      ['prod-2', 'prod-3', 'prod-6', 'prod-9', 'prod-10'].includes(p.id)
    )
  }, [products])

  const trendingStyles = useMemo(() => {
    return products.filter((p) =>
      ['prod-4', 'prod-5', 'prod-7', 'prod-9', 'prod-11'].includes(p.id)
    )
  }, [products])

  const displayedProducts = useMemo(() => {
    if (activeTab === 'summer') return summerCollection
    if (activeTab === 'trending') return trendingStyles
    return newDrops
  }, [activeTab, summerCollection, trendingStyles, newDrops])

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handleAddToCart = (product) => {
    setCartCount((c) => c + (product.quantity || 1))
  }

  return (
    <Layout
      theme="ecommerce"
      title="New Arrivals & Seasonal Collections | MicPro Store"
      description="Discover fresh season arrivals, vibrant summer collections, and viral street style trends crafted with architectural precision."
    >
      <div className="relative overflow-hidden bg-white -mt-20 pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-[720px] md:w-[960px] h-[380px] md:h-[480px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(249, 97, 216, 0.45) 0%, rgba(22, 99, 249, 0.22) 50%, transparent 75%)',
              filter: 'blur(80px)',
              transform: 'translateZ(0)',
            }}
          />
          <div
            className="absolute top-28 -left-20 w-[450px] md:w-[600px] h-[380px] md:h-[480px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(245, 149, 58, 0.4) 0%, rgba(254, 243, 199, 0.2) 55%, transparent 75%)',
              filter: 'blur(75px)',
              transform: 'translateZ(0)',
            }}
          />
        </div>

        <Container className="relative z-10">
          <SectionTitle
            subtitle="Fresh Season Drops"
            title="New Arrivals & Seasonal Runway Capsule"
            description="Explore our handpicked curation of contemporary silhouettes, breathable textiles, and statement outerwear for the season ahead."
          />

          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-dark text-white shadow-md'
                  : 'bg-gray-100 text-dark/70 hover:bg-gray-200'
              }`}
            >
              ✨ Fresh Drops ({newDrops.length})
            </button>
            <button
              type="button"
              id="summer"
              onClick={() => setActiveTab('summer')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeTab === 'summer'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-dark/70 hover:bg-gray-200'
              }`}
            >
              ☀️ Summer Collection ({summerCollection.length})
            </button>
            <button
              type="button"
              id="trending"
              onClick={() => setActiveTab('trending')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeTab === 'trending'
                  ? 'bg-secondary-pink text-white shadow-md'
                  : 'bg-gray-100 text-dark/70 hover:bg-gray-200'
              }`}
            >
              🔥 Trending Styles ({trendingStyles.length})
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={toggleFavorite}
                onQuickView={setQuickViewProduct}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/5 via-secondary-pink/5 to-secondary-orange/5 rounded-3xl p-8 sm:p-12 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-primary text-white text-[11px] font-bold rounded-full uppercase tracking-wider mb-3">
                Early Access VIP
              </span>
              <h3 className="font-heading text-h4 font-bold text-dark">
                Want First Dibs on Next Drop?
              </h3>
              <p className="font-sans text-b3 text-dark/70 mt-1 max-w-xl">
                Subscribe to private lookbooks and receive exclusive member-only early access 48 hours before official global launch.
              </p>
            </div>
            <div className="flex w-full md:w-auto items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-64 h-11 px-4 rounded-full border border-gray-200 text-b3 focus:outline-none focus:border-primary"
              />
              <button
                type="button"
                className="h-11 px-6 rounded-full bg-dark text-white font-sans text-sub2 font-medium hover:bg-primary transition-colors whitespace-nowrap shadow-sm"
              >
                Join Drop
              </button>
            </div>
          </div>

          <ProductPerks />
        </Container>
      </div>

      <ProductQuickView
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      products: productsData,
    },
  }
}
