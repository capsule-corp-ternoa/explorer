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

export interface BlockDetailProps {
}

const BlockDetail: React.FC<BlockDetailProps> = () => {
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
                    <div className="cursor-point w-fit-content mb-3" onClick={()=>router.back()}>
                       <Back />
                    </div>
                    }
                    <h1 className="subTitle">Block #5545118</h1>
                    <div className="mainBlock mt-2 mb-5">
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large text-opacity">Timestamp</td>
                                        <td className="text-large text-opacity">Jun 17, 2021, 12:36:06 PM</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Hash</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Parent hash</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">State Root</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Extrinsics Root</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
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
                                        <td className="text-large text-opacity textToken">112A6wJPeDsf34nsqoAkAtQ8n74vJU8qmyKMtzX7ZPQH2kXa</td>
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
                      <span className={"mt-5 mb-3 subTitle2"}>Transactions</span>
                      <Down className="ms-3 mb-1"/>
                    </div>
                    <div className={"mainBlock mt-3"}>
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0 webBorderTable2">
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
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                        </td>
                                        <td className="text-large text-opacity">
                                            <Check className="webCheckIcon" />
                                        </td>
                                        <td>
                                            <button onClick={goTransInfo} className="btn btn-secondary rounded-pill px-4 py-1">Details</button>
                                        </td>
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
                                        <Check className="mobileCheckIcon" />
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

export default BlockDetail;
