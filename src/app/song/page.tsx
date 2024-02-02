'use client'

import React, { useCallback, useEffect, useState } from 'react'

import { Button } from '@/components/Button'
import { CreateSongFormModal } from '@/components/song/CreateSongFormModal'
import { SongCard } from '@/components/song/SongCard'
import { songService } from '@/services/song'
import { Plus } from 'lucide-react'

import { ISongPropsResponse } from '@/constants/payload/base'

interface IProps {
  result: ISongPropsResponse[]
}

export default function Song() {
  const [songs, setSongs] = useState<ISongPropsResponse[]>([])
  const [openFormModal, setOpenFormModal] = useState(false)

  const handleAllSongs = useCallback(async () => {
    try {
      const { data } = await songService.listSongs({})
      const { result }: IProps = data

      setSongs(result)
    } catch (err) {
      console.log('err', err)
    }
  }, [])

  const openCreateMusicModal = () => {
    setOpenFormModal(true)
  }

  useEffect(() => {
    handleAllSongs()
  }, [handleAllSongs])

  return (
    <React.Fragment>
      <div className="flex justify-between mb-9">
        <h1 className="title-page"> Músicas </h1>
        <Button type="button" onClick={openCreateMusicModal} icon={Plus}>
          Adicionar música
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {songs.map((song) => (
          <SongCard song={song} key={song['@key']} />
        ))}
      </div>
      <CreateSongFormModal
        closeModal={() => setOpenFormModal(false)}
        isOpenModal={openFormModal}
        loadData={handleAllSongs}
      />
    </React.Fragment>
  )
}
