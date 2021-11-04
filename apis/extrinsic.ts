import { gql } from "graphql-request"
import request from './api'
import { API_PAGE_SIZE } from 'helpers/constants'

const queryExtrinsicList = (offset: number, pageSize: number = API_PAGE_SIZE) => gql`
{
  extrinsicEntities(
    first: ${pageSize}
    offset: ${offset}
    orderBy: TIMESTAMP_DESC
  ) {
    totalCount
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
  extrinsicEntities {
    totalCount
  }
}
`

const queryExtrinsic = (id: string) => gql`
{
  extrinsicEntities(
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
      description
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

export const getExtrinsicList = async (offset: number, pageSize: number = API_PAGE_SIZE) => {
  const response = await request(
    queryExtrinsicList(offset, pageSize)
  )

  return {
    totalCount: response.extrinsicEntities.totalCount,
    data: response.extrinsicEntities.nodes.map((item: any) => ({
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
  const response = await request(
    queryExtrinsicCount()
  )

  return response.extrinsicEntities.totalCount
}

export const getExtrinsic = async (id: string) => {
  const extrinsicResponse = await request(
    queryExtrinsic(id)
  )

  if (extrinsicResponse.extrinsicEntities.nodes.length === 0) {
    return null
  } else {
    const data = extrinsicResponse.extrinsicEntities.nodes[0]
    // console.log(JSON.parse(data.args_value))
    return {
      id: data.id,
      block_id: data.blockId,
      timestamp: data.timestamp,
      transaction_index: data.extrinsicIndex,
      hash: data.hash,
      module: data.module,
      call: data.call,
      description: data.description,
      signer: data.signer,
      nonce: data.nonce,
      signature: data.signature,
      success: data.success,
      args_name: data.argsName,
      args_value: data.artgsValue
    }
  }
}
