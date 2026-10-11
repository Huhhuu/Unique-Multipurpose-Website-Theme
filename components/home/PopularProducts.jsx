import Link from 'next/link'
import Container from '@/components/common/Container'
import ProductCarousel from '@/components/organisms/ProductCarousel'
import ecommerceData from '@/data/ecommerce-theme.json'

export default function PopularProducts() {
  const { popularProducts } = ecommerceData

  return (
    <section id="popular-products" className="relative bg-transparent pt-0 pb-20 sm:pb-28 overflow-visible scroll-mt-24">
      <Container className="overflow-visible">
        <div className="bg-white rounded-3xl lg:rounded-4xl shadow-card-soft border border-gray-100/80 p-5 sm:p-8 md:p-10 lg:p-12 xl:p-14 overflow-visible">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="w-full md:w-auto text-center md:text-left">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-h2 text-dark tracking-tight leading-tight">
                {popularProducts.title.replace(popularProducts.highlightWord, '')}
                <span className="text-primary">{popularProducts.highlightWord}</span>
              </h2>
            </div>

            <Link
              href={popularProducts.actionUrl}
              className="hidden md:inline-flex items-center gap-2.5 bg-primary hover:bg-blue-700 text-white font-medium text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 group"
            >
              <span>{popularProducts.actionText}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <ProductCarousel products={popularProducts.products} />
        </div>
      </Container>
    </section>
  )
}
