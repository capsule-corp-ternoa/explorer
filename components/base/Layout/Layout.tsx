import React from 'react'
import Head from 'next/head'
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';

interface LayoutProps {
  searchBar?: boolean
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({
  children,
  searchBar,
}) => (
  <>
    <Head>
      <title>Ternoa Scan</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Ternoa scan, by Ternoa." />
    </Head>
    <div className="mainContainer">
      <Header searchBar={searchBar} />
      <div className="mainBody">
        {children}
      </div>
      <Footer/>
    </div>
  </>
)

Layout.defaultProps = {
  searchBar: true
}

export default Layout
