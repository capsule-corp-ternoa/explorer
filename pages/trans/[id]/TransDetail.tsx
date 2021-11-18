import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import { fields, render } from './table';
import { getTransfer } from 'apis/transfer';
import { ellipsifyMiddle } from 'helpers/lib';

export interface TransDetailProps {}

const TransDetail: React.FC<TransDetailProps> = () => {
  const [data, setData] = useState<any>(null)
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (id) {
      getTransfer(id).then(setData)
    }
  }, [id])

  if (!id) {
    return null
  }

  return (
    <Layout back='/trans'>
      <DetailView title={"Balance Transfer " + ellipsifyMiddle(id)} fields={fields} data={data} renderCell={render}/>
    </Layout>
  )
}

export default TransDetail;
