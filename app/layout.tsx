import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import Provider from './components/Provider'
import NextAuth from 'next-auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CEPC Admin App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider>
        <NavBar />
      </Provider>  
        <main>{children}</main>
      </body>
    </html>
  )
}
