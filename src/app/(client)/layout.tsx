import { ReactNode } from 'react'

import { Sidebar } from '@/components/Sidebar'

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex gap-6">
      <Sidebar />
      <main className="w-full px-4 pb-12 pt-8 ">{children}</main>
    </div>
  )
}
