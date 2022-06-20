export type INftOperation = {
  id: string;
  timestamp: string;
  from: string;
  to: string;
  nftId: string;
  extrinsicId: string;
  creator: string;
  typeOfTransaction: string;
  fees?: string;
};

export type CustomResponse<DataType> = {
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  data: DataType[];
};
