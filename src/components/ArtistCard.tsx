import Link from 'next/link'

import { CircleUserRound } from 'lucide-react'

import { IArtistPropsResponse } from '@/constants/payload/base'

interface IProps {
  artist: IArtistPropsResponse
}

export const ArtistCard = ({ artist }: IProps) => {
  return (
    <Link
      href={`artist/${artist['@key']}`}
      key={artist['@key']}
      className="flex flex-col items-center gap-6 p-6 h-60 w-52 bg-gray-100 hover:bg-gray-200 group rounded-lg transition-colors duration-150"
    >
      <div className="rounded-full bg-gray-200 group-hover:bg-gray-300 flex items-center justify-center h-32 w-32 transition-colors duration-150">
        <CircleUserRound className="h-1/2 w-1/2 group-hover:h-full" />
      </div>
      <span className="font-medium text-xl">{artist.name}</span>
    </Link>
  )
}
