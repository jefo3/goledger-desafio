import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import '../styles/globals.css'

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
        <main>{children}</main>
      </body>
    </html>
  )
}
