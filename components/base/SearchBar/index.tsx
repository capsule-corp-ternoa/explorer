import React, { useState, useCallback } from 'react';
import { useRouter } from "next/router";
import style from './style.module.scss';
import Search from 'components/assets/Search';

import blockData from 'components/data/blocks.json'
import nftData from 'components/data/nft.json'
import accountData from 'components/data/accounts.json'

export interface SearchBarProps {
  hasButton?: Boolean
  isLarge?: Boolean
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [keyword, setKeyword] = useState("")
  const [isFocus, setIsFocus] = useState(false)
  const router = useRouter();

  const searchAll = useCallback(() => {
    const searchKey = keyword.trim()
  }, [keyword])

  return (
    <div className="flex flex-row flex-items-center">
      <div className="flex flex-1 flex-items-center position-relative">
        <input
          type="text"
          value={keyword}
          placeholder="Search by address / Txn Hash / Block / NFT"
          className={style.searchInput + " " + (props.isLarge?style.inputLarge:style.inputMedium)}
          onChange={(e) => setKeyword(e.target.value)}
          onFocus={(e) => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) searchAll()
          }}
        />
        {isFocus &&
        <div className={"search-gradient " + (props.isLarge?style.inputLarge:style.inputMedium)}/>
        }
        <Search className={style.searchIcon}/>
      </div>
      {props.hasButton &&
      <div
        className={style.searchButton + " d-none d-lg-flex btn btn-primary rounded-pill flex-items-center px-5"}
        onClick={() => searchAll()}
      >
        Search
      </div>
      }
    </div>
  )
}

export default SearchBar