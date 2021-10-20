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
    const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });
    const router = useRouter();

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    const dummyData = [
        {
          'extrinsic_id': '5659861-2',
          'block': 5659861,
          'module': 'staking',
          'call': 'bond_extra',
          'signed': true,
          'success': true,
          'timestamp': 'Jun 18, 2021, 3:16:00 PM',
          'extrinsic_index': 1,
          'extrinsic_hash': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
          'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill...',
          'address': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
          'nonce': '14539',
          'signature': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
          'result': true,
          'parameters': {
            'destination': {
              'address': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
              'total_balance': 52456,
              'free_balance': 34234,
              'nonce': 70732,
              'active': true
            }, 
            'value': 34234
          }
        }, {
            'extrinsic_id': '5659861-2',
            'block': 5659861,
            'module': 'staking',
            'call': 'bond_extra',
            'signed': true,
            'success': true,
            'timestamp': 'Jun 18, 2021, 3:16:00 PM',
            'extrinsic_index': 1,
            'extrinsic_hash': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
            'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill...',
            'address': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
            'nonce': '14539',
            'signature': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
            'result': true,
            'parameters': {
              'destination': {
                'address': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
                'total_balance': 52456,
                'free_balance': 34234,
                'nonce': 70732,
                'active': true
              }, 
              'value': 34234
            }
          }, {
            'extrinsic_id': '5659861-2',
            'block': 5659861,
            'module': 'staking',
            'call': 'bond_extra',
            'signed': true,
            'success': true,
            'timestamp': 'Jun 18, 2021, 3:16:00 PM',
            'extrinsic_index': 1,
            'extrinsic_hash': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
            'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill...',
            'address': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
            'nonce': '14539',
            'signature': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
            'result': true,
            'parameters': {
              'destination': {
                'address': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
                'total_balance': 52456,
                'free_balance': 34234,
                'nonce': 70732,
                'active': true
              }, 
              'value': 34234
            }
          }, {
            'extrinsic_id': '5659861-2',
            'block': 5659861,
            'module': 'staking',
            'call': 'bond_extra',
            'signed': true,
            'success': true,
            'timestamp': 'Jun 18, 2021, 3:16:00 PM',
            'extrinsic_index': 1,
            'extrinsic_hash': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
            'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill...',
            'address': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
            'nonce': '14539',
            'signature': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
            'result ': true,
            'parameters': {
              'destination': {
                'address': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
                'total_balance': 52456,
                'free_balance': 34234,
                'nonce': 70732,
                'active': true
              }, 
              'value': 34234
            }
          }, {
            'extrinsic_id': '5659861-2',
            'block': 5659861,
            'module': 'staking',
            'call': 'bond_extra',
            'signed': true,
            'success': true,
            'timestamp': 'Jun 18, 2021, 3:16:00 PM',
            'extrinsic_index': 1,
            'extrinsic_hash': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
            'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill...',
            'address': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
            'nonce': '14539',
            'signature': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
            'result ': true,
            'parameters': {
              'destination': {
                'address': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af',
                'total_balance': 52456,
                'free_balance': 34234,
                'nonce': 70732,
                'active': true
              }, 
              'value': 34234
            }
          }
      ]

    const initData = dummyData[0];

    let bIndex:number;

    useEffect(()=>{
        if(!router.isReady) return;
    
        bIndex = parseInt(router.query.id as string);
        setExtdata(dummyData[bIndex])
    
    }, [router.isReady]);

    const [extData, setExtdata] = useState<any>(initData)

    function goTransInfo() {
        router.push({
            pathname: './' + router.query.id + '/address'
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
                    <h1 className="subTitle subTitleMarginTop2">Extrinsics: {extData.extrinsic_id}</h1>
                    <div className="mainBlock mt-2 mb-5">
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large text-opacity">Block</td>
                                        <td className="text-large text-opacity">{extData.block}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Timestamp</td>
                                        <td className="text-large text-opacity">{extData.timestamp}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Extrinsic Index</td>
                                        <td className="text-large text-opacity">{extData.extrinsic_index}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Extrinsic Hash</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">{extData.extrinsic_hash}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Module</td>
                                        <td className="text-large text-opacity">{extData.module}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Call</td>
                                        <td className="text-large text-opacity">{extData.call}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Description</td>
                                        <td className="text-large text-opacity">
                                            <span className="textToken">{extData.description}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Address</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">{extData.address}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Nonce</td>
                                        <td className="text-large text-opacity">{extData.nonce}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Signature</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">{extData.signature}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Result</td>
                                        <td className="text-large text-opacity">
                                            {extData.result?<Check className="webCheckIcon" />:''}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            }
                            {!isLaptop &&
                            <div className={"mobileView"}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col flex-grow-4">
                                        <span className="mobileLabel">Block</span>
                                        <span className="mobileValue">{extData.block}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col flex-grow-6">
                                        <span className="mobileLabel">Timestamp</span>
                                        <span className="mobileValue">{extData.timestamp}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Extrinsic Index</span>
                                    <span className="mobileValue">{extData.extrinsic_index}</span>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Extrinsic Hash</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">{extData.extrinsic_hash}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col flex-grow-4">
                                        <span className="mobileLabel">Module</span>
                                        <span className="mobileValue">{extData.module}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col flex-grow-6">
                                        <span className="mobileLabel">Call</span>
                                        <span className="mobileValue">{extData.call}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Description</span>
                                    <span className="textToken mobileValue">{extData.description}</span>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Address</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">{extData.address}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col flex-grow-4">
                                        <span className="mobileLabel">Nonce</span>
                                        <span className="mobileValue">{extData.nonce}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col flex-grow-6">
                                        <span className="mobileLabel">Result</span>
                                        <span className="mobileValue">
                                            {extData.result?<Check className="mobileCheckIcon" fillColor="rgba(255, 255, 255, 0.7)" /> : ''}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4 mb-2">
                                    <span className="mobileLabel">Signature</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">{extData.signature}</span>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                    <div>
                      <span className={"mt-5 mb-3 subTitle2"}>Parameters</span>
                    </div>
                    {extData.parameters != undefined &&
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
                                            <span className="textToken">{extData.parameters.destination==undefined?'':extData.parameters.destination.address}</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Value</td>
                                        <td className="text-large text-opacity">{extData.parameters.value} CAPS</td>
                                    </tr>
                                </tbody>
                            </table>
                            }
                            {!isLaptop &&
                            <div className={"mobileView"}>
                                <div className="flex flex-col mt-2">
                                    <span className="mobileLabel">Transaction Hash</span>
                                    <div className={"flex flex-row flex-1 flex-items-center"} onClick={goTransInfo}>
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">{extData.parameters.destination==undefined?'':extData.parameters.destination.address}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4 mb-2">
                                    <span className="mobileLabel">Value</span>
                                    <span className="mobileValue">{extData.parameters.value} CAPs</span>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                    }
                </div>
                <Footer />               
            </div>
        </>
    )
}

export default ExtrinsicDetail;
