import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import { fields, render } from './table'
import { getAccount } from 'apis/account';

export interface AccountDetailProps {}

const AccountDetail: React.FC<AccountDetailProps> = () => {
  const [data, setData] = useState(null)
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    getAccount(id).then(setData)
  }, [id])

  return (
    <Layout back='/account' title={id}>
      <DetailView fields={fields} data={data} renderCell={render}/>
    </Layout>
  )
}

export default AccountDetail;
