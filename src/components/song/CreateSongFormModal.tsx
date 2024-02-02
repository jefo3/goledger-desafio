'use client'

import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'
import { toast } from 'react-toastify'

import { albumService } from '@/services/album'
import { artistService } from '@/services/artist'
import { songService } from '@/services/song'
import { zodResolver } from '@hookform/resolvers/zod'
import { Music4Icon, Save } from 'lucide-react'

import {
  IAlbumPropsResponse,
  IArtistPropsResponse,
  IPropsForReference,
} from '@/constants/payload/base'
import { colourStyles } from '@/constants/styles'

import { Button } from '../Button'
import { Input } from '../Input'
import { Modal } from '../Modal'
import { createSongFormData, createSongFormSchema } from './valitationForm'

interface IPropsFormModal {
  closeModal: () => void
  isOpenModal: boolean
}

export interface IPropsAlbum {
  result: IAlbumPropsResponse[]
}

export interface IPropsArtist {
  result: IArtistPropsResponse[]
}

export const CreateSongFormModal = ({ closeModal, isOpenModal }: IPropsFormModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    control,
  } = useForm<createSongFormData>({
    resolver: zodResolver(createSongFormSchema),
  })

  const [albuns, setAlbuns] = useState<IAlbumPropsResponse[]>([])
  const [artists, setArtists] = useState<IArtistPropsResponse[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleValuesForSelects = async () => {
    try {
      const [albumsRes, artistsRes] = await Promise.all([
        albumService.listAlbuns({ resolve: false }),
        artistService.listArtists({}),
      ])

      const { result: resultAlbums }: IPropsAlbum = albumsRes.data
      const { result: resultArtists }: IPropsArtist = artistsRes.data

      if (resultAlbums) {
        setAlbuns(resultAlbums)
      }

      if (resultArtists) {
        setArtists(resultArtists)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const createSong = async (data: createSongFormData) => {
    const { album, artists, explicit, title } = data

    const albumFormatted: IPropsForReference = {
      '@assetType': 'album',
      '@key': album.value,
    }

    const listArtists = artists.map((artist) => {
      const artistsFormatted: IPropsForReference = {
        '@assetType': 'artist',
        '@key': artist.value,
      }

      return artistsFormatted
    })

    try {
      setIsLoading(true)
      const { data } = await songService.createSong({
        title,
        album: albumFormatted,
        artists: listArtists,
        explicit: explicit === 'true',
      })

      if (data) {
        toast.done('Música criada com sucesso')
        close()
      }
    } catch (err) {
      setIsLoading(false)
      console.log('error -->', err)
    }
  }

  const close = () => {
    setIsLoading(false)
    closeModal()
    clearErrors()
    reset()
  }

  useEffect(() => {
    if (!isOpenModal || (albuns.length > 0 && artists.length > 0)) return
    handleValuesForSelects()
  }, [isOpenModal])

  return (
    <Modal.Root isOpen={isOpenModal} className="justify-end items-start">
      <Modal.Overlay />
      <Modal.Content className="bg-white shadow md:w-2/3 w-full h-full">
        <Modal.Header close={close}>
          <Modal.Title className="text-4xl font-semibold title-page" title="Adicionar música" />
        </Modal.Header>
        <Modal.Body>
          <form className="p-4 md:p-5" onSubmit={handleSubmit(createSong)}>
            <div className="flex flex-col">
              <Input
                label="Nome"
                icon={Music4Icon}
                placeholder="Nome da música"
                className="p-4"
                {...register('title')}
                error={errors.title}
              />

              <div className="mt-6">
                <h1 className="font-medium text-lg mb-4">Artistas</h1>
                <Controller
                  name="artists"
                  control={control}
                  render={({ field }) => (
                    <React.Fragment>
                      <Select
                        options={artists.map((artist) => {
                          return { label: artist.name, value: artist['@key'] }
                        })}
                        placeholder="escolha um artista"
                        className={`${errors.artists && 'border-2 rounded-lg border-error outline-none'}`}
                        styles={colourStyles}
                        isMulti={true}
                        {...field}
                      />
                      {!!errors.artists && (
                        <span className="text-sm text-error">{errors.artists.message}</span>
                      )}
                    </React.Fragment>
                  )}
                />
              </div>

              <div className="mt-6">
                <h1 className="font-medium text-lg mb-4">Album</h1>
                <Controller
                  name="album"
                  control={control}
                  render={({ field }) => (
                    <React.Fragment>
                      <Select
                        options={albuns.map((album) => {
                          return { label: album.title, value: album['@key'] }
                        })}
                        placeholder="escolha um album"
                        className={errors.album && 'border-2 rounded-lg border-error outline-none'}
                        styles={colourStyles}
                        isMulti={false}
                        {...field}
                      />
                      {!!errors.album && (
                        <span className="text-sm text-error">{errors.album.message}</span>
                      )}
                    </React.Fragment>
                  )}
                />
              </div>

              <fieldset className="flex flex-col gap-4 mt-6">
                <legend className="font-medium text-lg mb-4">Conteúdo explícto</legend>

                <label className="inline-flex items-center gap-4">
                  <Input type="radio" className="p-2" {...register('explicit')} value="true" />
                  <span className="text-lg">Contem palavrões</span>
                </label>

                <label className="inline-flex items-center gap-4">
                  <Input type="radio" className="p-2" {...register('explicit')} value="false" />
                  <span className="text-lg">Não Contem palavrões</span>
                </label>

                {!!errors.explicit && (
                  <span className="text-sm text-error">{errors.explicit.message}</span>
                )}
              </fieldset>
            </div>

            <div className="justify-end flex flex-row gap-4">
              <Button variant="outline" type="button" onClick={close}>
                Cancelar
              </Button>

              <Button type="submit" isLoading={isLoading} icon={Save}>
                Salvar
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}
