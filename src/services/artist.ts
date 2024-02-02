import { pathSearch } from '@/constants/paths'
import { IListArtist } from '@/constants/payload/list'

import { api } from './api'

interface IPropsSearch {
  limit?: number
  skip?: number
  resolve?: boolean
}

const service = () => {
  const listArtists = async ({ limit, skip, resolve = true }: IPropsSearch) => {
    try {
      const payload: IListArtist = {
        query: { selector: { '@assetType': 'artist' }, limit, skip },
        resolve,
      }
      return await api.post(pathSearch, payload)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  const detailArtist = async ({ id }: { id: string }) => {
    try {
      const payload: IListArtist = {
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
