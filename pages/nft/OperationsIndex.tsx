import React, { useState, useEffect } from 'react';
import Pagination from 'components/base/Pagination';
import ListView from 'components/base/ListView';
import MaxCount from 'components/base/MaxCount';
import Layout from 'components/base/Layout';
import { getNftOperationsList } from 'apis/nfts'
import { API_PAGE_SIZE } from 'helpers/constants';
import { INftOperation } from 'interfaces/api';
import { columns, render } from './table';

const NftOperationsIndex: React.FC = () => {
  const [totalCount, setTotalCount] = useState(0)
  const [data, setData] = useState<INftOperation[]>([])
  const [pageData, setPageData] = useState<{
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  }>({ hasNextPage: false, hasPreviousPage: false });const [pageSize, setPageSize] = useState<number>(API_PAGE_SIZE)
  const [page, setPage] = useState<number>(0);
  const offset = page * pageSize
  
  const selectCount = (count: number) => {
    setPage(0)
    setPageSize(count);
  }

  useEffect(() => {
    let shouldUpdate = true;
    const getNfts = async (offset: number, pageSize: number) => {
      try {
        const { data, hasNextPage, hasPreviousPage, totalCount } =
          await getNftOperationsList(offset, pageSize);
        if (shouldUpdate) {
          setData(data);
          setPageData({ hasNextPage, hasPreviousPage });
          setTotalCount(totalCount);
        }
      } catch (err) {
        console.log(err);
        if (shouldUpdate) {
          setData([]);
          setPageData({ hasNextPage: false, hasPreviousPage: false });
          setTotalCount(0);
        }
      }
    };

    getNfts(offset, pageSize);
    return () => {
      shouldUpdate = false;
    };
  }, [page, pageSize]);

  return (
    <Layout>
      <div className="ellipse2"></div>
      <div className="custom_table">
        <h1 className="title mb-4 ps-lg-4">NFT Operations</h1>
        <ListView
          data={data}
          columns={columns}
          renderCell={render}
          footer={(
            <div className="d-flex justify-content-between align-items-center mt-sm-4">
              <MaxCount count={pageSize} onSelectCount={selectCount}/>
              <Pagination page={page} data={pageData} setPage={setPage} totalPage={Math.ceil(totalCount / pageSize)} />
            </div>
          )}
        />
      </div>
    </Layout>
  )
}

export default NftOperationsIndex;
