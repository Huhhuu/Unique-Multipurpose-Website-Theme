import { useState, useMemo } from 'react'
import Layout from '@/components/layout/Layout'
import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import BlogFeatured from '@/components/blog/BlogFeatured'
import BlogCategories from '@/components/blog/BlogCategories'
import BlogCard from '@/components/blog/BlogCard'
import blogData from '@/data/blog-data.json'

export default function BlogIndexPage({ posts }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.category))
    return Array.from(set)
  }, [posts])

  const featuredPost = posts[0]

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchCategory =
        selectedCategory === 'all' || post.category === selectedCategory
      const matchSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchCategory && matchSearch
    })
  }, [posts, selectedCategory, searchQuery])

  return (
    <Layout
      theme="ecommerce"
      title="Fashion Blog & Xu Hướng Phong Cách - MicPro Store"
      description="Cập nhật những xu hướng thời trang mới nhất, mẹo phối đồ thực tế và cẩm nang phong cách sống từ các chuyên gia MicPro."
    >
      <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50/60 to-white">
        <Container>
          <SectionTitle
            subtitle="Tin Tức & Xu Hướng"
            title="MicPro Fashion Blog & Lookbook"
            description="Không gian chia sẻ kiến thức thời trang, cảm hứng phong cách đương đại và những bí quyết nâng tầm diện mạo mỗi ngày."
          />

          {/* Featured Post (chỉ hiển thị khi không lọc tìm kiếm) */}
          {selectedCategory === 'all' && searchQuery.trim() === '' && (
            <BlogFeatured post={featuredPost} />
          )}

          {/* Categories & Search */}
          <BlogCategories
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100">
              <span className="text-4xl">🔍</span>
              <h3 className="font-heading font-bold text-h5 text-dark mt-4">
                Không tìm thấy bài viết phù hợp
              </h3>
              <p className="font-sans text-xs text-dark-muted mt-2">
                Hãy thử tìm kiếm với từ khóa khác hoặc chuyển sang danh mục Tất cả.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                }}
                className="mt-6 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-hover transition-colors"
              >
                Xóa bộ lọc
              </button>
            </div>
          )}
        </Container>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: blogData,
    },
  }
}
