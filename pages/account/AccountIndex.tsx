import React, { useState, useEffect } from 'react';
import Pagination from 'components/base/Pagination';
import { allAccounts } from 'apis/account'
import { API_PAGE_SIZE } from 'helpers/constants';
import Table from 'components/base/Table';
import { columns, render } from './table';
import usePagination from 'hooks/usePagination';
import Layout from 'components/base/Layout';

export interface AccountIndexProps { }

const AccountIndex: React.FC<AccountIndexProps> = () => {
  const [totalCount, setTotalCount] = useState(0)
  const [data, setData] = useState(null)
  const { page } = usePagination()

  useEffect(() => {
    allAccounts(Number(page) * API_PAGE_SIZE).then(res => {
      setTotalCount(res.totalCount)
      setData(res.data)
    })
  }, [page])

  return (
    <Layout title='All Accounts'>
      <Table data={data} columns={columns} renderCell={render} />
      <Pagination page={page} totalPage={Math.ceil(totalCount / API_PAGE_SIZE)} />
    </Layout>
  )
}

export default AccountIndex;
