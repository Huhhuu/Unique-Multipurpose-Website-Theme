export default function FavoriteButton({
  isFavorite = false,
  onToggle,
  ariaLabel = 'Yêu thích sản phẩm',
  className = '',
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        onToggle?.()
      }}
      aria-label={ariaLabel}
      className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform active:scale-75 focus:outline-none ${className}`}
    >
      <svg
        className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-200 ${
          isFavorite
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
  )
}
