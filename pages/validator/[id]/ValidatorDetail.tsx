import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head'
import CAPSDark from 'components/assets/CAPSDark';
import Back from 'components/assets/Back';
import Down from 'components/assets/Down';
import Check from 'components/assets/Check';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';

export interface ValidatorDetailProps {
}

const ValidatorDetail: React.FC<ValidatorDetailProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-device-width: 1024px)' });
    const router = useRouter();

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

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
                <div className="mainBody">
                    {isLaptop &&
                    <div className="cursor-point w-fit-content mb-4" onClick={()=>router.back()}>
                       <Back />
                    </div>
                    }
                    <h1 className="subTitle">
                        1REAJ1k691g5E...9gL7vvZCBG
                    </h1>
                    <div className="mainBlock mt-2 mb-5">
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large text-opacity">Total balance</td>
                                        <td className="text-large text-opacity">99,352.866096895 CAPS</td>
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
                                <div className={"mobileView"}>
                                    <div className="flex flex-row mt-2">
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Total Balance</span>
                                            <span className="mobileValue">299231 CAPS</span>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Free Balance</span>
                                            <span className="mobileValue">230231 CAPS</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-4">
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Reserved Balance</span>
                                            <span className="mobileValue">80.789 CAPS</span>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Account Index</span>
                                            <span className="mobileValue">1Rs7u</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-4">
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Display name</span>
                                            <span className="mobileValue">P2P.ORG/7</span>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Email</span>
                                            <span className="mobileValue">Explorer@Ternoa.pro</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-4">
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Riot</span>
                                            <span className="mobileValue">@p2p:7.org</span>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Web</span>
                                            <span className="mobileValue">Ternoascan.pro</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-4">
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Twitter</span>
                                            <span className="mobileValue">@Ternoascan</span>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Nonce</span>
                                            <span className="mobileValue">111</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-4 mb-2">
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Active</span>
                                            <span className="mobileValue">True</span>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Current Roles</span>
                                            <span className="mobileValue">Validator</span>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div>
                        <span className={"mt-5 mb-3 subTitle2"}>Transactions</span>
                        <Down className="ms-3 mb-1"/>
                    </div>
                    <div className={"mainBlock mt-3"}>
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0 webBorderTable2">
                                <thead> 
                                    <tr className="fs-6 text-grey">
                                        <th style={{width:"20%"}} className="text-left ps-4p0">Transaction ID</th>
                                        <th style={{width:"20%"}} className="text-left">Block</th>
                                        <th style={{width:"20%"}} className="text-left">Module</th>
                                        <th style={{width:"20%"}} className="text-left">Call</th>
                                        <th style={{width:"15%"}}>Success</th>
                                        <th style={{width:"10%"}}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-large text-opacity fw-bold text-left ps-4p0">5556906-2</td>
                                        <td className="text-large text-opacity text-left">5556906</td>
                                        <td className="text-large text-opacity text-left">Stacking</td>
                                        <td className="text-large text-opacity text-left">payout_stakers</td>
                                        <td className="text-large text-opacity">
                                            <Check className="webCheckIcon" />
                                        </td>
                                        <td className="text-right pe-4p0">
                                            <button onClick={goTransInfo} className="btn btn-secondary rounded-pill px-4 py-1">Details</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            }
                            {!isLaptop &&
                            <div className={"mobileView"}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Transaction ID</span>
                                        <span className="mobileValue">5556906-2</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Block</span>
                                        <span className="mobileValue">5556906</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Module</span>
                                        <span className="mobileValue">Stacking</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Call</span>
                                        <span className="mobileValue">payout_stakers</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Success</span>
                                        <Check className="mobileCheckIcon" fillColor="rgba(255, 255, 255, 0.7)" />
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <button onClick={goTransInfo} className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
                                </div>
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

export default ValidatorDetail;
