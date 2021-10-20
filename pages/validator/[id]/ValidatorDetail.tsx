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

export interface ValidatorDetailProps {
}

const ValidatorDetail: React.FC<ValidatorDetailProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });
    const router = useRouter();
    let bIndex:number;
    const dummyData = [
        {
            'name': 'P2P.ORG/7',
            'total_stacked': 5965695,
            'comissions': 0.2,
            'returns': 14.37,
            'total_balance': 93442342343,
            'free_balance': 778483844,
            'reserved': 80782,
            'account_index': '1Rs7u',
            'display_name': 'P2P.ORG/7',
            'email': 'Explorer@Ternoa.pro',
            'web': 'https://Ternoascan.pro',
            'riot': '@p2p:7.org',
            'twitter': '@Ternoascan',
            'nonce': 111,
            'active': true,
            'current_roles': 'validator',
            'transactions': [
                {
                    'transaction_id': '5556906-2',
                    'block': 5556906,
                    'module': 'Stacking',
                    'call': 'payout_stackers',
                    'success': true,
                    'transaction_detail': {
                    'account': 'P2P.ORG/7',
                    'id': 74,
                    'updated_at_block': 0
                    }
                }
            ]
        }, {
            'name': 'P2P.ORG/7',
            'total_stacked': 5965695,
            'comissions': 0.2,
            'returns': 14.37,
            'total_balance': 93442342343,
            'free_balance': 778483844,
            'reserved': 80782,
            'account_index': '1Rs7u',
            'display_name': 'P2P.ORG/7',
            'email': 'Explorer@Ternoa.pro',
            'web': 'https://Ternoascan.pro',
            'riot': '@p2p:7.org',
            'twitter': '@Ternoascan',
            'nonce': 111,
            'active': true,
            'current_roles': 'validator',
            'transactions': [
                {
                    'transaction_id': '5556906-2',
                    'block': 5556906,
                    'module': 'Stacking',
                    'call': 'payout_stackers',
                    'success': true,
                    'transaction_detail': {
                    'account': 'P2P.ORG/7',
                    'id': 74,
                    'updated_at_block': 0
                    }
                }
            ]
        }, {
            'name': 'P2P.ORG/7',
            'total_stacked': 5965695,
            'comissions': 0.2,
            'returns': 14.37,
            'total_balance': 93442342343,
            'free_balance': 778483844,
            'reserved': 80782,
            'account_index': '1Rs7u',
            'display_name': 'P2P.ORG/7',
            'email': 'Explorer@Ternoa.pro',
            'web': 'https://Ternoascan.pro',
            'riot': '@p2p:7.org',
            'twitter': '@Ternoascan',
            'nonce': 111,
            'active': true,
            'current_roles': 'validator',
            'transactions': [
                {
                    'transaction_id': '5556906-2',
                    'block': 5556906,
                    'module': 'Stacking',
                    'call': 'payout_stackers',
                    'success': true,
                    'transaction_detail': {
                    'account': 'P2P.ORG/7',
                    'id': 74,
                    'updated_at_block': 0
                    }
                }
            ]
        }, {
            'name': 'P2P.ORG/7',
            'total_stacked': 5965695,
            'comissions': 0.2,
            'returns': 14.37,
            'total_balance': 93442342343,
            'free_balance': 778483844,
            'reserved': 80782,
            'account_index': '1Rs7u',
            'display_name': 'P2P.ORG/7',
            'email': 'Explorer@Ternoa.pro',
            'web': 'https://Ternoascan.pro',
            'riot': '@p2p:7.org',
            'twitter': '@Ternoascan',
            'nonce': 111,
            'active': true,
            'current_roles': 'validator',
            'transactions': [
                {
                    'transaction_id': '5556906-2',
                    'block': 5556906,
                    'module': 'Stacking',
                    'call': 'payout_stackers',
                    'success': true,
                    'transaction_detail': {
                    'account': 'P2P.ORG/7',
                    'id': 74,
                    'updated_at_block': 0
                    }
                }
            ]
        }
    ]
    const initData = dummyData[0];

    useEffect(()=>{
        if(!router.isReady) return;
    
        bIndex = parseInt(router.query.id as string);
        setValdata(dummyData[bIndex])
    
    }, [router.isReady]);

    const [valData, setValdata] = useState<any>(initData)

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    function goTransInfo(index:any) {
        router.push({
            // pathname: './' + valData.name + '/trans',
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
                    <h1 className="subTitle subTitleMarginTop2">
                        {valData.name}
                    </h1>
                    <div className="mainBlock mt-2 mb-5">
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large text-opacity">Total balance</td>
                                        <td className="text-large text-opacity">{valData.total_balance} CAPS</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Free Balance</td>
                                        <td className="text-large text-opacity">{valData.free_balance} CAPS</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Reserved Balance</td>
                                        <td className="text-large text-opacity">{valData.reserved} CAPS</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Account Index</td>
                                        <td className="text-large text-opacity">{valData.account_index}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Display name</td>
                                        <td className="text-large text-opacity">{valData.display_name}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Email</td>
                                        <td className="text-large text-opacity">{valData.email}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Web</td>
                                        <td className="text-large text-opacity">{valData.web}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Riot</td>
                                        <td className="text-large text-opacity">{valData.riot}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Twitter</td>
                                        <td className="text-large text-opacity">{valData.twitter}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Nonce</td>
                                        <td className="text-large text-opacity">{valData.nonce}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Active</td>
                                        <td className="text-large text-opacity">{valData.active?'True':'False'}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Current Roles</td>
                                        <td className="text-large text-opacity">{valData.current_roles}</td>
                                    </tr>
                                </tbody>
                            </table>
                            }
                            {!isLaptop &&
                                <div className={"mobileView"}>
                                    <div className="flex flex-row mt-2">
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Total Balance</span>
                                            <span className="mobileValue">{valData.total_balance} CAPS</span>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Free Balance</span>
                                            <span className="mobileValue">{valData.free_balance} CAPS</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-4">
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Reserved Balance</span>
                                            <span className="mobileValue">{valData.reserved} CAPS</span>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Account Index</span>
                                            <span className="mobileValue">{valData.account_index}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-4">
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Display name</span>
                                            <span className="mobileValue">{valData.display_name}</span>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Email</span>
                                            <span className="mobileValue">{valData.email}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-4">
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Riot</span>
                                            <span className="mobileValue">{valData.riot}</span>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Web</span>
                                            <span className="mobileValue">{valData.web}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-4">
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Twitter</span>
                                            <span className="mobileValue">{valData.twitter}</span>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Nonce</span>
                                            <span className="mobileValue">{valData.nonce}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row mt-4 mb-2">
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Active</span>
                                            <span className="mobileValue">{valData.active?'True':'False'}</span>
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <span className="mobileLabel">Current Roles</span>
                                            <span className="mobileValue">{valData.current_roles}</span>
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
                                        <th style={{width:"20%"}} className="text-left">Block</th>
                                        <th style={{width:"20%"}} className="text-left">Module</th>
                                        <th style={{width:"20%"}} className="text-left">Call</th>
                                        <th style={{width:"15%"}}>Success</th>
                                        <th style={{width:"10%"}}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {valData.transactions != undefined
                                     && valData.transactions.map((transItem:any,key:any) => {
                                        return (
                                    <tr key={key}>
                                        <td className="text-large text-opacity fw-bold text-left ps-4p0">{transItem.transaction_id}</td>
                                        <td className="text-large text-opacity text-left">{transItem.block}</td>
                                        <td className="text-large text-opacity text-left">{transItem.module}</td>
                                        <td className="text-large text-opacity text-left">{transItem.call}</td>
                                        <td className="text-large text-opacity">
                                            {transItem.success?<Check className="webCheckIcon" />:''}
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
                            {!isLaptop && valData.transactions != undefined
                             && valData.transactions.map((transItem:any,key:any) => { return (
                            <div key={key} className={"mobileView " + (key%2==1?"mobileDarkView":"")}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Transaction ID</span>
                                        <span className="mobileValue">{transItem.transaction_id}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Block</span>
                                        <span className="mobileValue">{transItem.block}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Module</span>
                                        <span className="mobileValue">{transItem.module}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Call</span>
                                        <span className="mobileValue">{transItem.call}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Success</span>
                                        {transItem.success?<Check className="mobileCheckIcon" fillColor="rgba(255, 255, 255, 0.7)" />:''}
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

export default ValidatorDetail;
