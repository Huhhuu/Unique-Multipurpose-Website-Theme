import { useState, useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout/Layout'
import Container from '@/components/common/Container'
import ProductsHero from '@/components/products/ProductsHero'
import ProductFilters from '@/components/products/ProductFilters'
import ProductCard from '@/components/products/ProductCard'
import ProductQuickView from '@/components/products/ProductQuickView'
import ProductPerks from '@/components/products/ProductPerks'
import productsData from '@/data/products-data.json'

const CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'men', name: 'Men Fashion' },
  { id: 'women', name: 'Women Fashion' },
  { id: 'accessories', name: 'Accessories' },
]

export default function ProductsPage({ products }) {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [filterSaleOnly, setFilterSaleOnly] = useState(false)
  const [favorites, setFavorites] = useState(['prod-1', 'prod-4', 'prod-7', 'prod-10'])
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [cartItemsCount, setCartItemsCount] = useState(0)
  const [lastAddedItem, setLastAddedItem] = useState(null)

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && ['men', 'women', 'accessories'].includes(hash)) {
      setSelectedCategory(hash)
    }
  }, [router.asPath])

  const categoryCounts = useMemo(() => {
    const counts = { all: products.length }
    products.forEach((p) => {
      counts[p.categorySlug] = (counts[p.categorySlug] || 0) + 1
    })
    return counts
  }, [products])

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const matchCategory =
        selectedCategory === 'all' || p.categorySlug === selectedCategory

      const matchSale = !filterSaleOnly || Boolean(p.discount)

      const query = searchQuery.trim().toLowerCase()
      const matchSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        (p.description && p.description.toLowerCase().includes(query)) ||
        (p.material && p.material.toLowerCase().includes(query))

      return matchCategory && matchSale && matchSearch
    })

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [products, selectedCategory, filterSaleOnly, searchQuery, sortBy])

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handleAddToCart = (product) => {
    setCartItemsCount((prev) => prev + (product.quantity || 1))
    setLastAddedItem(product.name)
    setTimeout(() => setLastAddedItem(null), 3000)
  }

  const handleResetFilters = () => {
    setSelectedCategory('all')
    setSearchQuery('')
    setSortBy('featured')
    setFilterSaleOnly(false)
  }

  return (
    <Layout
      theme="ecommerce"
      title="All Products & Fashion Collections | MicPro Store"
      description="Explore modern collections in men fashion, women fashion, and accessories. Premium materials, handcrafted tailoring, and fast global shipping."
    >
      <ProductsHero
        totalCount={products.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <ProductFilters
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            categoryCounts={categoryCounts}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            filterSaleOnly={filterSaleOnly}
            onToggleSaleOnly={() => setFilterSaleOnly((prev) => !prev)}
            totalResults={filteredProducts.length}
            onResetFilters={handleResetFilters}
          />

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
              {filteredProducts.map((product) => (
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
          ) : (
            <div className="text-center py-20 px-4 bg-gray-50/80 rounded-3xl border border-gray-100 max-w-xl mx-auto">
              <span className="text-5xl">🛍️</span>
              <h3 className="font-heading font-bold text-h5 text-dark mt-4">
                No products match your criteria
              </h3>
              <p className="font-sans text-xs sm:text-sm text-dark-muted mt-2 max-w-md mx-auto">
                Try loosening your filters, searching for a different keyword, or resetting your category selections.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-6 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-sm transition-all"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </Container>
      </section>

      <ProductPerks />

      <ProductQuickView
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {lastAddedItem && (
        <div className="fixed bottom-6 right-6 z-40 bg-dark text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <div className="text-xs">
            <p className="font-semibold">{lastAddedItem} added to bag!</p>
            <p className="text-gray-400">Total in bag: {cartItemsCount} items</p>
          </div>
        </div>
      )}
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
