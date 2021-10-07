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
    const mediaQuery = useMediaQuery({ query: '(min-device-width: 1024px)' });
    const router = useRouter();

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

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
                    <h1 className="subTitle">Multicolor galaxy-6502</h1>
                    <div className="mainBlock mt-2 mb-5">
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large text-opacity">NFT Name</td>
                                        <td className="text-large text-opacity">Multicolor galaxy</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">ID</td>
                                        <td className="text-large text-opacity">6502</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Type of transaction</td>
                                        <td className="text-large text-opacity">Sale</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Amount</td>
                                        <td className="text-large text-opacity">1000 CAPS</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Minting contract</td>
                                        <td className="text-large text-opacity">
                                            <span className="textToken">0x7be8076f4ea4a4ad08075c2508e481d6c946d12b</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">NFT asset address</td>
                                        <td className="text-large text-opacity">
                                            <span className="textToken">0x495f947276749ce646f68ac8c248420045cb7b5e</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Sender</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Receiver</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Creator</td>
                                        <td className="text-large text-opacity flex flex-row flex-items-center w-100">
                                            <CAPSDark className="webIcon me-2" />
                                            <span className="textToken">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Date</td>
                                        <td className="text-large text-opacity">13/09/2021, 22:14</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Quantity</td>
                                        <td className="text-large text-opacity">3</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Content URL</td>
                                        <td className="text-large text-opacity">https://SecretNFT/files/d84ed2d6ef96bb146e0df57017e47731</td>
                                    </tr>
                                </tbody>
                            </table>
                            }
                            {!isLaptop &&
                            <div className={"mobileView"}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">NFT Name</span>
                                        <span className="mobileValue">Multicolor galaxy</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">ID</span>
                                        <span className="mobileValue">6502</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Type of transaction</span>
                                        <span className="mobileValue">Sale</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Amount</span>
                                        <span className="mobileValue">1000 CAPS</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4 mb-2">
                                    <span className="mobileLabel">Minting contract</span>
                                    <div className="mobileValue textToken">16hCXjmTFQ...E9EiMg8FrzdzRrC</div>
                                </div>
                                <div className="flex flex-col mt-4 mb-2">
                                    <span className="mobileLabel">NFT asset address</span>
                                    <div className="mobileValue textToken">16hCXjmTFQ...E9EiMg8FrzdzRrC</div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileRowLabel">Sender</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken mobileValue">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileRowLabel">Receiver</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken mobileValue">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileRowLabel">Creator</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken mobileValue">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Date</span>
                                        <span className="mobileValue">13/09/2021, 22:14</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Quantity</span>
                                        <span className="mobileValue">3</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4 mb-2">
                                    <span className="mobileLabel">Content URL</span>
                                    <div className="mobileValue">https://SecretNFT/files d84ed2d6ef96bb146e0df57017e47731</div>
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
