import * as z from 'zod'

export const createSongFormSchema = z.object({
  title: z.string().trim().min(3, 'precisa ser no minimo com 3 caracteres'),
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
  explicit: z.string({
    required_error: 'Selecione um valor',
    invalid_type_error: 'Selecione um valor',
  }),
})

export type createSongFormData = z.infer<typeof createSongFormSchema>
