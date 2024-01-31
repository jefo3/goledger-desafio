'use client'

import React, { useEffect, useState } from 'react'

import { artistService } from '@/services/artist'

import { IArtistPropsResponse } from '@/constants/payload/base'

import { IPropsArtist } from '../page'

interface IPropsDetailArtist {
  params: {
    id: string
  }
}

export default function DetailArtist({ params: { id } }: IPropsDetailArtist) {
  const [artist, setArtist] = useState<IArtistPropsResponse[]>([])

  const handleDetailArtist = async (id: string) => {
    try {
      const response = await artistService.detailArtist(id)
      const data: IPropsArtist = response.data
      setArtist(data.result)
    } catch (err) {
      console.log('err', err)
    }
  }
  useEffect(() => {
    if (!id) return
    const idURI = decodeURIComponent(id)
    handleDetailArtist(idURI)
  }, [id])

  return (
    <React.Fragment>
      <h1 className="title-page"> Artistas - {artist[0]?.name} </h1>
      <div className="flex flex-wrap">
        {artist.map((artist) => {
          return (
            <div key={artist['@key']}>
              <span>{artist.name}</span>
              <span>{artist.about}</span>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}
