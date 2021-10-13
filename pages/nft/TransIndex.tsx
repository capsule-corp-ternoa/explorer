import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from "next/router";
import CAPSDark from 'components/assets/CAPSDark';
import Pagination from 'components/base/Pagination';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';

export interface TransIndexProps {
}

const TransIndex: React.FC<TransIndexProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });
    const router = useRouter();

    const dummyWeb = [0,1,1,1,1,1,1,1,1,1,1,1];
    const dummyMobile = [0,1,1,1];

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    const goTransDetail = () => {
        router.push("./nft/1")
    }

    return (
        <>
            <Head>
                <title>BSC Scan</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="BSC Scan, by Ternoa." />
            </Head>
            <div className={"mainContainer"}>
                <Header/>
                <div className="mainBody">
                <h1 className="subTitle subTitleMarginTop">NFT Transactions</h1>
                <div className="mainBlock pb-4 mt-2">
                    <div className = "tag-for-scroll">
                        {isLaptop &&
                        <table className="table table-borderless mb-3 webBorderTable">
                            <thead>
                                <tr className="fs-6 text-grey">
                                    <th style={{width:"20%"}} className="text-left ps-4p0">Name/ID</th>
                                    <th style={{width:"15%"}} className="text-left">Date</th>
                                    <th style={{width:"20%"}} className="text-left">Sender</th>
                                    <th style={{width:"20%"}} className="text-left">Receiver</th>
                                    <th style={{width:"10%"}} className="text-left">Account</th>
                                    <th style={{width:"10%"}}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyWeb.map((item, key) => { return (
                                <tr key={key}>
                                    <td className="text-large text-opacity fw-bold text-left ps-4p0">Multicolor galaxy-6502</td>
                                    <td className="text-large text-opacity text-left">13/09/2021, 22:14</td>
                                    <td className="text-large text-opacity text-no-wrap text-left">
                                        <CAPSDark className="webIcon me-2" />
                                        <span className="textToken">0x3a851d...399f86</span>
                                    </td>
                                    <td className="text-large text-opacity text-no-wrap text-left">
                                        <CAPSDark className="webIcon me-2" />
                                        <span className="textToken">0x3a851d...399f86</span>
                                    </td>
                                    <td className="text-large text-opacity text-left">10.000 CAPS</td>
                                    <td className="text-right pe-4p0">
                                        <button onClick={goTransDetail} className="btn btn-secondary rounded-pill px-4 py-1">Details</button>
                                    </td>
                                </tr>
                                )})}
                            </tbody>
                        </table>
                        }
                        {!isLaptop && dummyMobile.map((item, key) => { return (
                            <div className={"mobileView " + (key%2==1?"mobileDarkView":"")} key={key}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col flex-grow-6">
                                        <span className="mobileLabel">Name/ID</span>
                                        <span className="mobileValue">Multicolor galaxy-6502</span>
                                    </div>
                                    <div className="flex-1 flex flex-col flex-grow-4">
                                        <span className="mobileLabel">Amount</span>
                                        <span className="mobileValue">10.000 CAPS</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Date</span>
                                    <div className="mobileValue">13/09/2021, 22:14</div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">From</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken mobileValue text-80">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">To</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken mobileValue text-80">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <button onClick={goTransDetail} className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
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

export default TransIndex;
