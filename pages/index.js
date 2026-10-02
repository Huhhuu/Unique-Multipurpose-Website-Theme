import Layout from '@/components/layout/Layout'
import AmbientBackdrop from '@/components/home/AmbientBackdrop'
import Hero from '@/components/home/Hero'
import PopularProducts from '@/components/home/PopularProducts'
import SimilarItems from '@/components/home/SimilarItems'
import SellEverywhere from '@/components/home/SellEverywhere'
import GrowFaster from '@/components/home/GrowFaster'
import Stats from '@/components/home/Stats'
import TestimonialCard from '@/components/home/TestimonialCard'
import SupportServices from '@/components/home/SupportServices'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <Layout
      theme="ecommerce"
      title="E-Commerce Fashion Store | Unique Multipurpose Website"
      description="Unique Multipurpose Website Theme hiện đại xây dựng bằng Next.js 13 Pages Router, Tailwind CSS và Framer Motion."
    >
      <div className="relative overflow-hidden bg-white -mt-20">
        <AmbientBackdrop />
        <Hero />
        <PopularProducts />
        <SimilarItems />
        <SellEverywhere />
        <GrowFaster />
        <Stats />
        <TestimonialCard />
        <SupportServices />
      </div>

      <CTA />
    </Layout>
  )
}
