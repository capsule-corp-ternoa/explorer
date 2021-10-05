import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from "next/router";
import LeftArrow from 'components/assets/LeftArrow';
import RightArrow from 'components/assets/RightArrow';
import Down from 'components/assets/Down';
import style from './Validator.module.scss';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import Check from 'components/assets/Check';
import CAPSDark from 'components/assets/CAPSDark';

export interface ValidatorProps {
}

const Validator: React.FC<ValidatorProps> = () => {
    const router = useRouter();

    const goValidatorDetail = () => {
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
                <h1 className={style.subtitle + " subTitleMargin"}>
                    Elected (297)<Down className="ms-3 mb-1"/>
                </h1>
                <div className={style.block + " pb-4 mt-2"}>
                    <div className = "tag-for-scroll">
                        <table className={"table table-borderless mb-3 " + style.indexTable}>
                            <thead>
                                <tr className="fs-6 text-grey">
                                    <th>Name</th>
                                    <th>Total Stacked</th>
                                    <th>Comissions</th>
                                    <th>Returns</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-large text-opacity">
                                        <CAPSDark />
                                        <Check className="ms-3"/>
                                        <span className="ms-2 fw-bold">P2P.ORG/7</span>    
                                    </td>
                                    <td className="text-large text-opacity">5.965.695</td>
                                    <td className="text-large text-opacity">0.00%</td>
                                    <td className="text-large text-opacity">14.37%</td>
                                    <td>
                                        <button onClick={goValidatorDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity">
                                        <CAPSDark />
                                        <Check className="ms-3"/>
                                        <span className="ms-2 fw-bold">P2P.ORG/7</span>    
                                    </td>
                                    <td className="text-large text-opacity">5.965.695</td>
                                    <td className="text-large text-opacity">0.00%</td>
                                    <td className="text-large text-opacity">14.37%</td>
                                    <td>
                                        <button onClick={goValidatorDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity">
                                        <CAPSDark />
                                        <Check className="ms-3"/>
                                        <span className="ms-2 fw-bold">P2P.ORG/7</span>    
                                    </td>
                                    <td className="text-large text-opacity">5.965.695</td>
                                    <td className="text-large text-opacity">0.00%</td>
                                    <td className="text-large text-opacity">14.37%</td>
                                    <td>
                                        <button onClick={goValidatorDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity">
                                        <CAPSDark />
                                        <Check className="ms-3"/>
                                        <span className="ms-2 fw-bold">P2P.ORG/7</span>    
                                    </td>
                                    <td className="text-large text-opacity">5.965.695</td>
                                    <td className="text-large text-opacity">0.00%</td>
                                    <td className="text-large text-opacity">14.37%</td>
                                    <td>
                                        <button onClick={goValidatorDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity">
                                        <CAPSDark />
                                        <Check className="ms-3"/>
                                        <span className="ms-2 fw-bold">P2P.ORG/7</span>    
                                    </td>
                                    <td className="text-large text-opacity">5.965.695</td>
                                    <td className="text-large text-opacity">0.00%</td>
                                    <td className="text-large text-opacity">14.37%</td>
                                    <td>
                                        <button onClick={goValidatorDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity">
                                        <CAPSDark />
                                        <Check className="ms-3"/>
                                        <span className="ms-2 fw-bold">P2P.ORG/7</span>    
                                    </td>
                                    <td className="text-large text-opacity">5.965.695</td>
                                    <td className="text-large text-opacity">0.00%</td>
                                    <td className="text-large text-opacity">14.37%</td>
                                    <td>
                                        <button onClick={goValidatorDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity">
                                        <CAPSDark />
                                        <Check className="ms-3"/>
                                        <span className="ms-2 fw-bold">P2P.ORG/7</span>    
                                    </td>
                                    <td className="text-large text-opacity">5.965.695</td>
                                    <td className="text-large text-opacity">0.00%</td>
                                    <td className="text-large text-opacity">14.37%</td>
                                    <td>
                                        <button onClick={goValidatorDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity">
                                        <CAPSDark />
                                        <Check className="ms-3"/>
                                        <span className="ms-2 fw-bold">P2P.ORG/7</span>    
                                    </td>
                                    <td className="text-large text-opacity">5.965.695</td>
                                    <td className="text-large text-opacity">0.00%</td>
                                    <td className="text-large text-opacity">14.37%</td>
                                    <td>
                                        <button onClick={goValidatorDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity">
                                        <CAPSDark />
                                        <Check className="ms-3"/>
                                        <span className="ms-2 fw-bold">P2P.ORG/7</span>    
                                    </td>
                                    <td className="text-large text-opacity">5.965.695</td>
                                    <td className="text-large text-opacity">0.00%</td>
                                    <td className="text-large text-opacity">14.37%</td>
                                    <td>
                                        <button onClick={goValidatorDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-large text-opacity">
                                        <CAPSDark />
                                        <Check className="ms-3"/>
                                        <span className="ms-2 fw-bold">P2P.ORG/7</span>    
                                    </td>
                                    <td className="text-large text-opacity">5.965.695</td>
                                    <td className="text-large text-opacity">0.00%</td>
                                    <td className="text-large text-opacity">14.37%</td>
                                    <td>
                                        <button onClick={goValidatorDetail} className={"btn btn-secondary rounded-pill px-4 py-1 " + style.detailButton}>Detail</button>
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

export default Validator;
