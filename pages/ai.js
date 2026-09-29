import Layout from '@/components/layout/Layout'
import ThemePreview from '@/components/common/ThemePreview'

export default function AIPage() {
  return (
    <Layout
      theme="ai"
      title="AI SaaS & Content Writer | Unique Multipurpose Website"
      description="Giao diện AI Copywriter hiện đại chuẩn thiết kế Figma, xây dựng bằng Next.js 13 và Tailwind CSS."
    >
      <ThemePreview themeKey="ai" />
    </Layout>
  )
}
