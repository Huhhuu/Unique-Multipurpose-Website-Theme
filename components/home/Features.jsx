import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'

const features = [
  {
    title: 'Kiến trúc Next.js Pages Router',
    description: 'Dễ tiếp cận, cấu trúc file tường minh, tối ưu cho việc học tập và trình bày đồ án.',
    icon: '⚡',
  },
  {
    title: 'Tailwind CSS Utility First',
    description: 'Thiết kế giao diện linh hoạt, chuẩn responsive trên mọi kích thước màn hình mà không cần CSS rối rắm.',
    icon: '💎',
  },
  {
    title: 'Framer Motion sống động',
    description: 'Hiệu ứng chuyển động mượt mà, tự nhiên và có tính toán giúp người dùng tương tác cuốn hút hơn.',
    icon: '✨',
  },
  {
    title: 'Tối ưu hóa SEO & Performance',
    description: 'Tích hợp sẵn thẻ meta động, semantic HTML và hỗ trợ nạp dữ liệu tĩnh cực nhanh.',
    icon: '🎯',
  },
]

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionTitle
          subtitle="Tính năng nổi bật"
          title="Tại sao nên chọn giải pháp của chúng tôi?"
          description="Được kiến trúc theo chuẩn mực công nghệ hàng đầu hiện nay, mang lại độ tin cậy và khả năng mở rộng cao."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-light/30 hover:bg-white hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl mb-4 border border-gray-100">
                {feature.icon}
              </div>
              <h3 className="font-heading text-h5 font-bold text-dark mb-2">
                {feature.title}
              </h3>
              <p className="font-sans text-b3 text-dark/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
