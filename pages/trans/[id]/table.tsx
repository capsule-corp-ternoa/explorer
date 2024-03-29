import { FormattedNumber } from 'react-intl';
import Copy from 'components/assets/Copy';
import Link from 'next/link'
import CAPSDark from 'components/assets/CAPSDark';
import { ellipsifyMiddle } from 'helpers/lib';

export const fields = [
  { text: 'Block', dataKey: 'block_id', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'From', dataKey: 'from', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'To', dataKey: 'to', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Amount', dataKey: 'amount', className: 'text-left', mobileClassName: 'col-12'},
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
    case 'from':
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

    case 'amount':
      return (
        <>
          <FormattedNumber format="decimal" value={record[dataKey]} />
          &nbsp;{record.currency}
        </>
      )

    default:
      return record[dataKey]
  }
}

export default {
  fields,
  render
}
