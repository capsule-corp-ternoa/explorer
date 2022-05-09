import React from 'react'
import Head from 'next/head'
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { toUpperCase } from 'helpers/lib';

interface LayoutProps {
  searchBar?: boolean
  children?: React.ReactNode
  back?: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  searchBar,
  back,
}) => {
  const network = process.env.NEXT_PUBLIC_ENV ? toUpperCase(process.env.NEXT_PUBLIC_ENV) : "Mainnet"
  return(
    <>
      <Head>
        <title>Ternoa Explorer • {network}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ternoa Blockchain Explorer, by Ternoa." />
      </Head>
      <div className="mainContainer">
        <Header back={back} searchBar={searchBar} />
        <div className="mainBody">
          {children}
        </div>
        <Footer/>
      </div>
    </>
  )
}


Layout.defaultProps = {
  searchBar: true
}

export default Layout
