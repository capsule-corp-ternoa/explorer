import React, { useState, useCallback } from 'react';
import { useRouter } from "next/router";
import style from './style.module.scss';
import Search from 'components/assets/Search';
import { searchAccount } from 'apis/account';
import { searchExtrinsic } from 'apis/extrinsic';
import { searchBlock } from 'apis/block';
import { searchNftTransfer } from 'apis/nft-transfer';

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
    const noResult = `/result?search=${searchKey}`

    if (searchKey.startsWith('0x')) {
      searchExtrinsic(searchKey)
        .then(res => router.push(res.length ? `/extrinsic/${res[0].id}` : noResult))
    } else if (/^5[a-zA-Z]/.test(searchKey)) {
      searchAccount(searchKey)
        .then(res => router.push(res.length ? `/account/${res[0].id}` : noResult))
    } else if (Number(keyword).toString() === keyword) {
      searchBlock(searchKey)
        .then(res => router.push(res.length ? `/block/${res[0].number}` : noResult))
    } else {
      searchNftTransfer(searchKey)
        .then(res => router.push(res.length ? `/nft/${res[0].number}` : noResult))
    }
  }, [keyword])

  return (
    <div className="flex flex-row flex-items-center">
      <div className="flex flex-1 flex-items-center position-relative">
        <input
          type="text"
          value={keyword}
          placeholder="Search by address / Txn Hash / Block"
          className={style.searchInput + " " + (props.isLarge?style.inputLarge:style.inputMedium)}
          onChange={(e) => setKeyword(e.target.value)}
          onFocus={(e) => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) searchAll()
          }}
        />
        <div className={style.searchIcon + " cursor-point " + (props.isLarge? "d-none" : "")} onClick={() => searchAll()}>
          <Search />
        </div>
        {isFocus &&
        <div className={"search-gradient " + (props.isLarge?style.inputLarge:style.inputMedium)}/>
        }
        {props.hasButton &&
        <div
          className={style.searchButton + " d-none d-lg-flex btn btn-info rounded-pill flex-items-center px-5"}
          onClick={() => searchAll()}
        >
          Search
        </div>
        }
      </div>
    </div>
  )
}

export default SearchBar