import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head'
import CAPSDark from 'components/assets/CAPSDark';
import Back from 'components/assets/Back';
import Down from 'components/assets/Down';
import Check from 'components/assets/Check';
import style from './TransDetail.module.scss';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';

export interface TransDetailProps {
}

const TransDetail: React.FC<TransDetailProps> = () => {
    const isLaptop = useMediaQuery({ query: '(min-device-width: 1024px)' });
    const router = useRouter();

    const goTransInfo = () => {
        router.push("../trans-info")
    }

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
                    <div className="cursor-point w-fit-content" onClick={()=>router.back()}>
                       {isLaptop && <Back />}
                    </div> 
                    <h1 className={style.subtitle + " subTitleMargin"}>Balance transfer "5560132-8"</h1>
                    <div className={style.block + " mt-2 mb-5"}>
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large text-opacity border-radius">Block</td>
                                        <td className="text-large text-opacity border-radius">5545118</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">From</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className={style.smallImage} />
                                            <span className="ms-3">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">To</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className={style.smallImage} />
                                            <span className="ms-3">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Value</td>
                                        <td className="text-large text-opacity">1006 CAPS</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Fee</td>
                                        <td className="text-large text-opacity">41.5 CAPS</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Event ID</td>
                                        <td className="text-large text-opacity">5560132-8</td>
                                    </tr>
                                </tbody>
                            </table>
                            }
                            {!isLaptop &&
                                <div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <Footer />               
            </div>
        </>
    )
}

export default TransDetail;
