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
      <h1 className="subTitle">{ellipsifyMiddle(id)}</h1>
      <DetailView fields={fields} data={data} renderCell={render} />

      {data && data.last_extrinsics && (
        <>
          {/* <h1 className="subTitle mt-4">
            {data.last_extrinsics.length} last {data.last_extrinsics.length > 1 ? 'extrinsics' : 'extrinsic'}
          </h1> */}
          <ListView title={data.last_extrinsics.length + 'last' + (data.last_extrinsics.length > 1 ? 'extrinsics' : 'extrinsic')} columns={extrinsicColumns} data={data.last_extrinsics} renderCell={renderExtrinsic} />
        </>
      )}
    </Layout>
  )
}

export default AccountDetail;
