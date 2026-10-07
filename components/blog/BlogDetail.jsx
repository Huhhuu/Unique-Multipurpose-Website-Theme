import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Container from '@/components/common/Container'

export default function BlogDetail({ post }) {
  if (!post) return null

  return (
    <article className="py-10 md:py-16">
      <Container>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-dark-muted font-sans mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Trang Chủ</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-dark font-medium line-clamp-1 max-w-[280px] sm:max-w-md">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
          <div className="inline-block mb-4">
            <span
              className="px-4 py-1.5 text-xs font-semibold rounded-full text-white shadow-sm"
              style={{ backgroundColor: post.categoryColor || '#1663F9' }}
            >
              {post.category}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-h4 sm:text-h3 md:text-h2 text-dark leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-dark-muted font-sans">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold text-dark leading-tight">{post.author.name}</p>
                <p className="text-[11px] text-dark-muted leading-tight">{post.author.role}</p>
              </div>
            </div>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-5xl mx-auto h-[320px] sm:h-[460px] md:h-[540px] rounded-3xl overflow-hidden bg-gray-100 shadow-md mb-12 md:mb-16"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1100px"
            className="object-cover object-top"
          />
        </motion.div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 font-sans text-dark/85 text-b1 leading-relaxed">
            {post.content && post.content.map((block, idx) => {
              if (block.type === 'heading') {
                return (
                  <h2
                    key={idx}
                    className="font-heading font-bold text-h4 sm:text-h3 text-dark pt-6 pb-2"
                  >
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'quote') {
                return (
                  <blockquote
                    key={idx}
                    className="my-8 p-6 sm:p-8 rounded-2xl bg-primary/5 border-l-4 border-primary relative"
                  >
                    <p className="font-heading text-b1 sm:text-p2 italic text-dark font-medium leading-relaxed">
                      &ldquo;{block.quote}&rdquo;
                    </p>
                    {block.author && (
                      <cite className="block mt-4 text-xs font-sans not-italic font-semibold text-primary">
                        — {block.author}
                      </cite>
                    )}
                  </blockquote>
                )
              }
              return (
                <p key={idx} className="text-b2 sm:text-b1 text-dark/80 leading-relaxed">
                  {block.text}
                </p>
              )
            })}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center gap-2">
              <span className="font-heading text-xs font-bold text-dark mr-2">Từ khóa:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-gray-100 text-dark-muted text-xs font-medium hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Author Card */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white shadow-sm flex-shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left flex-grow">
              <p className="font-heading font-bold text-h5 text-dark">{post.author.name}</p>
              <p className="font-sans text-xs text-primary font-medium mb-2">{post.author.role} tại MicPro</p>
              <p className="font-sans text-xs text-dark-muted leading-relaxed">
                Chuyên gia định hình phong cách và cố vấn xu hướng thời trang hiện đại với hơn 8 năm kinh nghiệm trong ngành thời trang và bán lẻ cao cấp.
              </p>
            </div>
          </div>

          {/* Back button */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark text-white text-xs font-semibold hover:bg-primary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Quay lại danh sách Blog
            </Link>
          </div>
        </div>
      </Container>
    </article>
  )
}
