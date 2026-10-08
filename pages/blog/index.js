import { useState, useMemo } from 'react'
import Layout from '@/components/layout/Layout'
import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import BlogFeatured from '@/components/blog/BlogFeatured'
import BlogCategories from '@/components/blog/BlogCategories'
import BlogCard from '@/components/blog/BlogCard'
import BlogBackdrop from '@/components/blog/BlogBackdrop'
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
      title="Fashion Blog & Style Trends | MicPro Store"
      description="Discover the latest fashion trends, practical styling tips, and curated lifestyle guides from MicPro experts."
    >
      <div className="relative overflow-hidden bg-white -mt-20 pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24">
        <BlogBackdrop />
        <Container className="relative z-10">
          <SectionTitle
            subtitle="News & Trends"
            title="MicPro Fashion Blog & Lookbook"
            description="Exploring modern fashion perspectives, contemporary silhouettes, and everyday styling inspiration."
          />

          {selectedCategory === 'all' && searchQuery.trim() === '' && (
            <BlogFeatured post={featuredPost} />
          )}

          <BlogCategories
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

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
                No matching stories found
              </h3>
              <p className="font-sans text-xs text-dark-muted mt-2">
                Try searching with a different keyword or reset filters to view all articles.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                }}
                className="mt-6 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-hover transition-colors"
              >
                Reset Filters
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
