import { gql } from "graphql-request"
import request from './api'
import * as ethers from 'ethers';

const queryTransferList = (offset: number, pageSize: number) => gql`
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
      currency
    }
  }
}
`

const queryTransfer = (id: string) => gql`
{
  transferEntities(
    filter: {
      id: { equalTo: "${id}" }
    }
  ) {
    nodes {
      id
      blockId
      from
      to
      amount
      currency
    }
  }
}
`

export const getTransferList = async (offset: number, pageSize: number) => {
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
      amount: transfer.amount.length < 19 ? ethers.utils.formatEther(parseInt((parseInt(transfer.amount) / Math.pow(10, transfer.amount.length - 1)).toFixed(0))*Math.pow(10, transfer.amount.length - 1) + '') : ethers.utils.formatEther(transfer.amount),
      currency: transfer.currency,
    }))
  }
}

export const getTransfer = async (id: string) => {
  const transferResponse = await request(
    queryTransfer(id)
  )

  if (transferResponse.transferEntities.nodes.length === 0) {
    return null
  } else {
    const data = transferResponse.transferEntities.nodes[0]
    return {
      id: data.id,
      block_id: data.blockId,
      from: data.from,
      to: data.to,
      amount: data.amount.length < 19 ? ethers.utils.formatEther(parseInt((parseInt(data.amount) / Math.pow(10, data.amount.length - 1)).toFixed(0))*Math.pow(10, data.amount.length - 1) + '') : ethers.utils.formatEther(data.amount),
      currency: data.currency,
    }
  }
}
