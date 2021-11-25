import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import Back from 'components/assets/Back';
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import ParameterView from 'components/base/ParameterView';
import { parameterFields, parameterRender, extrinsicFields, extrinsicRender } from 'pages/extrinsic/[id]/table'
import { getExtrinsic, getExtrinsicParams } from 'apis/extrinsic';
import { ellipsifyMiddle } from 'helpers/lib';

export interface TransInfoProps {}

const TransInfo: React.FC<TransInfoProps> = () => {
  const [data, setData] = useState<any>(null)
  const [data1, setData1] = useState<any>(null)
  const [isFirst, setIsFirst] = useState<boolean>(true)
  const [isSecond, setIsSecond] = useState<boolean>(false)
  const router = useRouter()
  const id = router.query.id as string
  const transId = router.query.transId as string

  useEffect(() => {
    if (transId) {
      getExtrinsic(transId).then(setData)
      getExtrinsicParams(transId).then(data => {
        setData1(data?.args);
      })
    }
  }, [transId])

  if (!transId || !id) {
    return null
  }

  const onSelectFirst = () => {
    setIsFirst(true)
    setIsSecond(false)
  }
  
  const onSelectSecond = () => {
    setIsFirst(false)
    setIsSecond(true)
  }

  return (
    <Layout>
      <div className="custom_table">
        <div className="d-flex align-items-center mb-5">
          <div className="cursor-point w-fit-content me-4">
            <Link href={`/block/${id}`}>
              <a><Back /></a>
            </Link>
          </div>
          <div className="ui-switch">
            <div className={"ui-switch__btn " + (isFirst? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectFirst()}>Extrinsic: {data && ellipsifyMiddle(data.hash)}</div>
            <div className={"ui-switch__btn " + (isSecond? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectSecond()}>Parameters</div>
          </div>
        </div>
        { isFirst && <DetailView fields={extrinsicFields} data={data} renderCell={extrinsicRender}/> }
        { isSecond && data && data.args_name && 
          <>
            <ParameterView 
              data={data1}
              columns={parameterFields}
              renderCell={parameterRender}
            />
          </>
        }
      </div>
    </Layout>
  )
}

export default TransInfo;
