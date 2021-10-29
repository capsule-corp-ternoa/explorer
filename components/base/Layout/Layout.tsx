import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import Back from 'components/assets/Back';

interface LayoutProps {
  children?: React.ReactNode
  back?: string
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ children, back, title }) => (
  <>
    <Head>
      <title>Ternoa Scan</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Ternoa scan, by Ternoa." />
    </Head>
    <div className="mainContainer">
      <Header/>
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
        <h1 className="subTitle">{title}</h1>
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
