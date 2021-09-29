import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import CAPSLogo from 'components/assets/CAPSLogo';
import MarketLogo from 'components/assets/MarketLogo';
import TransactionLogo from 'components/assets/TransactionLogo';
import BlockLogo from 'components/assets/BlockLogo';
import style from './HomeScan.module.scss';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';

export interface HomeScanProps {
}

const HomeScan: React.FC<HomeScanProps> = () => {
    return (
        <>
            <Head>
                <title>BSC Scan</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="BSC Scan, by Ternoa." />
            </Head>
            <div className={"mainContainer"}>
                <Header />
                <div className={style.main}>
                    <div className={style.searchForm}>
                        <div className={style.searchTitle}>The Ternoa blockchain explorer</div>
                        <div className="d-flex flex-row mt-4">
                            <input
                                type="text"
                                value={''}
                                onChange={(e) => {
                                    
                                }}
                                className={style.searchInput}
                                style={{ backgroundColor: "#14142E" }}
                                min={0}
                            />
                            <div
                                className={style.searchBtn + " btn btn-primary rounded-pill"}
                                onClick={() => console.log()}
                            >
                                <div className={"d-flex align-items-center"}>
                                    <span className="me-auto ms-auto mt-2">Search</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mt-5">
                            <div className="pe-5 ps-3 border-end border-dark">
                                <div className="d-flex">
                                    <div className="pt-2">
                                        <CAPSLogo className={style.ternoaLogo}></CAPSLogo>
                                    </div>
                                    <div className="d-flex flex-column ms-3">
                                        <div className="fs-6">CAPS price</div>
                                        <div className="fs-5">$0.68</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pe-5 ps-5 border-end border-dark">
                                <div className="d-flex">
                                    <div className="pt-2">
                                        <MarketLogo className={style.marketLogo}></MarketLogo>
                                    </div>
                                    <div className="d-flex flex-column ms-3">
                                        <div className="fs-6">Market cap</div>
                                        <div className="fs-5">$24.683.396</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pe-5 ps-5 border-end border-dark">
                                <div className="d-flex">
                                    <div className="pt-2">
                                        <TransactionLogo className={style.transactionLogo}></TransactionLogo>
                                    </div>
                                    <div className="d-flex flex-column ms-3">
                                        <div className="fs-6">Transactions</div>
                                        <div className="fs-5">$1.347</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pe-5 ps-5">
                                <div className="d-flex">
                                    <div className="pt-2">
                                        <BlockLogo className={style.blockLogo}></BlockLogo>
                                    </div>
                                    <div className="d-flex flex-column ms-3">
                                        <div className="fs-6">Finalized Block</div>
                                        <div className="fs-5">$2.000.000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-6">
                            <span className="fs-3">Latest Blocks</span>
                            <div className={style.block}>
                                <table className="table table-borderless">
                                    <thead>
                                        <tr className="fs-6 text-grey">
                                            <th>Number</th>
                                            <th>Age</th>
                                            <th>Transactions</th>
                                            <th>Module Events</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>5545118</td>
                                            <td>38 seconds ago</td>
                                            <td>2</td>
                                            <td>0</td>
                                            <td>
                                                <button className="btn btn-secondary rounded-pill">Detail</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5545118</td>
                                            <td>38 seconds ago</td>
                                            <td>2</td>
                                            <td>0</td>
                                            <td>
                                                <button className="btn btn-secondary rounded-pill">Detail</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5545118</td>
                                            <td>38 seconds ago</td>
                                            <td>2</td>
                                            <td>0</td>
                                            <td>
                                                <button className="btn btn-secondary rounded-pill">Detail</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5545118</td>
                                            <td>38 seconds ago</td>
                                            <td>2</td>
                                            <td>0</td>
                                            <td>
                                                <button className="btn btn-secondary rounded-pill">Detail</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <button className="btn-outline-secondary">Show all Blocks</button>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-sm-6">

                        </div>
                    </div>
                </div>
                <Footer />               
            </div>
        </>
    )
}

export default HomeScan;
