import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from "next/router";
import CAPSDark from 'components/assets/CAPSDark';
import Pagination from 'components/base/Pagination';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';

export interface TransIndexProps {
}

const TransIndex: React.FC<TransIndexProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });
    const router = useRouter();

    const dummyData = [
        {
            'name_id': 'Multicolor galaxy-6502',
            'date': '13/09/2021, 22:14',
            'sender': '14Kazg6SFiUCH7FNhvBQ1pvXzF1dQhv',
            'receiver': '14Kazg6SFiUCH7FNhvBKhtBQ1pvXzF1dQhv',
            'amount': 10000,
            'nft_name': 'Multicolor galaxy',
            'id': 6502,
            'transaction_type': 'Sale',
            'missing_contact': '0x7be8076f4ea4a4ad08075c2508e481d6c946d12b',
            'nft_asset_address': '0x495f947276749ce646f68ac8c248420045cb7b5e',
            'creator': '14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv',
            'quantity': 3,
            'content_url': 'https://SecretNFT/files/d84ed2d6ef96bb146e0df57017e47731'
        }, {
            'name_id': 'Multicolor galaxy-6502',
            'date': '13/09/2021, 22:14',
            'sender': '14Kazg6SFiUCH7FNhvBQ1pvXzF1dQhv',
            'receiver': '14Kazg6SFiUCH7FNhvBKhtBQ1pvXzF1dQhv',
            'amount': 10000,
            'nft_name': 'Multicolor galaxy',
            'id': 6502,
            'transaction_type': 'Sale',
            'missing_contact': '0x7be8076f4ea4a4ad08075c2508e481d6c946d12b',
            'nft_asset_address': '0x495f947276749ce646f68ac8c248420045cb7b5e',
            'creator': '14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv',
            'quantity': 3,
            'content_url': 'https://SecretNFT/files/d84ed2d6ef96bb146e0df57017e47731'
        }, {
            'name_id': 'Multicolor galaxy-6502',
            'date': '13/09/2021, 22:14',
            'sender': '14Kazg6SFiUCH7FNhvBQ1pvXzF1dQhv',
            'receiver': '14Kazg6SFiUCH7FNhvBKhtBQ1pvXzF1dQhv',
            'amount': 10000,
            'nft_name': 'Multicolor galaxy',
            'id': 6502,
            'transaction_type': 'Sale',
            'missing_contact': '0x7be8076f4ea4a4ad08075c2508e481d6c946d12b',
            'nft_asset_address': '0x495f947276749ce646f68ac8c248420045cb7b5e',
            'creator': '14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv',
            'quantity': 3,
            'content_url': 'https://SecretNFT/files/d84ed2d6ef96bb146e0df57017e47731'
        }, {
            'name_id': 'Multicolor galaxy-6502',
            'date': '13/09/2021, 22:14',
            'sender': '14Kazg6SFiUCH7FNhvBQ1pvXzF1dQhv',
            'receiver': '14Kazg6SFiUCH7FNhvBKhtBQ1pvXzF1dQhv',
            'amount': 10000,
            'nft_name': 'Multicolor galaxy',
            'id': 6502,
            'transaction_type': 'Sale',
            'missing_contact': '0x7be8076f4ea4a4ad08075c2508e481d6c946d12b',
            'nft_asset_address': '0x495f947276749ce646f68ac8c248420045cb7b5e',
            'creator': '14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv',
            'quantity': 3,
            'content_url': 'https://SecretNFT/files/d84ed2d6ef96bb146e0df57017e47731'
        }
    ]

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    function goTransDetail(index:any) {
        router.push({
            pathname: './nft/' + index,
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
                <Header/>
                <div className="mainBody">
                <h1 className="subTitle subTitleMarginTop">NFT Transactions</h1>
                <div className="mainBlock pb-4 mt-2">
                    <div className = "tag-for-scroll">
                        {isLaptop &&
                        <table className="table table-borderless mb-3 webBorderTable">
                            <thead>
                                <tr className="fs-6 text-grey">
                                    <th style={{width:"20%"}} className="text-left ps-4p0">Name/ID</th>
                                    <th style={{width:"15%"}} className="text-left">Date</th>
                                    <th style={{width:"20%"}} className="text-left">Sender</th>
                                    <th style={{width:"20%"}} className="text-left">Receiver</th>
                                    <th style={{width:"10%"}} className="text-left">Account</th>
                                    <th style={{width:"10%"}}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyData.map((item, key) => { return (
                                <tr key={key}>
                                    <td className="text-large text-opacity fw-bold text-left ps-4p0">{item.name_id}</td>
                                    <td className="text-large text-opacity text-left">{item.date}</td>
                                    <td className="text-large text-opacity text-no-wrap text-left">
                                        <CAPSDark className="webIcon me-2" />
                                        <span className="textToken">{item.sender}</span>
                                    </td>
                                    <td className="text-large text-opacity text-no-wrap text-left">
                                        <CAPSDark className="webIcon me-2" />
                                        <span className="textToken">{item.receiver}</span>
                                    </td>
                                    <td className="text-large text-opacity text-left">{item.amount} CAPS</td>
                                    <td className="text-right pe-4p0">
                                        <button onClick={() => goTransDetail(key)} className="btn btn-secondary rounded-pill px-4 py-1">Details</button>
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
                                        <span className="mobileLabel">Name/ID</span>
                                        <span className="mobileValue">{item.name_id}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col flex-grow-4">
                                        <span className="mobileLabel">Amount</span>
                                        <span className="mobileValue">{item.amount} CAPS</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Date</span>
                                    <div className="mobileValue">{item.date}</div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">From</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken mobileValue text-80">{item.sender}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">To</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken mobileValue text-80">{item.receiver}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <button onClick={() => goTransDetail(key)} className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
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

export default TransIndex;
