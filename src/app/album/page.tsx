'use client'

import React, { useEffect, useState } from 'react'

import { AlbumCard } from '@/components/Album/AlbumCard'
import { albumService } from '@/services/album'

import { IAlbumPropsResponse } from '@/constants/payload/base'

export interface IPropsAlbum {
  result: IAlbumPropsResponse[]
}

export default function Album() {
  const [albuns, setAlbuns] = useState<IAlbumPropsResponse[]>([])

  const handleAllAlbuns = async () => {
    try {
      const { data } = await albumService.listAlbuns()
      const { result }: IPropsAlbum = data
      setAlbuns(result)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleAllAlbuns()
  }, [])

  return (
    <React.Fragment>
      <h1 className="title-page"> Albuns </h1>

      <div className="grid grid-cols-4 w-full gap-6">
        {albuns.map((album) => {
          return <AlbumCard key={album['@key']} album={album} />
        })}
      </div>
    </React.Fragment>
  )
}
