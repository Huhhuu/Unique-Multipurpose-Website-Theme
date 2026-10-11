import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProductQuickView({ product, isOpen, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes ? product.sizes[0] : null)
  const [selectedColor, setSelectedColor] = useState(product?.colors ? product.colors[0] : null)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!isOpen || !product) return null

  const handleAdd = () => {
    onAddToCart({
      ...product,
      selectedSize,
      selectedColor,
      quantity,
    })
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
      onClose()
    }, 1500)
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark/60 backdrop-blur-sm transition-opacity"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-dark flex items-center justify-center z-20 transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-10">
            <div className="md:col-span-5 flex flex-col justify-center">
              <div
                className="relative aspect-square w-full rounded-2xl overflow-hidden flex items-center justify-center p-8"
                style={{ backgroundColor: product.bgBoxColor || '#F3F4F6' }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain"
                  />
                </div>
                {product.discount && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-danger text-white shadow-sm">
                    {product.discount}
                  </span>
                )}
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-dark/80 ml-auto">
                    <span className="text-secondary-orange">★</span>
                    <span className="font-semibold">{product.rating}</span>
                    <span className="text-gray-400">({product.reviewsCount} reviews)</span>
                  </div>
                </div>

                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-dark leading-snug">
                  {product.name}
                </h2>

                <div className="mt-3 flex items-baseline gap-3">
                  <span className="font-heading font-extrabold text-3xl text-dark">
                    {product.currency}{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="font-sans text-base text-gray-400 line-through">
                      {product.currency}{product.originalPrice}
                    </span>
                  )}
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    In Stock • Ready to Ship
                  </span>
                </div>

                <p className="mt-4 font-sans text-xs sm:text-sm text-dark-muted leading-relaxed">
                  {product.description}
                </p>

                {product.sizes && product.sizes.length > 0 && (
                  <div className="mt-6">
                    <label className="block font-heading font-bold text-xs text-dark mb-2">
                      Select Size: <span className="font-normal text-primary">{selectedSize}</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => setSelectedSize(sz)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                            selectedSize === sz
                              ? 'border-dark bg-dark text-white shadow-sm'
                              : 'border-gray-200 text-dark hover:border-gray-300'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {product.colors && product.colors.length > 0 && (
                  <div className="mt-5">
                    <label className="block font-heading font-bold text-xs text-dark mb-2">
                      Color Option: <span className="font-normal text-primary">{selectedColor}</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setSelectedColor(c)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                            selectedColor === c
                              ? 'border-primary bg-primary text-white shadow-sm'
                              : 'border-gray-200 text-dark-muted hover:border-gray-300'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                <div className="flex items-center border border-gray-200 rounded-full p-1 bg-gray-50">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-full bg-white text-dark hover:bg-gray-100 flex items-center justify-center text-sm font-bold shadow-sm transition-colors"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-heading font-bold text-sm text-dark">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-full bg-white text-dark hover:bg-gray-100 flex items-center justify-center text-sm font-bold shadow-sm transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  disabled={added}
                  className={`flex-1 py-3.5 px-8 rounded-full text-sm font-semibold transition-all duration-200 active:scale-95 shadow-md ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-primary hover:bg-primary-hover text-white hover:shadow-lg hover:shadow-primary/20'
                  }`}
                >
                  {added ? '✓ Added to Cart!' : `Add to Bag • ${product.currency}${product.price * quantity}`}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
