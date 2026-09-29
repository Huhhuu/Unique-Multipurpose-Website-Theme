import Link from 'next/link'
import Container from '@/components/common/Container'
import Logo from '@/components/common/Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo light={true} />
            <p className="mt-4 text-b3 text-gray-400 leading-relaxed font-sans">
              Giải pháp thương mại điện tử và website đa năng hiện đại, tối ưu trải nghiệm và hiệu suất bán hàng.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-b2 font-semibold text-white tracking-wider uppercase mb-4">
              Khám phá
            </h4>
            <ul className="space-y-2.5 text-b3 font-sans">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Sản phẩm</Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="hover:text-white transition-colors">Hàng mới về</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Bài viết</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-b2 font-semibold text-white tracking-wider uppercase mb-4">
              Dịch vụ
            </h4>
            <ul className="space-y-2.5 text-b3 font-sans text-gray-400">
              <li>Thời trang nam nữ</li>
              <li>Bán hàng đa kênh</li>
              <li>Hỗ trợ trực tuyến 24/7</li>
              <li>Chính sách đổi trả</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-b2 font-semibold text-white tracking-wider uppercase mb-4">
              Liên hệ
            </h4>
            <p className="text-b3 font-sans text-gray-400 leading-relaxed">
              Email: contact@micpro.com<br />
              Hotline: +84 (0) 123 456 789<br />
              Hà Nội, Việt Nam
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-b4 font-sans text-gray-500">
          <p>© {currentYear} MicPro Theme. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-gray-400 transition-colors">Điều khoản</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Bảo mật</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
