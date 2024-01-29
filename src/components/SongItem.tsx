import { Clock5, PlayCircle, Star } from 'lucide-react'

import { dateFormatted, formateArtists } from '@/utils'

import { ISongPropsResponse } from '@/constants/payload/base'

interface IProps {
  song: ISongPropsResponse
}

export const SongItem = ({ song }: IProps) => {
  return (
    <article
      key={song['@key']}
      className="group flex h-48 w-full overflow-hidden rounded-2xl text-gray-500 border border-gray-200"
    >
      <div className="w-1/3 flex h-full items-center justify-center bg-gray-50">
        <PlayCircle
          size={46}
          className="cursor-pointer text-black transition-all hover:text-secundary-base"
        />
      </div>

      <section className="flex flex-col justify-between p-4">
        <header className="space-y-1">
          <div className="text-3xl font-medium text-primary-base">{song.title}</div>
          <div>
            by{' '}
            <span className="text-zinc-700 font-medium">
              {formateArtists({ artists: song.artists, separetor: '|' })}
            </span>
          </div>
        </header>

        <div className="invisible flex gap-5 opacity-0 transition-all text-gray-500 group-hover:visible group-hover:opacity-100">
          <span className="flex items-center gap-1">
            <Star size={20} />
            <span>{song.album.rating}</span>
          </span>

          <span className="flex items-center gap-2">
            <Clock5 size={20} />
            <span>{dateFormatted(song.album.releaseDate)}</span>
          </span>
        </div>
      </section>
    </article>
  )
}
