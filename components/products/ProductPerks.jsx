import Container from '@/components/common/Container'

const perks = [
  {
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: 'Free Global Delivery',
    description: 'Complimentary express shipping on all orders over $75 worldwide.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-secondary-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: '30-Day Easy Returns',
    description: 'Hassle-free exchanges or full refunds with prepaid return shipping labels.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-secondary-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '100% Certified Authentic',
    description: 'Direct partnerships with ethical mills and verified luxury artisans.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-secondary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '24/7 Dedicated Support',
    description: 'Instant assistance from our dedicated styling and customer care team.',
  },
]

export default function ProductPerks() {
  return (
    <section className="py-14 sm:py-18 bg-gray-50/70 border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                {perk.icon}
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-dark mb-1">
                  {perk.title}
                </h4>
                <p className="font-sans text-xs text-dark-muted leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
