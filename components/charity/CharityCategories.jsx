import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import charityData from '@/data/charity-theme.json'

const BADGE_GRADIENTS = {
  'health-shelter': 'bg-gradient-shelter',
  'food-groceries': 'bg-gradient-food',
  'educational': 'bg-gradient-education',
  'health-insurance': 'bg-gradient-insurance',
}

export default function CharityCategories() {
  const { trust, categories } = charityData

  return (
    <section className="relative bg-transparent pt-12 sm:pt-16 pb-20 sm:pb-28">
      <Container>
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
          <motion.h2
            className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-h2 text-dark tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {trust.titlePrefix}{' '}
            <span className="text-primary">{trust.highlightNumber}</span>{' '}
            {trust.titleSuffix.split(' ')[0]} <br className="hidden sm:inline" />
            {trust.titleSuffix.split(' ').slice(1).join(' ')}
          </motion.h2>
        </div>

        <motion.div
          className="border-t border-b border-gray-200/80 my-10 sm:my-14 py-8 sm:py-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="flex md:grid md:grid-cols-5 items-center md:justify-items-center gap-8 sm:gap-10 md:gap-8 lg:gap-12 max-w-5xl mx-auto px-4 overflow-x-auto md:overflow-visible no-scrollbar">
            {trust.companies.map((company) => (
              <div
                key={company.id}
                className="flex-shrink-0 flex items-center justify-center h-10 sm:h-12 opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  className="max-h-7 sm:max-h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 sm:gap-10 lg:gap-6 pt-4 sm:pt-6">
          {categories.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative bg-white rounded-card border border-gray-100 shadow-sm hover:shadow-card-hover transition-all duration-300 pt-14 pb-8 px-7 group cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
            >
              <div
                className={`absolute -top-10 left-7 w-20 h-20 rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 ${
                  BADGE_GRADIENTS[item.id] || item.gradientClass
                }`}
              >
                <div className="relative w-9 h-9 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={36}
                    height={36}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-h5 text-dark group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-b3 text-dark-muted mt-1.5">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
