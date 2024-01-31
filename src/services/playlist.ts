import { pathSearch } from '@/constants/paths'
import { IListPlaylist } from '@/constants/payload/list'

import { api } from './api'

const service = () => {
  const listPlaylists = async () => {
    const payload: IListPlaylist = {
      query: { selector: { '@assetType': 'playlist' } },
      resolve: true,
    }
    try {
      return await api.post(pathSearch, payload)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  const detailPlaylist = async (id: string) => {
    try {
      const payload: IListPlaylist = {
        query: { selector: { '@assetType': 'playlist', '@key': id } },
      }
      return await api.post(pathSearch, payload)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  return {
    listPlaylists,
    detailPlaylist,
  }
}

export const playlistService = service()
