import { FormattedNumber } from 'react-intl';
import CAPSDark from 'components/assets/CAPSDark';
import { ellipsifyMiddle } from 'helpers/lib';

export const fields = [
  { text: 'Block', dataKey: 'block_id' },
  { text: 'From', dataKey: 'from', mobileClassName: 'col-12' },
  { text: 'To', dataKey: 'to', mobileClassName: 'col-12' },
  { text: 'Amount', dataKey: 'amount'},
]

export const render = (record: any, dataKey: string) => {
  switch (dataKey) {
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
