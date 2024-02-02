import React from 'react'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import Select from 'react-select'

import { zodResolver } from '@hookform/resolvers/zod'
import { Music4Icon, Save } from 'lucide-react'
import * as z from 'zod'

import { Button } from '../Button'
import { Input } from '../Input'
import { Modal } from '../Modal'

const createSongFormSchema = z.object({
  title: z.string().trim().min(6, 'precisa ser no minimo com 6 caracteres'),
  artists: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .array()
    .min(1, 'Selecione pelo menos 1 artista')
    .default([]),
  album: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .refine((album) => album.value, { message: 'Selecione um album' })
    .default({
      label: '',
      value: '',
    }),
  explicit: z
    .string()
    .nullable()
    .refine((explicit) => explicit === 'true' || explicit === 'false', {
      message: 'Selecione um valor',
    })
    .transform((explicit) => explicit === 'true'),
})

type createSongFormData = z.infer<typeof createSongFormSchema>

interface IPropsFormModal {
  closeModal: () => void
  isOpenModal: boolean
}

export const CreateSongFormModal = ({ closeModal, isOpenModal }: IPropsFormModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<createSongFormData>({
    resolver: zodResolver(createSongFormSchema),
  })

  const createSong = (data: FieldValues) => {
    console.log(data)
  }

  const colourStyles = {
    control: ({ ...props }) => ({
      ...props,
      with: '100%',
      borderColor: 'rgb(209 213 219)',
      borderWidth: '1px',
      borderRadius: '0.3rem',
      padding: '0.5rem',
      outline: 'none',
      boxShadow: 'none',
    }),
  }

  return (
    <Modal.Root isOpen={isOpenModal} className="justify-end items-start">
      <Modal.Overlay />
      <Modal.Content className="bg-white shadow md:w-2/3 w-full h-full">
        <Modal.Header close={closeModal}>
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
                        options={[
                          { label: '1', value: '22' },
                          { label: '2', value: '222' },
                          { label: '3', value: '322' },
                          { label: '4', value: '422' },
                          { label: '5', value: '522' },
                        ]}
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
                        options={[
                          { label: 'album 1', value: '22' },
                          { label: 'album2', value: '222' },
                          { label: 'album 3', value: '322' },
                          { label: 'album 4', value: '422' },
                          { label: 'album 5', value: '522' },
                        ]}
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
              <Button variant="outline" type="button" onClick={closeModal}>
                Cancelar
              </Button>

              <Button type="submit" isLoading={false} icon={Save}>
                Salvar
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}
