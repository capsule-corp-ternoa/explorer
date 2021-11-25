import React, { useState, useEffect } from 'react';
import Pagination from 'components/base/Pagination';
import MaxCount from 'components/base/MaxCount';
import ListView from 'components/base/ListView';
import Layout from 'components/base/Layout';
import usePagination from 'hooks/usePagination';
import { getBlockList } from 'apis/block'
import { API_PAGE_SIZE } from 'helpers/constants';
import { columns, render } from './table';

export interface BlockIndexProps { }

const BlockIndex: React.FC<BlockIndexProps> = () => {
  const [totalCount, setTotalCount] = useState(0)
  const [data, setData] = useState(null)
  const [size, setSize] = useState(API_PAGE_SIZE)
  const { page } = usePagination()

  useEffect(() => {
    getBlockList(page * size, size).then(data => {
      setTotalCount(data.totalCount)
      setData(data.data)
    })
  }, [page])

  const selectCount = (count: number) => {
    setSize(count);
    getBlockList(page * count, count).then(data => {
      setTotalCount(data.totalCount)
      setData(data.data)
    })
  }

  return (
    <Layout>
      <div className="ellipse2"></div>
      <div className="custom_table">
        <h1 className="title mb-4 ms-1">Blocks</h1>
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

export default BlockIndex;
