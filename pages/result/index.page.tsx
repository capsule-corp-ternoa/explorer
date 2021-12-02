import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import Back from 'components/assets/Back';
import Layout from 'components/base/Layout';
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

  return (
    <Layout back='/'>
      <div className="ellipse3"></div>
      <div className="custom_table">
        <div className="sub_header">
          <div className="cursor-point w-fit-content me-4 only-desktop">
            <Link href={'/'}>
              <a><Back className="back"/></a>
            </Link>
          </div>
          <h1 className="title my-2 ms-1">No result</h1>
        </div>
        <div className={"mainBlock mt-2 mb-5 py-5 flex flex-center " + style.resultBlock}>
          <div className="only-desktop">
            <span className={style.resultText}>
              No data was found as a result of your search
            </span>
          </div>
          <div className={style.resultText + " only-mobile"}>
            <div className="mb-2">No data was found as a</div>
            <div className="mt-2">result of your search</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SearchResult