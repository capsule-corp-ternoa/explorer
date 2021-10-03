import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import CAPSLogo from 'components/assets/CAPSLogo';
import CAPSDark from 'components/assets/CAPSDark';
import Check from 'components/assets/Check';
import MarketLogo from 'components/assets/MarketLogo';
import TransactionLogo from 'components/assets/TransactionLogo';
import BlockLogo from 'components/assets/BlockLogo';
import Search from 'components/assets/Search';
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
                        <div className="d-flex flex-row mt-4 position-relative">
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
                                        <CAPSLogo className={style.Logo}></CAPSLogo>
                                    </div>
                                    <div className="d-flex flex-column ms-3">
                                        <div className="fs-6 text-opacity">CAPS price</div>
                                        <div className="fs-5 fw-bold">$0.68</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pe-5 ps-5 border-end border-dark">
                                <div className="d-flex">
                                    <div className="pt-2">
                                        <MarketLogo className={style.Logo}></MarketLogo>
                                    </div>
                                    <div className="d-flex flex-column ms-3">
                                        <div className="fs-6 text-opacity">Market cap</div>
                                        <div className="fs-5 fw-bold">$24.683.396</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pe-5 ps-5 border-end border-dark">
                                <div className="d-flex">
                                    <div className="pt-2">
                                        <TransactionLogo className={style.Logo}></TransactionLogo>
                                    </div>
                                    <div className="d-flex flex-column ms-3">
                                        <div className="fs-6 text-opacity">Transactions</div>
                                        <div className="fs-5 fw-bold">$1.347</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pe-5 ps-5">
                                <div className="d-flex">
                                    <div className="pt-2">
                                        <BlockLogo className={style.Logo}></BlockLogo>
                                    </div>
                                    <div className="d-flex flex-column ms-3">
                                        <div className="fs-6 text-opacity">Finalized Block</div>
                                        <div className="fs-5 fw-bold">$2.000.000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-6 mt-5">
                            <span className="title">Latest Blocks</span>
                            <div className={style.block + " pb-4 mt-2"}>
                                <table className="table table-borderless mb-3">
                                    <thead>
                                        <tr className="fs-6 text-grey">
                                            <th className="ps-4">Number</th>
                                            <th>Age</th>
                                            <th>Transactions</th>
                                            <th>Module Events</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-large text-opacity ps-4">5545118</td>
                                            <td className="text-small text-opacity">38 seconds ago</td>
                                            <td className="text-small text-opacity">2</td>
                                            <td className="text-small text-opacity">0</td>
                                            <td>
                                                <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-large text-opacity ps-4">5545118</td>
                                            <td className="text-small text-opacity">38 seconds ago</td>
                                            <td className="text-small text-opacity">2</td>
                                            <td className="text-small text-opacity">0</td>
                                            <td>
                                                <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-large text-opacity ps-4">5545118</td>
                                            <td className="text-small text-opacity">38 seconds ago</td>
                                            <td className="text-small text-opacity">2</td>
                                            <td className="text-small text-opacity">0</td>
                                            <td>
                                                <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-large text-opacity ps-4">5545118</td>
                                            <td className="text-small text-opacity">38 seconds ago</td>
                                            <td className="text-small text-opacity">2</td>
                                            <td className="text-small text-opacity">0</td>
                                            <td>
                                                <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5">Show all Blocks</button>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-5">
                            <span className="title">NFT transactions</span>
                            <div className={style.block + " pb-4 mt-2"}>
                                <table className="table table-borderless mb-3">
                                    <thead>
                                        <tr className="fs-6 text-grey">
                                            <th>Name/ID</th>
                                            <th>Creator</th>
                                            <th>ID</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-large text-opacity">Multicolor galaxy</td>
                                            <td className="text-small text-opacity">
                                                <CAPSDark/>
                                                <span className="ms-3">16hC...E98FrRrC</span>    
                                            </td>
                                            <td className="text-small text-opacity">951</td>
                                            <td>
                                                <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-large text-opacity">Multicolor galaxy</td>
                                            <td className="text-small text-opacity">
                                                <CAPSDark/>
                                                <span className="ms-3">16hC...E98FrRrC</span>    
                                            </td>
                                            <td className="text-small text-opacity">951</td>
                                            <td>
                                                <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-large text-opacity">Multicolor galaxy</td>
                                            <td className="text-small text-opacity">
                                                <CAPSDark/>
                                                <span className="ms-3">16hC...E98FrRrC</span>    
                                            </td>
                                            <td className="text-small text-opacity">951</td>
                                            <td>
                                                <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-large text-opacity">Multicolor galaxy</td>
                                            <td className="text-small text-opacity">
                                                <CAPSDark/>
                                                <span className="ms-3">16hC...E98FrRrC</span>    
                                            </td>
                                            <td className="text-small text-opacity">951</td>
                                            <td>
                                                <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5">Show all NFT</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-6 mt-5">
                            <span className="title">Latest transactions</span>
                            <div className={style.block + " pb-4 mt-2"}>
                                <table className="table table-borderless mb-3">
                                    <thead>
                                        <tr className="fs-6 text-grey">
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
                                <button className="btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5">Show all Transactions</button>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-5">
                            <span className="title">Validators</span>
                            <div className={style.block + " pb-4 mt-2"}>
                                <table className="table table-borderless mb-3">
                                    <thead>
                                        <tr className="fs-6 text-grey">
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
                                <button className="btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5">Show all Validators</button>
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
