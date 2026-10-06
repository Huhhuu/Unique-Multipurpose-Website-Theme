import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import charityData from '@/data/charity-theme.json'

export default function CharityVolunteer() {
  const { volunteer } = charityData

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-transparent">
      <Container>
        <motion.div
          className="relative max-w-card mx-auto rounded-card bg-gradient-cta shadow-cta overflow-hidden flex flex-col lg:flex-row items-center lg:justify-between lg:min-h-[483px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Volunteer Group Photo on Desktop (Left - Frame 540) */}
          <div className="hidden lg:block absolute bottom-0 left-0 w-[53.4%] max-w-[625px] pointer-events-none">
            <Image
              src={volunteer.imageDesktop}
              alt={volunteer.imageAlt}
              width={1240}
              height={880}
              priority
              className="w-full h-auto object-contain object-bottom select-none -mb-1"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-[46.6%] lg:ml-auto px-6 pt-10 sm:px-12 sm:pt-12 lg:px-8 lg:py-16 text-center lg:text-left z-10">
            <h2 className="font-heading font-bold text-white text-h5 sm:text-2xl lg:text-h3 tracking-tight max-w-md mx-auto lg:mx-0">
              {volunteer.titlePrefix} <br className="hidden sm:inline" />
              {volunteer.titleSuffix}
            </h2>

            <p className="mt-6 sm:mt-8 font-sans font-normal text-white/90 text-b3 sm:text-sm lg:text-b2 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {volunteer.description}
            </p>

            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <Link
                href={volunteer.cta.href}
                className="group inline-flex items-center gap-3.5 bg-white text-dark font-sans font-medium text-b3 sm:text-b2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-98 transition-all duration-200"
              >
                <span>{volunteer.cta.text}</span>
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Volunteer Group Photo on Mobile (Bottom) */}
          <div className="block lg:hidden w-full mt-6 px-3 sm:px-6 pointer-events-none flex justify-center leading-none">
            <Image
              src={volunteer.imageMobile}
              alt={volunteer.imageAlt}
              width={584}
              height={336}
              className="w-full max-w-[340px] sm:max-w-[420px] h-auto object-contain object-bottom select-none block"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
