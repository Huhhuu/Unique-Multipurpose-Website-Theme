import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Badge from '@/components/atoms/Badge'

export default function BlogCard({ post }) {
  if (!post) return null

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-100/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <Link href={`/blog/${post.slug}`} className="block relative h-52 sm:h-60 overflow-hidden bg-gray-50">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 z-10">
          <Badge
            className="text-white shadow-sm backdrop-blur-md px-3.5 py-1"
            style={{ backgroundColor: post.categoryColor || '#1663F9' }}
          >
            {post.category}
          </Badge>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center text-xs text-dark-muted font-sans gap-2 mb-3">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <Link href={`/blog/${post.slug}`} className="block group-hover:text-primary transition-colors">
            <h3 className="font-heading font-bold text-h5 text-dark leading-snug line-clamp-2">
              {post.title}
            </h3>
          </Link>

          <p className="mt-3 font-sans text-b3 text-dark-muted line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-5 mt-6 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-sans text-xs font-semibold text-dark leading-tight">
                {post.author.name}
              </p>
              <p className="font-sans text-[11px] text-dark-muted leading-tight">
                {post.author.role}
              </p>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-dark group-hover:bg-primary group-hover:text-white transition-colors"
            aria-label="Read article"
          >
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
