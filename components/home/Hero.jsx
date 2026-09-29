import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF4FF] via-white to-white -mt-20 pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24 lg:pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-r from-primary-light/50 via-secondary-blue/10 to-secondary-pink/10 blur-3xl pointer-events-none -z-10" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-b4 font-semibold bg-primary-light text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Sáng tạo & Hiện đại
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-h3 lg:text-h1 text-dark tracking-tight leading-tight">
              Xây dựng giải pháp <br className="hidden sm:inline" />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-blue">
                kỹ thuật số đột phá
              </span>
            </h1>

            <p className="mt-6 font-sans text-b1 text-dark/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Theme đa năng chất lượng cao tối ưu hóa cho doanh nghiệp, công ty khởi nghiệp và sản phẩm công nghệ. Sẵn sàng mở rộng và tùy biến linh hoạt.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/services" size="lg">
                Khám phá dịch vụ
              </Button>
              <Button href="/about" variant="outline" size="lg">
                Tìm hiểu thêm
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="font-heading text-h4 sm:text-h3 font-bold text-dark">99%</p>
                <p className="font-sans text-b3 text-dark/60 mt-1">Hài lòng</p>
              </div>
              <div>
                <p className="font-heading text-h4 sm:text-h3 font-bold text-dark">10k+</p>
                <p className="font-sans text-b3 text-dark/60 mt-1">Người dùng</p>
              </div>
              <div>
                <p className="font-heading text-h4 sm:text-h3 font-bold text-dark">24/7</p>
                <p className="font-sans text-b3 text-dark/60 mt-1">Hỗ trợ kỹ thuật</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-tr from-primary to-secondary-blue shadow-2xl p-8 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-xl"></div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-primary/40 blur-xl"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-xl">
                    ⚡
                  </div>
                  <h3 className="mt-6 font-heading text-h4 font-bold">Hiệu suất vượt trội</h3>
                  <p className="mt-2 font-sans text-b3 text-white/90 leading-relaxed">
                    Kiến trúc Next.js Pages Router kết hợp Tailwind CSS giúp website tải tức thì và đạt điểm SEO tối ưu.
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between text-b4 text-white/90">
                  <span>Pages Router 13</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/20 font-medium">React 18</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
