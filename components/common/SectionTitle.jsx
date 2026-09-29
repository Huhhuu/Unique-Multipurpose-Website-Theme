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
        <span className="font-sans text-sub3 font-semibold uppercase tracking-wider text-primary bg-primary-light px-3.5 py-1.5 rounded-full inline-block">
          {subtitle}
        </span>
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
