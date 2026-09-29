import Link from 'next/link'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover focus:ring-primary shadow-sm hover:shadow-md',
    secondary: 'bg-light text-dark hover:bg-gray-200 focus:ring-gray-300',
    outline: 'border border-gray-200 text-dark bg-transparent hover:bg-gray-50 focus:ring-primary',
  }

  const sizes = {
    sm: 'text-b3 px-3 py-1.5',
    md: 'text-b2 px-5 py-2.5',
    lg: 'text-b1 px-6 py-3.5',
  }

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  )
}
