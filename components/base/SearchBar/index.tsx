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
    <div className="flex flex-1 flex-items-center position-relative">
      <input
        type="text"
        value={keyword}
        placeholder="Search by address / Txn Hash / Block"
        className={`${style.searchInput} ${props.isLarge && style.inputLarge}`}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') searchAll()
        }}
      />
      {!props.isLarge &&
        <div className={style.searchIcon} onClick={() => searchAll()}>
          <Search />
        </div>}
      {props.hasButton &&
        <button disabled={keyword && keyword.length>1 ? false : true} className={`${style.searchButton}`} onClick={() => searchAll()} >
          Search
        </button>
      }
    </div>
  )
}

export default SearchBar