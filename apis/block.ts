import { gql } from "graphql-request"
import request from './api'
import { API_PAGE_SIZE } from 'helpers/constants'

const queryBlockList = (offset: number, pageSize: number = API_PAGE_SIZE) => gql`
{
  blockEntities(
    first: ${pageSize}
    offset: ${offset}
    orderBy: TIMESTAMP_DESC
  ) {
    totalCount
    nodes {
      id
      number
      hash
      timestamp
      extrinsicEntitiesByBlockId {
        totalCount
        nodes {
          nbEvents
        }
      }
    }
  }
}
`

const queryBlockCount = () => gql`
{
  blockEntities {
    totalCount
  }
}
`

const queryBlockSearch = (keyword: string) => gql`
{
  blockEntities(
    filter: {
      number: { equalTo: ${Number(keyword)} }
    }
  ) {
    nodes {
      number
    }
  }
}
`

const queryBlock = (id: string) => gql`
{
  blockEntities(
    filter: {
      id: { equalTo: "${id}" }
    }
  ) {
    nodes {
      id
      timestamp
      hash
      parentHash
      stateRoot
      extrinsicsRoot
      sessionId
      author
      runtimeVersion
      extrinsicEntitiesByBlockId {
        totalCount
        nodes {
          id
          nbEvents
          signer
          module
          call
          success
        }
      }
    }
  }
}
`

export const searchBlock = async (keyword: string) => {
  if (Number(keyword).toString(10) !== keyword) {
    return []
  }

  const response = await request(
    queryBlockSearch(keyword)
  )
  return response.blockEntities.nodes
}

export const getBlockCount = async () => {
  const response = await request(
    queryBlockCount()
  )
  return response.blockEntities.totalCount
}

export const getBlockList = async (offset: number, pageSize: number = API_PAGE_SIZE) => {
  const blocks = await request(
    queryBlockList(offset, pageSize)
  )
    
  const now = Date.now()

  return {
    totalCount: blocks.blockEntities.totalCount,
    data: blocks.blockEntities.nodes.map((block: any) => ({
      number: block.number,
      block_hash: block.hash,
      age: (now - new Date(block.timestamp).getTime()) / 1000,
      signed_extrinsics: block.extrinsicEntitiesByBlockId.totalCount,
      module_events: block.extrinsicEntitiesByBlockId.nodes.reduce((sum: number, x: any) => sum + x.nbEvents, 0)
    }))
  }
}

export const getBlock = async (id: string) => {
  const blockResponse = await request(
    queryBlock(id)
  )

  if (blockResponse.blockEntities.nodes.length === 0) {
    return null
  } else {
    const block = blockResponse.blockEntities.nodes[0]
    const now = Date.now()
  
    return {
      timestamp: block.timestamp,
      block_hash: block.hash,
      parent_hash: block.parentHash,
      state_root: block.stateRoot,
      extrinsics_root: block.extrinsicsRoot,
      transactions: block.extrinsicEntitiesByBlockId.totalCount,
      module_events: block.extrinsicEntitiesByBlockId.nodes.reduce((sum: number, x: any) => sum + x.nbEvents, 0),
      runtime_version: block.runtimeVersion,
      author: block.author,
      session_id: block.sessionId,
      age: (now - new Date(block.timestamp).getTime()) / 1000,
      transaction_detail: block.extrinsicEntitiesByBlockId.nodes.map((tx: any) => ({
        id: tx.id,
        block_id: id,
        from: tx.signer,
        module: tx.module,
        call: tx.call,
        success: tx.success
      }))
    }
  }
}
