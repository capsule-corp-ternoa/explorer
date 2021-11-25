import Link from 'next/link'
import Copy from 'components/assets/Copy';
import CAPSDark from 'components/assets/CAPSDark';
import { ellipsifyMiddle, formatSec } from 'helpers/lib';
import { FormattedNumber } from 'react-intl';

export const blockColumns = [
  { text: 'Number', dataKey: 'number', className: 'text-left' },
  { text: 'Age', dataKey: 'age', className: 'text-left' },
  { text: 'Block Hash', dataKey: 'block_hash', className: 'text-left only-desktop' },
  { text: 'Signed Extrinsics', dataKey: 'signed_extrinsics', className: 'text-left only-desktop' },
  { text: 'Module Events', dataKey: 'module_events', className: 'text-left only-desktop' },
  { text: '', dataKey: 'details', className: 'text-left' },
]

export const nftTxColumns = [
  { text: 'Name/ID', dataKey: 'nft_id', className: 'text-left' },
  { text: 'Date', dataKey: 'timestamp', className: 'text-left only-desktop' },
  { text: 'Sender', dataKey: 'from', className: 'text-left only-desktop' },
  { text: 'Receiver', dataKey: 'to', className: 'text-left only-desktop' },
  { text: 'Amount', dataKey: 'amount', className: 'text-left' },
  { text: '', dataKey: 'details', className: 'text-left' },
]

export const transferColumns = [
  { text: 'Block', dataKey: 'block_id', className: 'text-left' },
  { text: 'From', dataKey: 'from', className: 'text-left' },
  { text: 'To', dataKey: 'to', className: 'text-left only-desktop' },
  { text: 'Amount', dataKey: 'amount', className: 'text-left only-desktop' },
  { text: '', dataKey: 'details', className: 'text-left' },
]

export const renderBlock = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'number':
      return (
        <>
          <Link href={`/block/${record[dataKey]}`}>
              <a className="textToken">{record[dataKey]}</a>
          </Link>
        </>
      )
    case 'signed_extrinsics':
    case 'module_events':
      return record[dataKey]
    
    case 'block_hash':
      return (
        <div className="d-flex">
          <Link href={`/block/${record['number']}`}>
            <a className="textToken mt-1">{ellipsifyMiddle(record[dataKey])}</a>
          </Link>
          <div className="ms-2 mt-1" onClick={()=>navigator.clipboard.writeText(record[dataKey])}>
            <Copy className="cursor-point" />
          </div>
        </div>
      )

    case 'age':
      return `${formatSec(record[dataKey])} ago`

    case 'details':
    default:
      return (
        <Link href={`/block/${record.number}`}>
          <a>
            <button className="btn btn-info rounded-pill">
              Details
            </button>
          </a>
        </Link>
      )
  }
}

export const renderNftTx = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'nft_id':
      return (
        <Link href={{pathname: `/nft/${record.id}`, query: {extrinsic: record['extrinsic_id']}}}>
          <a className="textToken">{record[dataKey]}</a>
        </Link>
      )
    case 'from':
    case 'to':
      return (
        <div className="d-flex">
          <CAPSDark className="webIcon me-2" />
          <span className="textToken mt-1" title={record[dataKey]}>
            {ellipsifyMiddle(record[dataKey])}
          </span>
          <div className="ms-2 mt-1" onClick={()=>navigator.clipboard.writeText(record[dataKey])}>
            <Copy className="cursor-point" />
          </div>
        </div>
      )

    case 'amount':
      return (
        <>
          <FormattedNumber value={record[dataKey]} format='decimal' />
          &nbsp;Caps
        </>
      )

    case 'details':
      return (
        <Link href={{pathname: `/nft/${record.id}`, query: {extrinsic: record['extrinsic_id']}}}>
          <a>
            <button className="btn btn-info rounded-pill">
              Details
            </button>
          </a>
        </Link>
      )

    default:
      return record[dataKey]
  }
}

export const renderTransfer = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'block_id':
      return (
        <>
          <Link href={`/block/${record[dataKey]}`}>
              <a className="textToken">{record[dataKey]}</a>
          </Link>
        </>
      )
    case 'amount':
      return (
        <>
          <FormattedNumber value={record[dataKey]} format='decimal' />
          &nbsp;{record.currency}
        </>
      )

    case 'from':
    case 'to':
      return (
        <div className="d-flex">
          <CAPSDark className="webIcon me-2" />
          <span className="textToken mt-1" title={record[dataKey]}>
            {ellipsifyMiddle(record[dataKey])}
          </span>
          <div className="ms-2 mt-1" onClick={()=>navigator.clipboard.writeText(record[dataKey])}>
            <Copy className="cursor-point" />
          </div>
        </div>
      )
    case 'details':
      return (
        <Link href={`/trans/${record.id}`}>
          <a>
            <button className="btn btn-info rounded-pill">
              Details
            </button>
          </a>
        </Link>
      )

    default:
      return record[dataKey]
  }
}

export default {
  blockColumns,
  nftTxColumns,
  transferColumns,
  renderBlock,
  renderNftTx,
  renderTransfer
}
