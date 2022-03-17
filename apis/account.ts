import { gql } from "graphql-request"
import { apiIndexer, apiDictionary } from './api'
import * as ethers from 'ethers';

const queryAccountList = (offset: number, pageSize: number) => gql`
{
  accountEntities(
    first: ${pageSize}
    offset: ${offset}
    orderBy: CAPS_AMOUNT_ROUNDED_DESC
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
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
  extrinsics(
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

const queryAccountExtrinsics = (signer: string, offset: number, pageSize: number) => gql`
{
  extrinsics(
    first: ${pageSize}
    offset: ${offset}
    orderBy: NONCE_DESC
    filter: {
      signer: { equalTo: "${signer}" }
    }
  ) {
    totalCount,
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
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
  const accounts = await apiIndexer(
    queryAccountList(offset, pageSize)
  )

  const extrinsics = await apiDictionary(
    queryExtrinsicCounts(accounts.accountEntities.nodes.map((acc: any) => acc.id))
  )

  const count: any = {}

  extrinsics.extrinsics.nodes.forEach((tx: any) => {
    if (count[tx.signer] === undefined) {
      count[tx.signer] = 1
    } else {
      count[tx.signer] += 1
    }
  })

  return {
    totalCount: accounts.accountEntities.totalCount,
    hasNextPage : accounts.accountEntities.pageInfo.hasNextPage,
    hasPreviousPage : accounts.accountEntities.pageInfo.hasPreviousPage,
    data: accounts.accountEntities.nodes.map((account: any) => ({
      address: account.id,
      amount: ethers.utils.formatEther(account.capsAmount),
      extrinsics: count[account.id]
    }))
  }
}

export const searchAccount = async (id: string) => {
  const response = await apiIndexer(
    queryAccount(id)
  )
  return response.accountEntities.nodes
}

export const getAccount = async (id: string, offset: number, pageSize: number ) => {
  const [account, extrinsics] = await Promise.all([
    apiIndexer(
      queryAccount(id)
    ),
    apiDictionary(
      queryAccountExtrinsics(id, offset, pageSize)
    )
  ])

  if (account.accountEntities.nodes.length === 0) {
    return null
  } else {
    const acc = account.accountEntities.nodes[0]
    const data: any = {
      address: acc.id,
      free_balance: ethers.utils.formatEther(acc.capsAmount),
      total_balance: ethers.utils.formatEther(acc.capsAmountTotal),
      active: acc.capsAmountTotal > 0
    }

    if (extrinsics.extrinsics.nodes.length) {
      const tx = extrinsics.extrinsics.nodes[0]
      data.totalCount = extrinsics.extrinsics.totalCount,
      data.hasNextPage = extrinsics.extrinsics.pageInfo.hasNextPage
      data.hasPreviousPage = extrinsics.extrinsics.pageInfo.hasPreviousPage
      data.nonce = tx.nonce + 1
      data.extrinsics = extrinsics.extrinsics.nodes.map((tx: any) => ({
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
