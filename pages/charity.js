import Layout from '@/components/layout/Layout'
import ThemePreview from '@/components/common/ThemePreview'

export default function CharityPage() {
  return (
    <Layout
      theme="charity"
      title="Charity & Non-Profit | Unique Multipurpose Website"
      description="Giao diện tổ chức từ thiện gây quỹ xã hội chuẩn thiết kế Figma, xây dựng bằng Next.js 13 và Tailwind CSS."
    >
      <ThemePreview themeKey="charity" />
    </Layout>
  )
}
