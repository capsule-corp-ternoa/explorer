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
  const [eventExtrinsicData, setEventExtrinsicData] = useState<any>(null)
  const [parameterData, setParameterData] = useState<any>(null)
  const [detailMode, setDetailMode] = useState<DetailMode>(DetailMode.Extrinsic)
  const router = useRouter()
  const id = router.query.id as string

  const getExtrinsicDetail = async (id:string) => {
    try{
      if (!id) throw new Error("Couldn't get id: Unknown id")
      const extrinsicDatas = await getExtrinsic(id)
      setData(extrinsicDatas)
      const extrinsicParameter = await getExtrinsicParams(id)
      setParameterData(extrinsicParameter?.args)
      const eventExtrinsic = await searchEventbyExtrinsic(id)
      setEventExtrinsicData(eventExtrinsic)
    }catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
      id && getExtrinsicDetail(id)
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
          <ParameterView data={parameterData} columns={parameterFields} renderCell={parameterRender} />
        )}
        {detailMode === DetailMode.Events && (
          <ListView columns={eventColumns} data={eventExtrinsicData && eventExtrinsicData.data} renderCell={eventRender}/>
        )}
      </div>
    </Layout>
  )
}

export default ExtrinsicDetail;
