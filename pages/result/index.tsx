import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { useMediaQuery } from 'react-responsive';
import Head from 'next/head'
import Back from 'components/assets/Back';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import style from './style.module.scss';

export interface SearchResultProps {
}

const SearchResult: React.FC<SearchResultProps> = () => {
  const router = useRouter();
  const [isLaptop, setIsLaptop] = useState(false);
  const [keyword, setKeyword] = useState("");
  const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });

  useEffect(()=>{
    if(!router.isReady) return;
    var search = router.query.search as string
    setKeyword(search)
  }, [router.isReady]);

  useEffect(() => {
    if(mediaQuery !== isLaptop){
      setIsLaptop(mediaQuery);
    }
  }, [mediaQuery])

  return(
    <>
      <Head>
        <title>Ternoa scan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ternoa scan, by Ternoa." />
      </Head>
      <div className={"mainContainer"}>
        <Header />
        <div className="mainBody">
          {isLaptop &&
          <div className="cursor-point w-fit-content mb-4" onClick={()=>router.back()}>
              <Back />
          </div>
          }
          <h1 className="subTitle subTitleMarginTop2">No results</h1>
          <div className={"mainBlock mt-2 mb-5 py-5 flex flex-center " + style.resultBlock}>
            <span className={style.resultText + " text-opacity"}>
            "No results found for {keyword}"
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default SearchResult