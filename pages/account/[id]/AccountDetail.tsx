import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
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
      <DetailView title={ellipsifyMiddle(id)} fields={fields} data={data} renderCell={render} />
      {data && data.last_extrinsics && (
        <div className="mt-5">
          <ListView title={data.last_extrinsics.length + ' last ' + (data.last_extrinsics.length > 1 ? 'extrinsics' : 'extrinsic')} columns={extrinsicColumns} data={data.last_extrinsics} renderCell={renderExtrinsic} />
        </div>
      )}
    </Layout>
  )
}

export default AccountDetail;
