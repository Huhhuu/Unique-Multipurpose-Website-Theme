import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/common/Container'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white -mt-20 pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute left-1/2 -translate-x-1/2 w-[1440px] h-full pointer-events-none">
          <div
            className="absolute pointer-events-none"
            style={{
              width: '1362.54px',
              height: '766.44px',
              top: '281px',
              left: '-753px',
              borderRadius: '532.25px',
              backgroundColor: 'rgba(81, 180, 250, 0.85)',
              filter: 'blur(130px)',
              transform: 'translateZ(0)',
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              width: '671px',
              height: '377.44px',
              top: '375px',
              left: '882px',
              borderRadius: '262.11px',
              backgroundColor: 'rgba(248, 166, 240, 0.85)',
              filter: 'blur(130px)',
              transform: 'translateZ(0)',
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              width: '751.02px',
              height: '422.45px',
              top: '529px',
              left: '29px',
              borderRadius: '293.37px',
              backgroundColor: 'rgba(133, 74, 235, 0.7)',
              filter: 'blur(130px)',
              transform: 'translateZ(0)',
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              width: '625.19px',
              height: '351.66px',
              top: '564px',
              left: '592px',
              borderRadius: '244.21px',
              backgroundColor: 'rgba(248, 217, 151, 0.85)',
              filter: 'blur(130px)',
              transform: 'translateZ(0)',
            }}
          />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <motion.div
            className="hidden xl:block absolute -left-20 2xl:-left-24 top-2 w-40 lg:w-44 select-none pointer-events-none"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="relative">
              <Image
                src="/images/ecommerce/hero/badge-left-clean.png"
                alt="Fashion style badge"
                width={176}
                height={153}
                className="w-full h-auto drop-shadow-sm"
              />
              <div className="absolute -top-7 right-3 w-10 sm:w-11 pointer-events-none">
                <Image
                  src="/images/ecommerce/hero/sparks.svg"
                  alt="Decorative sparks"
                  width={44}
                  height={46}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hidden xl:block absolute -right-20 2xl:-right-24 -top-8 w-36 lg:w-40 select-none pointer-events-none"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <div className="relative flex flex-col items-center">
              <div className="w-24 -mb-2 -ml-10 pointer-events-none">
                <Image
                  src="/images/ecommerce/hero/loop-arrow.svg"
                  alt="Decorative curved loop arrow"
                  width={96}
                  height={88}
                  className="w-full h-auto"
                />
              </div>
              <Image
                src="/images/ecommerce/hero/badge-right-clean.png"
                alt="Fashion model badge"
                width={140}
                height={144}
                className="w-32 lg:w-36 h-auto drop-shadow-sm"
              />
            </div>
          </motion.div>

          <motion.h1
            className="font-heading font-extrabold text-[34px] sm:text-[46px] md:text-[54px] lg:text-[60px] text-dark tracking-tight leading-[1.18]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Shop the Best{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F961D8] to-[#1663F9]">
              Styles
            </span>{' '}
            in <br className="hidden sm:inline" />
            One Place
          </motion.h1>
        </div>

        <motion.div
          className="mt-10 sm:mt-14 md:mt-16 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 md:gap-5 lg:gap-6">
            <div className="hidden lg:block w-[170px] xl:w-[200px] flex-shrink-0">
              <div className="relative aspect-square rounded-[24px] xl:rounded-[28px] overflow-hidden shadow-md shadow-black/5 hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/ecommerce/hero/hero-1-beret.jpg"
                  alt="Fashion model wearing brown beret"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 170px, 200px"
                />
              </div>
            </div>

            <div className="w-[102px] sm:w-[145px] md:w-[165px] lg:w-[170px] xl:w-[200px] flex flex-col gap-2.5 sm:gap-4 md:gap-5 flex-shrink-0">
              <div className="relative aspect-[4/3] rounded-[16px] sm:rounded-[22px] xl:rounded-[26px] overflow-hidden shadow-sm shadow-black/5 hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/ecommerce/hero/hero-2-camera-man.jpg"
                  alt="Young man with sunglasses smiling on blue background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 102px, 200px"
                />
              </div>
              <div className="relative aspect-square rounded-[16px] sm:rounded-[22px] xl:rounded-[26px] overflow-hidden shadow-sm shadow-black/5 hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/ecommerce/hero/hero-3-red-coat.jpg"
                  alt="Woman in red coat holding camera on mint green background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 102px, 200px"
                />
              </div>
            </div>

            <div className="w-[136px] sm:w-[190px] md:w-[220px] lg:w-[240px] xl:w-[275px] flex-shrink-0">
              <div className="relative aspect-[9/17] sm:aspect-[9/16] rounded-[22px] sm:rounded-[30px] xl:rounded-[36px] overflow-hidden shadow-xl shadow-yellow-500/10 hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/ecommerce/hero/hero-4-yellow-suit.jpg"
                  alt="Center fashion model sitting on yellow chair wearing yellow suit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 136px, 275px"
                />
              </div>
            </div>

            <div className="w-[102px] sm:w-[145px] md:w-[165px] lg:w-[170px] xl:w-[200px] flex flex-col gap-2.5 sm:gap-4 md:gap-5 flex-shrink-0">
              <div className="relative aspect-square rounded-[16px] sm:rounded-[22px] xl:rounded-[26px] overflow-hidden shadow-sm shadow-black/5 hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/ecommerce/hero/hero-5-flower-boy.jpg"
                  alt="Blond model with daisy flower on pink background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 102px, 200px"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-[16px] sm:rounded-[22px] xl:rounded-[26px] overflow-hidden shadow-sm shadow-black/5 hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/ecommerce/hero/hero-6-beanie-man.jpg"
                  alt="Young man with beanie smiling on purple background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 102px, 200px"
                />
              </div>
            </div>

            <div className="hidden lg:block w-[170px] xl:w-[200px] flex-shrink-0">
              <div className="relative aspect-square rounded-[24px] xl:rounded-[28px] overflow-hidden shadow-md shadow-black/5 hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/images/ecommerce/hero/hero-7-sunglasses.jpg"
                  alt="Model in beige sweater on cyan background"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 170px, 200px"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
