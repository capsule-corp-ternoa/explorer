import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import Back from 'components/assets/Back';
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import ParameterView from 'components/base/ParameterView';
import Switch from 'components/base/Switch';
import { parameterFields, parameterRender, extrinsicFields, extrinsicRender } from 'pages/extrinsic/[id]/table'
import { getExtrinsic, getExtrinsicParams } from 'apis/extrinsic';
import { ellipsifyMiddle } from 'helpers/lib';

export interface TransInfoProps {}

enum DetailMode {
  Extrinsic,
  Parameters
}

const TransInfo: React.FC<TransInfoProps> = () => {
  const [data, setData] = useState<any>(null)
  const [parameter, setParameter] = useState<any>(null)
  const [detailMode, setDetailMode] = useState<DetailMode>(DetailMode.Extrinsic)
  const router = useRouter()
  const id = router.query.id as string
  const transId = router.query.transId as string

  const getTransferDatas = async (transId:string) => {
    try{
      if (!id) throw new Error("Couldn't get id: Unknown id")
      const extrinsic = await getExtrinsic(transId)
      setData(extrinsic)
      const etrinsicParams= await getExtrinsicParams(transId)
      setParameter(etrinsicParams?.args)
    }catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    transId && getTransferDatas(transId)
  }, [transId])

  
  if (!transId || !id) {
    return null
  }

  return (
    <Layout back={`/block/${id}`}>
      <div className="ellipse3"></div>
      <div className="custom_table">
        <div className="sub_header">
          <div className="cursor-point w-fit-content me-4 only-desktop">
            <Link href={`/block/${id}`}>
              <a><Back className="back"/></a>
            </Link>
          </div>
          <Switch
            options={[data && "Extrinsic: " + ellipsifyMiddle(data.hash), 'Parameters']}
            selected={detailMode}
            onChange={setDetailMode}
          />
        </div>
        {detailMode === DetailMode.Extrinsic && (
          <DetailView fields={extrinsicFields} data={data} renderCell={extrinsicRender}/>
        )}
        {detailMode === DetailMode.Parameters && data && data.args_name && (
          <ParameterView 
            data={parameter}
            columns={parameterFields}
            renderCell={parameterRender}
          />
        )}
      </div>
    </Layout>
  )
}

export default TransInfo;
