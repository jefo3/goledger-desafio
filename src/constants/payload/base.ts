export type TAssetType = 'song' | 'playlist' | 'album' | 'artist'

export interface IPropsForReference {
  '@assetType': TAssetType
  '@key': string
}

interface IDefaultPropsResponse {
  '@assetType': TAssetType
  '@key': string
  '@lastTouchBy': string
  '@lastTx': string
}

export interface ISongPropsRequest {
  album: IPropsForReference
  artists: IPropsForReference[]
  explicit: boolean
  title: string
}

export interface ISongPropsResponse extends IDefaultPropsResponse {
  album: IAlbumPropsResponse
  artists: IArtistPropsResponse[]
  explicit: boolean
  title: string
}

export interface IAlbumPropsResponse extends IDefaultPropsResponse {
  artist: IArtistPropsResponse
  rating: number
  releaseDate: string
  title: string
}

export interface IArtistPropsResponse extends IDefaultPropsResponse {
  about: boolean
  name: string
}

export interface IPlaylistPropsResponse extends IDefaultPropsResponse {
  description: string
  name: string
  songs: ISongPropsResponse[]
}

export interface ICommumCreate<T> {
  asset: [
    {
      '@assetType': TAssetType
    } & T,
  ]
}

export interface ICommumList {
  query: {
    selector: {
      '@assetType': TAssetType
      '@key'?: string
    }
    limit?: number
    skip?: number
  }
  resolve?: boolean
}
