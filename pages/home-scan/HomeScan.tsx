import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { FormattedNumber } from 'react-intl';
import Head from 'next/head'
import clsx from 'clsx'
import CAPSLogo from 'components/assets/CAPSLogo';
import TransactionIcon from 'components/assets/TransactionIcon';
import EditIcon from 'components/assets/EditIcon';
import CAPSDark from 'components/assets/CAPSDark';
import CAPSFlat from 'components/assets/CAPSFlat';
import Check from 'components/assets/Check';
import MarketLogo from 'components/assets/MarketLogo';
import TransactionLogo from 'components/assets/TransactionLogo';
import BlockLogo from 'components/assets/BlockLogo';
import SearchBar from 'components/base/SearchBar';
import Table from 'components/base/Table';
import style from './HomeScan.module.scss';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, ComposedChart, Bar } from 'recharts';
import blockData from 'components/data/blocks.json'
import nftData from 'components/data/nft.json'
import transData from 'components/data/trans.json'
import validatorData from 'components/data/validators.json'
import statData from 'components/data/statast.json'
import { renderLatestBlockCell } from './renders';

export interface HomeScanProps {
}

type CoinCapsule = {
  usd: number
  usd_24h_change: number
  usd_market_cap: number
}

const HomeScan: React.FC<HomeScanProps> = () => {
    
    const [isLaptop, setIsLaptop] = useState(false);
    const [data, setData] = useState<CoinCapsule | null>(null)
    const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });

    const [totalTrans, setTotalTrans] = useState(true);
    const [newAccount, setNewAccount] = useState(true);
    const [averBlock, setAverBlock] = useState(true);
    const rowCount = 4;

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=coin-capsule&vs_currencies=usd&include_24hr_change=true&include_market_cap=true')
            .then(res => res.json())
            .then(res => setData(res['coin-capsule']))
            .catch(() => {})
    }, [])

    return (
        <>
            <Head>
                <title>Ternoa scan</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Ternoa scan, by Ternoa." />
            </Head>
            <div className={"mainContainer"}>
                <Header searchBar={false} />
                <div className={"mainBody position-relative"}>
                    <div className={style.gradientBack}></div>
                    <div className={style.searchForm + " position-relative"}>
                        <div className={`${style.searchTitle} ${isLaptop ? 'mb-4 ms-4' : 'mb-4'}`}>The Ternoa blockchain explorer</div>
                        <SearchBar hasButton={true} isLarge={true} />
                        {isLaptop &&
                        <div className="d-flex mt-5 ms-4">
                            <div className={`${style.searchBarInfo} pe-5 border-end`}>
                                <div className="d-flex flex-items-center">
                                    <div className='pt-2'>
                                        <CAPSLogo className={style.Logo}></CAPSLogo>
                                    </div>
                                    <div className={"d-flex flex-column ms-3"}>
                                        <div className="fs-6 text-opacity-4 text-ellipsis">CAPS price</div>
                                        <div className="fs-5 fw-bold">
                                            {data && <FormattedNumber value={data.usd} format='caps' />}
                                            <span className={clsx(style.logoPercent, 'ms-2', {[style.minus]: data && (data.usd_24h_change < 0)})}>
                                                ({data && <FormattedNumber value={data.usd_24h_change / 100} format='percentChange' />})
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
                                            {data &&<FormattedNumber value={data.usd_market_cap} format='noDecimal' />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.searchBarInfo} pe-5 ps-5 border-end`}>
                                <div className="d-flex flex-items-center">
                                    <div className='pt-2'>
                                        <TransactionLogo className={style.Logo}></TransactionLogo>
                                    </div>
                                    <div className={`d-flex flex-column ms-3`}>
                                        <div className="fs-6 text-opacity-4 text-ellipsis">Transactions</div>
                                        <div className="fs-5 fw-bold">$1.347</div>
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
                                        <div className="fs-5 fw-bold">$2.000.000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                        {!isLaptop &&
                        <div className="flex flex-col mt-4 mb-1 ps-2">
                            <div className="flex-1 flex flex-row">
                                <div className="flex-1 flex flex-col">
                                    <div className="flex flex-row flex-items-center">
                                        <TransactionLogo className={style.Logo}></TransactionLogo>
                                        <div className="flex-1 flex flex-col ms-2">
                                            <span className="fs-6 text-opacity-4 text-ellipsis">Transactions</span>
                                            <span className={`${style.logoSummary} fs-5 fw-bold`}>1.347M</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col ms-2">
                                    <div className="flex flex-row flex-items-center">
                                        <CAPSFlat className={style.Logo}></CAPSFlat>
                                        <div className="flex-1 flex flex-col ms-2">
                                            <span className="fs-6 text-opacity-4 text-ellipsis">CAPS price</span>
                                            <div className={style.logoSummary}>
                                                {data && <FormattedNumber value={data.usd} />}
                                                <span className={clsx(style.logoPercent, 'ms-2', {[style.minus]: data && (data.usd_24h_change < 0)})}>
                                                    ({data && <FormattedNumber value={data.usd_24h_change / 100} format='percentChange' />})
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
                                            <span className={style.logoSummary}>2.000.000</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col ms-2">
                                    <div className="flex flex-row flex-items-center">
                                        <MarketLogo className={style.Logo}></MarketLogo>
                                        <div className="flex-1 flex flex-col ms-2">
                                            <span className="fs-6 text-opacity-4 text-ellipsis">Market cap</span>
                                            <span className={style.logoSummary}>
                                                {data && <FormattedNumber format='noDecimal' value={data.usd_market_cap} />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    
                    <div className={`row ${isLaptop ? 'mt-5' : ''}`}>
                        <div className={`col-sm-12 col-md-12 col-xl-6 ${isLaptop?"mt-5":"mt-2p5"}`}>
                            <div className="flex flex-row flex-items-end">
                                {!isLaptop && <BlockLogo className={style.blockLogo}></BlockLogo>}
                                <span className={"title " + style.blockTitle}>Latest Blocks</span>
                            </div>
                            {/* <Table
                              data={blockData.slice(0, rowCount)}
                              columns={['Number', 'Age', 'Transactions', 'Module Events', '']}
                              dataKeys={['number', 'age', 'transactions', 'module_events', 'details']}
                              renderCell={renderLatestBlockCell}
                            /> */}
                            <div className={style.block + " pb-4 mt-3"}>
                                {isLaptop &&
                                <table className={"table table-borderless mb-3 " + style.blockTable}>
                                    <thead>
                                        <tr className="fs-6 text-grey">
                                            <th style={{width:"27%"}} className="text-left ps-5">Number</th>
                                            <th style={{width:"23%"}} className="text-left">Age</th>
                                            <th style={{width:"15%"}}>Transactions</th>
                                            <th style={{width:"15%"}} className="text-no-wrap">Module Events</th>
                                            <th style={{width:"20%"}}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {blockData.slice(0, rowCount).map((item, key) => (
                                            <tr key={key}>
                                                <td className="text-large text-opacity text-left ps-5">{item.number}</td>
                                                <td className="text-large text-opacity text-left">{item.age + " hours ago"}</td>
                                                <td className="text-large text-opacity">{item.transactions}</td>
                                                <td className="text-large text-opacity text-right pe-5">{item.module_events}</td>
                                                <td>
                                                    <Link href={`/block/${item.number}`}>
                                                        <a>
                                                            <button className="btn btn-secondary rounded-pill px-4 py-2">
                                                                Details
                                                            </button>
                                                        </a>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                }

                                {!isLaptop && blockData.slice(0,rowCount).map((item, key) => { return (
                                <div key={key} className={"mobileView " + (key%2==1?"mobileDarkView":"")}>
                                    <div className="flex flex-row mt-2">
                                        <div className="flex-1 flex flex-row flex-items-center">
                                            <span className="mobileRowLabel me-1">Number</span>
                                            <span className="mobileValue">{item.number}</span>
                                        </div>
                                        <div className="flex-1 flex flex-row flex-items-center">
                                            <span className="mobileRowLabel me-1">Age</span>
                                            <span className="mobileValue">{item.age + " hours ago"}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-2">
                                        <div className="flex-1 flex flex-row flex-items-center">
                                            <span className="mobileRowLabel me-1">Transaction</span>
                                            <span className="mobileValue">{item.transactions}</span>
                                        </div>
                                        <div className="flex-1 flex flex-row flex-items-center">
                                            <span className="mobileRowLabel me-1">Module Event</span>
                                            <span className="mobileValue">{item.module_events}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-3 mb-2">
                                        <Link href={`/block/${item.number}`}>
                                            <a>
                                                <button className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                )})
                                }
                                {isLaptop && (
                                    <Link href='/block'>
                                        <a>
                                            <button className={"btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5 "+ style.blockButton}>Show all Blocks</button>
                                        </a>
                                    </Link>
                                )
                                }
                                {!isLaptop && (
                                    <div className="d-flex justify-content-center mt-4">
                                        <Link href='/block'>
                                            <a>
                                                <button className={"btn btn-black rounded-pill mobileNextButton"}>Show all Blocks</button> 
                                            </a>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        {isLaptop && 
                        <div className="col-sm-12 col-md-12 col-xl-6 mt-5">
                            <div className="flex flex-row flex-items-end">
                                {!isLaptop && <TransactionIcon className={style.blockLogo}></TransactionIcon>}
                                <span className={"title " + style.blockTitle}>NFT transactions</span>
                            </div>
                            <div className={style.block + " pb-4 mt-3"}>
                                <table className={"table table-borderless mb-3 " + style.blockTable}>
                                    <thead>
                                        <tr className="fs-6 text-grey">
                                            <th style={{width:"33%"}} className="text-left ps-5">Name/ID</th>
                                            <th style={{width:"32%"}} className="text-left">Creator</th>
                                            <th style={{width:"15%"}}>ID</th>
                                            <th style={{width:"20%"}}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {nftData.slice(0,rowCount).map((item, key) => { return (
                                        <tr key={key} className="position-relative">
                                            <td className="text-large text-opacity text-left textToken ps-5">{item.name_id}</td>
                                            <td className="text-large text-opacity flex flex-row flex-items-center text-left">
                                                <CAPSDark className="webIcon me-2" />
                                                <span className="textToken">{item.creator}</span>    
                                            </td>
                                            <td className="text-large text-opacity">{item.id}</td>
                                            <td className="text-right pe-5">
                                                <Link href={`/nft/${item.name_id}`}>
                                                    <a>
                                                        <button className={"btn btn-secondary rounded-pill px-4 py-2"}>Details</button>
                                                    </a>
                                                </Link>
                                            </td>
                                        </tr>
                                        )})}
                                    </tbody>
                                </table>
                                <Link href='/nft'>
                                    <a>
                                        <button className={"btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5 "+ style.blockButton}>Show all NFT</button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        }
                    </div>

                    <div className={"row" + (isLaptop && " mt-5")}>
                        <div className="col-sm-12 col-md-12 col-xl-6 mt-5">
                            <div className="flex flex-row flex-items-end">
                                {!isLaptop && <TransactionIcon className={style.blockLogo}></TransactionIcon>}
                                <span className={"title " + style.blockTitle}>Latest transactions</span>
                            </div>
                            <div className={style.block + " pb-4 mt-3"}>
                                {isLaptop &&
                                <table className={"table table-borderless mb-3 " + style.blockTable}>
                                    <thead>
                                        <tr className="fs-6 text-grey">
                                            <th style={{width:"40%"}} className="text-left ps-5">From</th>
                                            <th style={{width:"40%"}} className="text-left">To</th>
                                            <th style={{width:"20%"}} className="text-left pe-5">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transData.slice(0,4).map((item, key) => { return (
                                        <tr key={key}>
                                            <td className="text-large text-opacity text-left ps-5">
                                                <div className="flex flex-row flex-items-center">
                                                <CAPSDark className="webIcon me-2" />
                                                <span className="textToken">{item.from}</span>
                                                </div>
                                            </td>
                                            <td className="text-large text-opacity text-left">
                                                <div className="flex flex-row flex-items-center">
                                                <CAPSDark className="webIcon me-2" />
                                                <span className="textToken">{item.to}</span>
                                                </div>
                                            </td>
                                            <td className="text-large text-opacity text-left pe-5">{item.value} CAPS</td>
                                        </tr>
                                        )})}
                                    </tbody>
                                </table>
                                }

                                {!isLaptop && transData.slice(0,rowCount).map((item, key) => { return (
                                <div key={key} className={"mobileView " + (key%2==1?"mobileDarkView":"")}>
                                    <div className="flex flex-col mt-2">
                                        <span className="mobileLabel">From</span>
                                        <div className="flex flex-row flex-1 flex-items-center">
                                            <CAPSDark className={"mobileIcon me-1"} />
                                            <span className={"textToken text-80 mobileValue"}>{item.from}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-3">
                                    <span className="mobileLabel">To</span>
                                        <div className="flex flex-row flex-1 flex-items-center">
                                            <CAPSDark className={"mobileIcon me-1"} />
                                            <span className={"textToken text-80 mobileValue"}>{item.to}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row flex-between mt-4 mb-1 flex-items-center">
                                        <div className="flex flex-col">
                                            <span className="mobileLabel">Amount</span>
                                            <span className="mobileValue">{item.value} CAPS</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <Link href={`/trans/${item.block}`}>
                                                <a>
                                                    <button className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                )})
                                }

                                {isLaptop && (
                                    <Link href='/trans'>
                                        <a>
                                            <button className={"btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5 "+ style.blockButton}>Show all Transactions</button>
                                        </a>
                                    </Link>
                                )}
                                {!isLaptop && (
                                    <div className="d-flex justify-content-center mt-4">
                                        <Link href='/trans'>
                                            <a>
                                                <button className={"btn btn-black rounded-pill mobileNextButton"}>Show all Transactions</button>
                                            </a>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-xl-6 mt-5">
                            <div className="flex flex-row flex-items-end">
                                {!isLaptop && <EditIcon className={style.blockLogo}></EditIcon>}
                                <span className={"title " + style.blockTitle}>Validators</span>
                            </div>
                            <div className={style.block + " pb-4 mt-3"}>
                                {isLaptop &&
                                <table className={"table table-borderless mb-3 " + style.blockTable}>
                                    <thead>
                                        <tr className="fs-6 text-grey">
                                            <th style={{width:"30%"}} className="text-left ps-5">Name</th>
                                            <th style={{width:"20%"}}>Total Stacked</th>
                                            <th style={{width:"15%"}}>Comissions</th>
                                            <th style={{width:"15%"}}>Returns</th>
                                            <th style={{width:"20%"}}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {validatorData.slice(0,rowCount).map((item, key) => { return (
                                        <tr key={key}>
                                            <td className="flex flex-row flex-items-center text-large text-opacity text-left ps-5">
                                                <CAPSDark className="webIcon" />
                                                <Check className="webCheckIcon ms-2 me-2"/>
                                                <span className="textToken">{item.name}</span>
                                            </td>
                                            <td className="text-large text-opacity">{item.total_stacked}</td>
                                            <td className="text-large text-opacity">{item.comissions}%</td>
                                            <td className="text-large text-opacity">{item.returns}%</td>
                                            <td className="text-left pe-5">
                                                <Link href={`/validator/${item.name}`}>
                                                    <a>
                                                        <button className="btn btn-secondary rounded-pill px-4 py-2">Details</button>
                                                    </a>
                                                </Link>
                                            </td>
                                        </tr>
                                        )})}
                                    </tbody>
                                </table>
                                }
                                {!isLaptop && validatorData.slice(0,rowCount).map((item, key) => { return (
                                <div key={key} className={"mobileView " + (key%2==1?"mobileDarkView":"")}>
                                    <div className="flex flex-row mt-2">
                                        <div className="flex-1 flex flex-row flex-grow-6 w-60 flex-items-center">
                                            {/* <div className="text-large text-opacity"> */}
                                                <CAPSDark className="mobileIcon me-1" />
                                                <Check className={"mobileCheckIcon me-1 "} fillColor="#9f9fff"/>
                                                <span className={"mobileValue textToken " + style.whiteBlueText}>{item.name}</span>
                                            {/* </div> */}
                                        </div>
                                        <div className="flex-1 flex flex-row flex-grow-4 w-40 flex-items-center">
                                            <span className={"mobileRowLabel me-1 " + style.whiteText}>Return:</span>
                                            <span className={"mobileValue " + style.whiteBlueText}>{item.returns}%</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row flex-between mt-4 mb-2 flex-items-center">
                                        <div className="flex flex-col">
                                            <div className="flex flex-row flex-items-center">
                                                <span className="mobileRowLabel me-1">Total staked:</span>
                                                <span className="mobileValue">{item.total_stacked}</span>
                                            </div>
                                            <div className="flex flex-row flex-items-center mt-2">
                                                <span className="mobileRowLabel me-1">Commissions:</span>
                                                <span className="mobileValue">{item.comissions}%</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <Link href={`/validator/${item.name}`}>
                                                <a>
                                                    <button className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                )})
                                }
                                {isLaptop && (
                                    <Link href='/validator'>
                                        <a>
                                            <button className={"btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5 "+ style.blockButton}>Show all Validators</button>
                                        </a>
                                    </Link>
                                )}
                                {!isLaptop && (
                                    <div className="d-flex justify-content-center mt-4">
                                        <Link href='/validator'>
                                            <a>
                                                <button className={"btn btn-black rounded-pill mobileNextButton"}>Show all Validators</button>
                                            </a>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                
                    <div className={"row" + (isLaptop && " mt-5")}>
                        <div className="col-sm-12 col-md-12 col-xl-6 mt-5">
                            <div className={style.chartBlock}>
                                <div className={"flex flex-row flex-items-center flex-between " + style.mMinus50}>
                                    <div className="cursor-point flex flex-row flex-items-center" onClick={()=>setTotalTrans(!totalTrans)}>
                                        <input className={style.chartCheckbox + " " + style.activeChartRect} type="checkbox" onChange={()=>console.log()} checked={totalTrans} />
                                        <span className={totalTrans ? style.chartLabel : style.chartInactiveLabel}>Total transaction by day</span>
                                    </div>
                                    <div className="cursor-point flex flex-row flex-items-center" onClick={()=>setNewAccount(!newAccount)}>
                                        <input className={style.chartCheckbox + " " + style.inactiveChartRect} type="checkbox" onChange={()=>console.log()} checked={newAccount} />
                                        <span className={newAccount ? style.chartLabel : style.chartInactiveLabel}>New account by day</span>
                                    </div>
                                    
                                </div>
                                <ResponsiveContainer width="100%" height="80%" className={style.chartView}>
                                    <ComposedChart
                                        width={500}
                                        height={400}
                                        data={statData}
                                        margin={{
                                            top: 10,
                                            right: 40,
                                            left: -15,
                                            bottom: 0,
                                        }}
                                    >
                                    <defs>
                                        <linearGradient id="blockUV" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#9F9FFF" stopOpacity={0.2}/>
                                            <stop offset="95%" stopColor="#EABBFB" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                    <XAxis tickLine={false} axisLine={false} dataKey="name" style={{color:'white'}} />
                                    <YAxis tick={false} tickLine={false} axisLine={false} />
                                    <Tooltip />
                                    {newAccount && <Area type="linear" dataKey="uv" stroke="transparent" fill="url(#blockUV)" />}
                                    {totalTrans && <Bar dataKey="pv" barSize={25} fill="#9F9FFF" radius={[20,20,20,20]} />}
                                    </ComposedChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-xl-6 mt-5">
                            <div className={style.chartBlock}>
                                <div className="cursor-point flex flex-row flex-center" onClick={()=>setAverBlock(!averBlock)}>
                                    <input className={style.chartCheckbox + " " + style.activeChartRect} type="checkbox" onChange={()=>console.log()} checked={averBlock} />
                                    <span className={averBlock ? style.chartLabel : style.chartInactiveLabel}>Average block time by day</span>
                                </div>
                                <ResponsiveContainer width="100%" height="80%" className={style.chartView}>
                                    <AreaChart
                                        width={500}
                                        height={400}
                                        data={statData}
                                        margin={{
                                            top: 10,
                                            right: 40,
                                            left: -15,
                                            bottom: 0,
                                        }}
                                    >
                                    <defs>
                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                    <XAxis tickLine={false} axisLine={false} dataKey="name" style={{color:'white'}} />
                                    <YAxis tick={false} tickLine={false} axisLine={false} />
                                    <Tooltip />
                                    {/* <Bar dataKey="uv" barSize={20} fill="#413ea0" /> */}
                                    {averBlock && <Area strokeWidth={5} type="linear" dataKey="uv" baseLine={8} stroke="#9F9FFF" fill="url(#colorUv)" />}
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />               
            </div>
        </>
    )
}

export default HomeScan;
