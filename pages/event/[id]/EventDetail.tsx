import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
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
    <Layout back='/event'>
      <DetailView title={"Event # " + (id)} fields={eventFields} data={data} renderCell={eventRender}/>
    </Layout>
  )
}

export default EventDetail;
