import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import Provider from '@/context/Provider'
import NextAuth from 'next-auth'
import { getServerSession } from 'next-auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CEPC Admin App',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <Provider session={session}>
        <body className={inter.className}>
          <NavBar />
          <main>{children}</main>
        </body>
      </Provider>  
    </html>
  )
}
