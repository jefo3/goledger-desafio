'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ElementType } from 'react'

import { tv } from 'tailwind-variants'

interface INavItemProps {
  label: string
  icon: ElementType
  path: string
}

const navItem = tv({
  base: 'flex gap-5 w-full p-4 mt-2 bg-slate-100 hover:bg-slate-200 rounded-md font-medium cursor-pointer outline-none',
  variants: {
    isActive: {
      true: 'bg-primary font-bold text-white hover:bg-primary',
    },
  },
})

export const NavItem = ({ icon: Icon, path, label }: INavItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === path

  return (
    <Link href={path}>
      <div className={navItem({ isActive })}>
        <Icon />
        <span>{label}</span>
      </div>
    </Link>
  )
}
