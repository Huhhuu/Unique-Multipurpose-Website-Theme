import Layout from '@/components/layout/Layout'
import BlogDetail from '@/components/blog/BlogDetail'
import RelatedPosts from '@/components/blog/RelatedPosts'
import blogData from '@/data/blog-data.json'

export default function BlogPostPage({ post, relatedPosts }) {
  if (!post) return null

  return (
    <Layout
      theme="ecommerce"
      title={`${post.title} | MicPro Fashion`}
      description={post.excerpt}
    >
      <BlogDetail post={post} />
      <RelatedPosts posts={relatedPosts} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = blogData.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = blogData.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  const relatedPosts = blogData
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3)

  return {
    props: {
      post,
      relatedPosts,
    },
  }
}
