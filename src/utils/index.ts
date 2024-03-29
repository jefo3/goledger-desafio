import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { IArtistPropsResponse } from '@/constants/payload/base'

export const dateFormatted = (date: string): string => {
  if (!date) return ''

  const dateFormatted = format(date, "MMMM 'de' yyyy", { locale: ptBR })

  return dateFormatted
}

interface IPropsFormatArtists {
  separetor: string
  artists: IArtistPropsResponse[]
}

export const formateArtists = ({ artists, separetor = ',' }: IPropsFormatArtists) => {
  const artistsName = artists.map((artist) => artist.name)
  const artistFormatted = artistsName.join(` ${separetor} `)
  return artistFormatted
}

export type TColors = 'red' | 'blue' | 'green' | 'indigo' | 'purple' | 'teal'

export const getRandomColor = (): TColors => {
  const availableColors: TColors[] = ['red', 'blue', 'green', 'indigo', 'purple', 'teal']
  const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)]

  return randomColor
}
