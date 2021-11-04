import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { useMediaQuery } from 'react-responsive';
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
    <Layout>
      <h1 className="subTitle">No result</h1>
      <div className={"mainBlock mt-2 mb-5 py-5 flex flex-center " + style.resultBlock}>
        <span className={style.resultText + " text-opacity"}>
          No results found for "{keyword}"
        </span>
      </div>
    </Layout>
  )
}

export default SearchResult