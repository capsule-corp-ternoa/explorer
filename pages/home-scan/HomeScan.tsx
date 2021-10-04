import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head'
import CAPSLogo from 'components/assets/CAPSLogo';
import TransactionIcon from 'components/assets/TransactionIcon';
import EditIcon from 'components/assets/EditIcon';
import CAPSDark from 'components/assets/CAPSDark';
import Check from 'components/assets/Check';
import MarketLogo from 'components/assets/MarketLogo';
import TransactionLogo from 'components/assets/TransactionLogo';
import BlockLogo from 'components/assets/BlockLogo';
import Search from 'components/assets/Search';
import style from './HomeScan.module.scss';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart, Bar, Legend } from 'recharts';

export interface HomeScanProps {
}

const HomeScan: React.FC<HomeScanProps> = () => {
    
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-device-width: 1024px)' });
    const router = useRouter();

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
        router.push("../block-index");
    }

    const goBlockDetail = () => {
        router.push("../block-detail");
    }

    const goTransDetail = () => {
        router.push("../trans-detail");
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
                <div className={style.main + " position-relative"}>
                    <div className={style.gradientBack}></div>
                    <div className={style.searchForm + " position-relative"}>
                        <div className={style.searchTitle}>The Ternoa blockchain explorer</div>
                        <div className="flex flex-row flex-between flex-items-center mt-4">
                            <div className="flex-1 position-relative">
                                <input
                                    type="text"
                                    value={''}
                                    onChange={(e) => {
                                        
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
                                onClick={() => console.log()}
                            >
                                <div className={"d-flex align-items-center"}>
                                    <span className="me-auto ms-auto">Search</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mt-5">
                            <div className={`${style.searchBarInfo} pe-5 border-end border-dark`}>
                                <div className="d-flex flex-items-center">
                                    <div className={`${isLaptop ? 'pt-2' : ''}`}>
                                        <CAPSLogo className={style.Logo}></CAPSLogo>
                                    </div>
                                    <div className={"d-flex flex-column " + (isLaptop ? 'ms-3': 'ms-1')}>
                                        <div className={`${style.logoTitle} fs-6 text-opacity text-ellipsis`}>CAPS price</div>
                                        <div className={`${style.logoPrice} fs-5 fw-bold`}>$0.68</div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.searchBarInfo} pe-5 ps-3 border-end border-dark`}>
                                <div className="d-flex flex-items-center">
                                    <div className={`${isLaptop ? 'pt-2' : ''}`}>
                                        <MarketLogo className={style.Logo}></MarketLogo>
                                    </div>
                                    <div className={`d-flex flex-column ${isLaptop ? 'ms-3': 'ms-1'}`}>
                                        <div className={`${style.logoTitle} fs-6 text-opacity text-ellipsis`}>Market cap</div>
                                        <div className={`${style.logoPrice} fs-5 fw-bold`}>$24.683.396</div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.searchBarInfo} pe-5 ps-3 border-end border-dark`}>
                                <div className="d-flex flex-items-center">
                                    <div className={`${isLaptop ? 'pt-2' : ''}`}>
                                        <TransactionLogo className={style.Logo}></TransactionLogo>
                                    </div>
                                    <div className={`d-flex flex-column ${isLaptop ? 'ms-3': 'ms-1'}`}>
                                        <div className={`${style.logoTitle} fs-6 text-opacity text-ellipsis`}>Transactions</div>
                                        <div className={`${style.logoPrice} fs-5 fw-bold`}>$1.347</div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.searchBarInfo} ps-3`}>
                                <div className="d-flex flex-items-center">
                                    <div className={`${isLaptop ? 'pt-2' : ''}`}>
                                        <BlockLogo className={style.Logo}></BlockLogo>
                                    </div>
                                    <div className={`d-flex flex-column ${isLaptop ? 'ms-3': 'ms-1'}`}>
                                        <div className={`${style.logoTitle} fs-6 text-opacity text-ellipsis`}>Finalized Block</div>
                                        <div className={`${style.logoPrice} fs-5 fw-bold`}>$2.000.000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`row ${isLaptop ? 'mt-5' : ''}`}>
                        <div className="col-sm-6 mt-5">
                            <div className="flex flex-row flex-items-end">
                                {!isLaptop && <BlockLogo className={style.blockLogo}></BlockLogo>}
                                <span className={"title " + style.blockTitle}>Latest Blocks</span>
                            </div>
                            <div className={style.block + " pb-4 mt-2"}>
                                <table className="table table-borderless mb-3">
                                    <thead className="display-block">
                                        <tr className="font-08 text-grey table-mobile-header">
                                            <th width="20%">Number</th>
                                            <th width="35%">Age</th>
                                            <th width="15%">Transactions</th>
                                            <th width="15%">Module Events</th>
                                            <th width="15%"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="display-block table-mobile-body">
                                        <tr>
                                            <td width="20%" className="font-08 text-opacity">5545118</td>
                                            <td width="35%" className="text-small text-opacity">38 seconds ago</td>
                                            <td width="15%" className="text-small text-opacity">2</td>
                                            <td width="15%" className="text-small text-opacity">
                                                0
                                            </td>
                                            <td width="15%">
                                                <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 "+ style.detailButton}>Detail</button>
                                            </td>
                                        </tr>    
                                        <tr>
                                            <td width="20%" className="font-08 text-opacity">5545118</td>
                                            <td width="35%" className="text-small text-opacity">38 seconds ago</td>
                                            <td width="15%" className="text-small text-opacity">2</td>
                                            <td width="15%" className="text-small text-opacity">
                                                0
                                            </td>
                                            <td width="15%">
                                                <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 "+ style.detailButton}>Detail</button>
                                            </td>
                                        </tr>    
                                        <tr>
                                            <td width="20%" className="font-08 text-opacity">5545118</td>
                                            <td width="35%" className="text-small text-opacity">38 seconds ago</td>
                                            <td width="15%" className="text-small text-opacity">2</td>
                                            <td width="15%" className="text-small text-opacity">
                                                0
                                            </td>
                                            <td width="15%">
                                                <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 "+ style.detailButton}>Detail</button>
                                            </td>
                                        </tr>    
                                        <tr>
                                            <td width="20%" className="font-08 text-opacity">5545118</td>
                                            <td width="35%" className="text-small text-opacity">38 seconds ago</td>
                                            <td width="15%" className="text-small text-opacity">2</td>
                                            <td width="15%" className="text-small text-opacity">
                                                0
                                            </td>
                                            <td width="15%">
                                                <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 "+ style.detailButton}>Detail</button>
                                            </td>
                                        </tr>                            
                                    </tbody>
                                </table>
                                <button onClick={goBlockIndex} className={"btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5 "+ style.blockButton}>Show all Blocks</button>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-5">
                            <div className="flex flex-row flex-items-end">
                                {!isLaptop && <TransactionIcon className={style.blockLogo}></TransactionIcon>}
                                <span className={"title " + style.blockTitle}>NFT transactions</span>
                            </div>
                            <div className={style.block + " pb-4 mt-2"}>
                                <table className="table table-borderless mb-3">
                                    <thead>
                                        <tr className="font-08 text-grey">
                                            <th>Name/ID</th>
                                            <th>Creator</th>
                                            <th>ID</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="position-relative">
                                            <td className="font-08 text-opacity">Multicolor galaxy</td>
                                            <td className="text-small text-opacity flex flex-row flex-center">
                                                <CAPSDark/>
                                                <span className={isLaptop ? "ms-3" : 'ms-1'}>16hC...E98FrRrC</span>    
                                            </td>
                                            <td className="text-small text-opacity">951</td>
                                            <td width="60px">
                                                <button onClick={goTransDetail} className={"btn btn-secondary rounded-pill px-4 py-1 "+ style.detailButton}>Detail</button>
                                            </td>
                                        </tr>
                                        <tr className="position-relative">
                                            <td className="font-08 text-opacity">Multicolor galaxy</td>
                                            <td className="text-small text-opacity flex flex-row flex-center">
                                                <CAPSDark/>
                                                <span className={isLaptop ? "ms-3" : 'ms-1'}>16hC...E98FrRrC</span>    
                                            </td>
                                            <td className="text-small text-opacity">951</td>
                                            <td width="60px">
                                                <button onClick={goTransDetail} className={"btn btn-secondary rounded-pill px-4 py-1 "+ style.detailButton}>Detail</button>
                                            </td>
                                        </tr>
                                        <tr className="position-relative">
                                            <td className="font-08 text-opacity">Multicolor galaxy</td>
                                            <td className="text-small text-opacity flex flex-row flex-center">
                                                <CAPSDark/>
                                                <span className={isLaptop ? "ms-3" : 'ms-1'}>16hC...E98FrRrC</span>    
                                            </td>
                                            <td className="text-small text-opacity">951</td>
                                            <td width="60px">
                                                <button onClick={goTransDetail} className={"btn btn-secondary rounded-pill px-4 py-1 "+ style.detailButton}>Detail</button>
                                            </td>
                                        </tr>
                                        <tr className="position-relative">
                                            <td className="font-08 text-opacity">Multicolor galaxy</td>
                                            <td className="text-small text-opacity flex flex-row flex-center">
                                                <CAPSDark/>
                                                <span className={isLaptop ? "ms-3" : 'ms-1'}>16hC...E98FrRrC</span>    
                                            </td>
                                            <td className="text-small text-opacity">951</td>
                                            <td width="60px">
                                                <button onClick={goTransDetail} className={"btn btn-secondary rounded-pill px-4 py-1 "+ style.detailButton}>Detail</button>
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                                <button className={"btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5 "+ style.blockButton}>Show all NFT</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-6 mt-5">
                            <div className="flex flex-row flex-items-end">
                                {!isLaptop && <TransactionIcon className={style.blockLogo}></TransactionIcon>}
                                <span className={"title " + style.blockTitle}>Latest transactions</span>
                            </div>
                            <div className={style.block + " pb-4 mt-2"}>
                                <div className="overflow-x-auto">
                                <table className="table table-borderless mb-3">
                                    <thead>
                                        <tr className="font-08 text-grey">
                                            <th>From</th>
                                            <th>To</th>
                                            <th className="pe-5">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-small text-opacity">
                                                <CAPSDark />
                                                <span className="ms-3">16hCXjmTFQ...E9EiMg8FrRrC</span>    
                                            </td>
                                            <td className="text-small text-opacity">
                                                <CAPSDark />
                                                <span className="ms-3">16hCXjmTFQ...E9EiMg8FrRrC</span>    
                                            </td>
                                            <td className="text-medium text-opacity pe-5">52.456 CAPS</td>
                                        </tr>
                                        <tr>
                                            <td className="text-small text-opacity">
                                                <CAPSDark />
                                                <span className="ms-3">16hCXjmTFQ...E9EiMg8FrRrC</span>    
                                            </td>
                                            <td className="text-small text-opacity">
                                                <CAPSDark />
                                                <span className="ms-3">16hCXjmTFQ...E9EiMg8FrRrC</span>    
                                            </td>
                                            <td className="text-medium text-opacity pe-5">52.456 CAPS</td>
                                        </tr>
                                        <tr>
                                            <td className="text-small text-opacity">
                                                <CAPSDark />
                                                <span className="ms-3">16hCXjmTFQ...E9EiMg8FrRrC</span>    
                                            </td>
                                            <td className="text-small text-opacity">
                                                <CAPSDark />
                                                <span className="ms-3">16hCXjmTFQ...E9EiMg8FrRrC</span>    
                                            </td>
                                            <td className="text-medium text-opacity pe-5">52.456 CAPS</td>
                                        </tr>
                                        <tr>
                                            <td className="text-small text-opacity">
                                                <CAPSDark />
                                                <span className="ms-3">16hCXjmTFQ...E9EiMg8FrRrC</span>    
                                            </td>
                                            <td className="text-small text-opacity">
                                                <CAPSDark />
                                                <span className="ms-3">16hCXjmTFQ...E9EiMg8FrRrC</span>    
                                            </td>
                                            <td className="text-medium text-opacity pe-5">52.456 CAPS</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                                <button className={"btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5 "+ style.blockButton}>Show all Transactions</button>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-5">
                            <div className="flex flex-row flex-items-end">
                                {!isLaptop && <EditIcon className={style.blockLogo}></EditIcon>}
                                <span className={"title " + style.blockTitle}>Validators</span>
                            </div>
                            <div className={style.block + " pb-4 mt-2"}>
                                <div className="overflow-x-auto">
                                <table className="table table-borderless mb-3">
                                    <thead>
                                        <tr className="font-08 text-grey">
                                            <th>Name</th>
                                            <th>Total Stacked</th>
                                            <th>Comissions</th>
                                            <th>Returns</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-large text-opacity">
                                                <CAPSDark />
                                                <Check className="ms-3"/>
                                                <span className="ms-2">P2P.ORG/7</span>    
                                            </td>
                                            <td className="text-small">5.965.695</td>
                                            <td className="text-small">0.00%</td>
                                            <td className="text-small">14.37%</td>
                                            <td>
                                                <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-large text-opacity">
                                                <CAPSDark />
                                                <Check className="ms-3"/>
                                                <span className="ms-2">P2P.ORG/7</span>    
                                            </td>
                                            <td className="text-small">5.965.695</td>
                                            <td className="text-small">0.00%</td>
                                            <td className="text-small">14.37%</td>
                                            <td>
                                                <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-large text-opacity">
                                                <CAPSDark />
                                                <Check className="ms-3"/>
                                                <span className="ms-2">P2P.ORG/7</span>    
                                            </td>
                                            <td className="text-small">5.965.695</td>
                                            <td className="text-small">0.00%</td>
                                            <td className="text-small">14.37%</td>
                                            <td>
                                                <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-large text-opacity">
                                                <CAPSDark />
                                                <Check className="ms-3"/>
                                                <span className="ms-2">P2P.ORG/7</span>    
                                            </td>
                                            <td className="text-small">5.965.695</td>
                                            <td className="text-small">0.00%</td>
                                            <td className="text-small">14.37%</td>
                                            <td>
                                                <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                                <button className={"btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5 "+ style.blockButton}>Show all Validators</button>
                            </div>
                        </div>
                    </div>
                
                    <div className="row mt-5">
                        <div className="col-sm-6 mt-5">
                            <div className={style.chartBlock}>
                                <div className={"cursor-point flex flex-row flex-items-center flex-between " + style.mMinus50}>
                                    <div className="flex flex-row flex-items-center">
                                        <div className={style.activeChartRect}></div>
                                        <span className={style.chartLabel}>Total transaction by day</span>
                                    </div>
                                    <div className="flex flex-row flex-items-center">
                                        <div className={style.inactiveChartRect}></div>
                                        <span className={style.chartLabel}>New account by day</span>
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
                                    <Area type="linear" dataKey="uv" stroke="transparent" fill="url(#blockUV)" />
                                    <Bar dataKey="pv" barSize={25} fill="#9F9FFF" radius={[20,20,20,20]} />   
                                    </ComposedChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-5">
                            <div className={style.chartBlock}>
                                <div className="cursor-point flex flex-row flex-center">
                                    <div className={style.activeChartRect}></div>
                                    <span className={style.chartLabel}>Average block time by day</span>
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
                                    <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                                    <Area strokeWidth={5} type="linear" dataKey="uv" baseLine={8} stroke="#9F9FFF" fill="url(#colorUv)" />
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
