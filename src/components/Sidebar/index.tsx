'use client'

import Image from 'next/image'

import { AudioLines, User, Disc3, ListMusic } from 'lucide-react'

import { NavItem } from './NavItem'

export const Sidebar = () => {
  return (
    <aside className="flex flex-col w-60 gap-6 border-r border-zinc-200 px-5 py-8">
      <Image
        src="https://goledger.io/wp-content/uploads/2020/07/cropped-goledger-newfont-horizontal-1-1-1.png"
        alt={'Logo da goledger'}
        width={200}
        height={48}
      />

      <nav>
        <NavItem icon={AudioLines} label="Música" path="/song" />
        <NavItem icon={User} label="Artista" path="/artist" />
        <NavItem icon={Disc3} label="Album" path="/album" />
        <NavItem icon={ListMusic} label="Playlist" path="/playlist" />
      </nav>
    </aside>
  )
}
