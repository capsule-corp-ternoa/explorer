import { gql } from "graphql-request"
import { apiDictionary } from './api'
import * as ethers from 'ethers';

const queryExtrinsicList = (offset: number, pageSize: number) => gql`
{
  extrinsics(
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
      blockId
      module
      call
      isSigned
      success
    }
  }
}
`

const queryExtrinsicCount  = () => gql`
{
  extrinsics {
    totalCount
  }
}
`

const queryExtrinsicSearch = (keyword: string) => gql`
{
  extrinsics(
    filter: {
      hash: { equalTo: "${keyword}" }
    }
  ) {
    nodes {
      id
    }
  }
}
`

const queryExtrinsic = (id: string) => gql`
{
  extrinsics(
    filter: {
      id: { equalTo: "${id}" }
    }
  ) {
    nodes {
      id
      blockId
      timestamp
      extrinsicIndex
      hash
      module
      call
      fees
      description {
        description
      }
      signer
      nonce
      signature
      success
      argsName
      argsValue
    }
  }
}
`

export const searchExtrinsic = async (keyword: string) => {
  const response = await apiDictionary(
    queryExtrinsicSearch(keyword)
  )
  return response.extrinsics.nodes
}

export const getExtrinsicList = async (offset: number, pageSize: number) => {
  const response = await apiDictionary(
    queryExtrinsicList(offset, pageSize)
  )

  return {
    totalCount: response.extrinsics.totalCount,
    hasNextPage : response.extrinsics.pageInfo.hasNextPage,
    hasPreviousPage : response.extrinsics.pageInfo.hasPreviousPage,
    data: response.extrinsics.nodes.map((item: any) => ({
      id: item.id,
      block_id: item.blockId,
      module: item.module,
      call: item.call,
      signed: item.isSigned,
      success: item.success
    }))
  }
}

export const getExtrinsicCount = async () => {
  const response = await apiDictionary(
    queryExtrinsicCount()
  )

  return response.extrinsics.totalCount
}

export const getExtrinsic = async (id: string) => {
  const extrinsicResponse = await apiDictionary(
    queryExtrinsic(id)
  )

  if (extrinsicResponse.extrinsics.nodes.length === 0) {
    return null
  } else {
    const data = extrinsicResponse.extrinsics.nodes[0]
    return {
      id: data.id,
      block_id: data.blockId,
      timestamp: data.timestamp,
      extrinsic_index: data.extrinsicIndex,
      hash: data.hash,
      module: data.module,
      call: data.call,
      fees: data.fees ? ethers.utils.formatEther(data.fees) : "",
      description: data.description.description,
      signer: data.signer,
      nonce: data.nonce,
      signature: data.signature,
      success: data.success,
      args_name: data.argsName,
      args_value: data.argsValue
    }
  }
}

export const getExtrinsicParams = async (id: string) => {
  const extrinsicResponse = await apiDictionary(
    queryExtrinsic(id)
  )

  if (extrinsicResponse.extrinsics.nodes.length === 0) {
    return null
  } else {
    const data = extrinsicResponse.extrinsics.nodes[0]
    return {
      args: data.argsName.map((item: string, index: number) => ({
        name: data.argsName[index],
        value: data.argsValue[index]
      }))
    }
  }
}
