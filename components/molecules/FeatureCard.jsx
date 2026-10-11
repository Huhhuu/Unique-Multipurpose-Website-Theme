import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function FeatureCard({
  icon,
  title,
  description,
  actionText,
  actionUrl = '#',
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center justify-between shadow-feature border border-gray-100 transition-shadow duration-300 hover:shadow-feature-hover"
    >
      <div className="flex flex-col items-center w-full">
        <div className="h-28 sm:h-32 flex items-center justify-center mb-6">
          <Image
            src={icon}
            alt={title}
            width={120}
            height={120}
            className="max-h-full w-auto object-contain"
          />
        </div>

        <h3 className="font-heading font-bold text-xl sm:text-2xl text-dark mb-3">
          {title}
        </h3>

        <p className="font-sans text-gray-500 text-sm sm:text-b3 leading-relaxed mb-8 max-w-xs">
          {description}
        </p>
      </div>

      <Link
        href={actionUrl}
        className="w-full max-w-xs py-3 rounded-lg font-sans font-semibold text-sm transition-all duration-300 text-center bg-white text-dark border border-gray-200/90 shadow-sm hover:bg-primary hover:text-white hover:border-primary hover:shadow-md hover:shadow-primary/25"
      >
        {actionText}
      </Link>
    </motion.div>
  )
}
