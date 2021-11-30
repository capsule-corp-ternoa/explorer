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
  const [title1, setTitle1] = useState<string>()
  const [title2, setTitle2] = useState<string>()
  const [isFirst, setIsFirst] = useState<boolean>(true)
  const [isSecond, setIsSecond] = useState<boolean>(false)
  const [isTitleOpen, setIsTitleOpen] = useState<boolean>(false)
  const router = useRouter()
  const id = router.query.id as string
  const extrinsic_id = router.query.extrinsic as string

  useEffect(() => {
    if (id) {
      getNftTransfer(id).then(setData)
      searchEventbyExtrinsic(extrinsic_id).then(setData1)
    }
  }, [id])

  useEffect(() => {
    setIsTitleOpen(false);
  }, [])
  
  useEffect(() => {
    { data && setTitle1(data.extrinsic_type + ' of NFT ID : ' + data.nft_id); }
  }, [data])

  if (!id) {
    return null
  }

  const onSelectFirst = (title: string) => {
    setIsFirst(true)
    setIsSecond(false)
    if(isTitleOpen) selectTitle(title)
  }
  
  const onSelectSecond = (title: string) => {
    setIsFirst(false)
    setIsSecond(true)
    if(isTitleOpen) selectTitle(title)
  }
  
  const selectTitle = (title: string) => {
    if (title.includes('of NFT ID')) {
      { data && setTitle1(data.extrinsic_type + ' of NFT ID : ' + data.nft_id); }
      setTitle2('Events');
    } else if (title.includes('Events')) {
      setTitle1('Events');
      { data && setTitle2(data.extrinsic_type + ' of NFT ID : ' + data.nft_id); }
    }
  }
  
  const onSelectTitle = () => {
    isTitleOpen? setIsTitleOpen(false) : setIsTitleOpen(true);
  }

  return (
    <Layout> 
      <div className="ellipse3"></div>
      <div className="custom_table">
        <div className="sub_header">
          <div className="cursor-point w-fit-content me-4 only-desktop">
            <Link href={'/nft'}>
              <a><Back className="back"/></a>
            </Link>
          </div>
          <div className="only-desktop">
            <div className="ui-switch">
              { data && <div className={"ui-switch__btn " + (isFirst? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectFirst(data.extrinsic_type + ' of NFT ID : ' + data.nft_id)}>{data.extrinsic_type + ' of NFT ID : ' + data.nft_id}</div>}
              <div className={"ui-switch__btn " + (isSecond ? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectSecond("Events")}>Events</div>
            </div>
          </div>
          <div className="only-mobile">
            <div className="ui-switch" onClick={() => onSelectTitle()}>
              <div className={"ui-switch__btn ui-switch__primary"} onClick={() => onSelectFirst(title1!)}>{title1}</div>
              <div className={"ui-switch__btn " + (isTitleOpen ? 'ui-switch__secondary' : 'ui-switch__none')} onClick={() => onSelectSecond(title2!)}>{title2}</div>
            </div>
          </div>
        </div>
        <div className="only-desktop">
          { isFirst && <DetailView fields={fields} data={data} renderCell={render}/> }
          { isSecond && <ListView columns={eventColumns} data={data1 && data1.data} renderCell={eventRender}/> }
        </div>
        <div className="only-mobile">
          { title1 && title1.includes('of NFT ID') && <DetailView fields={fields} data={data} renderCell={render}/> }
          { title1 && title1.includes('Events') && <ListView columns={eventColumns} data={data1 && data1.data} renderCell={eventRender}/> }
        </div>
      </div>
    </Layout>
  )
}

export default NftTransDetail;
