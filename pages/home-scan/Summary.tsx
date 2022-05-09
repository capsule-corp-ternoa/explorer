import React, { useState, useEffect } from 'react'
import { FormattedNumber } from 'react-intl';
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
  loading:boolean
}

const Summary: React.FC<SummaryProps> = ({
  capsPrice,
  marketCap,
  change24h,
  extrinsics,
  finalizedBlock,
  loading
}) => {
  const [isLaptop, setIsLaptop] = useState(false);
  const mediaQuery = useMediaQuery({ query: '(min-width: 950px)' });
  useEffect(() => {
    if(mediaQuery !== isLaptop){
      setIsLaptop(mediaQuery);
    }
  }, [mediaQuery])

  return (
    <div className={style.searchForm + " position-relative"}>
      <SearchBar hasButton={true} isLarge={true} />
      {isLaptop && (
        <div className="d-flex mt-5 justify-content-center">
          <div className={`${style.searchBarInfo} pe-5 border-end`}>
            <div className="d-flex flex-items-center">
              <div className=''>
                <CAPSLogo className={style.Logo}></CAPSLogo>
              </div>
              <div className={"d-flex flex-column ms-3"}>
                <div className="text-opacity-4 text-ellipsis">CAPS price</div>
                  <div className="d-flex text-price fw-bold">
                  {loading ? (
                    <span className="spinner-grow spinner-grow-sm mx-1 text-white-50" role="status" aria-hidden="true"></span>
                    ) : (
                    <>
                      {capsPrice !== undefined && <FormattedNumber value={capsPrice} format='caps' />}
                      <span className={`${style.logoPercent} ms-2 ${change24h && change24h < 0 && style.minus}`}>
                          {change24h && 
                            <FormattedNumber value={change24h / 100} format='percentChange' />
                          }
                      </span>
                    </>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
            <div className={`${style.searchBarInfo} pe-5 ps-5 border-end`}>
              <div className="d-flex flex-items-center">
                <div className=''>
                  <MarketLogo className={style.Logo}></MarketLogo>
                </div>
                <div className={`d-flex flex-column ms-3`}>
                  <div className="fs-6 text-opacity-4 text-ellipsis">Market cap</div>
                    <div className="text-price fw-bold">
                    {loading ? (
                      <span className="spinner-grow spinner-grow-sm mx-1 text-white-50" role="status" aria-hidden="true"></span>
                      ) : (
                      marketCap !== undefined && <FormattedNumber value={marketCap} format='priceDecimal' />
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className={`${style.searchBarInfo} pe-5 ps-5 border-end`}>
              <div className="d-flex flex-items-center">
                <div className=''>
                  <ExtrinsicLogo className={style.Logo}></ExtrinsicLogo>
                </div>
                <div className={`d-flex flex-column ms-3`}>
                  <div className="fs-6 text-opacity-4 text-ellipsis">Extrinsics</div>
                    <div className="text-price fw-bold">
                    {loading ? (
                      <span className="spinner-grow spinner-grow-sm mx-1 text-white-50" role="status" aria-hidden="true"></span>
                      ) : (
                      extrinsics != null && <FormattedNumber value={extrinsics} format='decimal' />
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className={`${style.searchBarInfo} ps-5`}>
              <div className="d-flex flex-items-center">
                <div className=''>
                  <BlockLogo className={style.Logo}></BlockLogo>
                </div>
                <div className={`d-flex flex-column ms-3`}>
                  <div className="fs-6 text-opacity-4 text-ellipsis">Finalized Block</div>
                    <div className="text-price fw-bold">
                      {loading ? (
                        <span className="spinner-grow spinner-grow-sm mx-1 text-white-50" role="status" aria-hidden="true"></span>
                        ) : (
                        finalizedBlock != null && <FormattedNumber value={finalizedBlock} format='decimal' />
                        )
                      }
                  </div>
                </div>
              </div>
            </div>
        </div>
      )}
    </div>
  )
}

export default Summary
