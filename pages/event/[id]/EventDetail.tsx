import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import Back from 'components/assets/Back';
import Layout from 'components/base/Layout';
import DetailView from 'components/base/DetailView';
import { eventFields, eventRender } from './table'
import { getEvent } from 'apis/event';

export interface ExtrinsicDetailProps {}

const EventDetail: React.FC<ExtrinsicDetailProps> = () => {
  const [data, setData] = useState<any>(null)
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (id) {
      getEvent(id).then(setData)
    }
  }, [id])

  if (!id) {
    return null
  }

  return (
    <Layout>
      <div className="custom_table">
        <div className="d-flex align-items-center mb-5">
          <div className="cursor-point w-fit-content me-4">
            <Link href={'/event'}>
              <a><Back /></a>
            </Link>
          </div>
          <h1 className="title my-2 ms-1">Event # {id}</h1>
        </div>
        <DetailView fields={eventFields} data={data} renderCell={eventRender}/>
      </div>
    </Layout>
  )
}

export default EventDetail;
