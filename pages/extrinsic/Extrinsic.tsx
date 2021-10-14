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

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    function goExtrinsicDetail(index:any) {
        router.push({
            pathname: './extrinsic/' + index,
            query: { data: JSON.stringify(dummyData[index]) }
        })
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
                            {dummyData.map((item, key) => { return (
                                <tr key={key}>
                                    <td className="text-large text-opacity fw-bold text-left ps-4p0">{item.extrinsic_id}</td>
                                    <td className="text-large text-opacity text-left">{item.block}</td>
                                    <td className="text-large text-opacity text-left">{item.module}</td>
                                    <td className="text-large text-opacity text-left">{item.call}</td>
                                    <td className="text-large text-opacity">{item.signed?'YES':'NO'}</td>
                                    <td className="text-large text-opacity">
                                        {item.success?
                                        <Check className="webCheckIcon" fillColor="rgba(255, 255, 255, 0.7)" />
                                        :'Fail'
                                        }
                                    </td>
                                    <td className="text-right pe-4p0">
                                        <button onClick={() => goExtrinsicDetail(key)} className={"btn btn-secondary rounded-pill px-4 py-1"}>Details</button>
                                    </td>
                                </tr>
                                )})}
                            </tbody>
                        </table>
                        }
                        {!isLaptop && dummyData.map((item, key) => { return (
                            <div className={"mobileView " + (key%2==1?"mobileDarkView":"")} key={key}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Extrinsic ID</span>
                                        <span className="mobileValue">{item.extrinsic_id}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Block</span>
                                        <span className="mobileValue">{item.block}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Module</span>
                                        <span className="mobileValue">{item.module}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Call</span>
                                        <span className="mobileValue">{item.call}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Signed</span>
                                        <span className="mobileValue">{item.signed?'YES':'NO'}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Success</span>
                                        {item.success?
                                        <Check className="mobileCheckIcon" fillColor="rgba(255, 255, 255, 0.7)" />
                                        :<span className="mobileValue">Fail</span>
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <button onClick={() => goExtrinsicDetail(key)} className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
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
