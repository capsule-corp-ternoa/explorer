import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import { transactionFields, transactionRender } from './table'
import { getExtrinsic } from 'apis/extrinsic';
import { ellipsifyMiddle } from 'helpers/lib';

export interface ExtrinsicDetailProps {}

const ExtrinsicDetail: React.FC<ExtrinsicDetailProps> = () => {
  const [data, setData] = useState<any>(null)
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (id) {
      getExtrinsic(id).then(setData)
    }
  }, [id])

  if (!id) {
    return null
  }

  return (
    <Layout back='/extrinsic'>
      <h1 className="subTitle">Extrinsics: {data && ellipsifyMiddle(data.hash)}</h1>
      <DetailView fields={transactionFields} data={data} renderCell={transactionRender}/>
      <h1 className="subTitle mt-4">Parameters</h1>
    </Layout>
  )
}

export default ExtrinsicDetail;
