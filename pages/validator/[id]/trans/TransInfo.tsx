import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head'
import CAPSDark from 'components/assets/CAPSDark';
import Back from 'components/assets/Back';
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
                    <h1 className={style.subtitle + " subTitleMargin"}>Account index 1Rs7u</h1>
                    <div className={style.block + " mt-2 mb-5"}>
                        <div className = "tag-for-scroll">
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large  text-opacity border-radius">Account</td>
                                        <td className="text-large  text-opacity border-radius">P2P.ORG/7</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">ID</td>
                                        <td className="text-large text-opacity">74</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Updated at block</td>
                                        <td className="text-large text-opacity">0</td>
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
