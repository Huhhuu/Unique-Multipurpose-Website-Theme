import { motion, AnimatePresence } from 'framer-motion'

export default function AccordionItem({
  id,
  title,
  content,
  isOpen = false,
  onToggle,
}) {
  return (
    <div className="flex items-start gap-4">
      <button
        type="button"
        onClick={() => onToggle?.(id)}
        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-primary hover:text-primary transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
        aria-label={`Toggle ${title}`}
      >
        <motion.svg
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </motion.svg>
      </button>

      <div>
        <h4 className="font-heading font-semibold text-base sm:text-lg text-dark mb-1">
          {title}
        </h4>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <p className="font-sans text-gray-500 text-sm leading-relaxed pt-1">
                {content}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
