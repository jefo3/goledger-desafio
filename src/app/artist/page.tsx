'use client'

import React, { useEffect, useState } from 'react'

import { ArtistCard } from '@/components/ArtistCard'
import { artistService } from '@/services/artist'

import { IArtistPropsResponse } from '@/constants/payload/base'

export interface IPropsArtist {
  result: IArtistPropsResponse[]
}

export default function Artist() {
  const [artists, setArtists] = useState<IArtistPropsResponse[]>([])

  const handleAllArtist = async () => {
    try {
      const response = await artistService.listArtists()
      const data: IPropsArtist = response.data
      setArtists(data.result)
    } catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    handleAllArtist()
  }, [])

  return (
    <React.Fragment>
      <h1 className="title-page"> Artistas </h1>
      <div className="flex flex-wrap gap-6">
        {artists.map((artist) => {
          return <ArtistCard artist={artist} key={artist['@key']} />
        })}
      </div>
    </React.Fragment>
  )
}
