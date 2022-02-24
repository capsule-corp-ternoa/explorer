import { gql } from "graphql-request"
import { apiDictionary } from './api'

const queryBlockList = (offset: number, pageSize: number) => gql`
{
  blocks(
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
      number
      hash
      timestamp
      extrinsics {
        totalCount
        nodes {
          nbEvents
        }
      }
    }
  }
}
`

const queryBlockSearch = (keyword: string) => gql`
{
  blocks(
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
  blocks(
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
      extrinsics {
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
  const response = await apiDictionary(
    queryBlockSearch(keyword)
  )
  return response.blocks.nodes
}

export const getBlockList = async (offset: number, pageSize: number) => {
  const blocks = await apiDictionary(
    queryBlockList(offset, pageSize)
  )
  let now = new Date();
  let ms = now.getTime()+ (now.getTimezoneOffset() * 60000);
  return {
    totalCount: blocks.blocks.totalCount,
    hasNextPage : blocks.blocks.pageInfo.hasNextPage,
    hasPreviousPage : blocks.blocks.pageInfo.hasPreviousPage,
    data: blocks.blocks.nodes.map((block: any) => ({
      number: block.number,
      block_hash: block.hash,
      age: (ms - new Date(block.timestamp).getTime()) / 1000,
      signed_extrinsics: block.extrinsics.totalCount,
      module_events: block.extrinsics.nodes.reduce((sum: number, x: any) => sum + x.nbEvents, 0)
    }))
  }
}

export const getBlock = async (id: string) => {
  const blockResponse = await apiDictionary(
    queryBlock(id)
  )

  if (blockResponse.blocks.nodes.length === 0) {
    return null
  } else {
    const block = blockResponse.blocks.nodes[0]
    let now = new Date();
    let ms = now.getTime()+ (now.getTimezoneOffset() * 60000);
  
    return {
      timestamp: block.timestamp,
      block_hash: block.hash,
      parent_hash: block.parentHash,
      state_root: block.stateRoot,
      extrinsics_root: block.extrinsicsRoot,
      extrinsics: block.extrinsics.totalCount,
      module_events: block.extrinsics.nodes.reduce((sum: number, x: any) => sum + x.nbEvents, 0),
      runtime_version: block.runtimeVersion,
      author: block.author,
      session_id: block.sessionId,
      age: (ms - new Date(block.timestamp).getTime()) / 1000,
      extrinsic_detail: block.extrinsics.nodes.map((tx: any) => ({
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
