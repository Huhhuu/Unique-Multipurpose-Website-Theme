import Badge from '@/components/atoms/Badge'

export default function SectionTitle({
  subtitle,
  title,
  description,
  centered = true,
  className = '',
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'} ${className}`}>
      {subtitle && (
        <Badge variant="primary" className="uppercase tracking-wider font-sans text-sub3 px-3.5 py-1.5 mb-2">
          {subtitle}
        </Badge>
      )}
      {title && (
        <h2 className="mt-3 font-heading text-h4 sm:text-h3 lg:text-h2 font-bold text-dark tracking-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 font-sans text-b2 sm:text-b1 text-dark/70 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
