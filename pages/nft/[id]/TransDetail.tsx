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
    const [transData, setTransdata] = useState<any>({})

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    useEffect(() => {
        const rParam:any = router.query.data?.toString();
        setTransdata(JSON.parse(rParam));
    },[])

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
                    {isLaptop &&
                    <div className="cursor-point w-fit-content mb-4" onClick={()=>router.back()}>
                       <Back />
                    </div>
                    }
                    <h1 className="subTitle subTitleMarginTop2">{transData.name_id}</h1>
                    <div className="mainBlock mt-2 mb-5">
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large text-opacity">NFT Name</td>
                                        <td className="text-large text-opacity">{transData.nft_name}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">ID</td>
                                        <td className="text-large text-opacity">{transData.id}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Type of transaction</td>
                                        <td className="text-large text-opacity">{transData.transaction_type}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Amount</td>
                                        <td className="text-large text-opacity">{transData.amount} CAPS</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Missing contact</td>
                                        <td className="text-large text-opacity">
                                            <span className="textToken">{transData.missing_contact}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">NFT asset address</td>
                                        <td className="text-large text-opacity">
                                            <span className="textToken">{transData.nft_asset_address}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Sender</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">{transData.sender}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Receiver</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">{transData.receiver}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Creator</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">{transData.creator}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Date</td>
                                        <td className="text-large text-opacity">{transData.date}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Quantity</td>
                                        <td className="text-large text-opacity">{transData.quantity}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Content URL</td>
                                        <td className="text-large text-opacity">{transData.content_url}</td>
                                    </tr>
                                </tbody>
                            </table>
                            }
                            {!isLaptop &&
                            <div className={"mobileView"}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">NFT Name</span>
                                        <span className="mobileValue">{transData.nft_name}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">ID</span>
                                        <span className="mobileValue">{transData.id}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Type of transaction</span>
                                        <span className="mobileValue">{transData.transaction_type}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Amount</span>
                                        <span className="mobileValue">{transData.amount} CAPS</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4 mb-2">
                                    <span className="mobileLabel">Missing contact</span>
                                    <div className="mobileValue textToken">{transData.missing_contact}</div>
                                </div>
                                <div className="flex flex-col mt-4 mb-2">
                                    <span className="mobileLabel">NFT asset address</span>
                                    <div className="mobileValue textToken">{transData.nft_asset_address}</div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Sender</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken mobileValue text-80">{transData.sender}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Receiver</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken mobileValue text-80">{transData.receiver}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Creator</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken mobileValue text-80">{transData.creator}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Date</span>
                                        <span className="mobileValue">{transData.date}</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Quantity</span>
                                        <span className="mobileValue">{transData.quantity}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4 mb-2">
                                    <span className="mobileLabel">Content URL</span>
                                    <div className="mobileValue">{transData.content_url}</div>
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
