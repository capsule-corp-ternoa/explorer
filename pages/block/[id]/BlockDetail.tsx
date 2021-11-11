import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Layout from 'components/base/Layout';
import Down from 'components/assets/Down';
import DetailView from 'components/base/DetailView';
import ListView from 'components/base/ListView';
import { eventColumns, eventRender, blockFields, extrinsicColumns, blockRender, extrinsicRender } from './table'
import { getBlock } from 'apis/block';
import { searchEventbyBlock } from 'apis/event';

export interface AccountDetailProps {}

const AccountDetail: React.FC<AccountDetailProps> = () => {
  const [data, setData] = useState<any>(null)
  const [data1, setData1] = useState<any>(null)
  const [isEvent, setIsEvent] = useState<boolean>(false)
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (id) {
      getBlock(id).then(setData)
      searchEventbyBlock(id).then(setData1);
    }
  }, [id])

  useEffect(() => {
    setIsEvent(false)
  }, [])

  const onClickParameters = () => {
    setIsEvent(true)
  }

  const onClickEvents = () => {
    setIsEvent(false)
  }
  if (!id) {
    return null
  }

  return (
    <Layout back='/block'>
      <h1 className="subTitle">Block #{id}</h1>
      <DetailView fields={blockFields} data={data} renderCell={blockRender}/>
      { !isEvent &&
        <>
          <div className="d-flex mt-1">
            <h1 className="subTitle1 mt-3">Extrinsics</h1>
            <div onClick={() => onClickParameters()}>
              <Down className="ms-3 mt-5 cursor-point"/>
            </div>
          </div>
          <ListView columns={extrinsicColumns} data={data && data.extrinsic_detail} renderCell={extrinsicRender}/>
        </>
      }
      { isEvent &&
        <>
          <div className="d-flex mt-1">
            <h1 className="subTitle1 mt-3">Events({data1 && data1.totalCount})</h1>
            <div onClick={() => onClickEvents()}>
              <Down className="ms-3 mt-5 cursor-point"/>
            </div>
          </div>
          <ListView columns={eventColumns} data={data1 && data1.data} renderCell={eventRender}/>
        </>
      }
    </Layout>
  )
}

export default AccountDetail;
