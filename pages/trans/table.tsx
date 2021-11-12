import Link from 'next/link'
import Copy from 'components/assets/Copy';
import CAPSDark from 'components/assets/CAPSDark';
import { FormattedNumber } from 'react-intl';
import { ellipsifyMiddle } from 'helpers/lib';

export const columns = [
  { text: 'Block', dataKey: 'block_id', className: 'text-left', mobileClassName: 'col-6 order-0' },
  { text: 'From', dataKey: 'from', className: 'text-left', mobileClassName: 'col-12 order-2' },
  { text: 'To', dataKey: 'to', className: 'text-left', mobileClassName: 'col-12 order-3' },
  { text: 'Amount', dataKey: 'amount', className: 'text-left', mobileClassName: 'col-6 order-1' },
  { text: '', dataKey: 'details', mobileClassName: 'col-12 order-4' },
]

export const render = (record: any, dataKey: string) => {
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
