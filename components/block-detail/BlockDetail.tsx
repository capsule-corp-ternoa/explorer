import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import CAPSDark from 'components/assets/CAPSDark';
import Back from 'components/assets/Back';
import Down from 'components/assets/Down';
import Check from 'components/assets/Check';
import style from './BlockDetail.module.scss';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';

export interface BlockDetailProps {
}

const BlockDetail: React.FC<BlockDetailProps> = () => {
    const isLaptop = useMediaQuery({ query: '(min-device-width: 1024px)' });
    return (
        <>
            <Head>
                <title>BSC Scan</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="BSC Scan, by Ternoa." />
            </Head>
            <div className={"mainContainer"}>
                <Header searchBar={false} />
                <div className={style.main}>
                    <Back />
                    <h1 className={style.subtitle + " mt-3"}>Block #5545118</h1>
                    <div className={style.block + " pb-4 mt-2 mb-5"}>
                        <div className = "tag-for-scroll">
                            <table className="table table-borderless mb-3">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large  text-opacity border-radius">Timestamp</td>
                                        <td className="text-large  text-opacity border-radius">Jun 17, 2021, 12:36:06 PM</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Hash</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center">
                                            <CAPSDark className={style.smallImage} />
                                            <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Parent hash</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center">
                                            <CAPSDark className={style.smallImage} />
                                            <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">State Root</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center">
                                            <CAPSDark className={style.smallImage} />
                                            <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Extrinsics Root</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center">
                                            <CAPSDark className={style.smallImage} />
                                            <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Transactions</td>
                                        <td className="text-large text-opacity">2</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Total module events</td>
                                        <td className="text-large text-opacity">6</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Runtime Version</td>
                                        <td className="text-large text-opacity">30</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Block time</td>
                                        <td className="text-large text-opacity">6 seconds</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Session ID</td>
                                        <td className="text-large text-opacity">2320</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Block author</td>
                                        <td className="text-large text-opacity">112A6wJPeDsf34nsqoAkAtQ8n74vJU8qmyKMtzX7ZPQH2kXa</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                      <span className="fs-4 mt-5 ms-4 me-3 mb-3">Transactions</span>
                      <Down className="mb-1"/>
                    </div>
                    <div className={style.block + " pb-4 mt-3"}>
                        <div className = "tag-for-scroll">
                            <table className="table table-borderless mb-3">
                                <thead> 
                                    <tr className="fs-6 text-grey">
                                        <th>Transaction ID</th>
                                        <th>From</th>
                                        <th>Module</th>
                                        <th>Call</th>
                                        <th>Success</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-large text-opacity fw-bold">Stacking</td>
                                        <td className="text-large text-opacity">unbound</td>
                                        <td className="text-large text-opacity">0x3a851d3...</td>
                                        <td className="text-large text-opacity flex flex-row flex-center">
                                            <CAPSDark className={style.smallImage} />
                                            <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                        </td>
                                        <td className="text-large text-opacity">
                                        <Check className={style.smallCheckImage} />
                                        </td>
                                        <td>
                                            <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer />               
            </div>
        </>
    )
}

export default BlockDetail;
