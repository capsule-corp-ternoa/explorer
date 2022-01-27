import React, { useState, useEffect } from 'react';
import Pagination from 'components/base/Pagination';
import ListView from 'components/base/ListView';
import MaxCount from 'components/base/MaxCount';
import Layout from 'components/base/Layout';
import { getTransferList } from 'apis/transfer'
import { API_PAGE_SIZE } from 'helpers/constants';
import { columns, render } from './table';

export interface TransIndexProps { }

const TransIndex: React.FC<TransIndexProps> = () => {
  const [totalCount, setTotalCount] = useState(0)
  const [data, setData] = useState<any>({})
  const [pageSize, setPageSize] = useState<number>(API_PAGE_SIZE)
  const [page, setPage] = useState<number>(0);
  const offset = page * pageSize

  const getBalanceTransfers = async ( offset: number, pageSize : number) => {
    try{
      const balanceTransfers =  await getTransferList(offset, pageSize)
      setData(balanceTransfers), 
      setTotalCount(balanceTransfers.totalCount)
    }catch(err){
      console.log(err)
    }
  }
  const loadNextDatas = () =>{
    data && data.hasNextPage && setPage(page +1)
  }
  const loadPreviousDatas = () =>{
    data && data.hasPreviousPage && setPage(page -1)
  }
  const selectCount = (count: number) => {
    setPage(0)
    setPageSize(count);
  }

  useEffect(() => {
    getBalanceTransfers(offset, pageSize)
  }, [page, pageSize])

  return (
    <Layout>
      <div className="ellipse2"></div>
      <div className="custom_table">
        <h1 className="title mb-4 ms-1">Balance Transfers</h1>
        <ListView
          data={data && data.data}
          columns={columns}
          renderCell={render}
          footer={(
            <div className="d-flex justify-content-between align-items-center mt-sm-4">
              <MaxCount count={pageSize} onSelectCount={selectCount}/>
              <Pagination page={page} loadNextDatas={loadNextDatas} loadPreviousDatas={loadPreviousDatas} data={data} totalPage={Math.ceil(totalCount / pageSize)} />
            </div>
          )}
        />
      </div>
    </Layout>
  )
}

export default TransIndex;
