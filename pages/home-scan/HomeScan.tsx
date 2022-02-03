import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import style from './HomeScan.module.scss';
import Layout from 'components/base/Layout';
import Summary from './Summary';
import ListView from 'components/base/ListView';
import { getBlockList } from 'apis/block';
import { blockColumns, nftTxColumns, transferColumns, renderBlock, renderNftTx, renderTransfer } from './table'
import { getNftTransferList, getNftTransferChart } from 'apis/nft-transfer';
import { getTransferList } from 'apis/transfer';
// import { NFTtransfer, NFTcreation, BlockChart } from './Chart';
// import statData from 'components/data/statast.json'
import { getExtrinsicCount } from 'apis/extrinsic';

export interface HomeScanProps { }

interface DetailButtonProps {
  href: string
  label: string
}

const TABLE_ROWS = 5

const DetailButton: React.FC<DetailButtonProps> = ({
  href, label
}) => (
  <Link href={href}>
    <a className="all">
      <div className={`btn-transparent d-flex m-auto px-5 py-3 ${style.blockButton}`}>
        <span className="m-auto text-large text-bold">{label}</span>
      </div>
    </a>
  </Link>
)

const HomeScan: React.FC<HomeScanProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [summary, setSummary] = useState<any>({})
  const [latestBlocks, setLatestBlocks] = useState<any>(null)
  const [nftTransfers, setNftTransfers] = useState<any>(null)
  const [transfers, setTransfers] = useState<any>(null)
  const coingeckoUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=coin-capsule&vs_currencies=usd&include_24hr_change=true&include_market_cap=true'

  const getTotalExtrinsics = async () => {
    try{
      const extrinsicsCount = await getExtrinsicCount()
      setSummary((prev: any) => ({
        ...prev, extrinsicsCount
      }))
    }catch(err){
      console.log(err)
    }
  }

  const getCapsPrice = async () => {
    try{
      const datas = await fetch(coingeckoUrl)
      const capsPrice = await datas.json() 
      setSummary((prev: any) => ({
        ...prev, ...capsPrice['coin-capsule']
      }))
    }catch(err){
      console.log(err)
    }
  }

  const getBlockFinalized = async (n : number, rows : number) => {
    try{
      const blocks = await getBlockList(n, rows)
      setSummary((prev: any) => ({
        ...prev, block_count: blocks.totalCount
      }))
      setLatestBlocks(blocks)
    }catch(err){
      console.log(err)
    }finally{
      setIsLoading(false)
    }
  }

  const getTransfers = async (n : number, rows : number) => {
    try{
      const nftsTransfers = await getNftTransferList(n, rows)
      setNftTransfers(nftsTransfers)
      const transfersList = await  getTransferList(n, rows)
      setTransfers(transfersList)
    }catch(err){
      console.error(err)
    }
  }
  useEffect(()=>{
    const interval = setInterval(() => {
      getBlockFinalized(0, TABLE_ROWS)
    }, 6000)
    return () =>{
      clearInterval(interval)
    }
  },[latestBlocks])

  useEffect(() => {
    setIsLoading(true)
    getTotalExtrinsics()
    getCapsPrice()
    getBlockFinalized(0, TABLE_ROWS)
    getTransfers(0, TABLE_ROWS)
  }, [])

  return (
    <Layout searchBar={false}>
      <div className="ellipse1"></div>
      <Summary
        capsPrice={summary.usd}
        marketCap={summary.usd_market_cap}
        change24h={summary.usd_24h_change}
        extrinsics={summary.extrinsicsCount}
        finalizedBlock={summary.block_count}
        loading={isLoading}
      />

      <div className="row position-relative">
        <div className="col-12 mb-5">
          <div className="custom_table">
          <h1 className="title1 mb-4 ms-1">Latest Blocks</h1>
            <ListView
              columns={blockColumns}
              renderCell={renderBlock}
              data={latestBlocks && latestBlocks.data}
              footer={(
                <DetailButton href='/block' label='Show all Blocks' />
              )}
            />
          </div>
        </div>
        <div className={"col-12 " + style.space}>
          <div className="custom_table">
            <h1 className="title1 mb-4 ms-1">NFT Extrinsics</h1>
            <ListView
              columns={nftTxColumns}
              renderCell={renderNftTx}
              data={nftTransfers && nftTransfers.data}
              footer={(
                <DetailButton href='/nft' label='Show all NFT' />
              )}
            />
          </div>
        </div>
        <div className="col-12 mt-5 pb-5">
          <div className="custom_table">
            <h1 className="title1 mb-4 ms-1">Transfers</h1>
            <ListView
              columns={transferColumns}
              renderCell={renderTransfer}
              data={transfers && transfers.data}
              footer={(
                <DetailButton href='/trans' label='Show all Transfers' />
              )}
            />
          </div>
        </div>
        {/* <div className="col-12 col-md-6 only-desktop only-mobile">
          <NFTtransfer data={statData} className='mt-4' />
        </div>
        <div className="col-12 col-md-6 only-desktop only-mobile">
          <NFTcreation data={statData} className='mt-4' />
        </div> */}
      </div>
    </Layout>
  )
}

export default HomeScan;
