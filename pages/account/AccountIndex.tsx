import React, { useState, useEffect } from 'react';
import Pagination from 'components/base/Pagination';
import ListView from 'components/base/ListView';
import Layout from 'components/base/Layout';
import usePagination from 'hooks/usePagination';
import { getAccountList } from 'apis/account'
import { API_PAGE_SIZE } from 'helpers/constants';
import { columns, render } from './table';

export interface AccountIndexProps { }

const AccountIndex: React.FC<AccountIndexProps> = () => {
  const [totalCount, setTotalCount] = useState(0)
  const [data, setData] = useState(null)
  const { page } = usePagination()

  useEffect(() => {
    getAccountList(page * API_PAGE_SIZE).then(data => {
      setTotalCount(data.totalCount)
      setData(data.data)
    })
  }, [page])

  return (
    <Layout>
      <h1 className="subTitle">All Accounts</h1>
      <ListView
        data={data}
        columns={columns}
        renderCell={render}
        footer={<Pagination page={page} totalPage={Math.ceil(totalCount / API_PAGE_SIZE)} />}
      />
    </Layout>
  )
}

export default AccountIndex;
