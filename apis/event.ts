import { gql } from "graphql-request"
import request from './api'
import { API_PAGE_SIZE } from 'helpers/constants'
import { blockColumns } from "pages/home-scan/table"
import { blockFields } from "pages/block/[id]/table"

const queryEventList = (offset: number, pageSize: number = API_PAGE_SIZE) => gql`
{
  eventEntities(
    first: ${pageSize}
    offset: ${offset}
    filter: {
      and: [
      ]
    }
  ) {
    totalCount
    nodes {
      id
      blockId
      extrinsicId
      eventIndex
      module
      call
      description
      argsName
      argsValue
      block{
        timestamp
        id
        number
        hash
      }
    }
  }
}
`

const queryEventCount  = () => gql`
{
  eventEntities {
    totalCount
  }
}
`

const queryEventSearch = (keyword: string) => gql`
{
  eventEntities(
    filter: {
      blockId: { equalTo: "${keyword}" }
    }
  ) {
    nodes {
      id
    }
  }
}
`

const queryEvent = (id: string) => gql`
{
  eventEntities(
    filter: {
      id: { equalTo: "${id}" }
    }
  ) {
    nodes {
      id
      blockId
      extrinsicId
      eventIndex
      module
      call
      description
      argsName
      argsValue
    }
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
      hash
    }
  }
}
`

export const searchEvent = async (keyword: string) => {
  const response = await request(
    queryEventSearch(keyword)
  )
  return response.eventEntities.nodes
}

export const getEventList = async (offset: number, pageSize: number = API_PAGE_SIZE) => {
  const response = await request(
    queryEventList(offset, pageSize)
  )

  const now = Date.now()
  
  return {
    totalCount: response.eventEntities.totalCount,
    data: await Promise.all(response.eventEntities.nodes.map(async (item: any) => ({
      id: item.id,
      blockId: item.blockId,
      age: (now - new Date(item.block.timestamp).getTime()) / 1000,
      hash: (await request(queryExtrinsic(item.extrinsicId))).extrinsicEntities.nodes[0].hash,
      action: item.module + '(' + item.call + ')'
    })))
  }
}

export const getEventCount = async () => {
  const response = await request(
    queryEventCount()
  )

  return response.eventEntities.totalCount
}

export const getEvent = async (id: string) => {
  const extrinsicResponse = await request(
    queryEvent(id)
  )

  if (extrinsicResponse.eventEntities.nodes.length === 0) {
    return null
  } else {
    const data = extrinsicResponse.eventEntities.nodes[0]
    // console.log(JSON.parse(data.args_value))
    return {
      id: data.id,
      block_id: data.blockId,
      timestamp: data.timestamp,
      extrinsic_index: data.extrinsicIndex,
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
