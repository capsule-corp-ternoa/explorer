import { gql } from "graphql-request"
import { apiDictionary } from './api'

const queryEventList = (offset: number, pageSize: number) => gql`
{
  events(
    first: ${pageSize}
    offset: ${offset}
    filter: {
      and: [
      ]
    }
    orderBy: [BLOCK_HEIGHT_DESC, EVENT_INDEX_DESC]
  ) {
    totalCount
    nodes {
      id
      blockId
      extrinsicId
      eventIndex
      module
      call
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
  events {
    totalCount
  }
}
`

const queryEventSearchbyBlock = (keyword: string) => gql`
{
  events(
    filter: {
      blockId: { equalTo: "${keyword}" }
    }
    orderBy: CREATED_AT_DESC
  ) {
    nodes {
      id
      blockId
      extrinsicId
      eventIndex
      module
      call
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
const queryEventSearchbyExtrinsic = (keyword: string) => gql`
{
  events(
    filter: {
      extrinsicId: { equalTo: "${keyword}" }
    }
    orderBy: CREATED_AT_DESC
  ) {
    nodes {
      id
      blockId
      extrinsicId
      eventIndex
      module
      call
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

const queryEvent = (id: string) => gql`
{
  events(
    filter: {
      id: { equalTo: "${id}" }
    }
    orderBy: CREATED_AT_DESC
  ) {
    nodes {
      id
      blockId
      extrinsicId
      eventIndex
      module
      call
      description {
        description
      }
      argsName
      argsValue
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
      hash
    }
  }
}
`

export const searchEventbyBlock = async (keyword: string) => {
  const response = await apiDictionary(
    queryEventSearchbyBlock(keyword)
  )
  
  let now = new Date();
  let ms = now.getTime()+ (now.getTimezoneOffset() * 60000);
  
  return {
    totalCount: response.events.nodes.length,
    data: await Promise.all(response.events.nodes.map(async (item: any) => ({
      id: item.id,
      blockId: item.blockId,
      age: (ms - new Date(item.block.timestamp).getTime()) / 1000,
      hash: (await apiDictionary(queryExtrinsic(item.extrinsicId))).extrinsics.nodes[0].hash,
      action: item.module + '(' + item.call + ')'
    })))
  }
}

export const searchEventbyExtrinsic = async (keyword: string) => {
  const response = await apiDictionary(
    queryEventSearchbyExtrinsic(keyword)
  )
  
  let now = new Date();
  let ms = now.getTime()+ (now.getTimezoneOffset() * 60000);
  
  return {
    totalCount: response.events.nodes.length,
    data: await Promise.all(response.events.nodes.map(async (item: any) => ({
      id: item.id,
      blockId: item.blockId,
      age: (ms - new Date(item.block.timestamp).getTime()) / 1000,
      hash: (await apiDictionary(queryExtrinsic(item.extrinsicId))).extrinsics.nodes[0].hash,
      action: item.module + '(' + item.call + ')'
    })))
  }
}

export const getEventList = async (offset: number, pageSize: number) => {
  const response = await apiDictionary(
    queryEventList(offset, pageSize)
  )

  let now = new Date();
  let ms = now.getTime()+ (now.getTimezoneOffset() * 60000);
  
  return {
    totalCount: response.events.totalCount,
    data: await Promise.all<any>(response.events.nodes.map(async (item: any) => ({
      id: item.id,
      blockId: item.blockId,
      age: (ms - new Date(item.block.timestamp).getTime()) / 1000,
      hash: (await apiDictionary(queryExtrinsic(item.extrinsicId))).extrinsics.nodes[0].hash,
      action: item.module + '(' + item.call + ')'
    })))
  }
}

export const getEventCount = async () => {
  const response = await apiDictionary(
    queryEventCount()
  )

  return response.events.totalCount
}

export const getEvent = async (id: string) => {
  const extrinsicResponse = await apiDictionary(
    queryEvent(id)
  )

  if (extrinsicResponse.events.nodes.length === 0) {
    return null
  } else {
    const data = extrinsicResponse.events.nodes[0]
    return {
      id: data.id,
      block_id: data.blockId,
      extrinsic_index: data.extrinsicId,
      event_index: data.eventIndex,
      module: data.module,
      call: data.call,
      description: data.description.description,
      args_name: data.argsName,
      args_value: data.argsValue
    }
  }
}
