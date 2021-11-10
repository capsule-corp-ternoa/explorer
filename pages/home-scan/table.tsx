import Link from 'next/link'
import CAPSDark from 'components/assets/CAPSDark';
import { ellipsifyMiddle, formatSec } from 'helpers/lib';
import { FormattedNumber } from 'react-intl';

export const blockColumns = [
  { text: 'Number', dataKey: 'number', className: 'text-left' },
  { text: 'Age', dataKey: 'age', className: 'text-left' },
  { text: 'Extrinsics', dataKey: 'signed_extrinsics', className: 'text-right' },
  { text: 'Module Events', dataKey: 'module_events', className: 'text-right' },
  { text: '', dataKey: 'details', className: 'text-right' },
]

export const nftTxColumns = [
  { text: 'Name/ID', dataKey: 'nft_id', className: 'text-left' },
  { text: 'Creator', dataKey: 'creator', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'ID', dataKey: 'id', className: 'text-left', mobileClassName: 'col-12' },
  { text: '', dataKey: 'details', className: 'text-right' },
]

export const transferColumns = [
  { text: 'From', dataKey: 'from', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'To', dataKey: 'to', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Amount', dataKey: 'amount', className: 'text-right', mobileClassName: 'col-12' },
  { text: '', dataKey: 'details', className: 'text-right' },
]

export const renderBlock = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'number':
    case 'signed_extrinsics':
    case 'module_events':
      return record[dataKey]

    case 'age':
      return `${formatSec(record[dataKey])} ago`

    case 'details':
    default:
      return (
        <Link href={`/block/${record.number}`}>
          <a>
            <button className="btn btn-secondary rounded-pill px-4 py-2">
              Details
            </button>
          </a>
        </Link>
      )
  }
}

export const renderNftTx = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'creator':
      return (
        <>
          <CAPSDark className="webIcon me-2" />
          <span className="textToken" title={record[dataKey]}>
            {ellipsifyMiddle(record[dataKey])}
          </span>
        </>
      )

    case 'details':
      return (
        <Link href={`/nft/${record.id}`}>
          <a>
            <button className="btn btn-secondary rounded-pill px-4 py-2">
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
        <>
          <CAPSDark className="webIcon me-2" />
          <span className="textToken" title={record[dataKey]}>
            {ellipsifyMiddle(record[dataKey])}
          </span>
        </>
      )
    case 'details':
      return (
        <Link href={`/trans/${record.id}`}>
          <a>
            <button className="btn btn-secondary rounded-pill px-4 py-2">
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
