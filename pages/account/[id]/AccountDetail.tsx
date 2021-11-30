import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import Back from 'components/assets/Back';
import Layout from 'components/base/Layout';
import ListView from 'components/base/ListView';
import DetailView from 'components/base/DetailView';
import { fields, render } from './table'
import { columns as extrinsicColumns, render as renderExtrinsic } from 'pages/extrinsic/table'
import { getAccount } from 'apis/account';
import { ellipsifyMiddle } from 'helpers/lib';

export interface AccountDetailProps {}

const AccountDetail: React.FC<AccountDetailProps> = () => {
  const [data, setData] = useState<any>(null)
  const [title1, setTitle1] = useState<string>()
  const [title2, setTitle2] = useState<string>()
  const [isFirst, setIsFirst] = useState<boolean>(true)
  const [isSecond, setIsSecond] = useState<boolean>(false)
  const [isTitleOpen, setIsTitleOpen] = useState<boolean>(false)
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (id) {
      getAccount(id, 3).then(setData)
      setTitle1(ellipsifyMiddle(id));
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
    if(isTitleOpen) selectTitle(title)
  }
  
  const onSelectSecond = (title: string) => {
    setIsFirst(false)
    setIsSecond(true)
    if(isTitleOpen) selectTitle(title)
  }

  const selectTitle = (title: string) => {
    if (!title.includes('last')) {
      setTitle1(ellipsifyMiddle(id));
      { data && setTitle2(data.last_extrinsics.length + ' last ' + (data.last_extrinsics.length > 1 ? 'extrinsics' : 'extrinsic')); }
    } else {
      { data && setTitle1(data.last_extrinsics.length + ' last ' + (data.last_extrinsics.length > 1 ? 'extrinsics' : 'extrinsic')); }
      setTitle2(ellipsifyMiddle(id));
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
            <Link href={'/account'}>
              <a><Back className="back"/></a>
            </Link>
          </div>
          <div className="only-desktop">
            <div className="ui-switch">
              <div className={"ui-switch__btn " + (isFirst? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectFirst(ellipsifyMiddle(id))}>{ellipsifyMiddle(id)}</div>
              { data && data.last_extrinsics && <div className={"ui-switch__btn " + (isSecond? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectSecond(data.last_extrinsics.length + ' last ' + (data.last_extrinsics.length > 1 ? 'extrinsics' : 'extrinsic'))}>{data.last_extrinsics.length + ' last ' + (data.last_extrinsics.length > 1 ? 'extrinsics' : 'extrinsic')}</div>}
            </div>
          </div>
          <div className="only-mobile">
            <div className="ui-switch" onClick={() => onSelectTitle()}>
              <div className={"ui-switch__btn ui-switch__primary"} onClick={() => onSelectFirst(title1!)}>{title1}</div>
              <div className={"ui-switch__btn " + (isTitleOpen? 'ui-switch__secondary' : 'ui-switch__none')} onClick={() => onSelectSecond(title2!)}>{title2}</div>
            </div>
          </div>
        </div>
        <div className="only-desktop">
          { isFirst && <DetailView fields={fields} data={data} renderCell={render} /> }
          { isSecond && data && data.last_extrinsics &&
            <ListView columns={extrinsicColumns} data={data && data.last_extrinsics} renderCell={renderExtrinsic} />
          }
        </div>
        <div className="only-mobile">
          { title1 && !title1.includes('last') && <DetailView fields={fields} data={data} renderCell={render} /> }
          { title1 && title1.includes('last') && data && data.last_extrinsics && <ListView columns={extrinsicColumns} data={data && data.last_extrinsics} renderCell={renderExtrinsic} /> }
        </div>
      </div>
    </Layout>
  )
}

export default AccountDetail;
