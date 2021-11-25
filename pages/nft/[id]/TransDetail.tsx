import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import Back from 'components/assets/Back';
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import ListView from 'components/base/ListView';
import { getNftTransfer } from 'apis/nft-transfer';
import { searchEventbyExtrinsic } from 'apis/event';
import { fields, render, eventColumns, eventRender } from './table'

export interface NftTransDetailProps {}

const NftTransDetail: React.FC<NftTransDetailProps> = () => {
  const [data, setData] = useState<any>(null)
  const [data1, setData1] = useState<any>(null)
  const [isFirst, setIsFirst] = useState<boolean>(true)
  const [isSecond, setIsSecond] = useState<boolean>(false)
  const router = useRouter()
  const id = router.query.id as string
  const extrinsic_id = router.query.extrinsic as string

  useEffect(() => {
    if (id) {
      getNftTransfer(id).then(setData)
      searchEventbyExtrinsic(extrinsic_id).then(setData1)
    }
  }, [id])

  if (!id) {
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
            <Link href={'/nft'}>
              <a><Back /></a>
            </Link>
          </div>
          <div className="ui-switch">
            <div className={"ui-switch__btn " + (isFirst? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectFirst()}>{data && data.extrinsic_type + ' of NFT ID : ' + data.nft_id}</div>
            <div className={"ui-switch__btn " + (isSecond? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectSecond()}>Events</div>
          </div>
        </div>
        { isFirst && <DetailView fields={fields} data={data} renderCell={render}/> }
        { isSecond && <ListView columns={eventColumns} data={data1 && data1.data} renderCell={eventRender}/> }
      </div>
    </Layout>
  )
}

export default NftTransDetail;
