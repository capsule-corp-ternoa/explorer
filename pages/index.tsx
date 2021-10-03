import React from 'react'
import HomeScan from 'components/home-scan'
import BlockIndex from 'components/block-index'
import BlockDetail from 'components/block-detail'
import { NextPage } from 'next'

export interface HomeProps {
}
const Home: NextPage<HomeProps> = () => {

  return (
    <BlockDetail />
  )
}

export default Home;