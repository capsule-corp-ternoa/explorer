import Link from 'next/link'
import CAPSDark from 'components/assets/CAPSDark';
import Copy from 'components/assets/Copy';
import { FormattedTime, FormattedNumber } from 'react-intl';
import { ellipsifyMiddle } from 'helpers/lib';

export const columns = [
  { text: 'Name/ID', dataKey: 'nft_id', className: 'text-left' },
  { text: 'Date', dataKey: 'timestamp', className: 'text-left' },
  { text: 'Sender', dataKey: 'from', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Receiver', dataKey: 'to', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Amount', dataKey: 'amount', className: 'text-left' },
  { text: '', dataKey: 'details', mobileClassName: 'col-12' },
]

export const render = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'timestamp':
      return (
        <FormattedTime format='default' value={record[dataKey]} />
      )

    case 'amount':
      return (
        <>
          <FormattedNumber value={record[dataKey]} format='decimal' />
          &nbsp;Caps
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
        <Link href={{pathname: `/nft/${record.id}`, query: {extrinsic: record['extrinsic_id']}}}>
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
  columns,
  render
}
