import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServiceCard({ id, title, description, icon, badge }) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="w-12 h-12 rounded-xl bg-primary-light text-primary text-2xl flex items-center justify-center">
            {icon}
          </span>
          {badge && (
            <span className="text-b4 font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">
              {badge}
            </span>
          )}
        </div>

        <h3 className="font-heading text-h5 font-bold text-dark group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="mt-3 font-sans text-b3 text-dark/70 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-50">
        <Link
          href={`/services#${id}`}
          className="inline-flex items-center font-sans text-b3 font-semibold text-primary hover:text-primary-hover"
        >
          Xem chi tiết
          <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}
