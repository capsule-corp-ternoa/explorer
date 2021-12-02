import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import ErrorDesktop from 'components/assets/ErrorDesktop';
import ErrorMobile from 'components/assets/ErrorMobile';
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
      <div className="ellipse3"></div>
      <div className="only-desktop">
        <div className="d-flex justify-content-center align-items-center">
          <ErrorDesktop />
        </div>
      </div>
      <div className="only-mobile">
        <div className="d-flex justify-content-center align-items-center">
          <ErrorMobile />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <div className={style.error + " mb-5"}>Error 404 · page not found</div>
        <div className={style.script}>The page you are looking for might have been</div>
        <div className={style.script}>removed had its name changed or is temporarily</div>
        <div className={style.script}>unvailable</div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Link href="/">
          <a className={style.return}>
            <div
              className={style.returnButton + " d-flex btn btn-info rounded-pill flex-items-center px-5"}
            >
              Return to Dashboard
            </div>
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export default SearchResult