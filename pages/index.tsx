import React from 'react'
import { useRouter } from "next/router";
import HomeScan from './home-scan'
// import BlockIndex from 'components/block-index'
// import BlockDetail from 'components/block-detail'
import { NextPage } from 'next'

export interface HomeProps {
}
const Home: NextPage<HomeProps> = () => {
  const router = useRouter();

  return (
    <HomeScan />
  )
}

export default Home;