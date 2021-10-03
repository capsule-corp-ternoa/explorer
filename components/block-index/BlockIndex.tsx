import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import LeftArrow from 'components/assets/LeftArrow';
import RightArrow from 'components/assets/RightArrow';
import style from './BlockIndex.module.scss';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';

export interface BlockIndexProps {
}

const BlockIndex: React.FC<BlockIndexProps> = () => {
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
                <h1 className={style.subtitle}>Blocks</h1>
                <div className={style.block + " pb-4 mt-2"}>
                    <table className="table table-borderless mb-3">
                        <thead>
                            <tr className="fs-6 text-grey">
                                <th>Name</th>
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
                                    <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-large text-opacity fw-bold">5545118</td>
                                <td className="text-large text-opacity">21 hours Ago</td>
                                <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                <td className="text-large text-opacity">2</td>
                                <td className="text-large text-opacity">6</td>
                                <td>
                                    <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-large text-opacity fw-bold">5545118</td>
                                <td className="text-large text-opacity">21 hours Ago</td>
                                <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                <td className="text-large text-opacity">2</td>
                                <td className="text-large text-opacity">6</td>
                                <td>
                                    <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-large text-opacity fw-bold">5545118</td>
                                <td className="text-large text-opacity">21 hours Ago</td>
                                <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                <td className="text-large text-opacity">2</td>
                                <td className="text-large text-opacity">6</td>
                                <td>
                                    <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-large text-opacity fw-bold">5545118</td>
                                <td className="text-large text-opacity">21 hours Ago</td>
                                <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                <td className="text-large text-opacity">2</td>
                                <td className="text-large text-opacity">6</td>
                                <td>
                                    <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-large text-opacity fw-bold">5545118</td>
                                <td className="text-large text-opacity">21 hours Ago</td>
                                <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                <td className="text-large text-opacity">2</td>
                                <td className="text-large text-opacity">6</td>
                                <td>
                                    <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-large text-opacity fw-bold">5545118</td>
                                <td className="text-large text-opacity">21 hours Ago</td>
                                <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                <td className="text-large text-opacity">2</td>
                                <td className="text-large text-opacity">6</td>
                                <td>
                                    <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-large text-opacity fw-bold">5545118</td>
                                <td className="text-large text-opacity">21 hours Ago</td>
                                <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                <td className="text-large text-opacity">2</td>
                                <td className="text-large text-opacity">6</td>
                                <td>
                                    <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-large text-opacity fw-bold">5545118</td>
                                <td className="text-large text-opacity">21 hours Ago</td>
                                <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                <td className="text-large text-opacity">2</td>
                                <td className="text-large text-opacity">6</td>
                                <td>
                                    <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-large text-opacity fw-bold">5545118</td>
                                <td className="text-large text-opacity">21 hours Ago</td>
                                <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                <td className="text-large text-opacity">2</td>
                                <td className="text-large text-opacity">6</td>
                                <td>
                                    <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-large text-opacity fw-bold">5545118</td>
                                <td className="text-large text-opacity">21 hours Ago</td>
                                <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                <td className="text-large text-opacity">2</td>
                                <td className="text-large text-opacity">6</td>
                                <td>
                                    <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-large text-opacity fw-bold">5545118</td>
                                <td className="text-large text-opacity">21 hours Ago</td>
                                <td className="text-large text-opacity">0x3a851d3...efe6f</td>
                                <td className="text-large text-opacity">2</td>
                                <td className="text-large text-opacity">6</td>
                                <td>
                                    <button className="btn btn-secondary rounded-pill px-4 py-1">Detail</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center py-3">
                        <LeftArrow className="mt-1 me-2"/>
                        <span className="text-large mx-2">Page</span>
                        <span className="text-large me-1">1</span>
                        <span className="text-large ms-1">of</span>
                        <span className="text-large mx-2">9</span>
                        <RightArrow className="mt-1 ms-2"/>
                    </div>
                </div>
                </div>
                <Footer />               
            </div>
        </>
    )
}

export default BlockIndex;
