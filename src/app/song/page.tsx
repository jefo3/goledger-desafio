'use client'

import React, { useEffect, useState } from 'react'

import { SongCard } from '@/components/SongCard'
import { songService } from '@/services/song'

import { ISongPropsResponse } from '@/constants/payload/base'

interface IProps {
  result: ISongPropsResponse[]
}

export default function Song() {
  const [songs, setSongs] = useState<ISongPropsResponse[]>([])

  const handleAllSongs = async () => {
    try {
      const { data } = await songService.listSongs()
      const { result }: IProps = data

      setSongs(result)
    } catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    handleAllSongs()
  }, [])

  return (
    <React.Fragment>
      <h1 className="title-page"> Músicas </h1>
      <div className="grid grid-cols-3 gap-4">
        {songs.map((song) => (
          <SongCard song={song} key={song['@key']} />
        ))}
      </div>
    </React.Fragment>
  )
}
