import Image from 'next/image'
import { motion } from 'framer-motion'
import PriceTag from '@/components/atoms/PriceTag'
import FavoriteButton from '@/components/atoms/FavoriteButton'
import BuyButton from '@/components/atoms/BuyButton'

export default function ProductCard({
  product,
  isFavorite = false,
  isAdded = false,
  isHighlighted = false,
  onToggleFavorite,
  onBuy,
  onMouseEnter,
  onMouseLeave,
  index = 0,
}) {
  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`w-64 sm:w-auto flex-shrink-0 sm:flex-shrink snap-center sm:snap-align-none flex flex-col p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 min-w-0 ${
        isHighlighted
          ? 'bg-white shadow-card-hover border-gray-100/90 -mb-6 md:-mb-10 relative z-20'
          : 'bg-transparent border-transparent mb-0 relative z-10'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
    >
      <div
        className="relative aspect-square rounded-xl p-5 sm:p-6 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105"
        style={{ backgroundColor: product.bgBoxColor }}
      >
        <FavoriteButton
          isFavorite={isFavorite}
          onToggle={onToggleFavorite}
          ariaLabel={`Yêu thích ${product.name}`}
          className="absolute top-3.5 right-3.5 z-10"
        />

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
          <div className="mt-1">
            <PriceTag
              price={product.price}
              originalPrice={product.originalPrice}
              currency={product.currency}
            />
          </div>
        </div>

        <BuyButton
          isAdded={isAdded}
          onBuy={onBuy}
        />
      </div>
    </motion.div>
  )
}
