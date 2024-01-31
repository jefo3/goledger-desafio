import { tv } from 'tailwind-variants'

import { getRandomColor } from '@/utils'

import { IPlaylistPropsResponse } from '@/constants/payload/base'

interface IProps {
  playlist: IPlaylistPropsResponse
}

const playlistCard = tv({
  base: 'w-full p-4 rounded-lg h-24',
  variants: {
    bgColor: {
      red: 'bg-red-400',
      blue: 'bg-blue-400',
      green: 'bg-green-400',
      indigo: 'bg-indigo-400',
      purple: 'bg-purple-400',
      teal: 'bg-teal-400',
    },
  },
})

export const PlaylistCard = ({ playlist }: IProps) => {
  const colorSelected = getRandomColor()
  return (
    <div className={playlistCard({ bgColor: colorSelected })}>
      <span className="text-xl text-white font-medium">{playlist.name}</span>
    </div>
  )
}
