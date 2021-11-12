import React, { useState, useEffect } from 'react'
import { FormattedNumber } from 'react-intl';
import clsx from 'clsx'
import { useMediaQuery } from 'react-responsive';
import SearchBar from 'components/base/SearchBar';
import CAPSLogo from 'components/assets/CAPSLogo';
import MarketLogo from 'components/assets/MarketLogo';
import ExtrinsicLogo from 'components/assets/ExtrinsicLogo';
import BlockLogo from 'components/assets/BlockLogo';
import CAPSFlat from 'components/assets/CAPSFlat';
import style from './HomeScan.module.scss';

interface SummaryProps {
  capsPrice?: number
  marketCap?: number
  change24h?: number
  extrinsics?: number
  finalizedBlock?: number
}

const Summary: React.FC<SummaryProps> = ({
  capsPrice,
  marketCap,
  change24h,
  extrinsics,
  finalizedBlock
}) => {
  const [isLaptop, setIsLaptop] = useState(false);
  const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });

  useEffect(() => {
    if(mediaQuery !== isLaptop){
      setIsLaptop(mediaQuery);
    }
  }, [mediaQuery])
  
  return (
    <div className="position-relative">
      <div className={style.gradientBack}></div>
      <div className={style.searchForm + " position-relative"}>
        <div className={`${style.searchTitle} ${isLaptop ? 'mb-4 ms-4' : 'mb-4'}`}>The Ternoa blockchain explorer</div>
        <SearchBar hasButton={true} isLarge={true} />
        {isLaptop && (
          <div className="d-flex mt-5 ms-4">
            <div className={`${style.searchBarInfo} pe-5 border-end`}>
              <div className="d-flex flex-items-center">
                <div className='pt-2'>
                  <CAPSLogo className={style.Logo}></CAPSLogo>
                </div>
                <div className={"d-flex flex-column ms-3"}>
                  <div className="fs-6 text-opacity-4 text-ellipsis">CAPS price</div>
                  <div className="d-flex fs-5 fw-bold">
                    {capsPrice !== undefined && <FormattedNumber value={capsPrice} format='caps' />}
                    <span className={clsx(
                      style.logoPercent,
                      'ms-2 mt-2',
                      {[style.minus]: change24h !== undefined && (change24h < 0)})
                    }>
                      {change24h !== undefined && (
                        <FormattedNumber value={change24h / 100} format='percentChange' />
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
              <div className={`${style.searchBarInfo} pe-5 ps-5 border-end`}>
                <div className="d-flex flex-items-center">
                  <div className='pt-2'>
                    <MarketLogo className={style.Logo}></MarketLogo>
                  </div>
                  <div className={`d-flex flex-column ms-3`}>
                    <div className="fs-6 text-opacity-4 text-ellipsis">Market cap</div>
                    <div className="fs-5 fw-bold">
                      {marketCap !== undefined && <FormattedNumber value={marketCap} format='priceDecimal' />}
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${style.searchBarInfo} pe-5 ps-5 border-end`}>
                <div className="d-flex flex-items-center">
                  <div className='pt-2'>
                    <ExtrinsicLogo className={style.Logo}></ExtrinsicLogo>
                  </div>
                  <div className={`d-flex flex-column ms-3`}>
                    <div className="fs-6 text-opacity-4 text-ellipsis">Extrinsics</div>
                    <div className="fs-5 fw-bold">
                      {extrinsics != null && <FormattedNumber value={extrinsics} format='decimal' />}
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${style.searchBarInfo} ps-5`}>
                <div className="d-flex flex-items-center">
                  <div className='pt-2'>
                    <BlockLogo className={style.Logo}></BlockLogo>
                  </div>
                  <div className={`d-flex flex-column ms-3`}>
                    <div className="fs-6 text-opacity-4 text-ellipsis">Finalized Block</div>
                    <div className="fs-5 fw-bold">
                      {finalizedBlock != null && <FormattedNumber value={finalizedBlock} format='decimal' />}
                    </div>
                  </div>
                </div>
              </div>
          </div>
        )}
        {!isLaptop && (
          <div className="flex flex-col mt-4 mb-1 ps-2">
            <div className="flex-1 flex flex-row">
              <div className="flex-1 flex flex-col">
                <div className="flex flex-row flex-items-center">
                  <ExtrinsicLogo className={style.Logo}></ExtrinsicLogo>
                  <div className="flex-1 flex flex-col ms-2">
                    <span className="fs-6 text-opacity-4 text-ellipsis">Extrinsics</span>
                    <span className={`${style.logoSummary} fs-5 fw-bold`}>
                      {extrinsics != null && <FormattedNumber value={extrinsics} format='decimal' />}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col ms-2">
                <div className="flex flex-row flex-items-center">
                  <CAPSFlat className={style.Logo}></CAPSFlat>
                  <div className="flex-1 flex flex-col ms-2">
                    <span className="fs-6 text-opacity-4 text-ellipsis">CAPS price</span>
                    <div className={style.logoSummary}>
                      {capsPrice !== undefined && <FormattedNumber value={capsPrice} />}
                      <span className={clsx(style.logoPercent, 'ms-2', {[style.minus]: change24h !== undefined && change24h < 0})}>
                        {change24h !== undefined && (
                          <FormattedNumber value={change24h / 100} format='percentChange' />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row mt-4">
              <div className="flex-1 flex flex-col">
                <div className="flex flex-row flex-items-center">
                  <BlockLogo className={style.Logo}></BlockLogo>
                  <div className="flex-1 flex flex-col ms-2">
                    <span className="fs-6 text-opacity-4 text-ellipsis">Finalized Block</span>
                    <span className={style.logoSummary}>
                      {finalizedBlock != null && (
                        <FormattedNumber value={finalizedBlock} format='decimal' />
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col ms-2">
                <div className="flex flex-row flex-items-center">
                  <MarketLogo className={style.Logo}></MarketLogo>
                  <div className="flex-1 flex flex-col ms-2">
                    <span className="fs-6 text-opacity-4 text-ellipsis">Market cap</span>
                    <span className={style.logoSummary}>
                      {marketCap !== undefined && <FormattedNumber format='priceDecimal' value={marketCap} />}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Summary
