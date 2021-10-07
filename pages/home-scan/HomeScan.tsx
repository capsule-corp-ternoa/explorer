import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head'
import CAPSLogo from 'components/assets/CAPSLogo';
import TransactionIcon from 'components/assets/TransactionIcon';
import EditIcon from 'components/assets/EditIcon';
import CAPSDark from 'components/assets/CAPSDark';
import CAPSFlat from 'components/assets/CAPSFlat';
import Check from 'components/assets/Check';
import MarketLogo from 'components/assets/MarketLogo';
import TransactionLogo from 'components/assets/TransactionLogo';
import BlockLogo from 'components/assets/BlockLogo';
import Search from 'components/assets/Search';
import style from './HomeScan.module.scss';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, ComposedChart, Bar } from 'recharts';

export interface HomeScanProps {
}

const HomeScan: React.FC<HomeScanProps> = () => {
    
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-device-width: 1024px)' });
    const router = useRouter();

    const [totalTrans, setTotalTrans] = useState(true);
    const [newAccount, setNewAccount] = useState(true);
    const [averBlock, setAverBlock] = useState(true);

    const [searchText, setSearchText] = useState('');

    const dummyData = [0,1,1,1];

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    const data = [
        {
          name: 'Apr',
          uv: 4000,
          pv: 6000,
          amt: 2400,
        },
        {
          name: 'May',
          uv: 3000,
          pv: 4000,
          amt: 2210,
        },
        {
          name: 'Jun',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'July',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Aug',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Sep',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        }
    ];

    const goBlockIndex = () => {
        router.push("../block");
    }

    const goBlockDetail = () => {
        router.push("../block/1");
    }

    const goNftIndex = () => {
        router.push("../nft");
    }

    const goNftDetail = () => {
        router.push("../nft/1");
    }

    const goTransIndex = () => {
        router.push("../trans");
    }

    const goTransDetail = () => {
        router.push("../trans/1");
    }

    const goValidatorList = () => {
        router.push("../validator");
    }

    const goValidatorDetail = () => {
        router.push("../validator/1");
    }

    return (
        <>
            <Head>
                <title>BSC Scan</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="BSC Scan, by Ternoa." />
            </Head>
            <div className={"mainContainer"}>
                <Header searchBar={false} />
                <div className={"mainBody position-relative"}>
                    <div className={style.gradientBack}></div>
                    <div className={style.searchForm + " position-relative"}>
                        <div className={`${style.searchTitle} ${isLaptop ? 'ms-4' : ''}`}>The Ternoa blockchain explorer</div>
                        <div className="flex flex-row flex-between flex-items-center mt-4">
                            <div className="flex-1 position-relative">
                                <input
                                    type="text"
                                    value={searchText}
                                    onChange={(e) => {
                                        setSearchText(e.target.value)
                                    }}
                                    onKeyDown={(e) => {
                                        if(e.keyCode === 13) setSearchText('');
                                    }}
                                    placeholder="Search by adresse / Txn Hash / Block"
                                    className={style.searchInput}
                                    style={{ backgroundColor: "#14142E" }}
                                    min={0}
                                />
                                <Search className={style.search + " position-absolute"}/>
                            </div>
                            
                            <div
                                className={style.searchBtn + " btn btn-primary rounded-pill flex flex-center"}
                                onClick={() => setSearchText('')}
                            >
                                <div className={"d-flex align-items-center"}>
                                    <span className="me-auto ms-auto">Search</span>
                                </div>
                            </div>
                        </div>
                        {isLaptop &&
                        <div className="d-flex mt-5 ms-4">
                            <div className={`${style.searchBarInfo} pe-5 border-end`}>
                                <div className="d-flex flex-items-center">
                                    <div className='pt-2'>
                                        <CAPSLogo className={style.Logo}></CAPSLogo>
                                    </div>
                                    <div className={"d-flex flex-column ms-3"}>
                                        <div className="fs-6 text-opacity-4 text-ellipsis">CAPS price</div>
                                        <div className="fs-5 fw-bold">$0.68</div>
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
                                        <div className="fs-5 fw-bold">$24.683.396</div>
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
                                            <div>
                                                <span className={style.logoSummary}>$0.68</span>
                                                <span className={`${style.logoPercent} ms-2`}>(+8.50%)</span>
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
                                            <span className={style.logoSummary}>$24.683.396</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    
                    <div className={`row ${isLaptop ? 'mt-5' : ''}`}>
                        <div className={`col-sm-6 ${isLaptop?"mt-5":"mt-2p5"}`}>
                            <div className="flex flex-row flex-items-end">
                                {!isLaptop && <BlockLogo className={style.blockLogo}></BlockLogo>}
                                <span className={"title " + style.blockTitle}>Latest Blocks</span>
                            </div>
                            <div className={style.block + " pb-4 mt-3"}>
                                {isLaptop &&
                                <table className="table table-borderless mb-3">
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
                                        {dummyData.map((item, key) => { return (
                                        <tr key={key}>
                                            <td className="text-large text-opacity text-left ps-5">5545118</td>
                                            <td className="text-large text-opacity text-left">38 seconds ago</td>
                                            <td className="text-large text-opacity">2</td>
                                            <td className="text-large text-opacity text-right pe-5">0</td>
                                            <td>
                                                <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-2"}>Details</button>
                                            </td>
                                        </tr>
                                        )})}
                                    </tbody>
                                </table>
                                }

                                {!isLaptop && dummyData.map((item, key) => { return (
                                <div key={key} className={"mobileView " + (key%2==1?"mobileDarkView":"")}>
                                    <div className="flex flex-row mt-2">
                                        <div className="flex-1 flex flex-row flex-items-center">
                                            <span className="mobileRowLabel me-1">Number</span>
                                            <span className="mobileValue">5545118</span>
                                        </div>
                                        <div className="flex-1 flex flex-row flex-items-center">
                                            <span className="mobileRowLabel me-1">Age</span>
                                            <span className="mobileValue">21 hour ago</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-2">
                                        <div className="flex-1 flex flex-row flex-items-center">
                                            <span className="mobileRowLabel me-1">Transaction</span>
                                            <span className="mobileValue">2</span>
                                        </div>
                                        <div className="flex-1 flex flex-row flex-items-center">
                                            <span className="mobileRowLabel me-1">Module Event</span>
                                            <span className="mobileValue">0</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-3 mb-2">
                                        <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
                                    </div>
                                </div>
                                )})
                                }
                                {isLaptop && 
                                    <button onClick={goBlockIndex} className={"btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5 "+ style.blockButton}>Show all Blocks</button>
                                }
                                {!isLaptop && <div className="d-flex justify-content-center mt-4">
                                    <button onClick={goBlockIndex} className={"btn btn-black rounded-pill mobileNextButton"}>Show all Blocks</button> 
                                </div>}
                            </div>
                        </div>

                        {isLaptop && <div className="col-sm-6 mt-5">
                            <div className="flex flex-row flex-items-end">
                                {!isLaptop && <TransactionIcon className={style.blockLogo}></TransactionIcon>}
                                <span className={"title " + style.blockTitle}>NFT transactions</span>
                            </div>
                            <div className={style.block + " pb-4 mt-3"}>
                                <table className="table table-borderless mb-3">
                                    <thead>
                                        <tr className="fs-6 text-grey">
                                            <th style={{width:"33%"}} className="text-left ps-5">Name/ID</th>
                                            <th style={{width:"32%"}} className="text-left">Creator</th>
                                            <th style={{width:"15%"}}>ID</th>
                                            <th style={{width:"20%"}}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dummyData.map((item, key) => { return (
                                        <tr key={key} className="position-relative">
                                            <td className="text-large text-opacity text-left ps-5">Multicolor galaxy</td>
                                            <td className="text-large text-opacity flex flex-row flex-items-center text-left">
                                                <CAPSDark className="webIcon me-2" />
                                                <span className="textToken">16hC...E98FrRrC</span>    
                                            </td>
                                            <td className="text-large text-opacity">951</td>
                                            <td className="text-right pe-5">
                                                <button onClick={goNftDetail} className={"btn btn-secondary rounded-pill px-4 py-2"}>Details</button>
                                            </td>
                                        </tr>
                                        )})}
                                    </tbody>
                                </table>
                                <button onClick={goNftIndex} className={"btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5 "+ style.blockButton}>Show all NFT</button>
                            </div>
                        </div> }
                    </div>

                    <div className={"row" + (isLaptop && " mt-5")}>
                        <div className="col-sm-6 mt-5">
                            <div className="flex flex-row flex-items-end">
                                {!isLaptop && <TransactionIcon className={style.blockLogo}></TransactionIcon>}
                                <span className={"title " + style.blockTitle}>Latest transactions</span>
                            </div>
                            <div className={style.block + " pb-4 mt-3"}>
                                {isLaptop &&
                                <table className="table table-borderless mb-3">
                                    <thead>
                                        <tr className="fs-6 text-grey">
                                            <th style={{width:"40%"}} className="text-left ps-5">From</th>
                                            <th style={{width:"40%"}} className="text-left">To</th>
                                            <th style={{width:"20%"}} className="text-left pe-5">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dummyData.map((item, key) => { return (
                                        <tr key={key}>
                                            <td className="text-large text-opacity text-left ps-5">
                                                <CAPSDark className="webIcon me-2" />
                                                <span className="textToken">16hCXjmTFQ...E9EiMg8FrRrC</span>
                                            </td>
                                            <td className="text-large text-opacity text-left">
                                            <CAPSDark className="webIcon me-2" />
                                                <span className="textToken">16hCXjmTFQ...E9EiMg8FrRrC</span>    
                                            </td>
                                            <td className="text-large text-opacity text-left pe-5">52.456 CAPS</td>
                                        </tr>
                                        )})}
                                    </tbody>
                                </table>
                                }

                                {!isLaptop && dummyData.map((item, key) => { return (
                                <div key={key} className={"mobileView " + (key%2==1?"mobileDarkView":"")}>
                                    <div className="flex flex-col mt-2">
                                        <span className="mobileLabel">From</span>
                                        <div className="flex flex-row flex-1 flex-items-center">
                                            <CAPSDark className={"mobileIcon me-1"} />
                                            <span className={"textToken text-80 mobileValue"}>14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-3">
                                    <span className="mobileLabel">To</span>
                                        <div className="flex flex-row flex-1 flex-items-center">
                                            <CAPSDark className={"mobileIcon me-1"} />
                                            <span className={"textToken text-80 mobileValue"}>14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row flex-between mt-4 mb-1 flex-items-center">
                                        <div className="flex flex-col">
                                            <span className="mobileLabel">Amount</span>
                                            <span className="mobileValue">52.456 CAPS</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <button onClick={goTransDetail} className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
                                        </div>
                                    </div>
                                </div>
                                )})
                                }

                                {isLaptop && 
                                    <button onClick={goTransIndex} className={"btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5 "+ style.blockButton}>Show all Transactions</button>
                                }
                                {!isLaptop && <div className="d-flex justify-content-center mt-4">
                                    <button onClick={goTransIndex} className={"btn btn-black rounded-pill mobileNextButton"}>Show all Transactions</button> 
                                </div>}
                            </div>
                        </div>

                        <div className="col-sm-6 mt-5">
                            <div className="flex flex-row flex-items-end">
                                {!isLaptop && <EditIcon className={style.blockLogo}></EditIcon>}
                                <span className={"title " + style.blockTitle}>Validators</span>
                            </div>
                            <div className={style.block + " pb-4 mt-3"}>
                                {isLaptop &&
                                <table className="table table-borderless mb-3">
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
                                        {dummyData.map((item, key) => { return (
                                        <tr key={key}>
                                            <td className="text-large text-opacity text-left ps-5">
                                                <CAPSDark className="webIcon" />
                                                <Check className="webCheckIcon ms-2 me-2"/>
                                                P2P.ORG/7
                                            </td>
                                            <td className="text-large text-opacity">5.965.695</td>
                                            <td className="text-large text-opacity">0.00%</td>
                                            <td className="text-large text-opacity">14.37%</td>
                                            <td className="text-left pe-5">
                                                <button onClick={goValidatorDetail} className="btn btn-secondary rounded-pill px-4 py-2">Details</button>
                                            </td>
                                        </tr>
                                        )})}
                                    </tbody>
                                </table>
                                }
                                {!isLaptop && dummyData.map((item, key) => { return (
                                <div key={key} className={"mobileView " + (key%2==1?"mobileDarkView":"")}>
                                    <div className="flex flex-row mt-2">
                                        <div className="flex-1 flex flex-row flex-grow-6 flex-items-center">
                                            <div className="text-large text-opacity">
                                                <CAPSDark className="mobileIcon me-1" />
                                                <Check className={"mobileCheckIcon me-1 " + style.whiteBlueText}/>
                                                <span className={"mobileValue " + style.whiteBlueText}>P2P.ORG/7</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 flex flex-row flex-grow-4 flex-items-center">
                                            <span className={"mobileRowLabel me-1 " + style.whiteText}>Return:</span>
                                            <span className={"mobileValue " + style.whiteBlueText}>14.37%</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-4 flex-items-center">
                                        <span className="mobileRowLabel me-1">Total staked:</span>
                                        <span className="mobileValue">5.965.695</span>
                                    </div>
                                    <div className="flex flex-row mt-2 mb-2 flex-items-center">
                                        <span className="mobileRowLabel me-1">Commissions:</span>
                                        <span className="mobileValue">0.00%</span>
                                    </div>
                                    {/* <div className="flex flex-row mt-3 mb-2">
                                        <button onClick={goValidatorDetail} className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
                                    </div> */}
                                </div>
                                )})
                                }
                                {isLaptop && 
                                    <button onClick={goValidatorList} className={"btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5 "+ style.blockButton}>Show all Validators</button>
                                }
                                {!isLaptop && <div className="d-flex justify-content-center mt-4">
                                    <button onClick={goValidatorList} className={"btn btn-black rounded-pill mobileNextButton"}>Show all Validators</button>
                                </div>}
                            </div>
                        </div>
                    </div>
                
                    <div className={"row" + (isLaptop && " mt-5")}>
                        <div className="col-sm-6 mt-5">
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
                                        data={data}
                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 0,
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

                        <div className="col-sm-6 mt-5">
                            <div className={style.chartBlock}>
                                <div className="cursor-point flex flex-row flex-center" onClick={()=>setAverBlock(!averBlock)}>
                                    <input className={style.chartCheckbox + " " + style.activeChartRect} type="checkbox" onChange={()=>console.log()} checked={averBlock} />
                                    <span className={averBlock ? style.chartLabel : style.chartInactiveLabel}>Average block time by day</span>
                                </div>
                                <ResponsiveContainer width="100%" height="80%" className={style.chartView}>
                                    <AreaChart
                                        width={500}
                                        height={400}
                                        data={data}
                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 0,
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
