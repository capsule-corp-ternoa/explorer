import { gql } from "graphql-request"
import request from './api'
import { API_PAGE_SIZE } from 'helpers/constants'

const queryTransferList = (offset: number, pageSize: number = API_PAGE_SIZE) => gql`
{
  transferEntities(
    first: ${pageSize}
    offset: ${offset}
    orderBy: TIMESTAMP_DESC
  ) {
    totalCount
    nodes {
      id
      blockId
      from
      to
      amount
    }
  }
}
`

export const getTransferList = async (offset: number, pageSize: number = API_PAGE_SIZE) => {
  const transferResponse = await request(
    queryTransferList(offset, pageSize)
  )
    
  return {
    totalCount: transferResponse.transferEntities.totalCount,
    data: transferResponse.transferEntities.nodes.map((transfer: any) => ({
      id: transfer.id,
      block_id: transfer.blockId,
      from: transfer.from,
      to: transfer.to,
      amount: transfer.amount
    }))
  }
}
