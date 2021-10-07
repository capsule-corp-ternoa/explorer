import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from "next/router";
import Pagination from 'components/base/Pagination';
import Down from 'components/assets/Down';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import Check from 'components/assets/Check';
import CAPSDark from 'components/assets/CAPSDark';
import { useMediaQuery } from 'react-responsive';

export interface ValidatorProps {
}

const Validator: React.FC<ValidatorProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-device-width: 1024px)' });
    const router = useRouter();
    const dummyWeb = [0,1,1,1,1,1,1,1,1,1,1,1];
    const dummyMobile = [0,1,1,1];

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    const goValidatorDetail = () => {
        router.push("./validator/1")
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
                <div className="mainBody">
                <h1 className="subTitle subTitleMarginTop">
                    Elected (297)
                    <Down className="ms-3 mb-1"/>
                </h1>
                <div className="mainBlock pb-4 mt-2">
                    <div className = "tag-for-scroll">
                        {isLaptop &&
                        <table className="table table-borderless mb-3 webBorderTable">
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
                                {dummyWeb.map((item, key) => { return (
                                <tr key={key}>
                                    <td className="text-large text-opacity text-no-wrap">
                                        <CAPSDark className="webIcon" />
                                        <Check className="ms-2"/>
                                        <span className="ms-2 fw-bold">P2P.ORG/7</span>
                                    </td>
                                    <td className="text-large text-opacity">5.965.695</td>
                                    <td className="text-large text-opacity">0.00%</td>
                                    <td className="text-large text-opacity">14.37%</td>
                                    <td>
                                        <button onClick={goValidatorDetail} className={"btn btn-secondary rounded-pill px-4 py-1"}>Details</button>
                                    </td>
                                </tr>
                                )})}
                            </tbody>
                        </table>
                        }
                        {!isLaptop && dummyMobile.map((item, key) => { return (
                            <div className={"mobileView " + (key%2==1?"mobileDarkView":"")} key={key}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col flex-grow-6">
                                        <span className="mobileLabel">Name</span>
                                        <div className="flex flex-row flex-1 flex-items-center">
                                            <CAPSDark className="mobileIcon" />
                                            <Check className="ms-2 me-2" />
                                            <span className="textToken mobileValue">P2P.ORG/7</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col flex-grow-4">
                                        <span className="mobileLabel">Total stacked</span>
                                        <div className="flex flex-row flex-1 flex-items-center">{/* this line only is for center-align */}
                                        <span className="mobileValue">5659861</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col flex-grow-6">
                                        <span className="mobileColLaebl">Comissions</span>
                                        <span className="mobileValue">0.00%</span>
                                    </div>
                                    <div className="flex-1 flex flex-col flex-grow-4">
                                        <span className="mobileLabel">Returns</span>
                                        <span className="mobileValue">14.37%</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <button onClick={goValidatorDetail} className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
                                </div>
                            </div>
                        )})
                        }
                    </div>
                    {isLaptop &&
                    <Pagination curPage={1} totalPage={9} />
                    }
                    {!isLaptop && <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-black rounded-pill mobileNextButton">View Next</button> 
                    </div>}
                </div>
                </div>
                <Footer />               
            </div>
        </>
    )
}

export default Validator;
