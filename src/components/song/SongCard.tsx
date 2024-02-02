import { PlayCircle } from 'lucide-react'

import { formateArtists } from '@/utils'

import { ISongPropsResponse } from '@/constants/payload/base'

import { SpecificityAlbum } from '../Album/SpecificityAlbum'
import { ExplicitIcon } from '../icons/ExplicitIcon'

interface IProps {
  song: ISongPropsResponse
}

export const SongCard = ({ song }: IProps) => {
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
          <div className="inline-flex items-center w-full gap-2 text-3xl font-medium text-primary-base">
            <span>{song.title}</span>
            {song.explicit && <ExplicitIcon />}
          </div>

          <div>
            por{' '}
            <span className="text-zinc-700 font-medium">
              {formateArtists({ artists: song.artists, separetor: '|' })}
            </span>
          </div>
        </header>

        <SpecificityAlbum album={song.album} />
      </section>
    </article>
  )
}
