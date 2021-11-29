import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import Back from 'components/assets/Back';
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
    <Layout>
      <div className="ellipse3"></div>
      <div className="custom_table">
        <div className="sub_header">
          <div className="cursor-point w-fit-content me-4 only-desktop">
            <Link href={'/trans'}>
              <a><Back className="back"/></a>
            </Link>
          </div>
          <h1 className="title my-2 ms-1">Balance Transfer " {ellipsifyMiddle(id)}"</h1>
        </div>
        <DetailView fields={fields} data={data} renderCell={render}/>
      </div>
    </Layout>
  )
}

export default TransDetail;
