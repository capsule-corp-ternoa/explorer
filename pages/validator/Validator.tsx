import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from "next/router";
import Pagination from 'components/base/Pagination';
import Down from 'components/assets/Down';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import Check from 'components/assets/Check';
import CAPSDark from 'components/assets/CAPSDark';
import { useMediaQuery } from 'react-responsive';

export interface ValidatorProps {
}

const Validator: React.FC<ValidatorProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });
    const router = useRouter();
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

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    function goValidatorDetail(index:any) {
        router.push({
            pathname: './validator/' + index,
            query: { data: JSON.stringify(dummyData[index]) }
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
                <h1 className="subTitle subTitleMarginTop">
                    Elected ({dummyData.length})
                    <Down className="ms-3 mb-1"/>
                </h1>
                <div className="mainBlock pb-4 mt-2">
                    <div className = "tag-for-scroll">
                        {isLaptop &&
                        <table className="table table-borderless mb-3 webBorderTable">
                            <thead>
                                <tr className="fs-6 text-grey">
                                    <th style={{width:"30%"}} className="text-left ps-4p0">Name</th>
                                    <th style={{width:"30%"}} className="text-left">Total Stacked</th>
                                    <th style={{width:"15%"}}>Comissions</th>
                                    <th style={{width:"15%"}}>Returns</th>
                                    <th style={{width:"10%"}}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((item, key) => { return (
                                <tr key={key}>
                                    <td className="text-large text-opacity text-no-wrap text-left ps-4p0">
                                        <CAPSDark className="webIcon" />
                                        <Check className="webCheckIcon ms-2" />
                                        <span className="ms-2 fw-bold">{item.name}</span>
                                    </td>
                                    <td className="text-large text-opacity text-left">{item.total_stacked}</td>
                                    <td className="text-large text-opacity">{item.comissions}%</td>
                                    <td className="text-large text-opacity">{item.returns}%</td>
                                    <td className='text-right pe-4p0'>
                                        <button onClick={() => goValidatorDetail(key)} className={"btn btn-secondary rounded-pill px-4 py-1"}>Details</button>
                                    </td>
                                </tr>
                                )})}
                            </tbody>
                        </table>
                        }
                        {!isLaptop && dummyData.map((item, key) => { return (
                            <div className={"mobileView " + (key%2==1?"mobileDarkView":"")} key={key}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col flex-grow-6">
                                        <span className="mobileLabel">Name</span>
                                        <div className="flex flex-row flex-1 flex-items-center">
                                            <CAPSDark className="mobileIcon" />
                                            <Check className="mobileCheckIcon ms-2 me-2" fillColor="rgba(255, 255, 255, 0.7)" />
                                            <span className="textToken mobileValue">{item.name}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col flex-grow-4">
                                        <span className="mobileLabel">Total stacked</span>
                                        <div className="flex flex-row flex-1 flex-items-center">{/* this line only is for center-align */}
                                        <span className="mobileValue">{item.total_stacked}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col flex-grow-6">
                                        <span className="mobileLabel">Comissions</span>
                                        <span className="mobileValue">{item.comissions}%</span>
                                    </div>
                                    <div className="flex-1 flex flex-col flex-grow-4">
                                        <span className="mobileLabel">Returns</span>
                                        <span className="mobileValue">{item.returns}%</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <button onClick={() => goValidatorDetail(key)} className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
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

export default Validator;
