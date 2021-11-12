import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import { getNftTransfer } from 'apis/nft-transfer';
import { fields, render } from './table'

export interface NftTransDetailProps {}

const NftTransDetail: React.FC<NftTransDetailProps> = () => {
  const [data, setData] = useState<any>(null)
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (id) {
      getNftTransfer(id).then(setData)
    }
  }, [id])

  if (!id) {
    return null
  }

  return (
    <Layout back='/nft'>
      <h1 className="subTitle">{data && data.extrinsic_type + ' of NFT ID : ' + data.nft_id}</h1>
      <DetailView fields={fields} data={data} renderCell={render}/>
    </Layout>
  )
}

export default NftTransDetail;
