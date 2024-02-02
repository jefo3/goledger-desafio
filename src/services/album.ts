import { pathSearch } from '@/constants/paths'
import { IListAlbum } from '@/constants/payload/list'

import { api } from './api'

const service = () => {
  const listAlbuns = async ({ resolve = true }: { resolve?: boolean }) => {
    const payload: IListAlbum = { query: { selector: { '@assetType': 'album' } }, resolve }
    try {
      return await api.post(pathSearch, payload)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  const detailAlbum = async ({ id }: { id: string }) => {
    try {
      const payload: IListAlbum = {
        query: { selector: { '@assetType': 'album', '@key': id } },
      }
      return await api.post(pathSearch, payload)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  return {
    listAlbuns,
    detailAlbum,
  }
}

export const albumService = service()
