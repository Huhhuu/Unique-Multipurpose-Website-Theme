import Layout from '@/components/layout/Layout'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Features from '@/components/home/Features'
import Testimonials from '@/components/home/Testimonials'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <Layout
      theme="ecommerce"
      title="E-Commerce Fashion Store | Unique Multipurpose Website"
      description="Unique Multipurpose Website Theme hiện đại xây dựng bằng Next.js 13 Pages Router, Tailwind CSS và Framer Motion."
    >
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
    </Layout>
  )
}
