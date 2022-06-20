export interface IExtrinsic {
  id: string
  argsValue: string[]
  blockId: string
  call: string
  extrinsicIndex: number
  fees: string
  hash: `0x${string}`
  signer: string
  success: boolean
  timestamp: string
}

export interface INft {
  id: string
  nftId: string
  collectionId: string
  owner: string
  creator: string
  offchainData: string
  royalty: string
  mintFee: string
  mintFeeRounded: string
  isCapsule: boolean
  listedForSale: boolean
  isSecret: boolean
  delegatee: string
  isDelegated: boolean
  isSoulbound: boolean
  createdAt: string
  updatedAt: string
  timestampCreate: string
  timestampBurn: string
  timestampList: string
}

export interface INftOperation {
  id: string
  blockId: string
  extrinsicId: string
  from: string
  to: string
  nft: INft
  timestamp: string
  typeOfTransaction: string
}

export interface IExtrinsicsResponse {
  extrinsics: {
    totalCount: number
    nodes: IExtrinsic[]
  }
}

export interface INftOperationsResponse {
  nftOperationEntities: {
    nodes: INftOperation[]
    pageInfo: {
      hasNextPage: boolean
      hasPreviousPage: boolean
    }
    totalCount: number
  }
}