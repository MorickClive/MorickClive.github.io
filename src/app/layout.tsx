//import './css/index.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Header from './components/Header'
import SiteFooter from '@/lib/siteFooter'

const inter = Inter({ subsets: ['latin'] })
const basePath = process.env.BASE_PATH || ''

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
      <head>
        <link rel="stylesheet" href={`${basePath}/css/index.css`} />
      </head>
      <body>
        <Header />
        <div className="App">
          <div id="frontLayer">
            <div id="main">
              {children}
            </div>
            <SiteFooter />
          </div>
          <div id="backLayer"></div>
        </div>
      </body>
    </html>
  )
}