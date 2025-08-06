import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import PageTransitionWrapper from '@/components/page-transition-wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gift Gallery - Unwrap Joy, One Gift at a Time',
  description: 'Discover the perfect gift for every special moment. Premium gifts with luxury packaging and personalized touches.',
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <PageTransitionWrapper>
          <main className="pt-16">
            {children}
          </main>
        </PageTransitionWrapper>
        <Footer />
      </body>
    </html>
  )
}
