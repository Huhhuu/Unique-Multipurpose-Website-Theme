import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({
  children,
  title = 'MicPro - Unique Multipurpose Modern Website',
  description = 'Website đa năng xây dựng bằng Next.js 13 Pages Router, Tailwind CSS và Framer Motion.',
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  )
}
