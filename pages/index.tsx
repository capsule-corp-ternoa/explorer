import React from 'react'
import HomeScan from 'components/home-scan'
import { NextPage } from 'next'

export interface HomeProps {
}
const Home: NextPage<HomeProps> = () => {

  return (
    <HomeScan />
  )
}

export default Home;