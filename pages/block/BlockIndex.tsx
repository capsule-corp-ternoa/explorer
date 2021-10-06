import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Head from 'next/head'
import { useRouter } from "next/router";
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import Pagination from 'components/base/Pagination';
import CAPSDark from 'components/assets/CAPSDark';

export interface BlockIndexProps {
}

const BlockIndex: React.FC<BlockIndexProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-device-width: 1024px)' });
    const router = useRouter();
    const dummyWeb = [0,1,1,1,1,1,1,1,1,1,1,1];
    const dummyMobile = [0,1,1,1];

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    const goBlockDetail = () => {
        router.push("./block/1")
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
                <h1 className="subTitle">Blocks</h1>
                <div className="mainBlock pb-4 mt-2">
                    <div className="tag-for-scroll">
                        {isLaptop &&
                        <table className="table table-borderless mb-3 webBorderTable">
                            <thead>
                                <tr className="fs-6 text-grey">
                                    <th>Number</th>
                                    <th>Age</th>
                                    <th>Block Hash</th>
                                    <th>Signed Extrinsics</th>
                                    <th>Module Events</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyWeb.map((item, key) => { return (
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity">21 hours Ago</td>
                                    <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                    <td className="text-large text-opacity">2</td>
                                    <td className="text-large text-opacity">6</td>
                                    <td>
                                        <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1"}>Details</button>
                                    </td>
                                </tr>
                                )})}
                            </tbody>
                        </table>
                        }
                        {!isLaptop && dummyMobile.map((item, key) => { return (
                            <div className={"mobileView " + (key%2==1?"mobileDarkView":"")}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Number</span>
                                        <span className="mobileValue">5545118</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Age</span>
                                        <span className="mobileValue">21 hour ago</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Block Hash</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken mobileValue">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Signed Extrinsics</span>
                                        <span className="mobileValue">1</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Module Events</span>
                                        <span className="mobileValue">2</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
                                </div>
                            </div>
                        )})
                        }
                    </div>
                    {isLaptop &&
                    <Pagination curPage={1} totalPage={9} />
                    }
                    {!isLaptop && <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-black rounded-pill mobileNextButton">View Next</button> 
                    </div>}
                </div>
                </div>
                <Footer />               
            </div>
        </>
    )
}

export default BlockIndex;
