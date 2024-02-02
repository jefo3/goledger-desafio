import create from 'zustand'

import { IArtistPropsResponse } from '@/constants/payload/base'

interface ArtistState {
  artists: IArtistPropsResponse[]
  handleArtists: () => Promise<void>
}

export const useArtistStore = create<ArtistState>((set, state) => ({
  artists: [],
  handleArtists: async () => {},
}))
