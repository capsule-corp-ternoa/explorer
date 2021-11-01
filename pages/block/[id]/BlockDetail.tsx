import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import { blockFields, blockRender } from './table'
import { getBlock } from 'apis/block';

export interface AccountDetailProps {}

const AccountDetail: React.FC<AccountDetailProps> = () => {
  const [data, setData] = useState<any>(null)
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (id) {
      getBlock(id).then(setData)
    }
  }, [id])

  if (!id) {
    return null
  }

  return (
    <Layout back='/block'>
      <h1 className="subTitle">Block #{id}</h1>
      <DetailView fields={blockFields} data={data} renderCell={blockRender}/>
      <h1 className="subTitle">Transactions</h1>
    </Layout>
  )
}

export default AccountDetail;
