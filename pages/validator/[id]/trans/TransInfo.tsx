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
                    <h1 className="subTitle subTitleMarginTop2">Account index 1Rs7u</h1>
                    <div className="mainBlock mt-2 mb-5">
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large text-opacity">Account</td>
                                        <td className="text-large text-opacity">P2P.ORG/7</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">ID</td>
                                        <td className="text-large text-opacity">74</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Updated at block</td>
                                        <td className="text-large text-opacity">0</td>
                                    </tr>  
                                </tbody>
                            </table>
                            }
                            {!isLaptop &&
                            <div className={"mobileView"}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Account</span>
                                        <span className="mobileValue">P2P.ORG/7</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Updated at block</span>
                                        <span className="mobileValue">0</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">ID</span>
                                        <span className="mobileValue">74</span>
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
