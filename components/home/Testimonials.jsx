import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'

const testimonials = [
  {
    content: 'Website tải cực nhanh, giao diện hiện đại và mã nguồn tổ chức rất khoa học, dễ bảo trì và mở rộng.',
    author: 'Nguyễn Văn A',
    role: 'Product Lead, TechCorp',
  },
  {
    content: 'Thiết kế chuẩn chỉnh từng pixel so với Figma, các hiệu ứng animation mượt mà tạo ấn tượng rất mạnh với khách hàng.',
    author: 'Trần Thị B',
    role: 'Creative Director, Studio X',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-light/50">
      <Container>
        <SectionTitle
          subtitle="Đánh giá từ đối tác"
          title="Khách hàng nói gì về chúng tôi?"
          description="Sự hài lòng và tin cậy của khách hàng là thước đo thành công lớn nhất cho từng sản phẩm chúng tôi xây dựng."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
            >
              <p className="font-sans text-b2 text-dark/80 italic leading-relaxed">
                “{item.content}”
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-light text-primary font-heading font-bold flex items-center justify-center text-b3">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading text-b2 font-bold text-dark">{item.author}</h4>
                  <p className="font-sans text-b4 text-dark/60">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
