import Container from '@/components/common/Container'
import Button from '@/components/common/Button'

export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-primary text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-h4 sm:text-h3 font-bold tracking-tight">
            Sẵn sàng nâng tầm dự án của bạn ngay hôm nay?
          </h2>
          <p className="mt-4 font-sans text-b2 sm:text-b1 text-white/90 leading-relaxed">
            Liên hệ với chúng tôi để nhận tư vấn miễn phí và cùng nhau biến ý tưởng của bạn thành hiện thực với giải pháp công nghệ tiên tiến nhất.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Liên hệ tư vấn
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="text-white border-white/40 hover:bg-white/10 hover:text-white"
            >
              Xem báo giá dịch vụ
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
