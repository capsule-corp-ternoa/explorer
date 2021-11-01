import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import ListView from 'components/base/ListView';
import { fields, render } from './table'
import { getTransfer } from 'apis/transfer';
import { ellipsifyMiddle } from 'helpers/lib';

export interface TransDetailProps {}

const TransDetail: React.FC<TransDetailProps> = () => {
  const [data, setData] = useState<any>(null)
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (id) {
        getTransfer(id).then(setData)
    }
  }, [id])

  if (!id) {
    return null
  }

  return (
    <Layout back='/trans'>
      <h1 className="subTitle">Balance Transfer "{ellipsifyMiddle(id)}"</h1>
      <DetailView fields={fields} data={data} renderCell={render}/>
    </Layout>
  )
}

export default TransDetail;
