import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import ListView from 'components/base/ListView';
import Back from 'components/assets/Back';
import { eventColumns, eventRender, blockFields, extrinsicColumns, blockRender, extrinsicRender } from './table'
import { getBlock } from 'apis/block';
import { searchEventbyBlock } from 'apis/event';

export interface AccountDetailProps {}

const AccountDetail: React.FC<AccountDetailProps> = () => {
  const [data, setData] = useState<any>(null)
  const [data1, setData1] = useState<any>(null)
  const [isFirst, setIsFirst] = useState<boolean>(true)
  const [isSecond, setIsSecond] = useState<boolean>(false)
  const [isThird, setIsThird] = useState<boolean>(false)
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (id) {
      getBlock(id).then(setData)
      searchEventbyBlock(id).then(setData1);
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
          <div className="cursor-point w-fit-content me-4 only-desktop">
            <Link href={'/block'}>
              <a><Back className="back"/></a>
            </Link>
          </div>
          <div className="ui-switch">
            <div className={"ui-switch__btn " + (isFirst? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectFirst()}>Block  # {id}</div>
            <div className={"ui-switch__btn " + (isSecond? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectSecond()}>Extrinsic</div>
            <div className={"ui-switch__btn " + (isThird? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectThird()}>Events</div>
          </div>
        </div>
        { isFirst && <DetailView fields={blockFields} data={data} renderCell={blockRender}/> }
        { isSecond && <ListView columns={extrinsicColumns} data={data && data.extrinsic_detail} renderCell={extrinsicRender}/> }
        { isThird && <ListView columns={eventColumns} data={data1 && data1.data} renderCell={eventRender}/> }
      </div>
    </Layout>
  )
}

export default AccountDetail;
