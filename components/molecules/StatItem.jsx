import { motion } from 'framer-motion'

export default function StatItem({
  value,
  label,
  color,
  hasDivider = false,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col items-center justify-center text-center ${
        hasDivider ? 'md:border-r md:border-gray-200/80' : ''
      } px-4`}
    >
      <span
        className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-h2 leading-tight"
        style={{ color }}
      >
        {value}
      </span>
      <span className="font-sans text-gray-500 font-medium text-sm sm:text-base mt-2 sm:mt-3">
        {label}
      </span>

      {hasDivider && (
        <div className="w-20 h-px bg-slate-200 mt-6 md:hidden" />
      )}
    </motion.div>
  )
}
