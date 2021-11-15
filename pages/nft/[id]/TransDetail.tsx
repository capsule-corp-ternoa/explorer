import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
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
      <h1 className="subTitle">{data && data.extrinsic_type + ' of NFT ID : ' + data.nft_id}</h1>
      <DetailView fields={fields} data={data} renderCell={render}/>
      <div className="d-flex mt-1">
        <h1 className="subTitle1 mt-3">Events({data1 && data1.totalCount})</h1>
      </div>
      <ListView columns={eventColumns} data={data1 && data1.data} renderCell={eventRender}/>
    </Layout>
  )
}

export default NftTransDetail;
