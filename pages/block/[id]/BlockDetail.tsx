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
  const router = useRouter()
  const id = router.query.id as string
  const [data, setData] = useState<any>(null)
  const [data1, setData1] = useState<any>(null)
  const [title1, setTitle1] = useState<string>()
  const [title2, setTitle2] = useState<string>()
  const [title3, setTitle3] = useState<string>()
  const [isFirst, setIsFirst] = useState<boolean>(true)
  const [isSecond, setIsSecond] = useState<boolean>(false)
  const [isThird, setIsThird] = useState<boolean>(false)
  const [isTitleOpen, setIsTitleOpen] = useState<boolean>(false)

  useEffect(() => {
    if (id) {
      getBlock(id).then(setData)
      searchEventbyBlock(id).then(setData1);
      setTitle1("Block  # " + id);
    }
  }, [id])
  
  useEffect(() => {
    setIsTitleOpen(false);
  }, [])

  if (!id) {
    return null
  }

  const onSelectFirst = (title: string) => {
    setIsFirst(true)
    setIsSecond(false)
    setIsThird(false)
    if(isTitleOpen) selectTitle(title)
  }
  
  const onSelectSecond = (title: string) => {
    setIsFirst(false)
    setIsSecond(true)
    setIsThird(false)
    if(isTitleOpen) selectTitle(title)
  }
  
  const onSelectThird = (title: string) => {
    setIsFirst(false)
    setIsSecond(false)
    setIsThird(true)
    if(isTitleOpen) selectTitle(title)
  }

  const selectTitle = (title: string) => {
    if (title.includes('Block')) {
      setTitle1("Block  # " + id);
      setTitle2('Extrinsic');
      setTitle3('Events');
    } else if (title.includes('Extrinsic')) {
      setTitle1('Extrinsic');
      setTitle2("Block  # " + id);
      setTitle3('Events');
    } else if (title.includes('Events')) {
      setTitle1('Events');
      setTitle2("Block  # " + id);
      setTitle3('Extrinsic');
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
            <Link href={'/block'}>
              <a><Back className="back"/></a>
            </Link>
          </div>
          <div className="only-desktop">
            <div className="ui-switch">
              <div className={"ui-switch__btn " + (isFirst? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectFirst("Block  # " + {id})}>Block  # {id}</div>
              <div className={"ui-switch__btn " + (isSecond? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectSecond("Extrinsic")}>Extrinsic</div>
              <div className={"ui-switch__btn " + (isThird? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectThird("Events")}>Events</div>
            </div>
          </div>
          <div className={"only-mobile"}>
            <div className="ui-switch" onClick={() => onSelectTitle()}>
              <div className={"ui-switch__btn ui-switch__primary"} onClick={() => onSelectFirst(title1!)}>{title1}</div>
              <div className={"ui-switch__btn " + (isTitleOpen? 'ui-switch__secondary' : 'ui-switch__none')} onClick={() => onSelectSecond(title2!)}>{title2}</div>
              <div className={"ui-switch__btn " + (isTitleOpen? 'ui-switch__secondary' : 'ui-switch__none')} onClick={() => onSelectThird(title3!)}>{title3}</div>
            </div>
          </div>
        </div>
        <div className="only-desktop">
          { isFirst && <DetailView fields={blockFields} data={data} renderCell={blockRender}/> }
          { isSecond && <ListView columns={extrinsicColumns} data={data && data.extrinsic_detail} renderCell={extrinsicRender}/> }
          { isThird && <ListView columns={eventColumns} data={data1 && data1.data} renderCell={eventRender}/> }
        </div>
        <div className="only-mobile">
          { title1 && title1.includes('Block') && <DetailView fields={blockFields} data={data} renderCell={blockRender}/> }
          { title1 && title1.includes('Extrinsic') && <ListView columns={extrinsicColumns} data={data && data.extrinsic_detail} renderCell={extrinsicRender}/> }
          { title1 && title1.includes('Events') && <ListView columns={eventColumns} data={data1 && data1.data} renderCell={eventRender}/> }
        </div>
      </div>
    </Layout>
  )
}

export default AccountDetail;
