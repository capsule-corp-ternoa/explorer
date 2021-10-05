import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head'
import CAPSDark from 'components/assets/CAPSDark';
import Back from 'components/assets/Back';
import Down from 'components/assets/Down';
import Check from 'components/assets/Check';
import style from './ValidatorDetail.module.scss';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';

export interface ValidatorDetailProps {
}

const ValidatorDetail: React.FC<ValidatorDetailProps> = () => {
    const isLaptop = useMediaQuery({ query: '(min-device-width: 1024px)' });
    const router = useRouter();

    const goTransInfo = () => {
        router.push("./1/trans")
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
                    <h1 className={style.subtitle + " subTitleMargin"}>
                        <CAPSDark className={style.smallImage} />
                        1REAJ1k691g5E...9gL7vvZCBG
                    </h1>
                    <div className={style.block + " mt-2 mb-5"}>
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large text-opacity border-radius">Total balance</td>
                                        <td className="text-large text-opacity border-radius">99,352.866096895 CAPS</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Free Balance</td>
                                        <td className="text-large text-opacity">799,272.0770968783 CAPS</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Reserved Balance</td>
                                        <td className="text-large text-opacity">80.789 CAPS</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Account Index</td>
                                        <td className="text-large text-opacity">1Rs7u</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Display name</td>
                                        <td className="text-large text-opacity">P2P.ORG/7</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Email</td>
                                        <td className="text-large text-opacity">Explorer@Ternoa.pro</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Web</td>
                                        <td className="text-large text-opacity">https://Ternoascan.pro</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Riot</td>
                                        <td className="text-large text-opacity">@p2p:7.org</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Twitter</td>
                                        <td className="text-large text-opacity">@Ternoascan</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Nonce</td>
                                        <td className="text-large text-opacity">111</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Active</td>
                                        <td className="text-large text-opacity">True</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Current Roles</td>
                                        <td className="text-large text-opacity">Validator</td>
                                    </tr>
                                </tbody>
                            </table>
                            }
                            {!isLaptop &&
                                <div className={style.mobileView}>
                                    <div className="flex flex-row">
                                        <div className="flex-1 flex flex-col">
                                            <span className={style.mobileLabel}>Block</span>
                                            <span className={style.mobileValue}>5545118</span>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <span className={style.mobileLabel}>Event-ID</span>
                                            <span className={style.mobileValue}>5560132-8</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-4">
                                        <span className={style.mobileLabel}>From</span>
                                        <div className="flex flex-row flex-1 flex-items-center">
                                            <CAPSDark className={style.smallImage} />
                                            <span className={style.tokenValue + " " + style.mobileValue}>14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-3">
                                        <span className={style.mobileLabel}>To</span>
                                        <div className="flex flex-row flex-1 flex-items-center">
                                            <CAPSDark className={style.smallImage} />
                                            <span className={style.tokenValue + " " + style.mobileValue}>14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-4">
                                        <div className="flex-1 flex flex-col">
                                            <span className={style.mobileLabel}>Fee</span>
                                            <span className={style.mobileValue}>41.5 CAPS</span>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <span className={style.mobileLabel}>Value</span>
                                            <span className={style.mobileValue}>1006 CAPS</span>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div>
                      <span className={"mt-5 mb-3 subTitleMargin " + style.subTitle2}>Transactions</span>
                      <Down className="ms-3 mb-1"/>
                    </div>
                    <div className={style.block + " mt-3"}>
                        <div className = "tag-for-scroll">
                            <table className="table table-borderless mb-0">
                                <thead> 
                                    <tr className="fs-6 text-grey">
                                        <th>Transaction ID</th>
                                        <th>Block</th>
                                        <th>Module</th>
                                        <th>Call</th>
                                        <th>Success</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-large text-opacity fw-bold">5556906-2</td>
                                        <td className="text-large text-opacity">5556906</td>
                                        <td className="text-large text-opacity">Stacking</td>
                                        <td className="text-large text-opacity">payout_stakers</td>
                                        <td className="text-large text-opacity">
                                        <Check className={style.smallCheckImage} />
                                        </td>
                                        <td>
                                            <button onClick={goTransInfo} className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
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

export default ValidatorDetail;
