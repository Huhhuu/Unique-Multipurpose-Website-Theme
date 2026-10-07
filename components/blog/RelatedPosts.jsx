import Container from '@/components/common/Container'
import SectionTitle from '@/components/common/SectionTitle'
import BlogCard from './BlogCard'

export default function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null

  return (
    <section className="py-14 sm:py-20 bg-gray-50/70 border-t border-gray-100">
      <Container>
        <SectionTitle
          subtitle="Explore More"
          title="Related Stories You Might Enjoy"
          description="Stay updated with the latest fashion perspectives, styling tips, and contemporary lifestyle inspiration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  )
}
