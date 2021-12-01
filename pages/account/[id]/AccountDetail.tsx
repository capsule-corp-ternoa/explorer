import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import Back from 'components/assets/Back';
import Layout from 'components/base/Layout';
import ListView from 'components/base/ListView';
import DetailView from 'components/base/DetailView';
import Switch from 'components/base/Switch';
import { fields, render } from './table'
import { columns as extrinsicColumns, render as renderExtrinsic } from 'pages/extrinsic/table'
import { getAccount } from 'apis/account';
import { ellipsifyMiddle } from 'helpers/lib';

export interface AccountDetailProps {}

enum DetailMode {
  ID,
  Extrinsic,
}

const AccountDetail: React.FC<AccountDetailProps> = () => {
  const [data, setData] = useState<any>(null)
  const [detailMode, setDetailMode] = useState<DetailMode>(DetailMode.ID)
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

  return (
    <Layout back='/account'>
      <div className="ellipse3"></div>
      <div className="custom_table">
        <div className="sub_header">
          <div className="cursor-point w-fit-content me-4 only-desktop">
            <Link href={'/account'}>
              <a><Back className="back"/></a>
            </Link>
          </div>
          <Switch
            options={[ellipsifyMiddle(id), 'Extrinsic']}
            selected={detailMode}
            onChange={setDetailMode}
          />
        </div>
          {detailMode === DetailMode.ID && (
            <DetailView fields={fields} data={data} renderCell={render} />
          )}
          {detailMode === DetailMode.Extrinsic && data && data.last_extrinsics && (
            <ListView columns={extrinsicColumns} data={data && data.last_extrinsics} renderCell={renderExtrinsic} />
          )}
      </div>
    </Layout>
  )
}

export default AccountDetail;
