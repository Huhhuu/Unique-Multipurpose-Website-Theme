import Layout from '@/components/layout/Layout'
import CharityHero from '@/components/charity/CharityHero'
import CharityCategories from '@/components/charity/CharityCategories'
import CharityVolunteer from '@/components/charity/CharityVolunteer'

export default function CharityPage() {
  return (
    <Layout
      theme="charity"
      title="MicPro Charity - Fundraising Through Your Social Networks"
      description="Nền tảng kết nối gây quỹ từ thiện minh bạch thông qua mạng xã hội, xây dựng trên Next.js 13 Pages Router và Tailwind CSS."
    >
      <CharityHero />
      <CharityCategories />
      <CharityVolunteer />
    </Layout>
  )
}
