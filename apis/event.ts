import { gql } from "graphql-request"
import request from './api'

const queryEventList = (offset: number, pageSize: number) => gql`
{
  eventEntities(
    first: ${pageSize}
    offset: ${offset}
    orderBy: CREATED_AT_DESC
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

const queryEventCount  = () => gql`
{
  eventEntities {
    totalCount
  }
}
`

const queryEventSearchbyBlock = (keyword: string) => gql`
{
  eventEntities(
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
  eventEntities(
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
  eventEntities(
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

export const searchEventbyBlock = async (keyword: string) => {
  const response = await request(
    queryEventSearchbyBlock(keyword)
  )
  
  let now = new Date();
  let ms = now.getTime()+ (now.getTimezoneOffset() * 60000);
  
  return {
    totalCount: response.eventEntities.nodes.length,
    data: await Promise.all(response.eventEntities.nodes.map(async (item: any) => ({
      id: item.id,
      blockId: item.blockId,
      age: (ms - new Date(item.block.timestamp).getTime()) / 1000,
      hash: (await request(queryExtrinsic(item.extrinsicId))).extrinsicEntities.nodes[0].hash,
      action: item.module + '(' + item.call + ')'
    })))
  }
}

export const searchEventbyExtrinsic = async (keyword: string) => {
  const response = await request(
    queryEventSearchbyExtrinsic(keyword)
  )
  
  let now = new Date();
  let ms = now.getTime()+ (now.getTimezoneOffset() * 60000);
  
  return {
    totalCount: response.eventEntities.nodes.length,
    data: await Promise.all(response.eventEntities.nodes.map(async (item: any) => ({
      id: item.id,
      blockId: item.blockId,
      age: (ms - new Date(item.block.timestamp).getTime()) / 1000,
      hash: (await request(queryExtrinsic(item.extrinsicId))).extrinsicEntities.nodes[0].hash,
      action: item.module + '(' + item.call + ')'
    })))
  }
}

export const getEventList = async (offset: number, pageSize: number) => {
  const response = await request(
    queryEventList(offset, pageSize)
  )

  let now = new Date();
  let ms = now.getTime()+ (now.getTimezoneOffset() * 60000);
  
  return {
    totalCount: response.eventEntities.totalCount,
    hasNextPage : response.eventEntities.pageInfo.hasNextPage,
    hasPreviousPage : response.eventEntities.pageInfo.hasPreviousPage,
    data: await Promise.all<any>(response.eventEntities.nodes.map(async (item: any) => ({
      id: item.id,
      blockId: item.blockId,
      age: (ms - new Date(item.block.timestamp).getTime()) / 1000,
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
