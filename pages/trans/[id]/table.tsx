import { FormattedNumber } from 'react-intl';
import Copy from 'components/assets/Copy';
import CAPSDark from 'components/assets/CAPSDark';
import { ellipsifyMiddle } from 'helpers/lib';

export const fields = [
  { text: 'Block', dataKey: 'block_id', className: 'text-left' },
  { text: 'From', dataKey: 'from', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'To', dataKey: 'to', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Amount', dataKey: 'amount', className: 'text-left'},
]

export const render = (record: any, dataKey: string) => {
  switch (dataKey) {
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
