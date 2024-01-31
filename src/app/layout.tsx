import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import '../styles/globals.css'
import { Sidebar } from '@/components/Sidebar'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Music | Goledger',
  description: 'striming music by Goledger',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <div className="min-h-screen flex gap-6">
          <Sidebar />
          <main className="w-full px-4 pb-12 pt-8 ">{children}</main>
        </div>
      </body>
    </html>
  )
}
