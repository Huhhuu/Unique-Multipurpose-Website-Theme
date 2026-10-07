import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BlogFeatured({ post }) {
  if (!post) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow mb-12 sm:mb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-7 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-gray-50">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-top hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 z-10">
            <span
              className="px-4 py-1.5 text-xs font-semibold rounded-full text-white shadow-md backdrop-blur-md"
              style={{ backgroundColor: post.categoryColor || '#1663F9' }}
            >
              {post.category}
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Bài Viết Tiêu Điểm
            </div>

            <div className="flex items-center text-xs text-dark-muted font-sans gap-2 mb-3">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="font-heading font-extrabold text-h4 sm:text-h3 text-dark leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h2>
            </Link>

            <p className="mt-4 font-sans text-b2 text-dark-muted leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-dark">
                  {post.author.name}
                </p>
                <p className="font-sans text-xs text-dark-muted">
                  {post.author.role}
                </p>
              </div>
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark text-white text-xs font-semibold hover:bg-primary transition-colors"
            >
              Đọc Ngay
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
