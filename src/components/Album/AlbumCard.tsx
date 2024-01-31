import Link from 'next/link'
import React from 'react'

import { Disc2, MoreVertical } from 'lucide-react'

import { IAlbumPropsResponse } from '@/constants/payload/base'

import { SpecificityAlbum } from './SpecificityAlbum'

export interface IProps {
  album: IAlbumPropsResponse
}

export const AlbumCard = ({ album }: IProps) => {
  return (
    <section className="relative flex flex-col w-full group transition-colors duration-150 group">
      <div className="h-1/2 rounded-t-lg bg-primary-light group-hover:bg-primary-base flex items-center justify-center p-4 transition-colors duration-150">
        <Disc2 className="h-full w-full text-white" />
      </div>
      <div className="absolute p-2 right-2 top-2 cursor-pointer rounded-md hover:bg-gray-50">
        <MoreVertical />
      </div>

      <Link
        href={`album/${album['@key']}`}
        key={album['@key']}
        className="flex flex-col justify-between p-4 h-1/2 w-full group-hover:bg-gray-200 rounded-b-lg transition-colors duration-150 group"
      >
        <div>
          <h1 className="font-medium text-2xl">{album.title}</h1>
          <div>
            por <span className="text-zinc-700 font-medium">{album.artist.name}</span>
          </div>
        </div>

        <SpecificityAlbum album={album} />
      </Link>
    </section>
  )
}
