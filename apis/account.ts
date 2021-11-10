import { gql } from "graphql-request"
import request from './api'
import { API_PAGE_SIZE } from 'helpers/constants'
import * as ethers from 'ethers';

const queryAccountList = (offset: number, pageSize: number = API_PAGE_SIZE) => gql`
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

const queryTransactionCounts = (signers: string[]) => gql`
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

const queryAccountLatestTransaction = (signer: string, count: number) => gql`
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

export const getAccountList = async (offset: number, pageSize: number = API_PAGE_SIZE) => {
  const accounts = await request(
    queryAccountList(offset, pageSize)
  )

  const transactions = await request(
    queryTransactionCounts(accounts.accountEntities.nodes.map((acc: any) => acc.id))
  )

  const count: any = {}

  transactions.extrinsicEntities.nodes.forEach((tx: any) => {
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
      amount: ethers.utils.formatEther(account.capsAmount),
      transactions: count[account.id]
    }))
  }
}

export const searchAccount = async (id: string) => {
  const response = await request(
    queryAccount(id)
  )
  return response.accountEntities.nodes
}

export const getAccount = async (id: string, lastTransactionCount: number) => {
  const [account, transactions] = await Promise.all([
    request(
      queryAccount(id)
    ),
    request(
      queryAccountLatestTransaction(id, lastTransactionCount)
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

    if (transactions.extrinsicEntities.nodes.length) {
      const tx = transactions.extrinsicEntities.nodes[0]
      data.nonce = tx.nonce + 1
      data.last_transactions = transactions.extrinsicEntities.nodes.map((tx: any) => ({
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
