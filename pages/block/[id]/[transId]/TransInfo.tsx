import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import { transactionFields, transactionRender } from './table'
import { getExtrinsic } from 'apis/extrinsic';
import { ellipsifyMiddle } from 'helpers/lib';

export interface TransInfoProps {}

const TransInfo: React.FC<TransInfoProps> = () => {
  const [data, setData] = useState<any>(null)
  const router = useRouter()
  const id = router.query.id as string
  const transId = router.query.transId as string

  useEffect(() => {
    if (transId) {
      getExtrinsic(transId).then(setData)
    }
  }, [transId])

  if (!transId || !id) {
    return null
  }

  return (
    <Layout back={`/block/${id}`}>
      <h1 className="subTitle">Transaction: {data && ellipsifyMiddle(data.hash)}</h1>
      <DetailView fields={transactionFields} data={data} renderCell={transactionRender}/>
      <h1 className="subTitle mt-4">Parameters</h1>
    </Layout>
  )
}

export default TransInfo;
