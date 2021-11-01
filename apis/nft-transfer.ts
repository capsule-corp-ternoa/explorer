import { gql } from "graphql-request"
import request from './api'
import { API_PAGE_SIZE } from 'helpers/constants'

const queryNftTransferList = (offset: number, pageSize: number = API_PAGE_SIZE) => gql`
{
  nftTransferEntities(
    first: ${pageSize}
    offset: ${offset}
    orderBy: TIMESTAMP_DESC
  ) {
    totalCount
    nodes {
      id
      timestamp
      from
      to
      amount
      nft {
        id
      }
    }
  }
}
`

// minting contract, nft asset address, quantity missing
const queryNftTransfer = (id: string) => gql`
{
  nftTransferEntities(
    filter: {
      id: { equalTo: "${id}" }
    }
  ) {
    nodes {
      id
      timestamp
      from
      to
      amount
      typeOfTransaction
      nft {
        id
        creator
        uri
      }
    }
  }
}
`

export const getNftTransferList = async (offset: number, pageSize: number = API_PAGE_SIZE) => {
  const transferResponse = await request(
    queryNftTransferList(offset, pageSize)
  )
    
  return {
    totalCount: transferResponse.nftTransferEntities.totalCount,
    data: transferResponse.nftTransferEntities.nodes.map((transfer: any) => ({
      id: transfer.id,
      timestamp: transfer.timestamp,
      from: transfer.from,
      to: transfer.to,
      amount: transfer.amount,
      nft_id: transfer.nft.id
    }))
  }
}

export const getNftTransfer = async (id: string) => {
  const transferResponse = await request(
    queryNftTransfer(id)
  )

  if (transferResponse.nftTransferEntities.nodes.length === 0) {
    return null
  } else {
    const data = transferResponse.nftTransferEntities.nodes[0]
    return {
      id: data.id,
      timestamp: data.timestamp,
      from: data.from,
      to: data.to,
      amount: data.amount,
      transaction_type: data.typeOfTransaction,
      nft_id: data.nft.id,
      creator: data.nft.creator,
      uri: data.nft.uri
    }
  }
}
