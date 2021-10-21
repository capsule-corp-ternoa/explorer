import React, { useState, useEffect } from 'react';
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

  const isNumber = (n:any) => { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }

  const searchAll = () => {
    if (isNumber(keyword)) {
      var number = parseInt(keyword)
      var block = blockData.filter(function(item) {
        return item.number == number
      })
      if (block.length != 0) {
        router.push({
          pathname: '/block/' + keyword
        })
        return
      }
    } else {
      console.log(keyword)
      var nft = nftData.filter(function(item) {
        return item.name_id == keyword
      })
      if (nft.length != 0) {
        router.push({
          pathname: '/nft/' + keyword
        })
        return
      }
  
      var account = accountData.filter(function(item) {
        return item.address == keyword
      })
      if (account.length != 0) {
        router.push({
          pathname: '/account/' + keyword
        })
        return
      }
    }
    router.push("/result?search=" + keyword)
  }

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