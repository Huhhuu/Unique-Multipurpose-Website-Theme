import Link from 'next/link'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'
import headersData from '@/data/headers.json'

const themeDetails = {
  ai: {
    number: '01',
    headline: "World's Best AI Writer for Easy Content Creation",
    description: 'Tạo nội dung tự động chuẩn SEO, bài viết blog, mạng xã hội nhanh hơn gấp 10 lần với mô hình AI tiên tiến.',
    ctaText: 'Start Writing for free',
    ctaHref: '/ai#pricing',
    sections: ['AI Writer 2.0 Engine', 'Social Media Copywriting', 'SEO Article Generator', '10,000+ Marketers Trust'],
    accentColor: 'from-primary to-secondary-blue',
  },
  agency: {
    number: '02',
    headline: 'Build Your Dream Website with Our Skilled Development Team',
    description: 'Hỗ trợ toàn diện từ thiết kế giao diện Figma, lập trình ứng dụng đến tiếp thị số tối ưu chuyển đổi.',
    ctaText: 'Contact Us Today',
    ctaHref: '/agency#contact',
    sections: ['Custom Web Development', 'UI/UX Design Studio', 'Digital Marketing Strategy', 'Case Studies Portfolio'],
    accentColor: 'from-primary to-secondary-pink',
  },
  dental: {
    number: '03',
    headline: 'Smile Brighter with Our Professional Dental Services',
    description: 'Đội ngũ bác sĩ nha khoa chuyên khoa giàu kinh nghiệm, trang thiết bị chuẩn quốc tế và tận tâm phục vụ.',
    ctaText: 'Book Appointment',
    ctaHref: '/dental#booking',
    sections: ['Teeth Whitening', 'Dental Implants', 'Cosmetic Dentistry', '24/7 Emergency Care'],
    accentColor: 'from-secondary-blue to-primary',
  },
  nft: {
    number: '04',
    headline: 'Embrace Digital Ownership: Buy, Trade, and Collect NFTs',
    description: 'Nền tảng giao dịch NFT trao quyền sở hữu thực sự cho nghệ sĩ và cộng đồng sưu tập Web3.',
    ctaText: 'Connect Wallet',
    ctaHref: '/nft#wallet',
    sections: ['Top Trending Drops', 'Live Auctions', 'Verified Artists', 'Decentralized Marketplace'],
    accentColor: 'from-secondary-pink to-primary',
  },
  restaurant: {
    number: '05',
    headline: 'Delicious Food Delivered Fast Right to Your Door',
    description: 'Khám phá thế giới ẩm thực tươi ngon từ các đầu bếp danh tiếng cùng dịch vụ đặt bàn và giao hàng siêu tốc.',
    ctaText: 'Order Online',
    ctaHref: '/restaurant#menu',
    sections: ['Signature Dishes', 'Special Offers & Combos', 'Table Reservation', 'Fast 30-min Delivery'],
    accentColor: 'from-secondary-orange to-danger',
  },
  charity: {
    number: '06',
    headline: 'Fundraising Through Your Social Networks for a Better World',
    description: 'Kết nối những trái tim nhân ái, gây quỹ từ thiện minh bạch và đồng hành cùng các chiến dịch ý nghĩa.',
    ctaText: 'Donate Now',
    ctaHref: '/charity#donate',
    sections: ['Active Campaigns', 'Transparent Tracking', 'Global Donors Wall', 'Volunteer Programs'],
    accentColor: 'from-secondary-rose to-secondary-pink',
  },
  education: {
    number: '07',
    headline: 'Welcome to the World of Knowledge & Online Learning',
    description: 'Nâng tầm kỹ năng với hàng trăm khóa học trực tuyến thực chiến cùng các giảng viên đầu ngành.',
    ctaText: 'Get Started',
    ctaHref: '/education#courses',
    sections: ['Top Rated Courses', 'Expert Instructors', 'Interactive Quizzes', 'Accredited Certificates'],
    accentColor: 'from-primary to-secondary-blue',
  },
  event: {
    number: '08',
    headline: 'Designing Events for High-Impact Brand Awareness',
    description: 'Hội nghị công nghệ và sáng tạo đỉnh cao, nơi quy tụ các diễn giả hàng đầu và chuyên gia thế giới.',
    ctaText: 'Buy Ticket',
    ctaHref: '/event#tickets',
    sections: ['Keynote Speakers', 'Event Schedule', 'Workshops & Networking', 'VIP Passes'],
    accentColor: 'from-secondary-orange to-primary',
  },
  sports: {
    number: '09',
    headline: 'We are the Premier Basketball & Sports Academy',
    description: 'Chương trình huấn luyện thể thao chuyên nghiệp từ cơ bản đến nâng cao cho thanh thiếu niên và vận động viên.',
    ctaText: 'Join Club',
    ctaHref: '/sports#join',
    sections: ['Youth Training Camps', 'Professional Coaches', 'Court Facilities', 'Championship Tournaments'],
    accentColor: 'from-danger to-secondary-orange',
  },
}

