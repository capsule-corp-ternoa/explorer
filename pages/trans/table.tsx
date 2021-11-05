import Link from 'next/link'
import CAPSDark from 'components/assets/CAPSDark';
import { FormattedNumber } from 'react-intl';
import { ellipsifyMiddle } from 'helpers/lib';

export const columns = [
  { text: 'Block', dataKey: 'block_id', className: 'text-left', mobileClassName: 'col-6 order-0' },
  { text: 'From', dataKey: 'from', className: 'text-left', mobileClassName: 'col-12 order-2' },
  { text: 'To', dataKey: 'to', className: 'text-left', mobileClassName: 'col-12 order-3' },
  { text: 'Amount', dataKey: 'amount', className: 'text-right', mobileClassName: 'col-6 order-1' },
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
  columns,
  render
}
