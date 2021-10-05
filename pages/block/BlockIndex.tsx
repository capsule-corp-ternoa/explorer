import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from "next/router";
import style from './BlockIndex.module.scss';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import Pagination from 'components/base/Pagination';

export interface BlockIndexProps {
}

const BlockIndex: React.FC<BlockIndexProps> = () => {
    const router = useRouter();

    const goBlockDetail = () => {
        router.push("./block/1")
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
                <h1 className={style.subtitle + " subTitleMargin"}>Blocks</h1>
                <div className={style.block + " pb-4 mt-2"}>
                    <div className = "tag-for-scroll">
                        <table className={"table table-borderless mb-3 " + style.indexTable}>
                            <thead>
                                <tr className="fs-6 text-grey">
                                    <th>Number</th>
                                    <th>Age</th>
                                    <th>Block Hash</th>
                                    <th>Signed Extrinsics</th>
                                    <th>Module Events</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity">21 hours Ago</td>
                                    <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                    <td className="text-large text-opacity">2</td>
                                    <td className="text-large text-opacity">6</td>
                                    <td>
                                        <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity">21 hours Ago</td>
                                    <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                    <td className="text-large text-opacity">2</td>
                                    <td className="text-large text-opacity">6</td>
                                    <td>
                                        <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity">21 hours Ago</td>
                                    <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                    <td className="text-large text-opacity">2</td>
                                    <td className="text-large text-opacity">6</td>
                                    <td>
                                        <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity">21 hours Ago</td>
                                    <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                    <td className="text-large text-opacity">2</td>
                                    <td className="text-large text-opacity">6</td>
                                    <td>
                                        <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity">21 hours Ago</td>
                                    <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                    <td className="text-large text-opacity">2</td>
                                    <td className="text-large text-opacity">6</td>
                                    <td>
                                        <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity">21 hours Ago</td>
                                    <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                    <td className="text-large text-opacity">2</td>
                                    <td className="text-large text-opacity">6</td>
                                    <td>
                                        <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity">21 hours Ago</td>
                                    <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                    <td className="text-large text-opacity">2</td>
                                    <td className="text-large text-opacity">6</td>
                                    <td>
                                        <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity">21 hours Ago</td>
                                    <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                    <td className="text-large text-opacity">2</td>
                                    <td className="text-large text-opacity">6</td>
                                    <td>
                                        <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity">21 hours Ago</td>
                                    <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                    <td className="text-large text-opacity">2</td>
                                    <td className="text-large text-opacity">6</td>
                                    <td>
                                        <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity">21 hours Ago</td>
                                    <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                    <td className="text-large text-opacity">2</td>
                                    <td className="text-large text-opacity">6</td>
                                    <td>
                                        <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity">21 hours Ago</td>
                                    <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                    <td className="text-large text-opacity">2</td>
                                    <td className="text-large text-opacity">6</td>
                                    <td>
                                        <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity fw-bold">5545118</td>
                                    <td className="text-large text-opacity">21 hours Ago</td>
                                    <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                    <td className="text-large text-opacity">2</td>
                                    <td className="text-large text-opacity">6</td>
                                    <td>
                                        <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <Pagination curPage={1} totalPage={9} />
                </div>
                </div>
                <Footer />               
            </div>
        </>
    )
}

export default BlockIndex;
