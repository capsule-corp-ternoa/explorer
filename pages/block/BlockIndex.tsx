import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Head from 'next/head'
import { useRouter } from "next/router";
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import Pagination from 'components/base/Pagination';
import CAPSDark from 'components/assets/CAPSDark';

export interface BlockIndexProps {
}

const BlockIndex: React.FC<BlockIndexProps> = () => {
    const [isLaptop, setIsLaptop] = useState(false);
    const mediaQuery = useMediaQuery({ query: '(min-width: 1024px)' });
    const router = useRouter();
    const blocks = [
        {
          'number': 5545118,
          'age': 21,
          'block_hash': '0x3a851d3...efe6f',
          'parent_hash': '0x3a851d3...efe6f',
          'state_root': '0x3a851d3...efe6f',
          'extrinsics_root': '0x3a851d3...efe6f',
          'signed_extrinsics': 2,
          'module_events': 6,
          'timestamp': 'Jun 17, 2021, 12:36:06 PM',
          'runtime_version': 30,
          'block_time': 6,
          'session_id': 2320,
          'block_author': '112A6wJPeDsf34nsqoAkAtQ8n74vJU8qmyKMtzX7ZPQH2kXa',
          'transactions': 2,
          'transaction_detail': [
            {
              'transaction_id': 'stacking',
              'from': 'unbound',
              'module': ' 0x3a851d3...',
              'call': '112A6wJPeDsf34nsqo...',
              'success': true,
              'timestamp': 'Jun 18, 2021, 3:16:00 PM',
              'hash': 5559817,
              'transaction_hash': '0xbcac471afcdc2b...4d8a65e55a64bba858d651e5981e98cb03',
              'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill the origin...',
              'address': '112A6wJPeDsf34nsqo...ze4z5e21z',
              'nonce': 488, 
              'signature': '14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv',
              'result': true,
              'parameters': {
                'transaction_hash': '0x13mPzYL8TK88MEN781GnBhJZdiHmvfsNEWjuK2vn7dNnugFr',
                'value': '52.456 CAPS'
              }
            }
          ]
        },
        {
          'number': 5545118,
          'age': 21,
          'block_hash': '0x3a851d3...efe6f',
          'parent_hash': '0x3a851d3...efe6f',
          'state_root': '0x3a851d3...efe6f',
          'extrinsics_root': '0x3a851d3...efe6f',
          'signed_extrinsics': 2,
          'module_events': 6,
          'timestamp': 'Jun 17, 2021, 12:36:06 PM',
          'runtime_version': 30,
          'block_time': 6,
          'session_id': 2320,
          'block_author': '112A6wJPeDsf34nsqoAkAtQ8n74vJU8qmyKMtzX7ZPQH2kXa',
          'transactions': 2,
          'transaction_detail': [
            {
              'transaction_id': 'stacking',
              'from': 'unbound',
              'module': ' 0x3a851d3...',
              'call': '112A6wJPeDsf34nsqo...',
              'success': true,
              'timestamp': 'Jun 18, 2021, 3:16:00 PM',
              'hash': 5559817,
              'transaction_hash': '0xbcac471afcdc2b...4d8a65e55a64bba858d651e5981e98cb03',
              'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill the origin...',
              'address': '112A6wJPeDsf34nsqo...ze4z5e21z',
              'nonce': 488, 
              'signature': '14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv',
              'result': true,
              'parameters': {
                'transaction_hash': '0x13mPzYL8TK88MEN781GnBhJZdiHmvfsNEWjuK2vn7dNnugFr',
                'value': '52.456 CAPS'
              }
            }
          ]
        },
        {
          'number': 5545118,
          'age': 21,
          'block_hash': '0x3a851d3...efe6f',
          'parent_hash': '0x3a851d3...efe6f',
          'state_root': '0x3a851d3...efe6f',
          'extrinsics_root': '0x3a851d3...efe6f',
          'signed_extrinsics': 2,
          'module_events': 6,
          'timestamp': 'Jun 17, 2021, 12:36:06 PM',
          'runtime_version': 30,
          'block_time': 6,
          'session_id': 2320,
          'block_author': '112A6wJPeDsf34nsqoAkAtQ8n74vJU8qmyKMtzX7ZPQH2kXa',
          'transactions': 2,
          'transaction_detail': [
            {
              'transaction_id': 'stacking',
              'from': 'unbound',
              'module': ' 0x3a851d3...',
              'call': '112A6wJPeDsf34nsqo...',
              'success': true,
              'timestamp': 'Jun 18, 2021, 3:16:00 PM',
              'hash': 5559817,
              'transaction_hash': '0xbcac471afcdc2b...4d8a65e55a64bba858d651e5981e98cb03',
              'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill the origin...',
              'address': '112A6wJPeDsf34nsqo...ze4z5e21z',
              'nonce': 488, 
              'signature': '14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv',
              'result': true,
              'parameters': {
                'transaction_hash': '0x13mPzYL8TK88MEN781GnBhJZdiHmvfsNEWjuK2vn7dNnugFr',
                'value': '52.456 CAPS'
              }
            }
          ]
        },
        {
          'number': 5545118,
          'age': 21,
          'block_hash': '0x3a851d3...efe6f',
          'parent_hash': '0x3a851d3...efe6f',
          'state_root': '0x3a851d3...efe6f',
          'extrinsics_root': '0x3a851d3...efe6f',
          'signed_extrinsics': 2,
          'module_events': 6,
          'timestamp': 'Jun 17, 2021, 12:36:06 PM',
          'runtime_version': 30,
          'block_time': 6,
          'session_id': 2320,
          'block_author': '112A6wJPeDsf34nsqoAkAtQ8n74vJU8qmyKMtzX7ZPQH2kXa',
          'transactions': 2,
          'transaction_detail': [
            {
              'transaction_id': 'stacking',
              'from': 'unbound',
              'module': ' 0x3a851d3...',
              'call': '112A6wJPeDsf34nsqo...',
              'success': true,
              'timestamp': 'Jun 18, 2021, 3:16:00 PM',
              'hash': 5559817,
              'transaction_hash': '0xbcac471afcdc2b...4d8a65e55a64bba858d651e5981e98cb03',
              'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill the origin...',
              'address': '112A6wJPeDsf34nsqo...ze4z5e21z',
              'nonce': 488, 
              'signature': '14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv',
              'result': true,
              'parameters': {
                'transaction_hash': '0x13mPzYL8TK88MEN781GnBhJZdiHmvfsNEWjuK2vn7dNnugFr',
                'value': '52.456 CAPS'
              }
            }
          ]
        },
        {
          'number': 5545118,
          'age': 21,
          'block_hash': '0x3a851d3...efe6f',
          'parent_hash': '0x3a851d3...efe6f',
          'state_root': '0x3a851d3...efe6f',
          'extrinsics_root': '0x3a851d3...efe6f',
          'signed_extrinsics': 2,
          'module_events': 6,
          'timestamp': 'Jun 17, 2021, 12:36:06 PM',
          'runtime_version': 30,
          'block_time': 6,
          'session_id': 2320,
          'block_author': '112A6wJPeDsf34nsqoAkAtQ8n74vJU8qmyKMtzX7ZPQH2kXa',
          'transactions': 2,
          'transaction_detail': [
            {
              'transaction_id': 'stacking',
              'from': 'unbound',
              'module': ' 0x3a851d3...',
              'call': '112A6wJPeDsf34nsqo...',
              'success': true,
              'timestamp': 'Jun 18, 2021, 3:16:00 PM',
              'hash': 5559817,
              'transaction_hash': '0xbcac471afcdc2b...4d8a65e55a64bba858d651e5981e98cb03',
              'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill the origin...',
              'address': '112A6wJPeDsf34nsqo...ze4z5e21z',
              'nonce': 488, 
              'signature': '14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv',
              'result': true,
              'parameters': {
                'transaction_hash': '0x13mPzYL8TK88MEN781GnBhJZdiHmvfsNEWjuK2vn7dNnugFr',
                'value': '52.456 CAPS'
              }
            }
          ]
        },
        {
          'number': 5545118,
          'age': 21,
          'block_hash': '0x3a851d3...efe6f',
          'parent_hash': '0x3a851d3...efe6f',
          'state_root': '0x3a851d3...efe6f',
          'extrinsics_root': '0x3a851d3...efe6f',
          'signed_extrinsics': 2,
          'module_events': 6,
          'timestamp': 'Jun 17, 2021, 12:36:06 PM',
          'runtime_version': 30,
          'block_time': 6,
          'session_id': 2320,
          'block_author': '112A6wJPeDsf34nsqoAkAtQ8n74vJU8qmyKMtzX7ZPQH2kXa',
          'transactions': 2,
          'transaction_detail': [
            {
              'transaction_id': 'stacking',
              'from': 'unbound',
              'module': ' 0x3a851d3...',
              'call': '112A6wJPeDsf34nsqo...',
              'success': true,
              'timestamp': 'Jun 18, 2021, 3:16:00 PM',
              'hash': 5559817,
              'transaction_hash': '0xbcac471afcdc2b...4d8a65e55a64bba858d651e5981e98cb03',
              'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill the origin...',
              'address': '112A6wJPeDsf34nsqo...ze4z5e21z',
              'nonce': 488, 
              'signature': '14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv',
              'result': true,
              'parameters': {
                'transaction_hash': '0x13mPzYL8TK88MEN781GnBhJZdiHmvfsNEWjuK2vn7dNnugFr',
                'value': '52.456 CAPS'
              }
            }
          ]
        },
        {
          'number': 5545118,
          'age': 21,
          'block_hash': '0x3a851d3...efe6f',
          'parent_hash': '0x3a851d3...efe6f',
          'state_root': '0x3a851d3...efe6f',
          'extrinsics_root': '0x3a851d3...efe6f',
          'signed_extrinsics': 2,
          'module_events': 6,
          'timestamp': 'Jun 17, 2021, 12:36:06 PM',
          'runtime_version': 30,
          'block_time': 6,
          'session_id': 2320,
          'block_author': '112A6wJPeDsf34nsqoAkAtQ8n74vJU8qmyKMtzX7ZPQH2kXa',
          'transactions': 2,
          'transaction_detail': [
            {
              'transaction_id': 'stacking',
              'from': 'unbound',
              'module': ' 0x3a851d3...',
              'call': '112A6wJPeDsf34nsqo...',
              'success': true,
              'timestamp': 'Jun 18, 2021, 3:16:00 PM',
              'hash': 5559817,
              'transaction_hash': '0xbcac471afcdc2b...4d8a65e55a64bba858d651e5981e98cb03',
              'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill the origin...',
              'address': '112A6wJPeDsf34nsqo...ze4z5e21z',
              'nonce': 488, 
              'signature': '14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv',
              'result': true,
              'parameters': {
                'transaction_hash': '0x13mPzYL8TK88MEN781GnBhJZdiHmvfsNEWjuK2vn7dNnugFr',
                'value': '52.456 CAPS'
              }
            }
          ]
        },
        {
          'number': 5545118,
          'age': 21,
          'block_hash': '0x3a851d3...efe6f',
          'parent_hash': '0x3a851d3...efe6f',
          'state_root': '0x3a851d3...efe6f',
          'extrinsics_root': '0x3a851d3...efe6f',
          'signed_extrinsics': 2,
          'module_events': 6,
          'timestamp': 'Jun 17, 2021, 12:36:06 PM',
          'runtime_version': 30,
          'block_time': 6,
          'session_id': 2320,
          'block_author': '112A6wJPeDsf34nsqoAkAtQ8n74vJU8qmyKMtzX7ZPQH2kXa',
          'transactions': 2,
          'transaction_detail': [
            {
              'transaction_id': 'stacking',
              'from': 'unbound',
              'module': ' 0x3a851d3...',
              'call': '112A6wJPeDsf34nsqo...',
              'success': true,
              'timestamp': 'Jun 18, 2021, 3:16:00 PM',
              'hash': 5559817,
              'transaction_hash': '0xbcac471afcdc2b...4d8a65e55a64bba858d651e5981e98cb03',
              'description': 'Same as the [`transfer`] call, but with a check that the transfer will not kill the origin...',
              'address': '112A6wJPeDsf34nsqo...ze4z5e21z',
              'nonce': 488, 
              'signature': '14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv',
              'result': true,
              'parameters': {
                'transaction_hash': '0x13mPzYL8TK88MEN781GnBhJZdiHmvfsNEWjuK2vn7dNnugFr',
                'value': '52.456 CAPS'
              }
            }
          ]
        }
      ]
    const dummyMobile = [0,1,1,1];

    useEffect(() => {
        if(mediaQuery !== isLaptop){
          setIsLaptop(mediaQuery);
        }
    }, [mediaQuery])

    const goBlockDetail = () => {
        // router.push("./block/1")
        router.push({
            pathname: './block/1',
            query: { data: JSON.stringify(blocks[0]) }
        })
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
                <h1 className="subTitle subTitleMarginTop">Blocks</h1>
                <div className="mainBlock pb-4 mt-2">
                    <div className="tag-for-scroll">
                        {isLaptop &&
                        <table className="table table-borderless mb-3 webBorderTable">
                            <thead>
                                <tr className="fs-6 text-grey">
                                    <th style={{width:"17%"}} className="text-left ps-4p0">Number</th>
                                    <th style={{width:"18%"}} className="text-left">Age</th>
                                    <th style={{width:"30%"}} className="text-left">Block Hash</th>
                                    <th style={{width:"10%"}}>Signed Extrinsics</th>
                                    <th style={{width:"10%"}}>Module Events</th>
                                    <th style={{width:"15%"}}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {blocks.map((item, key) => { return (
                                    <tr key={key}>
                                        <td className="text-large text-opacity fw-bold text-left ps-4p0">{item.number}</td>
                                        <td className="text-large text-opacity text-left">{item.age + ' hours ago'}</td>
                                        <td className="text-large text-opacity text-left">{item.block_hash}</td>
                                        <td className="text-large text-opacity">{item.signed_extrinsics}</td>
                                        <td className="text-large text-opacity">{item.module_events}</td>
                                        <td className="text-right pe-4p0">
                                            <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1"}>Details</button>
                                        </td>
                                    </tr>
                                )})}
                            </tbody>
                        </table>
                        }
                        {!isLaptop && dummyMobile.map((item, key) => { return (
                            <div key={key} className={"mobileView " + (key%2==1?"mobileDarkView":"")}>
                                <div className="flex flex-row mt-2">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Number</span>
                                        <span className="mobileValue">5545118</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Age</span>
                                        <span className="mobileValue">21 hour ago</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="mobileLabel">Block Hash</span>
                                    <div className="flex flex-row flex-1 flex-items-center">
                                        <CAPSDark className="mobileIcon me-2" />
                                        <span className="textToken text-80 mobileValue">14Kazg6SFiUCH7FNhvBhvr4WNfAXVtKKKhtBQ1pvXzF1dQhv</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4">
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Signed Extrinsics</span>
                                        <span className="mobileValue">1</span>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <span className="mobileLabel">Module Events</span>
                                        <span className="mobileValue">2</span>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-4 mb-2">
                                    <button onClick={goBlockDetail} className={"btn btn-secondary rounded-pill px-4 py-1 mobileDetailButton"}>Details</button>
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

export default BlockIndex;
