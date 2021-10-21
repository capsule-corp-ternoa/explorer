import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Head from 'next/head'
import { useRouter } from "next/router";
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import Pagination from 'components/base/Pagination';
import CAPSDark from 'components/assets/CAPSDark';
import dummyData from 'components/data/blocks.json'

export interface BlockIndexProps {
}

const BlockIndex: React.FC<BlockIndexProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });
    const router = useRouter();

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    function goBlockDetail(key:any) {
        // router.push({
        //     pathname: './block/' + index
        // })
        router.push("/block/"+key)
    }

    return (
        <>
            <Head>
                <title>Ternoa scan</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Ternoa scan, by Ternoa." />
            </Head>
            <div className={"mainContainer"}>
                <Header />
                <div className="mainBody">
                <h1 className="subTitle subTitleMarginTop">Blocks</h1>
                <div className="mainBlock pb-4 mt-2">
                    <div className="tag-for-scroll">
                        {isLaptop &&
                        <table className="table table-borderless mb-3 webBorderTable">
                            <thead>
                                <tr className="fs-6 text-grey">
                                    <th style={{width:"17%"}} className="text-left ps-4p0">Number</th>
                                    <th style={{width:"18%"}} className="text-left">Age</th>
                                    <th style={{width:"30%"}} className="text-left">Block Hash</th>
                                    <th style={{width:"10%"}}>Signed Extrinsics</th>
                                    <th style={{width:"10%"}}>Module Events</th>
                                    <th style={{width:"15%"}}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((item, key) => { return (
                                    <tr key={key}>
                                        <td className="text-large text-opacity fw-bold text-left ps-4p0">{item.number}</td>
                                        <td className="text-large text-opacity text-left">{item.age + ' hours ago'}</td>
                                        <td className="text-large text-opacity text-left">{item.block_hash}</td>
                                        <td className="text-large text-opacity">{item.signed_extrinsics}</td>
                                        <td className="text-large text-opacity">{item.module_events}</td>
                                        <td className="text-right pe-4p0">
                                            <button onClick={() => goBlockDetail(item.number)} className={"btn btn-secondary rounded-pill px-4 py-1"}>Details</button>
                                        </td>
                                    </tr>
                                )})}
                            </tbody>
                        </table>
                        }
                        {!isLaptop && dummyData.map((item, key) => { return (
                            <div key={key} className={"mobileView " + (key%2==1?"mobileDarkView":"")}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Number</span>
                                        <span className="mobileValue">{item.number}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Age</span>
                                        <span className="mobileValue">{item.age + ' hour ago'}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Block Hash</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">{item.block_hash}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Signed Extrinsics</span>
                                        <span className="mobileValue">{item.signed_extrinsics}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Module Events</span>
                                        <span className="mobileValue">{item.module_events}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <button onClick={() => goBlockDetail(item.number)} className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
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