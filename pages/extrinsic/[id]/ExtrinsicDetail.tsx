import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head'
import style from './ExtrinsicDetail.module.scss';
import CAPSDark from 'components/assets/CAPSDark';
import Back from 'components/assets/Back';
import Check from 'components/assets/Check';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';

export interface ExtrinsicDetailProps {
}

const ExtrinsicDetail: React.FC<ExtrinsicDetailProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-device-width: 1024px)' });
    const router = useRouter();

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    const goTransInfo = () => {
        router.push("./1/address")
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
                    <h1 className="subTitle">Extrinsics: 0xed6zegve3...f489d83</h1>
                    <div className="mainBlock mt-2 mb-5">
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large text-opacity">Block</td>
                                        <td className="text-large text-opacity">7129421</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Timestamp</td>
                                        <td className="text-large text-opacity">Jun 18, 2021, 3:16:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Extrinsic Index</td>
                                        <td className="text-large text-opacity">1</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Extrinsic Hash</td>
                                        <td className="text-large text-opacity">
                                            <span className="textToken">0xbcac471afcdc2b...4d8a65e55a64bba858d651e5981e98cb03</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Module</td>
                                        <td className="text-large text-opacity">balancers</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Call</td>
                                        <td className="text-large text-opacity">transfer_keep_alive</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Description</td>
                                        <td className="text-large text-opacity">
                                            <span className="textToken">Same as the [`transfer`] call, but with a check that the transfer will not kill...</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Address</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Nonce</td>
                                        <td className="text-large text-opacity">14539</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Signature</td>
                                        <td className="text-large text-opacity">
                                            <span className="textToken">0xa429608de459f7913...dd417cbf4afd6dff3</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Result</td>
                                        <td className="text-large text-opacity">
                                            <Check className="webCheckIcon" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            }
                            {!isLaptop &&
                            <div className={"mobileView"}>
                                <div className="flex flex-col mt-2">
                                    <span className="mobileLabel">TimeStamp</span>
                                    <span className="mobileValue">Jun 18, 2021, 3:16:00 PM</span>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Hash</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Parent Hash</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">State Root</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Extrinsics Root</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Transactions</span>
                                        <span className="mobileValue">2</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Total module events</span>
                                        <span className="mobileValue">6</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Runtime Version</span>
                                        <span className="mobileValue">30</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Block time</span>
                                        <span className="mobileValue">6 seconds</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Session ID</span>
                                        <span className="mobileValue">2320</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4 mb-4">
                                    <span className="mobileLabel">Block author</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                    <div>
                      <span className={"mt-5 mb-3 subTitle2"}>Parameters</span>
                    </div>
                    <div className={"mainBlock mt-3"}>
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large text-opacity">Destination</td>
                                        <td className={"text-large text-opacity"}>
                                            <div className={"flex flex-row flex-items-center w-100 " + style.addressButton} onClick={goTransInfo}>
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Value</td>
                                        <td className="text-large text-opacity">52.456 CAPS</td>
                                    </tr>
                                </tbody>
                            </table>
                            }
                            {!isLaptop &&
                            <div className={"mobileView"}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col flex-grow-6">
                                        <span className="mobileLabel">Transaction ID</span>
                                        <span className="mobileValue">Stacking</span>
                                    </div>
                                    <div className="flex-1 flex flex-col flex-grow-4">
                                        <span className="mobileLabel">Module</span>
                                        <span className="mobileValue">Balance</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">From</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col flex-grow-6">
                                        <span className="mobileLabel">Call</span>
                                        <span className="mobileValue">transfer_keep_alive</span>
                                    </div>
                                    <div className="flex-1 flex flex-col flex-grow-4">
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

export default ExtrinsicDetail;
