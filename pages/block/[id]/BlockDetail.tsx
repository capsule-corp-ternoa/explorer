import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import ListView from 'components/base/ListView';
import Back from 'components/assets/Back';
import Switch from 'components/base/Switch';
import { eventColumns, eventRender, blockFields, extrinsicColumns, blockRender, extrinsicRender } from './table'
import { getBlock } from 'apis/block';
import { searchEventbyBlock } from 'apis/event';

export interface AccountDetailProps {}

enum DetailMode {
  Block,
  Extrinsic,
  Events
}

const AccountDetail: React.FC<AccountDetailProps> = () => {
  const router = useRouter()
  const id = router.query.id as string
  const [data, setData] = useState<any>(null)
  const [eventDatas, setEventDatas] = useState<any>(null)
  const [detailMode, setDetailMode] = useState<DetailMode>(DetailMode.Block)

  const getBlockDatas = async (id:string) => {
    try{
      if (!id) throw new Error("Couldn't get id: Unknown id")
      const blockDatas = await getBlock(id)
      setData(blockDatas)
      const eventDatasByBlock = await searchEventbyBlock(id)
      setEventDatas(eventDatasByBlock)
    }catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    if (id) {
      getBlockDatas(id)
    }
  }, [id])

  if (!id) {
    return null
  }

  return (
    <Layout back='/block'>
      <div className="ellipse3"></div>
      <div className="custom_table">
        <div className="sub_header">
          <div className="cursor-point w-fit-content me-4 only-desktop">
            <Link href={'/block'}>
              <a><Back className="back"/></a>
            </Link>
          </div>
          <Switch
            options={[`Block # ${id}`, 'Extrinsic', 'Events']}
            selected={detailMode}
            onChange={setDetailMode}
          />
        </div>
        {detailMode === DetailMode.Block && (
          <DetailView
            fields={blockFields}
            data={data}
            renderCell={blockRender}
          />
        )}
        {detailMode === DetailMode.Extrinsic && (
          <ListView
            columns={extrinsicColumns}
            data={data && data.extrinsic_detail}
            renderCell={extrinsicRender}
          />
        )}
        {detailMode === DetailMode.Events && (
          <ListView
            columns={eventColumns}
            data={eventDatas && eventDatas.data}
            renderCell={eventRender}
          />
        )}
      </div>
    </Layout>
  )
}

export default AccountDetail;
