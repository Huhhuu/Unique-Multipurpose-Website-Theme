import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import ServiceCard from '@/components/services/ServiceCard'
import servicesData from '@/data/services.json'

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-gray-50/50">
      <Container>
        <SectionTitle
          subtitle="Dịch vụ hàng đầu"
          title="Giải pháp số toàn diện cho bạn"
          description="Khám phá các dịch vụ được thiết kế chuyên biệt để nâng tầm thương hiệu và tối ưu quy trình kinh doanh của bạn."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Container>
    </section>
  )
}
