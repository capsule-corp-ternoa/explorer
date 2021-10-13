import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from "next/router";
import Pagination from 'components/base/Pagination';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import Check from 'components/assets/Check';
import { useMediaQuery } from 'react-responsive';

export interface ExtrinsicProps {
}

const Extrinsic: React.FC<ExtrinsicProps> = () => {
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

    const goExtrinsicDetail = () => {
        router.push("./extrinsic/1")
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
                <h1 className="subTitle subTitleMarginTop">Extrinsics</h1>
                <div className="mainBlock pb-4 mt-2">
                    <div className = "tag-for-scroll">
                        {isLaptop &&
                        <table className="table table-borderless mb-3 webBorderTable">
                            <thead>
                                <tr className="fs-6 text-grey">
                                    <th style={{width:"20%"}} className="text-left ps-4p0">Extrinsic ID</th>
                                    <th style={{width:"20%"}} className="text-left">Block</th>
                                    <th style={{width:"10%"}} className="text-left">Module</th>
                                    <th style={{width:"10%"}} className="text-left">Call</th>
                                    <th style={{width:"10%"}}>Signed</th>
                                    <th style={{width:"10%"}}>Success</th>
                                    <th style={{width:"10%"}}></th>
                                </tr>
                            </thead>
                            <tbody>
                            {dummyWeb.map((item, key) => { return (
                                <tr key={key}>
                                    <td className="text-large text-opacity fw-bold text-left ps-4p0">5659861-2</td>
                                    <td className="text-large text-opacity text-left">5659861</td>
                                    <td className="text-large text-opacity text-left">staking</td>
                                    <td className="text-large text-opacity text-left">bond_extra</td>
                                    <td className="text-large text-opacity">Yes</td>
                                    <td className="text-large text-opacity">
                                        <Check className="webCheckIcon" fillColor="rgba(255, 255, 255, 0.7)" />
                                    </td>
                                    <td className="text-right pe-4p0">
                                        <button onClick={goExtrinsicDetail} className={"btn btn-secondary rounded-pill px-4 py-1"}>Details</button>
                                    </td>
                                </tr>
                                )})}
                            </tbody>
                        </table>
                        }
                        {!isLaptop && dummyMobile.map((item, key) => { return (
                            <div className={"mobileView " + (key%2==1?"mobileDarkView":"")} key={key}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Extrinsic ID</span>
                                        <span className="mobileValue">5659861-2</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Block</span>
                                        <span className="mobileValue">5659861</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Module</span>
                                        <span className="mobileValue">Staking</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Call</span>
                                        <span className="mobileValue">bond_extra</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Signed</span>
                                        <span className="mobileValue">Yes</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Success</span>
                                        <Check className="mobileCheckIcon" fillColor="rgba(255, 255, 255, 0.7)" />
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <button onClick={goExtrinsicDetail} className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
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

export default Extrinsic;
