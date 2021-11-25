import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import Back from 'components/assets/Back';
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
  const [isFirst, setIsFirst] = useState<boolean>(true)
  const [isSecond, setIsSecond] = useState<boolean>(false)
  const [isThird, setIsThird] = useState<boolean>(false)
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

  const onSelectFirst = () => {
    setIsFirst(true)
    setIsSecond(false)
    setIsThird(false)
  }
  
  const onSelectSecond = () => {
    setIsFirst(false)
    setIsSecond(true)
    setIsThird(false)
  }
  
  const onSelectThird = () => {
    setIsFirst(false)
    setIsSecond(false)
    setIsThird(true)
  }

  return (
    <Layout>
      <div className="ellipse3"></div>
      <div className="custom_table">
        <div className="d-flex align-items-center mb-5">
          <div className="cursor-point w-fit-content me-4">
            <Link href={'/extrinsic'}>
              <a><Back className="back"/></a>
            </Link>
          </div>
          <div className="ui-switch">
            <div className={"ui-switch__btn " + (isFirst? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectFirst()}>Extrinsic: {data && ellipsifyMiddle(data.hash)}</div>
            <div className={"ui-switch__btn " + (isSecond? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectSecond()}>Parameters</div>
            <div className={"ui-switch__btn " + (isThird? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectThird()}>Events</div>
          </div>
        </div>
        { isFirst && <DetailView fields={extrinsicFields} data={data} renderCell={extrinsicRender}/> }
        { isSecond && <ParameterView data={data2} columns={parameterFields} renderCell={parameterRender} /> }
        { isThird && <ListView columns={eventColumns} data={data1 && data1.data} renderCell={eventRender}/> }      
      </div>
    </Layout>
  )
}

export default ExtrinsicDetail;
