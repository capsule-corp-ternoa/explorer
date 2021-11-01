import { gql } from "graphql-request"
import request from './api'

const queryExtrinsic = (id: string) => gql`
{
  extrinsicEntities(
    filter: {
      id: { equalTo: "${id}" }
    }
  ) {
    nodes {
      id
      timestamp
      extrinsicIndex
      hash
      module
      call
      description
      signer
      nonce
      signature
      success
      argsName
      argsValue
    }
  }
}
`

export const getExtrinsic = async (id: string) => {
  const extrinsicResponse = await request(
    queryExtrinsic(id)
  )

  if (extrinsicResponse.extrinsicEntities.nodes.length === 0) {
    return null
  } else {
    const data = extrinsicResponse.extrinsicEntities.nodes[0]
    // console.log(JSON.parse(data.args_value))
    return {
      id: data.id,
      timestamp: data.timestamp,
      transaction_index: data.extrinsicIndex,
      hash: data.hash,
      module: data.module,
      call: data.call,
      description: data.description,
      signer: data.signer,
      nonce: data.nonce,
      signature: data.signature,
      success: data.success,
      args_name: data.argsName,
      args_value: data.artgsValue
    }
  }
}
