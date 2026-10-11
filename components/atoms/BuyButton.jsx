export default function BuyButton({
  isAdded = false,
  onBuy,
  className = '',
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        onBuy?.()
      }}
      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-heading font-extrabold text-[11px] sm:text-xs transition-all duration-200 active:scale-90 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-1 select-none ${
        isAdded
          ? 'bg-emerald-600 text-white shadow-sm ring-emerald-500 scale-95'
          : 'bg-primary text-white hover:bg-primary-hover shadow-button-buy hover:shadow-md'
      } ${className}`}
    >
      {isAdded ? 'ADDED' : 'BUY'}
    </button>
  )
}
