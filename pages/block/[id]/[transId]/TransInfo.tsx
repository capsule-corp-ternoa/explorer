import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import ParameterView from 'components/base/ParameterView';
import { parameterFields, parameterRender, extrinsicFields, extrinsicRender } from 'pages/extrinsic/[id]/table'
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
      <h1 className="subTitle">Extrinsic: {data && ellipsifyMiddle(data.hash)}</h1>
      <DetailView fields={extrinsicFields} data={data} renderCell={extrinsicRender}/>
      { data && data.args_name && <ParameterView fields={parameterFields} data={data} renderCell={parameterRender}/> }
    </Layout>
  )
}

export default TransInfo;
