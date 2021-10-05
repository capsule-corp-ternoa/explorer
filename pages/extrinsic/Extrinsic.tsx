import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from "next/router";
import LeftArrow from 'components/assets/LeftArrow';
import RightArrow from 'components/assets/RightArrow';
import style from './Extrinsic.module.scss';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import Check from 'components/assets/Check';

export interface ExtrinsicProps {
}

const Extrinsic: React.FC<ExtrinsicProps> = () => {
    const router = useRouter();

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
                                        <button onClick={goExtrinsicDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-center py-3">
                        <LeftArrow className="mt-1 me-2 cursor-point"/>
                        <span className="text-large mx-2">Page</span>
                        <span className="text-large me-1">1</span>
                        <span className="text-large ms-1">of</span>
                        <span className="text-large mx-2">9</span>
                        <RightArrow className="mt-1 ms-2 cursor-point"/>
                    </div>
                </div>
                </div>
                <Footer />               
            </div>
        </>
    )
}

export default Extrinsic;
