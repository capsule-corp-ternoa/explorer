import Link from 'next/link'
import Copy from 'components/assets/Copy';
import CAPSDark from 'components/assets/CAPSDark';
import Detail from 'components/assets/Detail';
import { FormattedNumber } from 'react-intl';
import { ellipsifyMiddle, ellipsifyLast } from 'helpers/lib';

export const columns = [
  { text: 'Block', dataKey: 'block_id', className: 'text-left', mobileClassName: 'col-6 order-0' },
  { text: 'From', dataKey: 'from', className: 'text-left', mobileClassName: 'col-12 order-2' },
  { text: 'To', dataKey: 'to', className: 'text-left only-desktop', mobileClassName: 'col-12 order-3' },
  { text: 'Amount', dataKey: 'amount', className: 'text-left only-desktop', mobileClassName: 'col-6 order-1' },
  { text: '', dataKey: 'details', mobileClassName: 'col-12 order-4' },
]

export const render = (record: any, dataKey: string) => {
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
      return (
        record[dataKey] && (
          <>
            <div className="only-desktop">
              <div className="d-flex align-items-center">
                <CAPSDark className="webIcon me-2" />
                <span className="textToken" title={record[dataKey]}>
                  {ellipsifyMiddle(record[dataKey])}
                </span>
                <div
                  className="ms-2"
                  onClick={() => navigator.clipboard.writeText(record[dataKey])}
                >
                  <Copy className="cursor-point" />
                </div>
              </div>
            </div>
            <div className="only-mobile">
              <span className="textToken" title={record[dataKey]}>
                {ellipsifyLast(record[dataKey])}
              </span>
            </div>
          </>
        )
      );
    case 'to':
      return (
        record[dataKey] && (
          <div className="d-flex align-items-center">
            <CAPSDark className="webIcon me-2" />
            <span className="textToken" title={record[dataKey]}>
              {ellipsifyMiddle(record[dataKey])}
            </span>
            <div
              className="ms-2"
              onClick={() => navigator.clipboard.writeText(record[dataKey])}
            >
              <Copy className="cursor-point" />
            </div>
          </div>
        )
      );
    case 'details':
      return (
        <Link href={`/trans/${record.id}`}>
          <a className='mx-auto'>
            <Detail className="detail"/>
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
