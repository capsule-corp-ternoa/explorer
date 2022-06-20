import { gql } from 'graphql-request';

export const queryExtrinsicByHash = (hash: `0x${string}`) => gql`
  {
    extrinsics(
      filter: {
        hash: { equalTo: "${hash}" }
      }
    ) {
      nodes {
        id
        argsValue
        blockId
        call
        extrinsicIndex
        fees
        hash
        signer
        success
        timestamp
      }
    }
  }
`;

export const queryExtrinsicById = (id: string) => gql`
  {
    extrinsics(
      filter: {
        id: { equalTo: "${id}" }
      }
    ) {
      nodes {
        call
        hash
        fees
      }
    }
  }
`;
