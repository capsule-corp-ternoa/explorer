import Link from 'next/link';
import { FormattedDate } from 'react-intl';
import CAPSDark from 'components/assets/CAPSDark';
import { ellipsifyMiddle, formatSec } from 'helpers/lib';

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
]

export const columns = [
  { text: 'Event ID', dataKey: 'id', className: 'text-left' },
  { text: 'Extrinsic Hash', dataKey: 'hash', className: 'text-right' },
  { text: 'Time', dataKey: 'timestamp', className: 'text-right' },
  { text: 'Action', dataKey: 'action', className: 'text-right' },
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

export const render = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'id':
      return (
        <>
          {/* <Link href={`/extrinsic/${record.address}`}> */}
          <Link href={`/extrinsic/513569-0`}>
            <a className="textToken">{ "7440231-2" }</a>
          </Link>
        </>
      )
    case 'hash':
      return (
        <>
          <span className="textToken" title={record[dataKey]}>
            {ellipsifyMiddle("0xfe67b...01d1d07cce37")}
          </span>
        </>
      )
    case 'timestamp':
      return (
        `${formatSec(9999999)} ago`
      )
    case 'action':
      return (
        <span className="textToken">{"balance(Transfer)"}</span>
      )
    default:
      return record[dataKey];
  }
}

export default {
  blockFields,
  blockRender,
  columns,
  render
}
