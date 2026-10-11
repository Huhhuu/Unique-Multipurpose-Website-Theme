import Layout from '@/components/layout/Layout'
import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import ProductPerks from '@/components/products/ProductPerks'
import Link from 'next/link'

const BRANDS = [
  {
    id: 'besnik',
    name: 'Besnik Studio',
    origin: 'Amsterdam, Netherlands',
    badge: 'Flagship Partner',
    description: 'Renowned for contemporary architectural tailoring, raw organic textiles, and functional luxury streetwear crafted for urban lifestyles.',
    categories: ['Men Tailoring', 'Minimalist Outerwear', 'Leather Essentials'],
    stats: '150+ Styles • Since 2018',
  },
  {
    id: 'micpro',
    name: 'MicPro Atelier',
    origin: 'Milan, Italy',
    badge: 'In-House Luxury',
    description: 'Crafting timeless Italian merino wool knits, handmade silk blends, and premium everyday staples designed with meticulous finishing.',
    categories: ['Knitwear', 'Silk Poplin', 'Formal Accessories'],
    stats: '80+ Exclusive Pieces',
  },
  {
    id: 'urban',
    name: 'Urban Silhouette',
    origin: 'Tokyo, Japan',
    badge: 'Trending Streetwear',
    description: 'Pioneering oversized outerwear silhouettes, techwear fabrics, and avant-garde streetwear inspired by contemporary Tokyo youth culture.',
    categories: ['Drop-Shoulder Outerwear', 'Caps & Beanies', 'Utility Wear'],
    stats: '60+ Capsule Drops',
  },
  {
    id: 'nordic',
    name: 'Nordic Minimalist',
    origin: 'Copenhagen, Denmark',
    badge: 'Eco Certified',
    description: 'Pure organic cotton essentials, natural vegetable-tanned accessories, and zero-waste sustainable fashion philosophy.',
    categories: ['Organic Cotton', 'Vegetable Tanned Leather', 'Sustainable Knit'],
    stats: '100% Carbon Neutral',
  },
]

export default function BrandsPage() {
  return (
    <Layout
      theme="ecommerce"
      title="Featured Brands & Official Studios | MicPro Fashion"
      description="Discover certified luxury brands, independent designer studios, and sustainable fashion partners curated by MicPro."
    >
      <div className="relative overflow-hidden bg-white -mt-20 pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-[700px] md:w-[960px] h-[380px] md:h-[460px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(81, 180, 250, 0.5) 0%, rgba(22, 99, 249, 0.25) 45%, transparent 75%)',
              filter: 'blur(75px)',
              transform: 'translateZ(0)',
            }}
          />
        </div>

        <Container className="relative z-10">
          <SectionTitle
            subtitle="Verified Partners"
            title="Featured Fashion Brands & Official Studios"
            description="Collaborating with visionary fashion houses, ethical textile artisans, and leading global studios."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {BRANDS.map((brand) => (
              <div
                key={brand.id}
                id={brand.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                      {brand.badge}
                    </span>
                    <span className="text-xs font-sans text-dark-muted">
                      📍 {brand.origin}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl text-dark mb-3">
                    {brand.name}
                  </h3>

                  <p className="font-sans text-sm text-dark-muted leading-relaxed mb-6">
                    {brand.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {brand.categories.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-dark/70"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-sans text-xs font-semibold text-emerald-600">
                    ✓ {brand.stats}
                  </span>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover transition-colors"
                  >
                    View Catalog →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <ProductPerks />
    </Layout>
  )
}
