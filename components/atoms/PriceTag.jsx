export default function PriceTag({
  price,
  originalPrice,
  currency = '$',
  className = '',
}) {
  return (
    <div className={`flex items-baseline gap-1.5 flex-wrap ${className}`}>
      <span className="font-heading font-extrabold text-base sm:text-lg lg:text-h5 text-dark leading-none whitespace-nowrap">
        {price}
        <span className="text-xs sm:text-sm font-bold text-primary ml-0.5">
          {currency}
        </span>
      </span>
      {originalPrice && (
        <span className="text-xs text-gray-400 line-through font-medium whitespace-nowrap">
          {originalPrice}
          <span className="text-[10px] ml-0.5">{currency}</span>
        </span>
      )}
    </div>
  )
}
