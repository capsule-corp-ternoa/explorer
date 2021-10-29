import { gql } from "graphql-request"
import request from './api'
import { API_PAGE_SIZE } from 'helpers/constants'
import { BlockIndexProps } from "pages/block/BlockIndex"

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
