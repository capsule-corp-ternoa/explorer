import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head'
import CAPSDark from 'components/assets/CAPSDark';
import Back from 'components/assets/Back';
import Down from 'components/assets/Down';
import Check from 'components/assets/Check';
import style from './AddressDetail.module.scss';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import { useMediaQuery } from 'react-responsive';

export interface AddressDetailProps {
}

const AddressDetail: React.FC<AddressDetailProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-device-width: 1024px)' });
    const router = useRouter();

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    const goTransInfo = () => {
        router.push("../trans-info")
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
                <div className={style.main}>
                    <div className="cursor-point w-fit-content" onClick={()=>router.back()}>
                       {isLaptop && <Back />}
                    </div> 
                    <h1 className={style.subtitle + " subTitleMargin"}><CAPSDark /> 14Kazg6SFiUC...Q1pvXzF1dQhv</h1>
                    <div className={style.block + " mt-2 mb-5"}>
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <tbody className="tbody-detail">
                                    <tr>
                                        <td className="text-large  text-opacity border-radius">Total balance</td>
                                        <td className="text-large  text-opacity border-radius">52.456 CAPS</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Free balance</td>
                                        <td className="text-large text-opacity">52.456 CAPS</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Nonce</td>
                                        <td className="text-large text-opacity">70732</td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity">Active</td>
                                        <td className="text-large text-opacity">30</td>
                                    </tr>
                                </tbody>
                            </table>
                            }
                            {!isLaptop && 
                            <div className={style.mobileView}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className={style.mobileLabel}>Total Balance</span>
                                        <span className={style.mobileValue}>52.456 CAPS</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className={style.mobileLabel}>Free Balance</span>
                                        <span className={style.mobileValue}>52.456 CAPS</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className={style.mobileLabel}>Nonce</span>
                                        <span className={style.mobileValue}>Staking</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className={style.mobileLabel}>Active</span>
                                        <Check />
                                    </div>
                                </div>
                            </div>
                        }
                        </div>
                    </div>
                    <div>
                      <span className={"mt-5 mb-3 subTitleMargin " + style.subTitle2}>3 last transactions</span>
                      <Down className="ms-3 mb-1"/>
                    </div>
                    <div className={style.block + " mt-3"}>
                        <div className = "tag-for-scroll">
                            {isLaptop &&
                            <table className="table table-borderless mb-0">
                                <thead> 
                                    <tr className="fs-6 text-grey">
                                        <th>Transaction ID</th>
                                        <th>From</th>
                                        <th>Module</th>
                                        <th>Call</th>
                                        <th>Success</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-large text-opacity fw-bold">5556906-2</td>
                                        <td className="text-large text-opacity">5560132</td>
                                        <td className="text-large text-opacity">Balancers</td>
                                        <td className="text-large text-opacity">transfer</td>
                                        <td className="text-large text-opacity">
                                        <Check className={style.smallCheckImage} />
                                        </td>
                                        <td>
                                            <button onClick={goTransInfo} className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity fw-bold">5556906-2</td>
                                        <td className="text-large text-opacity">5560132</td>
                                        <td className="text-large text-opacity">Balancers</td>
                                        <td className="text-large text-opacity">transfer</td>
                                        <td className="text-large text-opacity">
                                        <Check className={style.smallCheckImage} />
                                        </td>
                                        <td>
                                            <button onClick={goTransInfo} className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-large text-opacity fw-bold">5556906-2</td>
                                        <td className="text-large text-opacity">5560132</td>
                                        <td className="text-large text-opacity">Balancers</td>
                                        <td className="text-large text-opacity">transfer</td>
                                        <td className="text-large text-opacity">
                                        <Check className={style.smallCheckImage} />
                                        </td>
                                        <td>
                                            <button onClick={goTransInfo} className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            }
                            {!isLaptop && 
                            <div className={style.mobileView}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className={style.mobileLabel}>Transaction ID</span>
                                        <span className={style.mobileValue}>5556906-2</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className={style.mobileLabel}>From</span>
                                        <span className={style.mobileValue}>5560132</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className={style.mobileLabel}>Module</span>
                                        <span className={style.mobileValue}>Balancers</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className={style.mobileLabel}>Success</span>
                                        <Check />
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className={style.mobileLabel}>Call</span>
                                        <span className={style.mobileValue}>transfer</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <button className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Details</button>
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

export default AddressDetail;
