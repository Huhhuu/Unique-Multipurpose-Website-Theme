import Layout from '@/components/layout/Layout'
import ThemePreview from '@/components/common/ThemePreview'

export default function RestaurantPage() {
  return (
    <Layout
      theme="restaurant"
      title="Restaurant & Food Delivery | Unique Multipurpose Website"
      description="Giao diện nhà hàng ẩm thực và giao hàng nhanh chuẩn thiết kế Figma, xây dựng bằng Next.js 13 và Tailwind CSS."
    >
      <ThemePreview themeKey="restaurant" />
    </Layout>
  )
}
