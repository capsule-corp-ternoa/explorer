import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import clsx from 'clsx'
import style from './HomeScan.module.scss';
import Layout from 'components/base/Layout';
import Summary from './Summary';
import ListView from 'components/base/ListView';
import { getBlockList } from 'apis/block';
import {
  blockColumns,
  nftTxColumns,
  transferColumns,
  renderBlock,
  renderNftTx,
  renderTransfer
} from './table'
import { getNftTransferList } from 'apis/nft-transfer';
import { getTransferList } from 'apis/transfer';
import { getSummary } from 'apis/summary';
import { TransactionChart, BlockChart } from './Chart';
import statData from 'components/data/statast.json'

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
    <a>
      <button className={clsx("btn-transparent rounded-pill d-flex m-auto px-5 py-2 fs-5", style.blockButton)}>
        {label}
      </button>
    </a>
  </Link>
)

const HomeScan: React.FC<HomeScanProps> = () => {
    
    const [summary, setSummary] = useState<any>(null)

    const [latestBlocks, setLatestBlocks] = useState<any>(null)
    const [nftTransfers, setNftTransfers] = useState<any>(null)
    const [transfers, setTransfers] = useState<any>(null)

    useEffect(() => {
      getSummary().then(setSummary).catch(() => {})
      getBlockList(0, TABLE_ROWS).then(setLatestBlocks)
      getNftTransferList(0, TABLE_ROWS).then(setNftTransfers)
      getTransferList(0, TABLE_ROWS).then(setTransfers)
    }, [])

    return (
      <Layout searchBar={false}>
        <Summary
          capsPrice={summary && summary.usd}
          marketCap={summary && summary.usd_market_cap}
          change24h={summary && summary.usd_24h_change}
          transactions={null}
          finalizedBlock={null}
        />

        <div className="row">
          <div className="col-12">
            <div className={clsx("title mt-4 mb-3", style.blockTitle)}>
              Latest Blocks
            </div>
            <ListView
              columns={blockColumns}
              renderCell={renderBlock}
              data={latestBlocks && latestBlocks.data}
              footer={(
                <DetailButton href='/block' label='Show all Blocks' />
              )}
            />
          </div>
          <div className="col-12">
            <div className={clsx("title mt-4 mb-3", style.blockTitle)}>
              NFT Transactions
            </div>
            <ListView
              columns={nftTxColumns}
              renderCell={renderNftTx}
              data={nftTransfers && nftTransfers.data}
              footer={(
                <DetailButton href='/nft' label='Show all NFT' />
              )}
            />
          </div>
          <div className="col-12">
            <div className={clsx("title mt-4 mb-3", style.blockTitle)}>
              Transfers
            </div>
            <ListView
              columns={transferColumns}
              renderCell={renderTransfer}
              data={transfers && transfers.data}
              footer={(
                <DetailButton href='/trans' label='Show all Transfers' />
              )}
            />
          </div>
          <div className="col-12 col-md-6">
            <TransactionChart data={statData} className='mt-4' />
          </div>
          <div className="col-12 col-md-6">
            <BlockChart data={statData} className='mt-4' />
          </div>
        </div>
      </Layout>
    )
}

export default HomeScan;
