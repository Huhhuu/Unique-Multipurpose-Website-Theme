import Layout from '@/components/layout/Layout'
import ThemePreview from '@/components/common/ThemePreview'

export default function NFTPage() {
  return (
    <Layout
      theme="nft"
      title="NFT Marketplace | Unique Multipurpose Website"
      description="Giao diện thị trường NFT Web3 hiện đại chuẩn thiết kế Figma, xây dựng bằng Next.js 13 và Tailwind CSS."
    >
      <ThemePreview themeKey="nft" />
    </Layout>
  )
}
