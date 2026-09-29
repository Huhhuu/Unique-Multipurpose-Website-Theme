import Layout from '@/components/layout/Layout'
import ThemePreview from '@/components/common/ThemePreview'

export default function EducationPage() {
  return (
    <Layout
      theme="education"
      title="Online Education & Academy | Unique Multipurpose Website"
      description="Giao diện học viện giáo dục trực tuyến chuẩn thiết kế Figma, xây dựng bằng Next.js 13 và Tailwind CSS."
    >
      <ThemePreview themeKey="education" />
    </Layout>
  )
}
