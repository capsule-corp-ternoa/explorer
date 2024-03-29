import { gql } from "graphql-request"
import { apiDictionary } from './api'

const queryEventList = (offset: number, pageSize: number) => gql`
{
  events(
    first: ${pageSize}
    offset: ${offset}
    orderBy: [BLOCK_HEIGHT_DESC, EVENT_INDEX_DESC]
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
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

const queryEventsListByAccount = (id: string, offset: number, pageSize: number) => gql`
  {
    events(
      first: ${pageSize}
      offset: ${offset}
      orderBy: [BLOCK_HEIGHT_DESC, EVENT_INDEX_DESC]
      filter: {
        and: [
          { argsValue: { contains: "${id}"  } }
        ]
      }
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        nodeId
        id
        module
        call
        blockId
        eventIndex
        extrinsicId
        block {
          timestamp
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
    orderBy: [BLOCK_HEIGHT_DESC, EVENT_INDEX_DESC]
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
    orderBy: [BLOCK_HEIGHT_DESC, EVENT_INDEX_DESC]
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
    orderBy: [BLOCK_HEIGHT_DESC, EVENT_INDEX_DESC]
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
      hash: item.extrinsicId ? (await apiDictionary(queryExtrinsic(item.extrinsicId))).extrinsics.nodes[0].hash : "System event",
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
      hash: item.extrinsicId ? (await apiDictionary(queryExtrinsic(item.extrinsicId))).extrinsics.nodes[0].hash : "System event",
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
    hasNextPage : response.events.pageInfo.hasNextPage,
    hasPreviousPage : response.events.pageInfo.hasPreviousPage,
    data: await Promise.all<any>(response.events.nodes.map(async (item: any) => ({
      id: item.id,
      blockId: item.blockId,
      age: (ms - new Date(item.block.timestamp).getTime()) / 1000,
      hash: item.extrinsicId ? (await apiDictionary(queryExtrinsic(item.extrinsicId))).extrinsics.nodes[0].hash : "System event",
      action: item.module + '(' + item.call + ')'
    })))
  }
}

export const getEventsListByAccount = async (id: string, offset: number, pageSize: number) => {
  const response = await apiDictionary(
    queryEventsListByAccount(id, offset, pageSize)
  )

  let now = new Date();
  let ms = now.getTime()+ (now.getTimezoneOffset() * 60000);
  
  return {
    totalCount: response.events.totalCount,
    hasNextPage : response.events.pageInfo.hasNextPage,
    hasPreviousPage : response.events.pageInfo.hasPreviousPage,
    data: await Promise.all<any>(response.events.nodes.map(async (item: any) => ({
      id: item.id,
      blockId: item.blockId,
      age: (ms - new Date(item.block.timestamp).getTime()) / 1000,
      hash: item.extrinsicId ? (await apiDictionary(queryExtrinsic(item.extrinsicId))).extrinsics.nodes[0].hash : "System event",
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
