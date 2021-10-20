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
import dummyData from 'components/data/blocks.json'

export interface BlockDetailProps {
}

type BlockDetailType = {
    number: number;
    age: number;
    block_hash: string,
    parent_hash: string,
    state_root: string,
    extrinsics_root: string,
    signed_extrinsics: number,
    module_events: number,
    timestamp: string,
    runtime_version: number,
    block_time: number,
    session_id: number,
    block_author: string,
    transactions: number,
    transaction_detail: Array<any>,
}

const BlockDetail: React.FC<BlockDetailProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });
    const router = useRouter();
    let bIndex:number;

    useEffect(()=>{
        if(!router.isReady) return;
    
        bIndex = parseInt(router.query.id as string);
        setBlockdata(dummyData[bIndex])
    
    }, [router.isReady]);

    const initData = dummyData[0];
    
    const [blockData, setBlockdata] = useState<BlockDetailType>(initData)

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    function goTransInfo(index:any) {
        router.push({
            pathname: './' + router.query.id + '/' + index,
        })
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
                    {isLaptop &&
                    <div className="cursor-point w-fit-content mb-4" onClick={()=>router.back()}>
                       <Back />
                    </div>
                    }
                    <h1 className="subTitle subTitleMarginTop2">Block #{blockData.number}</h1>
                    <div className="mainBlock mt-2 mb-5">
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large text-opacity">Timestamp</td>
                                        <td className="text-large text-opacity">{blockData.timestamp}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Hash</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">{blockData.block_hash}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Parent hash</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">{blockData.parent_hash}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">State Root</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">{blockData.state_root}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Extrinsics Root</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">{blockData.extrinsics_root}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Transactions</td>
                                        <td className="text-large text-opacity">{blockData.transactions}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Total module events</td>
                                        <td className="text-large text-opacity">{blockData.module_events}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Runtime Version</td>
                                        <td className="text-large text-opacity">{blockData.runtime_version}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Block time</td>
                                        <td className="text-large text-opacity">{blockData.block_time} seconds</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Session ID</td>
                                        <td className="text-large text-opacity">{blockData.session_id}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Block author</td>
                                        <td className="text-large text-opacity textToken">{blockData.block_author}</td>
                                    </tr>
                                </tbody>
                            </table>
                            }
                            {!isLaptop &&
                            <div className={"mobileView"}>
                                <div className="flex flex-col mt-2">
                                    <span className="mobileLabel">TimeStamp</span>
                                    <span className="mobileValue">{blockData.timestamp}</span>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Hash</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">{blockData.block_hash}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Parent Hash</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">{blockData.parent_hash}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">State Root</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">{blockData.state_root}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Extrinsics Root</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">{blockData.extrinsics_root}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Transactions</span>
                                        <span className="mobileValue">{blockData.transactions}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Total module events</span>
                                        <span className="mobileValue">{blockData.module_events}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Runtime Version</span>
                                        <span className="mobileValue">{blockData.runtime_version}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Block time</span>
                                        <span className="mobileValue">{blockData.block_time} seconds</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Session ID</span>
                                        <span className="mobileValue">{blockData.session_id}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4 mb-4">
                                    <span className="mobileLabel">Block author</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">{blockData.block_author}</span>
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
                                        <th style={{width:"25%"}} className="text-left">From</th>
                                        <th style={{width:"20%"}} className="text-left">Module</th>
                                        <th style={{width:"15%"}} className="text-left">Call</th>
                                        <th style={{width:"10%"}}>Success</th>
                                        <th style={{width:"10%"}}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blockData.transaction_detail != undefined
                                     && blockData.transaction_detail.map((transItem:any,key:any) => {
                                        return (
                                            <tr key={key}>
                                                <td className="text-large text-opacity fw-bold text-left ps-4p0">{transItem.transaction_id}</td>
                                                <td className="text-large text-opacity flex flex-row flex-items-center text-left">
                                                    <CAPSDark className="webIcon me-2" />
                                                    <span className="textToken">{transItem.from}</span>
                                                </td>
                                                <td className="text-large text-opacity text-left">{transItem.module}</td>
                                                <td className="text-large text-opacity text-left">{transItem.call}</td>
                                                <td className="text-large text-opacity">
                                                    {transItem.success ?<Check className="webCheckIcon" /> : '' }
                                                </td>
                                                <td className="text-right pe-4p0">
                                                    <button onClick={() => goTransInfo(key)} className="btn btn-secondary rounded-pill px-4 py-1">Details</button>
                                                </td>
                                            </tr>
                                            
                                        )
                                    })}
                                   
                                </tbody>
                            </table>
                            }

                            {!isLaptop && blockData.transaction_detail != undefined
                             && blockData.transaction_detail.map((transItem:any,key:any) => { return (
                            <div key={key} className={"mobileView " + (key%2==1?"mobileDarkView":"")}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col flex-grow-6">
                                        <span className="mobileLabel">Transaction ID</span>
                                        <span className="mobileValue">{transItem.transaction_id}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col flex-grow-4">
                                        <span className="mobileLabel">Module</span>
                                        <span className="mobileValue">{transItem.module}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">From</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">{transItem.from}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col flex-grow-6">
                                        <span className="mobileLabel">Call</span>
                                        <span className="mobileValue">{transItem.call}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col flex-grow-4">
                                        <span className="mobileLabel">Success</span>
                                        {transItem.success ?<Check className="mobileCheckIcon" fillColor="rgba(255, 255, 255, 0.7)" /> : '' }
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <button onClick={() => goTransInfo(key)} className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
                                </div>
                            </div>
                            )})
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
