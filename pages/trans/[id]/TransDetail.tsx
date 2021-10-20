import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head'
import CAPSDark from 'components/assets/CAPSDark';
import Back from 'components/assets/Back';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';

export interface TransDetailProps {
}

const TransDetail: React.FC<TransDetailProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });
    const router = useRouter();

    let bIndex:number;
    const dummyData = [
        {
            'block': '5545118',
            'from': '112A6wJPeDsf34nsqo...',
            'to': '112A6wJPeDsf34nsqo...',
            'value': '52.456',
            'fee': '41.5',
            'event_id': '5560132-8'
        }, {
            'block': '5545118',
            'from': '112A6wJPeDsf34nsqo...',
            'to': '112A6wJPeDsf34nsqo...',
            'value': '52.456',
            'fee': '41.5',
            'event_id': '5560132-8'
        }, {
            'block': '5545118',
            'from': '112A6wJPeDsf34nsqo...',
            'to': '112A6wJPeDsf34nsqo...',
            'value': '52.456',
            'fee': '41.5',
            'event_id': '5560132-8'
        }, {
            'block': '5545118',
            'from': '112A6wJPeDsf34nsqo...',
            'to': '112A6wJPeDsf34nsqo...',
            'value': '52.456',
            'fee': '41.5',
            'event_id': '5560132-8'
        }, {
            'block': '5545118',
            'from': '112A6wJPeDsf34nsqo...',
            'to': '112A6wJPeDsf34nsqo...',
            'value': '52.456',
            'fee': '41.5',
            'event_id': '5560132-8'
        }, {
            'block': '5545118',
            'from': '112A6wJPeDsf34nsqo...',
            'to': '112A6wJPeDsf34nsqo...',
            'value': '52.456',
            'fee': '41.5',
            'event_id': '5560132-8'
        }
    ]
    const initData = dummyData[0];

    useEffect(()=>{
        if(!router.isReady) return;
    
        bIndex = parseInt(router.query.id as string);
        setTransData(dummyData[bIndex])
    
    }, [router.isReady]);

    const [transData, setTransData] = useState<any>(initData)

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

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
                    <h1 className="subTitle subTitleMarginTop2">Balance transfer "{transData.block}"</h1>
                    <div className="mainBlock mt-2 mb-5">
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large text-opacity">Block</td>
                                        <td className="text-large text-opacity">{transData.block}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">From</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">{transData.from}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">To</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">{transData.to}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Value</td>
                                        <td className="text-large text-opacity">{transData.value} CAPS</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Fee</td>
                                        <td className="text-large text-opacity">{transData.fee} CAPS</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Event ID</td>
                                        <td className="text-large text-opacity">{transData.event_id}</td>
                                    </tr>
                                </tbody>
                            </table>
                            }
                            {!isLaptop &&
                            <div className={"mobileView"}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Block</span>
                                        <span className="mobileValue">{transData.block}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Event-ID</span>
                                        <span className="mobileValue">{transData.event_id}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">From</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">{transData.from}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">To</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">{transData.to}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Fee</span>
                                        <span className="mobileValue">{transData.fee} CAPS</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Value</span>
                                        <span className="mobileValue">{transData.value} CAPS</span>
                                    </div>
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

export default TransDetail;
