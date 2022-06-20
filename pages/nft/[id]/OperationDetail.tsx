import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import Back from 'components/assets/Back';
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import ListView from 'components/base/ListView';
import Switch from 'components/base/Switch';
import { getNftOperation } from 'apis/nfts';
import { searchEventbyExtrinsic } from 'apis/event';
import { INftOperation } from 'interfaces/api';

import { fields, render, eventColumns, eventRender } from './table'

enum DetailMode {
  NFT,
  Events
}

const NftOperationDetail: React.FC = () => {
  const [data, setData] = useState<INftOperation | null>(null)
  const [eventData, setEventData] = useState<any>(null)
  const [detailMode, setDetailMode] = useState<DetailMode>(DetailMode.NFT)
  const router = useRouter()
  const id = router.query.id as string
  const extrinsic_id = router.query.extrinsic as string

  useEffect(() => {
    let shouldUpdate = true;
    const getNft = async (id:string, extrinsicId: string) => {
      try{
        const nftOperation = await getNftOperation(id)
        setData(nftOperation)
        const eventByExtrinsic = await searchEventbyExtrinsic(extrinsicId)
        setEventData(eventByExtrinsic)
      }catch(err){
        console.error(err)
      }
    }

    if (id) getNft(id, extrinsic_id);
    return () => {
      shouldUpdate = false;
    };
  }, [id, extrinsic_id]);

 
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
            options={[data ? `${data.typeOfTransaction} NFT ID : ${data.nftId}` : `NFT not found`, 'Events']}
            selected={detailMode}
            onChange={setDetailMode}
          />
        </div>
        {detailMode === DetailMode.NFT && (
          <DetailView fields={fields} data={data} renderCell={render}/>
        )}
        {detailMode === DetailMode.Events && (
          <ListView columns={eventColumns} data={eventData && eventData.data} renderCell={eventRender}/>
        )}
      </div>
    </Layout>
  )
}

export default NftOperationDetail;
