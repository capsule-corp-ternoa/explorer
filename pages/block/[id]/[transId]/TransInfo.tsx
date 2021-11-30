import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import Back from 'components/assets/Back';
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import ParameterView from 'components/base/ParameterView';
import { parameterFields, parameterRender, extrinsicFields, extrinsicRender } from 'pages/extrinsic/[id]/table'
import { getExtrinsic, getExtrinsicParams } from 'apis/extrinsic';
import { ellipsifyMiddle } from 'helpers/lib';

export interface TransInfoProps {}

const TransInfo: React.FC<TransInfoProps> = () => {
  const [data, setData] = useState<any>(null)
  const [data1, setData1] = useState<any>(null)
  const [title1, setTitle1] = useState<string>("")
  const [title2, setTitle2] = useState<string>("")
  const [isFirst, setIsFirst] = useState<boolean>(true)
  const [isSecond, setIsSecond] = useState<boolean>(false)
  const [isTitleOpen, setIsTitleOpen] = useState<boolean>(false)
  const router = useRouter()
  const id = router.query.id as string
  const transId = router.query.transId as string

  useEffect(() => {
    if (transId) {
      getExtrinsic(transId).then(setData)
      getExtrinsicParams(transId).then(data => {
        setData1(data?.args);
      })
    }
  }, [transId])

  useEffect(() => {
    setIsTitleOpen(false);
    if(data) {
      setTitle1("Extrinsic: " + ellipsifyMiddle(data.hash));
    } 
  }, [])
  
  useEffect(() => {
    if(data) {
      setTitle1("Extrinsic: " + ellipsifyMiddle(data.hash));
    } 
  }, [data])

  if (!transId || !id) {
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
    if (title.includes('Extrinsic')) {
      if(data) setTitle1("Extrinsic: " + ellipsifyMiddle(data.hash));
      setTitle2('Parameters');
    } else if (title.includes('Parameters')) {
      setTitle1('Parameters');
      if(data) setTitle2("Extrinsic: " + ellipsifyMiddle(data.hash));
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
            <Link href={`/block/${id}`}>
              <a><Back className="back"/></a>
            </Link>
          </div>
          <div className="only-desktop">
            <div className="ui-switch">
              {data && <div className={"ui-switch__btn " + (isFirst? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectFirst("Extrinsic: " + ellipsifyMiddle(data.hash))}>Extrinsic: {data && ellipsifyMiddle(data.hash)}</div>}
              <div className={"ui-switch__btn " + (isSecond? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectSecond("Parameters")}>Parameters</div>
            </div>
          </div>
          <div className="only-mobile">
            <div className="ui-switch" onClick={() => onSelectTitle()}>
              <div className={"ui-switch__btn ui-switch__primary"} onClick={() => onSelectFirst(title1)}>{title1}</div>
              <div className={"ui-switch__btn " + (isTitleOpen? 'ui-switch__secondary' : 'ui-switch__none')} onClick={() => onSelectSecond(title2)}>{title2}</div>
            </div>
          </div>
        </div>
        <div className="only-desktop">
          { isFirst && <DetailView fields={extrinsicFields} data={data} renderCell={extrinsicRender}/> }
          { isSecond && data && data.args_name && 
            <>
              <ParameterView 
                data={data1}
                columns={parameterFields}
                renderCell={parameterRender}
              />
            </>
          }
        </div>
        <div className="only-mobile">
          { title1 && title1.includes('Extrinsic') && <DetailView fields={extrinsicFields} data={data} renderCell={extrinsicRender}/> }
          { title1 && title1.includes('Parameters') && data && data.args_name && 
            <>
              <ParameterView 
                data={data1}
                columns={parameterFields}
                renderCell={parameterRender}
              />
            </> 
          }
        </div>
      </div>
    </Layout>
  )
}

export default TransInfo;
