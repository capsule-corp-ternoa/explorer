import { gql } from 'graphql-request';

export const queryNftOperationsList = (offset: number, pageSize: number) => gql`
{
  nftOperationEntities(
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
      timestamp
      from
      to
      extrinsicId
      typeOfTransaction
      nft {
        id
        nftId
        creator
      }
    }
  }
}
`

export const queryNftIdOperations = (nftId: string) => gql`
{
  nftOperationEntities(
    filter: {
      nftId: { equalTo: "${nftId}" }
    }
  ) {
    nodes {
      id
      typeOfTransaction
    }
  }
}
`

export const queryNftOperation = (id: string) => gql`
{
  nftOperationEntities(
    filter: {
      id: { equalTo: "${id}" }
    }
  ) {
    nodes {
      id
      timestamp
      from
      to
      extrinsicId
      typeOfTransaction
      nft {
        id
        nftId
        creator
      }
    }
  }
}
`