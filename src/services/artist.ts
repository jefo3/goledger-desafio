import { pathSearch } from '@/constants/paths'
import { IListSong } from '@/constants/payload/list'

import { api } from './api'

const service = () => {
  const listArtists = async (limit?: number, skip?: number) => {
    try {
      const payload: IListSong = {
        query: { selector: { '@assetType': 'artist' }, limit, skip },
        resolve: true,
      }
      return await api.post(pathSearch, payload)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  const detailArtist = async (id: string) => {
    try {
      const payload: IListSong = {
        query: { selector: { '@assetType': 'artist', '@key': id } },
      }
      return await api.post(pathSearch, payload)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  return {
    listArtists,
    detailArtist,
  }
}

export const artistService = service()
