import { gql } from "graphql-request"
import { apiIndexer, apiDictionary } from './api'
import * as ethers from 'ethers';

const queryNftTransferList = (offset: number, pageSize: number) => gql`
{
  nftTransferEntities(
    first: ${pageSize}
    offset: ${offset}
    orderBy: TIMESTAMP_DESC
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      timestamp
      from
      to
      extrinsicId
      amount
      nft {
        id
        creator
      }
    }
  }
}
`

const queryNftTransferSearch = (keyword: string) => gql`
{
  nftTransferEntities(
    filter: {
      nftId: { equalTo: "${keyword}" }
    }
  ) {
    nodes {
      id
    }
  }
}
`

const queryNftTransferChart = (keyword: string) => gql`
{
  nftTransferEntities(
    filter: {
      timestamp: { greaterThan: "2021-11-01T00:00:00" }
    }
    orderBy: TIMESTAMP_DESC
  ) {
    nodes {
      id
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
      extrinsicId
      amount
      typeOfTransaction
      nft {
        id
        creator
      }
    }
  }
}
`

const queryExtrinsicFees = (id: string) => gql`
{
  extrinsics(
    filter: {
      id: { equalTo: "${id}" }
    }
  ) {
    nodes {
      fees
    }
  }
}
`

export const searchNftTransfer = async (keyword: string) => {
  const response = await apiIndexer(
    queryNftTransferSearch(keyword)
  )
  return response.nftTransferEntities.nodes
}

export const getNftTransferList = async (offset: number, pageSize: number) => {
  const transferResponse = await apiIndexer(
    queryNftTransferList(offset, pageSize)
  )
  return {
    totalCount: transferResponse.nftTransferEntities.totalCount,
    hasNextPage : transferResponse.nftTransferEntities.pageInfo.hasNextPage,
    hasPreviousPage : transferResponse.nftTransferEntities.pageInfo.hasPreviousPage,
    data: transferResponse.nftTransferEntities.nodes.map((transfer: any) => ({
      id: transfer.id,
      timestamp: transfer.timestamp,
      from: transfer.from,
      to: transfer.to,
      amount: ethers.utils.formatEther(transfer.amount),
      nft_id: transfer.nft.id,
      extrinsic_id: transfer.extrinsicId,
      creator: transfer.nft.creator,
    }))
  }
}

export const getNftTransferChart = async () => {
  const transferResponse = await apiIndexer(
    queryNftTransferChart("")
  )
  return {
    totalCount: transferResponse.nftTransferEntities.totalCount,
    data: transferResponse.nftTransferEntities.nodes.map((transfer: any) => ({
      id: transfer.id,
      timestamp: transfer.timestamp,
      from: transfer.from,
      to: transfer.to,
      amount: ethers.utils.formatEther(transfer.amount),
      nft_id: transfer.nft.id,
      extrinsic_id: transfer.extrinsicId,
      creator: transfer.nft.creator,
    }))
  }
}

export const getNftTransfer = async (id: string) => {
  const transferResponse = await apiIndexer(
    queryNftTransfer(id)
  )

  if (transferResponse.nftTransferEntities.nodes.length === 0) {
    return null
  } else {
    const data = transferResponse.nftTransferEntities.nodes[0]
    const extrinsicResponse = await apiDictionary(
      queryExtrinsicFees(data.extrinsicId)
    )
    const dataExtrinsic = extrinsicResponse.extrinsics.nodes.length > 0 ? extrinsicResponse.extrinsics.nodes[0] : null
    return {
      id: data.id,
      timestamp: data.timestamp,
      from: data.from,
      to: data.to,
      amount: ethers.utils.formatEther(data.amount),
      extrinsic_type: data.typeOfTransaction,
      nft_id: data.nft.id,
      extrinsic_id: data.extrinsicId,
      creator: data.nft.creator,
      fees: dataExtrinsic ? ethers.utils.formatEther(dataExtrinsic.fees) : "0",
      uri: data.id
    }
  }
}
