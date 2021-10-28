import { gql } from "graphql-request"
import request from './api'
import { API_PAGE_SIZE } from 'helpers/constants'

const queryAccounts = (offset: number, pageSize: number = API_PAGE_SIZE) => gql`
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

const queryTransactionCounts = (signers: string[]) => gql`
{
  extrinsicEntities(
    filter: {
      and: [
        {
          signer: {
            in: [
              ${signers.map(signer => `"${signer}"`).join('')}
            ]
          }
        }
      ]
    }
  ) {
    nodes {
      signer
    }
  }
}
`

export const allAccounts = async (offset: number, pageSize: number = API_PAGE_SIZE) => {
  const accounts = await request(
    queryAccounts(offset, pageSize)
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
      ...account,
      address: account.id,
      amount: account.capsAmount,
      transactions: count[account.id]
    }))
  }
}
