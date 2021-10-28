import React from 'react'
import Head from 'next/head'
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';

interface LayoutProps {
  children?: React.ReactNode,
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'Ternoa scan' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Ternoa scan, by Ternoa." />
    </Head>
    <div className="mainContainer">
      <Header/>
      <div className="mainBody">
        <h1 className="subTitle subTitleMarginTop">All Accounts</h1>
        <div className="mainBlock pb-4 mt-2">
          <div className = "tag-for-scroll">
            {children}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  </>
)

export default Layout
