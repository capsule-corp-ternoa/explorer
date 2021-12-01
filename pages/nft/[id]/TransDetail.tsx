import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import Back from 'components/assets/Back';
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import ListView from 'components/base/ListView';
import Switch from 'components/base/Switch';
import { getNftTransfer } from 'apis/nft-transfer';
import { searchEventbyExtrinsic } from 'apis/event';
import { fields, render, eventColumns, eventRender } from './table'

export interface NftTransDetailProps {}

enum DetailMode {
  NFT,
  Events
}

const NftTransDetail: React.FC<NftTransDetailProps> = () => {
  const [data, setData] = useState<any>(null)
  const [data1, setData1] = useState<any>(null)
  const [detailMode, setDetailMode] = useState<DetailMode>(DetailMode.NFT)
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

 

  return (
    <Layout back='/nft'> 
      <div className="ellipse3"></div>
      <div className="custom_table">
        <div className="sub_header">
          <div className="cursor-point w-fit-content me-4 only-desktop">
            <Link href={'/nft'}>
              <a><Back className="back"/></a>
            </Link>
          </div>
          <Switch
            options={[data && (data.extrinsic_type + ' of NFT ID : ' + data.nft_id), 'Events']}
            selected={detailMode}
            onChange={setDetailMode}
          />
        </div>
        {detailMode === DetailMode.NFT && (
          <DetailView fields={fields} data={data} renderCell={render}/>
        )}
        {detailMode === DetailMode.Events && (
          <ListView columns={eventColumns} data={data1 && data1.data} renderCell={eventRender}/>
        )}
      </div>
    </Layout>
  )
}

export default NftTransDetail;
