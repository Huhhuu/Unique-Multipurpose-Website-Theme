import Layout from '@/components/layout/Layout'
import ThemePreview from '@/components/common/ThemePreview'

export default function AgencyPage() {
  return (
    <Layout
      theme="agency"
      title="Digital Agency & Studio | Unique Multipurpose Website"
      description="Giao diện Digital Agency hiện đại chuẩn thiết kế Figma, xây dựng bằng Next.js 13 và Tailwind CSS."
    >
      <ThemePreview themeKey="agency" />
    </Layout>
  )
}
