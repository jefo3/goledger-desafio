import { Clock5, Star } from 'lucide-react'

import { dateFormatted } from '@/utils'

import { IProps } from './AlbumCard'

export const SpecificityAlbum = ({ album }: IProps) => (
  <div className="invisible flex gap-5 justify-around opacity-0 transition-all text-gray-500 group-hover:visible group-hover:opacity-100">
    <span className="flex items-center gap-1">
      <Star size={20} />
      <span>{album.rating}</span>
    </span>

    <span className="flex items-center gap-2">
      <Clock5 size={20} />
      <span>{dateFormatted(album.releaseDate)}</span>
    </span>
  </div>
)
