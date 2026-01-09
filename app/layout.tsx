import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import ClientLayoutWrapper from '@/components/shared/ClientLayoutWrapper'

const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald'
})

export const metadata: Metadata = {
  title: 'Marg Home Solutions - Premium Solar, Water & Power Solutions',
  description: 'Leading provider of solar solutions, water heaters, pumps, and power backup systems in Bengaluru',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${oswald.variable}`}>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  )
}
