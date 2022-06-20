import {
  queryNftOperation,
  queryNftIdOperations,
  queryNftOperationsList,
} from 'queries/indexer/nfts';
import { queryExtrinsicById } from 'queries/dictionary/extrinsics';
import {
  IExtrinsicsResponse,
  INftOperationsResponse,
} from 'interfaces/queries';
import { formatBalance } from 'utils/strings';

import { apiIndexer, apiDictionary } from './api';
import { CustomResponse, INftOperation } from 'interfaces/api';

export const searchNftIdOperations = async (keyword: string) => {
  const { nftOperationEntities }: INftOperationsResponse = await apiIndexer(
    queryNftIdOperations(keyword)
  );
  return nftOperationEntities.nodes;
};

export const getNftOperationsList = async (
  offset: number,
  pageSize: number
): Promise<CustomResponse<INftOperation>> => {
  const { nftOperationEntities }: INftOperationsResponse = await apiIndexer(
    queryNftOperationsList(offset, pageSize)
  );
  const { nodes, pageInfo, totalCount } =
    nftOperationEntities;
  return {
    totalCount,
    hasNextPage: pageInfo.hasNextPage,
    hasPreviousPage: pageInfo.hasPreviousPage,
    data: nodes.map(
      ({ id, from, to, extrinsicId, nft, timestamp, typeOfTransaction }) => ({
        id,
        timestamp,
        from,
        to,
        nftId: nft.nftId,
        extrinsicId: extrinsicId,
        creator: nft.creator,
        typeOfTransaction
      })
    ),
  };
};

export const getNftOperation = async (id: string): Promise<INftOperation | null> => {
  const { nftOperationEntities }: INftOperationsResponse = await apiIndexer(
    queryNftOperation(id)
  );
  const { nodes } = nftOperationEntities;

  if (nodes.length === 0) return null;

  const { from, to, extrinsicId, nft, timestamp, typeOfTransaction } = nodes[0];
  const { nftId, creator } = nft;
  const { extrinsics }: IExtrinsicsResponse = await apiDictionary(
    queryExtrinsicById(extrinsicId)
  );
  const extrinsicData =
    extrinsics.nodes.length > 0 ? extrinsics.nodes[0] : null;
  const fees = extrinsicData?.fees;
  return {
    id,
    timestamp,
    from,
    to,
    nftId,
    extrinsicId,
    typeOfTransaction,
    creator,
    fees: fees ? formatBalance(fees) : '0',
  };
};
