import Layout from '@/components/layout/Layout'
import ThemePreview from '@/components/common/ThemePreview'

export default function DentalPage() {
  return (
    <Layout
      theme="dental"
      title="Dental Clinic & Healthcare | Unique Multipurpose Website"
      description="Giao diện phòng khám nha khoa hiện đại chuẩn thiết kế Figma, xây dựng bằng Next.js 13 và Tailwind CSS."
    >
      <ThemePreview themeKey="dental" />
    </Layout>
  )
}
