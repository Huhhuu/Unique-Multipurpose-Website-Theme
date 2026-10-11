import Container from '@/components/common/Container'
import FeatureCard from '@/components/molecules/FeatureCard'
import themeData from '@/data/ecommerce-theme.json'

export default function SupportServices() {
  const { supportServices } = themeData

  return (
    <section className="relative py-16 sm:py-20 md:py-24 z-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {supportServices.map((service, idx) => (
            <FeatureCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              actionText={service.actionText}
              actionUrl={service.actionUrl}
              index={idx}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
