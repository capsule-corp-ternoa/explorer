import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from "next/router";
import CAPSDark from 'components/assets/CAPSDark';
import LeftArrow from 'components/assets/LeftArrow';
import RightArrow from 'components/assets/RightArrow';
import style from './TransIndex.module.scss';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';

export interface TransIndexProps {
}

const TransIndex: React.FC<TransIndexProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-device-width: 1024px)' });
    const router = useRouter();

    const dummyData = [0,1,1,1];

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    const goTransDetail = () => {
        router.push("./nft/1")
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
                <div className={style.main}>
                <h1 className={style.subtitle + " subTitleMargin"}>Balance transfers</h1>
                <div className={style.block + " pb-4 mt-2"}>
                    <div className = "tag-for-scroll">
                        {isLaptop && <table className={"table table-borderless mb-3 " + style.indexTable}>
                            <thead>
                                <tr className="fs-6 text-grey">
                                    <th>Name</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Value</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity text-no-wrap">
                                        <CAPSDark className={style.smallImage} />
                                        <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                    </td>
                                    <td className="text-large text-opacity text-no-wrap">
                                        <CAPSDark className={style.smallImage} />
                                        <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                    </td>
                                    <td className="text-large text-opacity">2</td>
                                    <td>
                                        <button onClick={goTransDetail} className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity text-no-wrap">
                                        <CAPSDark className={style.smallImage} />
                                        <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                    </td>
                                    <td className="text-large text-opacity text-no-wrap">
                                        <CAPSDark className={style.smallImage} />
                                        <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                    </td>
                                    <td className="text-large text-opacity">2</td>
                                    <td>
                                        <button onClick={goTransDetail} className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity text-no-wrap">
                                        <CAPSDark className={style.smallImage} />
                                        <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                    </td>
                                    <td className="text-large text-opacity text-no-wrap">
                                        <CAPSDark className={style.smallImage} />
                                        <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                    </td>
                                    <td className="text-large text-opacity">2</td>
                                    <td>
                                        <button onClick={goTransDetail} className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity text-no-wrap">
                                        <CAPSDark className={style.smallImage} />
                                        <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                    </td>
                                    <td className="text-large text-opacity text-no-wrap">
                                        <CAPSDark className={style.smallImage} />
                                        <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                    </td>
                                    <td className="text-large text-opacity">2</td>
                                    <td>
                                        <button onClick={goTransDetail} className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity text-no-wrap">
                                        <CAPSDark className={style.smallImage} />
                                        <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                    </td>
                                    <td className="text-large text-opacity text-no-wrap">
                                        <CAPSDark className={style.smallImage} />
                                        <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                    </td>
                                    <td className="text-large text-opacity">2</td>
                                    <td>
                                        <button onClick={goTransDetail} className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity text-no-wrap">
                                        <CAPSDark className={style.smallImage} />
                                        <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                    </td>
                                    <td className="text-large text-opacity text-no-wrap">
                                        <CAPSDark className={style.smallImage} />
                                        <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                    </td>
                                    <td className="text-large text-opacity">2</td>
                                    <td>
                                        <button onClick={goTransDetail} className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity text-no-wrap">
                                        <CAPSDark className={style.smallImage} />
                                        <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                    </td>
                                    <td className="text-large text-opacity text-no-wrap">
                                        <CAPSDark className={style.smallImage} />
                                        <span className={isLaptop ? "ms-3": 'ms-1'}>112A6wJPeDsf34nsqo...</span>
                                    </td>
                                    <td className="text-large text-opacity">2</td>
                                    <td>
                                        <button onClick={goTransDetail} className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>}
                        {!isLaptop &&
                            dummyData.map((item,key) => {
                                return (
                                    <div className={style.mobileView + " " + (key%2==1?style.blackMobileView:'')}>
                                        <div className="flex flex-row">
                                            <div className="flex-1 flex flex-col">
                                                <span className={style.mobileLabel}>Block</span>
                                                <span className={style.mobileValue}>5545118</span>
                                            </div>
                                            <div className="flex-1 flex flex-col">
                                                <span className={style.mobileLabel}>Amount</span>
                                                <span className={style.mobileValue}>5560132-8</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-4">
                                            <span className={style.mobileLabel}>From</span>
                                            <div className="flex flex-row flex-1 flex-items-center">
                                                <CAPSDark className={style.smallImage} />
                                                <span className={style.tokenValue + " " + style.mobileValue}>14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-3">
                                            <span className={style.mobileLabel}>To</span>
                                            <div className="flex flex-row flex-1 flex-items-center">
                                                <CAPSDark className={style.smallImage} />
                                                <span className={style.tokenValue + " " + style.mobileValue}>14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row mt-4">
                                            <button onClick={goTransDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                        </div>
                                    </div>
                            
                                )
                            })
                        }
                    </div>
                    {isLaptop && <div className="d-flex justify-content-center py-3">
                        <LeftArrow className="mt-1 me-2 cursor-point"/>
                        <span className="text-large mx-2">Page</span>
                        <span className="text-large me-1">1</span>
                        <span className="text-large ms-1">of</span>
                        <span className="text-large mx-2">9</span>
                        <RightArrow className="mt-1 ms-2 cursor-point"/>
                    </div>}
                    {!isLaptop && <div className="d-flex justify-content-center py-3">
                        <button className={"btn btn-secondary rounded-pill " + style.nextButton}>View Next</button> 
                    </div>}

                </div>
                </div>
                <Footer />               
            </div>
        </>
    )
}

export default TransIndex;
