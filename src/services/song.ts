import { pathCreate, pathSearch } from '@/constants/paths'
import { ISongPropsRequest } from '@/constants/payload/base'
import { ICreateSong } from '@/constants/payload/create'
import { IListSong } from '@/constants/payload/list'

import { api } from './api'

const service = () => {
  const createSong = async (data: ISongPropsRequest) => {
    try {
      const payload: ICreateSong = {
        asset: [
          {
            '@assetType': 'song',
            ...data,
          },
        ],
      }

      return await api.post(pathCreate, payload)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  const listSongs = async (limit?: number, skip?: number) => {
    try {
      const payload: IListSong = {
        query: { selector: { '@assetType': 'song' }, limit, skip },
        resolve: true,
      }
      return await api.post(pathSearch, payload)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  return {
    createSong,
    listSongs,
  }
}

export const songService = service()
