import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head'
import Back from 'components/assets/Back';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';

export interface TransInfoProps {
}

const TransInfo: React.FC<TransInfoProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });
    const router = useRouter();

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    let bIndex:number;
    let transId:number;
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
    const initData = dummyData[0].transactions[0].transaction_detail;
    const [transData, setTransdata] = useState<any>(initData)

    useEffect(()=>{
        if(!router.isReady) return;
    
        bIndex = parseInt(router.query.id as string);
        transId = parseInt(router.query.transId as string);
        setTransdata(dummyData[bIndex].transactions[transId].transaction_detail)
    
    }, [router.isReady]);

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
                    <h1 className="subTitle subTitleMarginTop2">Account {transData.account}</h1>
                    <div className="mainBlock mt-2 mb-5">
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large text-opacity">Account</td>
                                        <td className="text-large text-opacity">{transData.account}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">ID</td>
                                        <td className="text-large text-opacity">{transData.id}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Updated at block</td>
                                        <td className="text-large text-opacity">{transData.updated_at_block}</td>
                                    </tr>  
                                </tbody>
                            </table>
                            }
                            {!isLaptop &&
                            <div className={"mobileView"}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Account</span>
                                        <span className="mobileValue">{transData.account}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Updated at block</span>
                                        <span className="mobileValue">{transData.updated_at_block}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">ID</span>
                                        <span className="mobileValue">{transData.id}</span>
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

export default TransInfo;
