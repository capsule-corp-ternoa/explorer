import { FormattedNumber } from 'react-intl';
import CAPSDark from 'components/assets/CAPSDark';
import { formatSec } from 'helpers/lib';
import Check from 'components/assets/Check';

export const blockFields = [
  { text: 'Timestamp', dataKey: 'timestamp' },
  { text: 'Hash', dataKey: 'block_hash', mobileClassName: 'col-12' },
  { text: 'Parent Hash', dataKey: 'parent_hash', mobileClassName: 'col-12' },
  { text: 'State Root', dataKey: 'state_root', mobileClassName: 'col-12' },
  { text: 'Extrinsics Root', dataKey: 'extrinsics_root', mobileClassName: 'col-12' },
  { text: 'Transactions', dataKey: 'transactions' },
  { text: 'Total Module Events', dataKey: 'module_events' },
  { text: 'Runtime Version', dataKey: 'runtime_version' },
  { text: 'Block Time', dataKey: 'age' },
  { text: 'Session ID', dataKey: 'session_id' },
  { text: 'Block Author', dataKey: 'block_author', mobileClassName: 'col-12' },
]

export const transactionColumns = [
  { text: 'Transaction ID', dataKey: 'transaction_id' },
  { text: 'Module', dataKey: 'module' },
  { text: 'From', dataKey: 'from', mobileClassName: 'col-12' },
  { text: 'Call', dataKey: 'call' },
  { text: 'Success', dataKey: 'success' },
]

export const blockRender = (data: any, dataKey: string) => {
  switch (dataKey) {
    case 'block_hash':
    case 'parent_hash':
    case 'state_root':
    case 'extrinsics_root':
      return (
        <>
          <CAPSDark className="webIcon me-2" />
          <span className="textToken">{data[dataKey]}</span>
        </>
      )

    case 'age':
      return `${formatSec(data[dataKey])} ago`

    default:
      return data[dataKey]
  }
}

export const transactionRender = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'from':
      return (
        <>
          <CAPSDark className="webIcon me-2" />
          <span className="textToken">{record[dataKey]}</span>
        </>
      )

    case 'success':
      return record[dataKey] ? <Check className="webCheckIcon" /> : null

    default:
      return record[dataKey]
  }
}

export default {
  blockFields,
  blockRender,
  transactionColumns,
  transactionRender
}
