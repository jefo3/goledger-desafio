'use client'

import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'

export default function Index() {
  const { push } = useRouter()

  useLayoutEffect(() => {
    push('/song')
  }, [])
}
