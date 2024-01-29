import { ISongPropsRequest } from '@/constants/payload/base'
import { ICreateSong } from '@/constants/payload/create'

import { api } from './api'

export const createService = () => {
  const resource = '/invoke/createAsset'

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

      return await api.post(resource, payload)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  return {
    createSong,
  }
}
