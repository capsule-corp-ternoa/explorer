import { gql } from "graphql-request"
import request from './api'
import * as ethers from 'ethers';

const queryAccountList = (offset: number, pageSize: number) => gql`
{
  accountEntities(
    first: ${pageSize}
    offset: ${offset}
    orderBy: CAPS_AMOUNT_DESC
  ) {
    totalCount
    nodes {
      id
      capsAmount # FREE BALANCE
      capsAmountTotal # TOTAL
    }
  }
}
`

const queryAccount = (id: string) => gql`
{
  accountEntities(
    filter: {
      id: { equalTo: "${id}" }
    }
  ) {
    nodes {
      id
      capsAmount
      capsAmountTotal
    }
  }
}
`

const queryExtrinsicCounts = (signers: string[]) => gql`
{
  extrinsicEntities(
    filter: {
      signer: {
        in: [
          ${signers.map(signer => `"${signer}"`).join('')}
        ]
      }
    }
  ) {
    nodes {
      signer
    }
  }
}
`

const queryAccountLatestExtrinsic = (signer: string, count: number) => gql`
{
  extrinsicEntities(
    first: ${count}
    orderBy: NONCE_DESC
    filter: {
      signer: { equalTo: "${signer}" }
    }
  ) {
    nodes {
      nonce
      id
      blockId
      module
      call
      success
    }
  }
}
`

export const getAccountList = async (offset: number, pageSize: number) => {
  const accounts = await request(
    queryAccountList(offset, pageSize)
  )

  const extrinsics = await request(
    queryExtrinsicCounts(accounts.accountEntities.nodes.map((acc: any) => acc.id))
  )

  const count: any = {}

  extrinsics.extrinsicEntities.nodes.forEach((tx: any) => {
    if (count[tx.signer] === undefined) {
      count[tx.signer] = 1
    } else {
      count[tx.signer] += 1
    }
  })

  return {
    totalCount: accounts.accountEntities.totalCount,
    data: accounts.accountEntities.nodes.map((account: any) => ({
      address: account.id,
      amount: account.capsAmount.length < 19 ? ethers.utils.formatEther(parseInt((parseInt(account.capsAmount) / Math.pow(10, account.capsAmount.length - 1)).toFixed(0))*Math.pow(10, account.capsAmount.length - 1) + '') : ethers.utils.formatEther(account.capsAmount),
      extrinsics: count[account.id]
    }))
  }
}

export const searchAccount = async (id: string) => {
  const response = await request(
    queryAccount(id)
  )
  return response.accountEntities.nodes
}

export const getAccount = async (id: string, lastExtrinsicCount: number) => {
  const [account, extrinsics] = await Promise.all([
    request(
      queryAccount(id)
    ),
    request(
      queryAccountLatestExtrinsic(id, lastExtrinsicCount)
    )
  ])


  if (account.accountEntities.nodes.length === 0) {
    return null
  } else {
    const acc = account.accountEntities.nodes[0]
    const data: any = {
      address: acc.id,
      free_balance: acc.capsAmount.length < 19 ? ethers.utils.formatEther(parseInt((parseInt(acc.capsAmount) / Math.pow(10, acc.capsAmount.length - 1)).toFixed(0))*Math.pow(10, acc.capsAmount.length - 1) + '') : ethers.utils.formatEther(acc.capsAmount),
      total_balance: acc.capsAmount.length < 19 ? ethers.utils.formatEther(parseInt((parseInt(acc.capsAmountTotal) / Math.pow(10, acc.capsAmountTotal.length - 1)).toFixed(0))*Math.pow(10, acc.capsAmountTotal.length - 1) + '') : ethers.utils.formatEther(acc.capsAmountTotal),
      active: acc.capsAmountTotal > 0
    }

    if (extrinsics.extrinsicEntities.nodes.length) {
      const tx = extrinsics.extrinsicEntities.nodes[0]
      data.nonce = tx.nonce + 1
      data.last_extrinsics = extrinsics.extrinsicEntities.nodes.map((tx: any) => ({
        id: tx.id,
        block_id: tx.blockId,
        module: tx.module,
        call: tx.call,
        success: tx.success
      }))
    }

    return data
  }
}
