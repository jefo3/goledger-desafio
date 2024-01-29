'use client'

import React, { useEffect, useState } from 'react'

import { SongItem } from '@/components/SongItem'
import { listService } from '@/services/list'

import { ISongPropsResponse } from '@/constants/payload/base'

interface IProps {
  metadata: unknown
  result: ISongPropsResponse[]
}

export default function Song() {
  const [songs, setSongs] = useState<ISongPropsResponse[]>([])

  const handleAllSongs = async () => {
    try {
      const response = await listService.listSongs()
      const data: IProps = response.data

      setSongs(data.result)
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
          <SongItem song={song} key={song['@key']} />
        ))}
      </div>
    </React.Fragment>
  )
}
