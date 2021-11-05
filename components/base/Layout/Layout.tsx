import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import Back from 'components/assets/Back';

interface LayoutProps {
  searchBar?: boolean
  children?: React.ReactNode
  back?: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  searchBar,
  back,
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
        {back && (
          <Link href={back}>
            <a>
              <div className="cursor-point w-fit-content mb-4">
                <Back />
              </div>
            </a>
          </Link>
        )}
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
