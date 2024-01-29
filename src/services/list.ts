import { IListSong } from '@/constants/payload/list'

import { api } from './api'

const service = () => {
  const resource = '/query/search'

  const listSongs = async (limit?: number, skip?: number) => {
    try {
      const payload: IListSong = {
        query: { selector: { '@assetType': 'song' }, limit, skip },
        resolve: true,
      }
      return await api.post(resource, payload)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  return {
    listSongs,
  }
}

export const listService = service()
