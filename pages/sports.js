import Layout from '@/components/layout/Layout'
import ThemePreview from '@/components/common/ThemePreview'

export default function SportsPage() {
  return (
    <Layout
      theme="sports"
      title="Sports & Basketball Academy | Unique Multipurpose Website"
      description="Giao diện học viện thể thao bóng rổ chuẩn thiết kế Figma, xây dựng bằng Next.js 13 và Tailwind CSS."
    >
      <ThemePreview themeKey="sports" />
    </Layout>
  )
}
