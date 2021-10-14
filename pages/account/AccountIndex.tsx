import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from "next/router";
import CAPSDark from 'components/assets/CAPSDark';
import Pagination from 'components/base/Pagination';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';

export interface AccountIndexProps {
}

const AccountIndex: React.FC<AccountIndexProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });
    const router = useRouter();

    const dummyData = [
        {
            'address': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af...',
            'transactions': 7,
            'amount': 10000,
            'total_balance': 56233,
            'free_balance': 4593,
            'nonce': 70732,
            'active': true,
            'past_roles': 'nominator'
        }, {
            'address': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af...',
            'transactions': 7,
            'amount': 10000,
            'total_balance': 56233,
            'free_balance': 4593,
            'nonce': 70732,
            'active': true,
            'past_roles': 'nominator'
        }, {
            'address': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af...',
            'transactions': 7,
            'amount': 10000,
            'total_balance': 56233,
            'free_balance': 4593,
            'nonce': 70732,
            'active': true,
            'past_roles': 'nominator'
        }, {
            'address': '0x3a851d399f86346150af63a824ce843790f3f084a0f7c1af...',
            'transactions': 7,
            'amount': 10000,
            'total_balance': 56233,
            'free_balance': 4593,
            'nonce': 70732,
            'active': true,
            'past_roles': 'nominator'
        }
    ]

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    function goAccountDetail(index:any) {
        router.push({
            pathname: './account/' + index,
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
                <Header/>
                <div className="mainBody">
                <h1 className="subTitle subTitleMarginTop">All Accounts</h1>
                <div className="mainBlock pb-4 mt-2">
                    <div className = "tag-for-scroll">
                        {isLaptop &&
                        <table className="table table-borderless mb-3 webBorderTable">
                            <thead>
                                <tr className="fs-6 text-grey">
                                    <th style={{width:"60%"}} className="text-left ps-4p0">Address</th>
                                    <th style={{width:"10%"}}>Transactions</th>
                                    <th style={{width:"25%"}}>Amount</th>
                                    <th style={{width:"10%"}}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((item, key) => { return (
                                <tr key={key}>
                                    <td className="text-large text-opacity text-no-wrap text-left ps-4p0">
                                        <CAPSDark className="webIcon me-2" />
                                        <span className="textToken">{item.address}</span>
                                    </td>
                                    <td className="text-large text-opacity">{item.transactions}</td>
                                    <td className="text-large text-opacity">{item.amount} CAPS</td>
                                    <td className="text-right pe-4p0">
                                        <button onClick={() => goAccountDetail(key)} className="btn btn-secondary rounded-pill px-4 py-1">Details</button>
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
                                        <span className="mobileLabel">Transactions</span>
                                        <span className="mobileValue">{item.transactions}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Amount</span>
                                        <span className="mobileValue">{item.amount} CAPS</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Block Hash</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">{item.address}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <button onClick={() => goAccountDetail(key)} className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
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

export default AccountIndex;
