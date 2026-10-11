export default function Badge({
  children,
  variant = 'primary',
  className = '',
}) {
  const variants = {
    primary: 'bg-primary-light text-primary',
    dark: 'bg-dark text-white',
    danger: 'bg-danger text-white',
    pink: 'bg-secondary-pink/15 text-secondary-pink',
    orange: 'bg-secondary-orange/15 text-secondary-orange',
  }

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
        variants[variant] || variants.primary
      } ${className}`}
    >
      {children}
    </span>
  )
}
