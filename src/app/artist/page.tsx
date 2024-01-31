'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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
      <div className="flex flex-wrap">
        {artists.map((artist) => {
          return (
            <Link href={`artist/${artist['@key']}`} key={artist['@key']}>
              <span>{artist.name}</span>
            </Link>
          )
        })}
      </div>
    </React.Fragment>
  )
}
