'use client'

import React, { useEffect, useState } from 'react'

import { PlaylistCard } from '@/components/PlaylistCard'
import { playlistService } from '@/services/playlist'
import { Plus } from 'lucide-react'

import { IPlaylistPropsResponse } from '@/constants/payload/base'

export interface IPropsArtist {
  result: IPlaylistPropsResponse[]
}

export default function Playlist() {
  const [playlists, setPlaylists] = useState<IPlaylistPropsResponse[]>([])

  const handleAllArtist = async () => {
    try {
      const { data } = await playlistService.listPlaylists()
      const { result }: IPropsArtist = data
      setPlaylists(result)
    } catch (err) {
      console.log('err', err)
    }
  }

  useEffect(() => {
    handleAllArtist()
  }, [])

  return (
    <React.Fragment>
      <h1 className="title-page"> Playlists </h1>
      <div className="grid grid-cols-4 gap-4 w-full">
        <button className="flex items-center justify-center w-full p-4 bg-gray-300 rounded-lg">
          <Plus size={40} className="self-center" />
        </button>
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist['@key']} playlist={playlist} />
        ))}
      </div>
    </React.Fragment>
  )
}