export default function ThemePreview({ themeKey }) {
  const currentTheme = headersData[themeKey] || {}
  const details = themeDetails[themeKey] || {
    number: '00',
    headline: currentTheme.title || 'Multipurpose Theme',
    description: 'Giao diện mẫu thuộc hệ thống Unique Multipurpose Website Theme.',
    ctaText: currentTheme.cta?.text || 'Learn More',
    ctaHref: currentTheme.cta?.href || '/',
    sections: ['Responsive Layout', 'Tailwind Styling', 'Dynamic Navigation', 'Framer Motion'],
    accentColor: 'from-primary to-secondary-blue',
  }

  const allThemesList = Object.keys(headersData)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white -mt-20 pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-r from-primary-light/50 via-secondary-blue/10 to-secondary-pink/10 blur-3xl pointer-events-none -z-10" />
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light text-primary text-b3 font-medium">
            <span className="font-bold">THEME {details.number}</span>
            <span>•</span>
            <span>{currentTheme.title}</span>
          </div>

          <h1 className="font-heading text-h2 md:text-h1 font-bold text-dark tracking-tight leading-tight">
            {details.headline}
          </h1>

          <p className="font-sans text-b1 text-dark/70 max-w-2xl mx-auto">
            {details.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href={details.ctaHref} size="lg" className="rounded-full px-8 shadow-primary">
              {details.ctaText}
            </Button>
            <Button href="/" variant="outline" size="lg" className="rounded-full px-8">
              ← Về E-Commerce Theme
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.sections.map((sec, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-10 h-10 rounded-2xl bg-gradient-to-r ${details.accentColor} text-white flex items-center justify-center font-bold text-sub2 mb-4`}>
                0{idx + 1}
              </div>
              <h3 className="font-heading text-h5 font-semibold text-dark mb-2">
                {sec}
              </h3>
              <p className="font-sans text-b3 text-dark/60">
                Được thiết kế chuẩn theo đặc tả giao diện trong tài liệu hướng dẫn Figma.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-light rounded-3xl border border-gray-200/60">
          <h4 className="font-heading text-h4 font-bold text-dark text-center mb-6">
            Khám phá 10 giao diện chuyên biệt
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {allThemesList.map((tKey) => {
              const th = headersData[tKey]
              const isCurrent = tKey === themeKey
              const href = tKey === 'ecommerce' ? '/' : `/${tKey}`

              return (
                <Link
                  key={tKey}
                  href={href}
                  className={`px-4 py-3 rounded-2xl text-center transition-all text-b3 font-medium ${
                    isCurrent
                      ? 'bg-primary text-white shadow-primary'
                      : 'bg-white text-dark/80 hover:text-primary hover:bg-white/80 border border-gray-100'
                  }`}
                >
                  <span className="block text-xs opacity-70 mb-0.5">{th.brand}</span>
                  <span className="block font-semibold truncate">{th.title.split('&')[0]}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
