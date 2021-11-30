import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import Back from 'components/assets/Back';
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import ParameterView from 'components/base/ParameterView';
import ListView from 'components/base/ListView';
import Switch from 'components/base/Switch';
import { eventColumns, eventRender, parameterFields, parameterRender, extrinsicFields, extrinsicRender } from './table'
import { getExtrinsic, getExtrinsicParams } from 'apis/extrinsic';
import { searchEventbyExtrinsic } from 'apis/event';
import { ellipsifyMiddle } from 'helpers/lib';

export interface ExtrinsicDetailProps {}

enum DetailMode {
  Extrinsic,
  Parameters,
  Events
}

const ExtrinsicDetail: React.FC<ExtrinsicDetailProps> = () => {
  const [data, setData] = useState<any>(null)
  const [data1, setData1] = useState<any>(null)
  const [data2, setData2] = useState<any>(null)
  const [detailMode, setDetailMode] = useState<DetailMode>(DetailMode.Extrinsic)
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
      <div className="ellipse3"></div>
      <div className="custom_table">
        <div className="sub_header">
          <div className="cursor-point w-fit-content me-4 only-desktop">
            <Link href={'/extrinsic'}>
              <a><Back className="back"/></a>
            </Link>
          </div>
          <Switch
            options={[data && ("Extrinsic: " + ellipsifyMiddle(data.hash)), 'Parameters', 'Events']}
            selected={detailMode}
            onChange={setDetailMode}
          />
        </div>
        {detailMode === DetailMode.Extrinsic && (
          <DetailView fields={extrinsicFields} data={data} renderCell={extrinsicRender}/>
        )}
        {detailMode === DetailMode.Parameters && (
          <ParameterView data={data2} columns={parameterFields} renderCell={parameterRender} />
        )}
        {detailMode === DetailMode.Events && (
          <ListView columns={eventColumns} data={data1 && data1.data} renderCell={eventRender}/>
        )}
      </div>
    </Layout>
  )
}

export default ExtrinsicDetail;
