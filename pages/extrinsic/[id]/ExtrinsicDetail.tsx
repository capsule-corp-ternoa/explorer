import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import Back from 'components/assets/Back';
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import ParameterView from 'components/base/ParameterView';
import ListView from 'components/base/ListView';
import { eventColumns, eventRender, parameterFields, parameterRender, extrinsicFields, extrinsicRender } from './table'
import { getExtrinsic, getExtrinsicParams } from 'apis/extrinsic';
import { searchEventbyExtrinsic } from 'apis/event';
import { ellipsifyMiddle } from 'helpers/lib';

export interface ExtrinsicDetailProps {}

const ExtrinsicDetail: React.FC<ExtrinsicDetailProps> = () => {
  const [data, setData] = useState<any>(null)
  const [data1, setData1] = useState<any>(null)
  const [data2, setData2] = useState<any>(null)
  const [title1, setTitle1] = useState<string>()
  const [title2, setTitle2] = useState<string>()
  const [title3, setTitle3] = useState<string>()
  const [isFirst, setIsFirst] = useState<boolean>(true)
  const [isSecond, setIsSecond] = useState<boolean>(false)
  const [isThird, setIsThird] = useState<boolean>(false)
  const router = useRouter()
  const [isTitleOpen, setIsTitleOpen] = useState<boolean>(false)
  const id = router.query.id as string

  useEffect(() => {
    if (id) {
      getExtrinsic(id).then(setData)
      getExtrinsicParams(id).then(data => {
        setData2(data?.args);
      })
      searchEventbyExtrinsic(id).then(setData1)
    }
  }, [id])

  useEffect(() => {
    setIsTitleOpen(false);
  }, [])
  
  useEffect(() => {
    { data && setTitle1("Extrinsic: " + ellipsifyMiddle(data.hash));}
  }, [data])

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
    if (title.includes('Extrinsic')) {
      if(data) setTitle1("Extrinsic: " + ellipsifyMiddle(data.hash));
      setTitle2('Parameters');
      setTitle3('Events');
    } else if (title.includes('Parameters')) {
      setTitle1('Parameters');
      if(data) setTitle2("Extrinsic: " + ellipsifyMiddle(data.hash));
      setTitle3('Events');
    } else if (title.includes('Events')) {
      setTitle1('Events');
      setTitle2('Parameters');
      if(data) setTitle3("Extrinsic: " + ellipsifyMiddle(data.hash));
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
            <Link href={'/extrinsic'}>
              <a><Back className="back"/></a>
            </Link>
          </div>
          <div className="only-desktop">
            <div className="ui-switch">
              { data && <div className={"ui-switch__btn " + (isFirst? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectFirst("Extrinsic: " + ellipsifyMiddle(data.hash))}>Extrinsic: {data && ellipsifyMiddle(data.hash)}</div>}
              <div className={"ui-switch__btn " + (isSecond? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectSecond("Parameters")}>Parameters</div>
              <div className={"ui-switch__btn " + (isThird? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectThird("Events")}>Events</div>
            </div>
          </div>
          <div className="only-mobile">
            <div className="ui-switch" onClick={() => onSelectTitle()}>
              <div className={"ui-switch__btn ui-switch__primary"} onClick={() => onSelectFirst(title1!)}>{title1}</div>
              <div className={"ui-switch__btn " + (isTitleOpen? 'ui-switch__secondary' : 'ui-switch__none')} onClick={() => onSelectSecond(title2!)}>{title2}</div>
              <div className={"ui-switch__btn " + (isTitleOpen? 'ui-switch__secondary' : 'ui-switch__none')} onClick={() => onSelectThird(title3!)}>{title3}</div>
            </div>
          </div>
        </div>
        <div className="only-desktop">
          { isFirst && <DetailView fields={extrinsicFields} data={data} renderCell={extrinsicRender}/> }
          { isSecond && <ParameterView data={data2} columns={parameterFields} renderCell={parameterRender} /> }
          { isThird && <ListView columns={eventColumns} data={data1 && data1.data} renderCell={eventRender}/> }      
        </div>
        <div className="only-mobile">
          { title1 && title1.includes('Extrinsic') && <DetailView fields={extrinsicFields} data={data} renderCell={extrinsicRender}/> }
          { title1 && title1.includes('Parameters') && <ParameterView data={data2} columns={parameterFields} renderCell={parameterRender} /> }
          { title1 && title1.includes('Events') && <ListView columns={eventColumns} data={data1 && data1.data} renderCell={eventRender}/> }
        </div>
      </div>
    </Layout>
  )
}

export default ExtrinsicDetail;
