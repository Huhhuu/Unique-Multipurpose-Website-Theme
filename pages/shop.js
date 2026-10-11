import { useState, useMemo } from 'react'
import Layout from '@/components/layout/Layout'
import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import ProductCard from '@/components/products/ProductCard'
import ProductQuickView from '@/components/products/ProductQuickView'
import ProductPerks from '@/components/products/ProductPerks'
import productsData from '@/data/products-data.json'

export default function ShopPage({ products }) {
  const [filterMode, setFilterMode] = useState('all')
  const [favorites, setFavorites] = useState(['prod-1', 'prod-4'])
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [cartCount, setCartCount] = useState(0)

  const displayedProducts = useMemo(() => {
    if (filterMode === 'deals') return products.filter((p) => Boolean(p.discount))
    if (filterMode === 'bestsellers') return products.filter((p) => p.isBestseller)
    return products
  }, [products, filterMode])

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
      title="Official Shop & Flash Sales | MicPro Store"
      description="Shop authentic fashion essentials, exclusive collections, and limited-time deals at MicPro Official Store."
    >
      <div className="relative overflow-hidden bg-white -mt-20 pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-[720px] md:w-[960px] h-[380px] md:h-[480px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(81, 180, 250, 0.55) 0%, rgba(22, 99, 249, 0.28) 45%, transparent 75%)',
              filter: 'blur(75px)',
              transform: 'translateZ(0)',
            }}
          />
          <div
            className="absolute top-20 -right-20 md:right-[-5%] w-[480px] md:w-[650px] h-[400px] md:h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(249, 97, 216, 0.5) 0%, rgba(248, 166, 240, 0.25) 50%, transparent 75%)',
              filter: 'blur(80px)',
              transform: 'translateZ(0)',
            }}
          />
        </div>

        <Container className="relative z-10">
          <SectionTitle
            subtitle="MicPro Official Store"
            title="Curated Fashion Shop & Exclusive Deals"
            description="Handpicked fashion statements and versatile wardrobe staples with complimentary worldwide shipping."
          />

          <div className="flex items-center justify-center gap-2 mb-10">
            <button
              type="button"
              onClick={() => setFilterMode('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                filterMode === 'all'
                  ? 'bg-dark text-white shadow-md'
                  : 'bg-gray-100 text-dark/70 hover:bg-gray-200'
              }`}
            >
              All Items ({products.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('bestsellers')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                filterMode === 'bestsellers'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-dark/70 hover:bg-gray-200'
              }`}
            >
              ⭐ Bestsellers
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('deals')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                filterMode === 'deals'
                  ? 'bg-danger text-white shadow-md'
                  : 'bg-gray-100 text-dark/70 hover:bg-gray-200'
              }`}
            >
              🔥 Flash Deals
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={toggleFavorite}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </Container>
      </div>

      <ProductPerks />

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
