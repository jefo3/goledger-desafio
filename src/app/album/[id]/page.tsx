'use client'

import React, { useEffect, useState } from 'react'

import { albumService } from '@/services/album'

import { IAlbumPropsResponse } from '@/constants/payload/base'

import { IPropsAlbum } from '../page'

interface IPropsDetailAlbum {
  params: {
    id: string
  }
}

export default function DetailAlbum({ params: { id } }: IPropsDetailAlbum) {
  const [album, setAlbum] = useState<IAlbumPropsResponse[]>([])

  const handleDetailAlbum = async (id: string) => {
    try {
      const { data } = await albumService.detailAlbum({ id })
      const { result }: IPropsAlbum = data
      setAlbum(result)
    } catch (err) {
      console.log('err', err)
    }
  }
  useEffect(() => {
    if (!id) return
    const idURI = decodeURIComponent(id)
    handleDetailAlbum(idURI)
  }, [id])

  return (
    <React.Fragment>
      <h1 className="title-page"> Album - {album[0]?.title} </h1>
      <div className="flex flex-wrap">
        {album.map((album) => {
          return (
            <div key={album['@key']}>
              <span>{album.title}</span>
              <span>{album.rating}</span>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}
