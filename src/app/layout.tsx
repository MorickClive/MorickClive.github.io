import './css/index.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Header from './components/Header'
import Link from 'next/link'
import SocialMediaBar from '@/lib/getSocialMedia'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Portfolio Site',
    template: '[%s] Portfolio Site'
  },
  description: 'Portfolio site for details and active projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <div className="App">
          <div id="frontLayer">
            <div id="main">
              {children}
            </div>
            <footer>
              <SocialMediaBar />
              <em>Alan Davies @2023</em>
            </footer>
          </div>
          <div id="backLayer"></div>
        </div>
      </body>
    </html>
  )
}