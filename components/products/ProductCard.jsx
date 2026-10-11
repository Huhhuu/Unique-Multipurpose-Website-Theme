import { useState } from 'react'
import Image from 'next/image'

export default function ProductCard({
  product,
  onQuickView,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
}) {
  const [added, setAdded] = useState(false)

  const handleAdd = (e) => {
    e.stopPropagation()
    onAddToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="group bg-white rounded-3xl p-4 sm:p-5 border border-gray-100/90 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col justify-between">
      <div className="relative">
        <div
          className="relative w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center p-6 cursor-pointer"
          style={{ backgroundColor: product.bgBoxColor || '#F3F4F6' }}
          onClick={() => onQuickView(product)}
        >
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain transition-transform duration-500 group-hover:scale-108"
            />
          </div>

          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
            {product.isNew && (
              <span className="px-3 py-1 rounded-full text-[11px] font-sans font-bold bg-dark text-white shadow-sm">
                New
              </span>
            )}
            {product.discount && (
              <span className="px-3 py-1 rounded-full text-[11px] font-sans font-bold bg-danger text-white shadow-sm">
                {product.discount}
              </span>
            )}
            {product.isBestseller && !product.isNew && (
              <span className="px-3 py-1 rounded-full text-[11px] font-sans font-bold bg-primary text-white shadow-sm">
                Bestseller
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onToggleFavorite(product.id)
            }}
            className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center transition-transform active:scale-90 hover:scale-110 z-10 ${
              isFavorite ? 'text-danger' : 'text-gray-400 hover:text-danger'
            }`}
            aria-label="Add to wishlist"
          >
            <svg
              className="w-5 h-5 transition-colors"
              fill={isFavorite ? 'currentColor' : 'none'}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onQuickView(product)
              }}
              className="w-full py-2.5 rounded-xl bg-white/95 backdrop-blur-md text-dark font-sans font-semibold text-xs shadow-lg hover:bg-dark hover:text-white transition-colors"
            >
              Quick View
            </button>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="font-sans text-[11px] font-semibold text-primary uppercase tracking-wider">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-[11px] font-sans text-dark/70">
              <span className="text-secondary-orange">★</span>
              <span className="font-semibold">{product.rating}</span>
              <span className="text-gray-400">({product.reviewsCount})</span>
            </div>
          </div>

          <h3
            onClick={() => onQuickView(product)}
            className="font-heading font-bold text-base text-dark hover:text-primary transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          <div className="mt-3 flex items-center gap-2.5">
            <span className="font-heading font-extrabold text-lg text-dark">
              {product.currency}{product.price}
            </span>
            {product.originalPrice && (
              <span className="font-sans text-sm text-gray-400 line-through">
                {product.currency}{product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
        <span className="font-sans text-xs text-dark-muted hidden sm:inline">
          {product.sizes ? product.sizes.join(' • ') : 'Standard'}
        </span>
        <button
          type="button"
          onClick={handleAdd}
          className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 ${
            added
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-dark hover:bg-primary text-white shadow-sm hover:shadow-md'
          }`}
        >
          {added ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Added to Bag
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Add to Bag
            </>
          )}
        </button>
      </div>
    </div>
  )
}
