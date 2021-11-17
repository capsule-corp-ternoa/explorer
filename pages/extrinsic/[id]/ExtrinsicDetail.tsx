import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import ParameterView from 'components/base/ParameterView';
import ListView from 'components/base/ListView';
import { eventColumns, eventRender, parameterFields, parameterRender, extrinsicFields, extrinsicRender } from './table'
import { getExtrinsic, getExtrinsicParams } from 'apis/extrinsic';
import { searchEventbyExtrinsic } from 'apis/event';
import { ellipsifyMiddle } from 'helpers/lib';

export interface ExtrinsicDetailProps {}

const ExtrinsicDetail: React.FC<ExtrinsicDetailProps> = () => {
  const [data, setData] = useState<any>(null)
  const [data1, setData1] = useState<any>(null)
  const [data2, setData2] = useState<any>(null)
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (id) {
      getExtrinsic(id).then(setData)
      getExtrinsicParams(id).then(data => {
        setData2(data?.args);
      })
      searchEventbyExtrinsic(id).then(setData1)
    }
  }, [id])

  if (!id) {
    return null
  }

  return (
    <Layout back='/extrinsic'>
      <h1 className="subTitle">Extrinsic: {data && ellipsifyMiddle(data.hash)}</h1>
      <DetailView fields={extrinsicFields} data={data} renderCell={extrinsicRender}/>
      <div className="d-flex mt-1">
        <h1 className="subTitle1 mt-3">Parameters</h1>
      </div>
      <ParameterView 
        data={data2}
        columns={parameterFields}
        renderCell={parameterRender}
      />
      {/* <div className="d-flex mt-1">
        <h1 className="subTitle1 mt-3">Events({data1 && data1.totalCount})</h1>
      </div> */}
      <ListView title={"Events (" + data1 && data1.totalCount + ")"} columns={eventColumns} data={data1 && data1.data} renderCell={eventRender}/>
    </Layout>
  )
}

export default ExtrinsicDetail;
