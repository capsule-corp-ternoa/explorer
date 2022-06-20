import React from 'react'
import Head from 'next/head'
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { toUpperCase } from 'helpers/lib';
import Script from 'next/script';

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
  const network =
    process.env.NEXT_PUBLIC_INDEXER_BASE_URL &&
    process.env.NEXT_PUBLIC_INDEXER_BASE_URL.includes('alphanet')
      ? 'Alphanet'
      : 'Mainnet';
  return(
    <>
      <Head>
        <title>Ternoa Explorer • {network}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ternoa Blockchain Explorer, by Ternoa." />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', ${process.env.NEXT_PUBLIC_GA});
          `}
        </Script>
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
