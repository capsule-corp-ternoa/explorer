import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head'
import CAPSDark from 'components/assets/CAPSDark';
import Back from 'components/assets/Back';
import Down from 'components/assets/Down';
import Check from 'components/assets/Check';
import style from './TransInfo.module.scss';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';

export interface TransInfoProps {
}

const TransInfo: React.FC<TransInfoProps> = () => {
    const isLaptop = useMediaQuery({ query: '(min-device-width: 1024px)' });
    const router = useRouter();

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
                    <div className="cursor-point w-fit-content" onClick={()=>router.back()}>
                       {isLaptop && <Back />}
                    </div> 
                    <h1 className={style.subtitle + " subTitleMargin"}>Transaction : 0xedd3...f489d83</h1>
                    <div className={style.block + " mt-2 mb-5"}>
                        <div className = "tag-for-scroll">
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large  text-opacity border-radius">Timestamp</td>
                                        <td className="text-large  text-opacity border-radius">Jun 17, 2021, 12:36:06 PM</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Hash</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className={style.smallImage} />
                                            <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Transaction index</td>
                                        <td className="text-large  text-opacity border-radius">1</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Transaction Hash</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className={style.smallImage} />
                                            <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Module</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className={style.smallImage} />
                                            <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Call</td>
                                        <td className="text-large text-opacity">2</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Description</td>
                                        <td className="text-large text-opacity">6</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Description</td>
                                        <td className="text-large text-opacity">30</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Block</td>
                                        <td className="text-large text-opacity">6 seconds</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">From</td>
                                        <td className="text-large text-opacity">2320</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Block</td>
                                        <td className="text-large text-opacity">112A6wJPeDsf34nsqoAkAtQ8n74vJU8qmyKMtzX7ZPQH2kXa</td>
                                    </tr>     
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                      <span className={"mt-5 mb-3 subTitleMargin " + style.subTitle2}>Parameters</span>
                    </div>
                    <div className={style.block + " mt-3"}>
                        <div className = "tag-for-scroll">
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large  text-opacity border-radius">Transaction Hash</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className={style.smallImage} />
                                            <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Transaction Hash</td>
                                        <td className="text-large text-opacity">
                                            52.456 CAPS
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

export default TransInfo;
