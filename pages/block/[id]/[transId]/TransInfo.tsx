import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head'
import CAPSDark from 'components/assets/CAPSDark';
import Back from 'components/assets/Back';
import Check from 'components/assets/Check';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';

export interface TransInfoProps {
}

const TransInfo: React.FC<TransInfoProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });
    const router = useRouter();
    console.log(router.query);
    let bIndex:number;
    let transId:number;
    
    useEffect(()=>{
        if(!router.isReady) return;
    
        bIndex = parseInt(router.query.id as string);
        transId = parseInt(router.query.transId as string);
        setTransdata(dummyData[bIndex].transaction_detail[transId])
    
    }, [router.isReady]);
    
    const dummyData = [
        {
          'number': 3234723,
          'age': 21,
          'block_hash': '0x3a851d3...efe6f',
          'parent_hash': '0x3a851d3...efe6f',
          'state_root': '0x3a851d3...efe6f',
          'extrinsics_root': '0x3a851d3...efe6f',
          'signed_extrinsics': 2,
          'module_events': 6,
          'timestamp': 'Jun 17, 2021, 12:36:06 PM',
          'runtime_version': 30,
          'block_time': 6,
          'session_id': 2320,
          'block_author': '112A6wJPeDsf34nsqoAkAtQ8n74vJU8qmyKMtzX7ZPQH2kXa',
          'transactions': 2,
          'transaction_detail': [
            {
              'transaction_id': 'stacking',
              'from': '112A6wJPeDsf34nsqo...',
              'module': 'Balance',
              'call': 'transfer_keep_alive',
              'success': true,
              'timestamp': 'Jun 18, 2021, 3:16:00 PM',
              'hash': 5559817,
              'transaction_hash': '0xbcac471afcdc2b...4d8a65e55a64bba858d651e5981e98cb03',
              'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill the origin...',
              'address': '112A6wJPeDsf34nsqo...ze4z5e21z',
              'nonce': 488, 
              'signature': '14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv',
              'result': true,
              'parameters': {
                'transaction_hash': '0x13mPzYL8TK88MEN781GnBhJZdiHmvfsNEWjuK2vn7dNnugFr',
                'value': 52342
              }
            }
          ]
        },
        {
          'number': 5748383,
          'age': 32,
          'block_hash': '0x3a851d3...efe6f',
          'parent_hash': '0x3a851d3...efe6f',
          'state_root': '0x3a851d3...efe6f',
          'extrinsics_root': '0x3a851d3...efe6f',
          'signed_extrinsics': 3,
          'module_events': 4,
          'timestamp': 'Jun 17, 2021, 12:36:06 PM',
          'runtime_version': 30,
          'block_time': 6,
          'session_id': 2320,
          'block_author': '112A6wJPeDsf34nsqoAkAtQ8n74vJU8qmyKMtzX7ZPQH2kXa',
          'transactions': 2,
          'transaction_detail': [
            {
              'transaction_id': 'stacking',
              'from': 'unbound',
              'module': ' 0x3a851d3...',
              'call': '112A6wJPeDsf34nsqo...',
              'success': true,
              'timestamp': 'Jun 18, 2021, 3:16:00 PM',
              'hash': 5559817,
              'transaction_hash': '0xbcac471afcdc2b...4d8a65e55a64bba858d651e5981e98cb03',
              'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill the origin...',
              'address': '112A6wJPeDsf34nsqo...ze4z5e21z',
              'nonce': 488, 
              'signature': '14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv',
              'result': true,
              'parameters': {
                'transaction_hash': '0x13mPzYL8TK88MEN781GnBhJZdiHmvfsNEWjuK2vn7dNnugFr',
                'value': 34293
              }
            }
          ]
        },
        {
          'number': 6803432,
          'age': 20,
          'block_hash': '0x3a851d3...efe6f',
          'parent_hash': '0x3a851d3...efe6f',
          'state_root': '0x3a851d3...efe6f',
          'extrinsics_root': '0x3a851d3...efe6f',
          'signed_extrinsics': 7,
          'module_events': 8,
          'timestamp': 'Jun 17, 2021, 12:36:06 PM',
          'runtime_version': 30,
          'block_time': 6,
          'session_id': 2320,
          'block_author': '112A6wJPeDsf34nsqoAkAtQ8n74vJU8qmyKMtzX7ZPQH2kXa',
          'transactions': 2,
          'transaction_detail': [
            {
              'transaction_id': 'stacking',
              'from': 'unbound',
              'module': ' 0x3a851d3...',
              'call': '112A6wJPeDsf34nsqo...',
              'success': true,
              'timestamp': 'Jun 18, 2021, 3:16:00 PM',
              'hash': 5559817,
              'transaction_hash': '0xbcac471afcdc2b...4d8a65e55a64bba858d651e5981e98cb03',
              'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill the origin...',
              'address': '112A6wJPeDsf34nsqo...ze4z5e21z',
              'nonce': 488, 
              'signature': '14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv',
              'result': true,
              'parameters': {
                'transaction_hash': '0x13mPzYL8TK88MEN781GnBhJZdiHmvfsNEWjuK2vn7dNnugFr',
                'value': 39237
              }
            }
          ]
        },
        {
          'number': 9988079,
          'age': 49,
          'block_hash': '0x3a851d3...efe6f',
          'parent_hash': '0x3a851d3...efe6f',
          'state_root': '0x3a851d3...efe6f',
          'extrinsics_root': '0x3a851d3...efe6f',
          'signed_extrinsics': 9,
          'module_events': 1,
          'timestamp': 'Jun 17, 2021, 12:36:06 PM',
          'runtime_version': 30,
          'block_time': 6,
          'session_id': 2320,
          'block_author': '112A6wJPeDsf34nsqoAkAtQ8n74vJU8qmyKMtzX7ZPQH2kXa',
          'transactions': 2,
          'transaction_detail': [
            {
              'transaction_id': 'stacking',
              'from': 'unbound',
              'module': ' 0x3a851d3...',
              'call': '112A6wJPeDsf34nsqo...',
              'success': true,
              'timestamp': 'Jun 18, 2021, 3:16:00 PM',
              'hash': 5559817,
              'transaction_hash': '0xbcac471afcdc2b...4d8a65e55a64bba858d651e5981e98cb03',
              'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill the origin...',
              'address': '112A6wJPeDsf34nsqo...ze4z5e21z',
              'nonce': 488, 
              'signature': '14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv',
              'result': true,
              'parameters': {
                'transaction_hash': '0x13mPzYL8TK88MEN781GnBhJZdiHmvfsNEWjuK2vn7dNnugFr',
                'value': 43928
              }
            }
          ]
        }
    ]

    const initData = dummyData[0].transaction_detail[0];

    const [transData, setTransdata] = useState<any>(initData)

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
                    <h1 className={"subTitle subTitleMarginTop2"}>Transaction : {transData.transaction_id}</h1>
                    <div className="mainBlock mt-2 mb-5">
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large text-opacity">Timestamp</td>
                                        <td className="text-large text-opacity">{transData.timestamp}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Hash</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">{transData.hash}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Transaction Index</td>
                                        <td className="text-large text-opacity">{transData.hash}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Transaction Hash</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">{transData.transaction_hash}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Module</td>
                                        <td className="text-large text-opacity">{transData.module}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Call</td>
                                        <td className="text-large text-opacity">{transData.call}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Description</td>
                                        <td className="text-large text-opacity textToken">{transData.description}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Nonce</td>
                                        <td className="text-large text-opacity">{transData.nonce}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Signature</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">{transData.signature}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Result</td>
                                        <td className="text-large text-opacity">
                                            {transData.result?<Check className="webCheckIcon" />:''}
                                        </td>
                                    </tr>     
                                </tbody>
                            </table>
                            }
                            {!isLaptop &&
                            <div className={"mobileView"}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col flex-grow-4">
                                        <span className="mobileLabel">Hash</span>
                                        <span className="mobileValue">{transData.hash}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col flex-grow-6">
                                        <span className="mobileLabel">TimeStamp</span>
                                        <span className="mobileValue">{transData.timestamp}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Transaction Index</span>
                                    <span className="mobileValue">{transData.hash}</span>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Transaction Hash</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken mobileValue text-80">{transData.hash}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col flex-grow-4">
                                        <span className="mobileLabel">Module</span>
                                        <span className="mobileValue">{transData.module}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col flex-grow-6">
                                        <span className="mobileLabel">Call</span>
                                        <span className="mobileValue">{transData.call}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Description</span>
                                    <span className="textToken mobileValue">{transData.description}</span>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Address</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken mobileValue text-80">{transData.address}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col flex-grow-4">
                                        <span className="mobileLabel">Nonce</span>
                                        <span className="mobileValue">{transData.nonce}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col flex-grow-6">
                                        <span className="mobileLabel">Result</span>
                                        {transData.result?<Check className="mobileCheckIcon" fillColor="rgba(255, 255, 255, 0.7)" />:''}
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4 mb-2">
                                    <span className="mobileLabel">Signature</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken mobileValue text-80">{transData.signature}</span>
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
                                        <td className="text-large text-opacity">Transaction Hash</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">{transData.parameters.transaction_hash}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Value</td>
                                        <td className="text-large text-opacity">{transData.parameters.value} CAPS</td>
                                    </tr>
                                </tbody>
                            </table>
                            }
                            {!isLaptop &&
                            <div className={"mobileView"}>
                                <div className="flex flex-col mt-2">
                                    <span className="mobileLabel">From</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken mobileValue text-80">{transData.parameters.transaction_hash}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4 mb-2">
                                    <span className="mobileLabel">Value</span>
                                    <span className="mobileValue">{transData.parameters.value} CAPS</span>
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

export default TransInfo;
