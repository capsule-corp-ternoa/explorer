import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head'
import Back from 'components/assets/Back';
import Down from 'components/assets/Down';
import Check from 'components/assets/Check';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';

export interface AddressDetailProps {
}

const AddressDetail: React.FC<AddressDetailProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });
    const router = useRouter();
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

    const initData = dummyData[0].parameters.destination;

    let bIndex:number;

    useEffect(()=>{
        if(!router.isReady) return;
    
        bIndex = parseInt(router.query.id as string);
        setAddrdata(dummyData[bIndex].parameters.destination)
    
    }, [router.isReady]);

    const [addrData, setAddrdata] = useState<any>(initData)

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    const goTransInfo = () => {
        // router.push("../trans-info")
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
                    <h1 className="subTitle subTitleMarginTop2">
                        {addrData.address}
                    </h1>
                    <div className="mainBlock mt-2 mb-5">
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large text-opacity">Total balance</td>
                                        <td className="text-large text-opacity">{addrData.total_balance} CAPS</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Free balance</td>
                                        <td className="text-large text-opacity">{addrData.free_balance} CAPS</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Nonce</td>
                                        <td className="text-large text-opacity">{addrData.nonce}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Active</td>
                                        <td className="text-large text-opacity">
                                            {addrData.active?<Check className="webCheckIcon" />:''}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            }
                            {!isLaptop && 
                            <div className={"mobileView"}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Total Balance</span>
                                        <span className="mobileValue">{addrData.total_balance} CAPS</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Free Balance</span>
                                        <span className="mobileValue">{addrData.free_balance} CAPS</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Nonce</span>
                                        <span className="mobileValue">{addrData.nonce}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Active</span>
                                        {addrData.active?<Check className='webCheckicon'/>:''}
                                    </div>
                                </div>
                            </div>
                        }
                        </div>
                    </div>
                    <div>
                      <span className={"mt-5 mb-3 subTitle2"}>3 last transactions</span>
                      <Down className="ms-3 mb-1"/>
                    </div>
                    <div className={"mainBlock mt-3"}>
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0 webBorderTable2">
                                <thead> 
                                    <tr className="fs-6 text-grey">
                                        <th style={{width:"20%"}} className="text-left ps-4p0">Transaction ID</th>
                                        <th style={{width:"20%"}} className="text-left">From</th>
                                        <th style={{width:"20%"}} className="text-left">Module</th>
                                        <th style={{width:"10%"}} className="text-left">Call</th>
                                        <th style={{width:"10%"}}>Success</th>
                                        <th style={{width:"10%"}}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dummyData.map((item, key) => { return (
                                    <tr key={key}>
                                        <td className="text-large text-opacity fw-bold text-left ps-4p0">5556906-2</td>
                                        <td className="text-large text-opacity text-left">5560132</td>
                                        <td className="text-large text-opacity text-left">Balancers</td>
                                        <td className="text-large text-opacity text-left">transfer</td>
                                        <td className="text-large text-opacity">
                                            <Check className="webCheckIcon" />
                                        </td>
                                        <td className="text-right pe-4p0">
                                            <button onClick={goTransInfo} className="btn btn-secondary rounded-pill px-4 py-1">Details</button>
                                        </td>
                                    </tr>
                                    )})}
                                </tbody>
                            </table>
                            }
                            {!isLaptop && 
                            <div className={"mobileView"}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Transaction ID</span>
                                        <span className="mobileValue">5556906-2</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">From</span>
                                        <span className="mobileValue">5560132</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Module</span>
                                        <span className="mobileValue">Balancers</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Success</span>
                                        <Check className="mobileCheckIcon" fillColor="rgba(255, 255, 255, 0.7)" />
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Call</span>
                                        <span className="mobileValue">transfer</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <button className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
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

export default AddressDetail;
