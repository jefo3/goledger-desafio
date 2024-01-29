import { ICommumCreate, ISongPropsRequest } from './base'

export interface ICreateSong extends ICommumCreate<ISongPropsRequest> {
  asset: [
    {
      '@assetType': 'song'
    } & ISongPropsRequest,
  ]
}
