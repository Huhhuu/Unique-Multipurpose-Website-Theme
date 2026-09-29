import Layout from '@/components/layout/Layout'
import ThemePreview from '@/components/common/ThemePreview'

export default function EventPage() {
  return (
    <Layout
      theme="event"
      title="Event & Conference | Unique Multipurpose Website"
      description="Giao diện sự kiện hội nghị thương hiệu chuẩn thiết kế Figma, xây dựng bằng Next.js 13 và Tailwind CSS."
    >
      <ThemePreview themeKey="event" />
    </Layout>
  )
}
