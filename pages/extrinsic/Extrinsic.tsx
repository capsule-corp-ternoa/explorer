import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from "next/router";
import style from './Extrinsic.module.scss';
import Pagination from 'components/base/Pagination';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import Check from 'components/assets/Check';
import { useMediaQuery } from 'react-responsive';

export interface ExtrinsicProps {
}

const Extrinsic: React.FC<ExtrinsicProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-device-width: 1024px)' });
    const router = useRouter();
    const dummyData = [0,1,1,1];

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    const goExtrinsicDetail = () => {
        router.push("../block-detail")
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
                <h1 className={style.subtitle + " subTitleMargin"}>Extrinsics</h1>
                <div className={style.block + " pb-4 mt-2"}>
                    <div className = "tag-for-scroll">
                        {isLaptop &&
                        <table className={"table table-borderless mb-3 " + style.indexTable}>
                            <thead>
                                <tr className="fs-6 text-grey">
                                    <th>Extrinsic ID</th>
                                    <th>Block</th>
                                    <th>Module</th>
                                    <th>Call</th>
                                    <th>Signed</th>
                                    <th>Success</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5659861-2</td>
                                    <td className="text-large text-opacity">5659861</td>
                                    <td className="text-large text-opacity">staking</td>
                                    <td className="text-large text-opacity">bond_extra</td>
                                    <td className="text-large text-opacity">Yes</td>
                                    <td><Check className="ms-3"/></td>
                                    <td>
                                        <button onClick={goExtrinsicDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5659861-2</td>
                                    <td className="text-large text-opacity">5659861</td>
                                    <td className="text-large text-opacity">staking</td>
                                    <td className="text-large text-opacity">bond_extra</td>
                                    <td className="text-large text-opacity">Yes</td>
                                    <td><Check className="ms-3"/></td>
                                    <td>
                                        <button onClick={goExtrinsicDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5659861-2</td>
                                    <td className="text-large text-opacity">5659861</td>
                                    <td className="text-large text-opacity">staking</td>
                                    <td className="text-large text-opacity">bond_extra</td>
                                    <td className="text-large text-opacity">Yes</td>
                                    <td><Check className="ms-3"/></td>
                                    <td>
                                        <button onClick={goExtrinsicDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5659861-2</td>
                                    <td className="text-large text-opacity">5659861</td>
                                    <td className="text-large text-opacity">staking</td>
                                    <td className="text-large text-opacity">bond_extra</td>
                                    <td className="text-large text-opacity">Yes</td>
                                    <td><Check className="ms-3"/></td>
                                    <td>
                                        <button onClick={goExtrinsicDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5659861-2</td>
                                    <td className="text-large text-opacity">5659861</td>
                                    <td className="text-large text-opacity">staking</td>
                                    <td className="text-large text-opacity">bond_extra</td>
                                    <td className="text-large text-opacity">Yes</td>
                                    <td><Check className="ms-3"/></td>
                                    <td>
                                        <button onClick={goExtrinsicDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5659861-2</td>
                                    <td className="text-large text-opacity">5659861</td>
                                    <td className="text-large text-opacity">staking</td>
                                    <td className="text-large text-opacity">bond_extra</td>
                                    <td className="text-large text-opacity">Yes</td>
                                    <td><Check className="ms-3"/></td>
                                    <td>
                                        <button onClick={goExtrinsicDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5659861-2</td>
                                    <td className="text-large text-opacity">5659861</td>
                                    <td className="text-large text-opacity">staking</td>
                                    <td className="text-large text-opacity">bond_extra</td>
                                    <td className="text-large text-opacity">Yes</td>
                                    <td><Check className="ms-3"/></td>
                                    <td>
                                        <button onClick={goExtrinsicDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5659861-2</td>
                                    <td className="text-large text-opacity">5659861</td>
                                    <td className="text-large text-opacity">staking</td>
                                    <td className="text-large text-opacity">bond_extra</td>
                                    <td className="text-large text-opacity">Yes</td>
                                    <td><Check className="ms-3"/></td>
                                    <td>
                                        <button onClick={goExtrinsicDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5659861-2</td>
                                    <td className="text-large text-opacity">5659861</td>
                                    <td className="text-large text-opacity">staking</td>
                                    <td className="text-large text-opacity">bond_extra</td>
                                    <td className="text-large text-opacity">Yes</td>
                                    <td><Check className="ms-3"/></td>
                                    <td>
                                        <button onClick={goExtrinsicDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5659861-2</td>
                                    <td className="text-large text-opacity">5659861</td>
                                    <td className="text-large text-opacity">staking</td>
                                    <td className="text-large text-opacity">bond_extra</td>
                                    <td className="text-large text-opacity">Yes</td>
                                    <td><Check className="ms-3"/></td>
                                    <td>
                                        <button onClick={goExtrinsicDetail} className={"btn btn-secondary rounded-pill px-4 py-1 "}>Detail</button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                        }
                        {!isLaptop && dummyData.map((item,key) => {
                            return (
                            <div className={style.mobileView + " " + (key%2==1?style.blackMobileView:'')}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className={style.mobileLabel}>Extrinsic ID</span>
                                        <span className={style.mobileValue}>5659861-2</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className={style.mobileLabel}>Block</span>
                                        <span className={style.mobileValue}>5659861</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className={style.mobileLabel}>Mudule</span>
                                        <span className={style.mobileValue}>Staking</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className={style.mobileLabel}>Call</span>
                                        <span className={style.mobileValue}>bond_extra</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className={style.mobileLabel}>Signed</span>
                                        <span className={style.mobileValue}>Yes</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className={style.mobileLabel}>Success</span>
                                        <Check />
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <button onClick={goExtrinsicDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Details</button>
                                </div>
                            </div>
                            )
                        })
                        }
                    </div>
                    {isLaptop && <Pagination curPage={1} totalPage={9} /> }
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

export default Extrinsic;
