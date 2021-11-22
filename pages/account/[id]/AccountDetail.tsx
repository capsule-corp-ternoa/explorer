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
  const [isFirst, setIsFirst] = useState<boolean>(true)
  const [isSecond, setIsSecond] = useState<boolean>(false)
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (id) {
      getAccount(id, 3).then(setData)
    }
  }, [id])

  if (!id) {
    return null
  }

  const onSelectFirst = () => {
    setIsFirst(true)
    setIsSecond(false)
  }
  
  const onSelectSecond = () => {
    setIsFirst(false)
    setIsSecond(true)
  }

  return (
    <Layout>
      <div className="custom_table pb-3">
        <div className="d-flex align-items-center my-3">
          <div className="cursor-point w-fit-content me-5">
            <Link href={'/account'}>
              <a><Back /></a>
            </Link>
          </div>
          <div className="ui-switch">
            <div className={"ui-switch__btn " + (isFirst? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectFirst()}>{ellipsifyMiddle(id)}</div>
            <div className={"ui-switch__btn " + (isSecond? 'ui-switch__primary' : 'ui-switch__secondary')} onClick={() => onSelectSecond()}>{data && data.last_extrinsics.length + ' last ' + (data.last_extrinsics.length > 1 ? 'extrinsics' : 'extrinsic')}</div>
          </div>
        </div>
        { isFirst && <DetailView fields={fields} data={data} renderCell={render} /> }
        { isSecond && data && data.last_extrinsics &&
          <ListView columns={extrinsicColumns} data={data && data.last_extrinsics} renderCell={renderExtrinsic} />
        }
      </div>
    </Layout>
  )
}

export default AccountDetail;
