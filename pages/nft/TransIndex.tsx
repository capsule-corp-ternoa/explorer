import React, { useState, useEffect } from 'react';
import Pagination from 'components/base/Pagination';
import ListView from 'components/base/ListView';
import MaxCount from 'components/base/MaxCount';
import Layout from 'components/base/Layout';
import usePagination from 'hooks/usePagination';
import { getNftTransferList } from 'apis/nft-transfer'
import { API_PAGE_SIZE } from 'helpers/constants';
import { columns, render } from './table';

export interface NftTransIndexProps { }

const NftTransIndex: React.FC<NftTransIndexProps> = () => {
  const [totalCount, setTotalCount] = useState(0)
  const [data, setData] = useState(null)
  const [size, setSize] = useState(API_PAGE_SIZE)
  const { page } = usePagination()

  useEffect(() => {
    getNftTransferList(page * size, size).then(data => {
      setTotalCount(data.totalCount)
      setData(data.data)
    })
  }, [page])

  const selectCount = (count: number) => {
    setSize(count);
    getNftTransferList(page * count, count).then(data => {
      setTotalCount(data.totalCount)
      setData(data.data)
    })
  }

  return (
    <Layout>
      <div className="custom_table">
        <h1 className="title mt-3 mb-1 ms-1">NFT Extrinsics</h1>
        <ListView
          data={data}
          columns={columns}
          renderCell={render}
          footer={(
            <div className="d-flex justify-content-between align-items-center">
              <MaxCount count={size} onSelectCount={selectCount}/>
              <Pagination page={page} totalPage={Math.ceil(totalCount / size)} />
            </div>
          )}
        />
      </div>
    </Layout>
  )
}

export default NftTransIndex;
