import Container from '@/components/common/Container'
import StatsGrid from '@/components/organisms/StatsGrid'
import themeData from '@/data/ecommerce-theme.json'

export default function Stats() {
  const { stats } = themeData

  return (
    <section className="relative py-14 sm:py-16 md:py-20 bg-surface-stats z-10">
      <Container>
        <StatsGrid stats={stats} />
      </Container>
    </section>
  )
}
