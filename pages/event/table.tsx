import Link from 'next/link'
import { FormattedNumber } from 'react-intl';
import { ellipsifyMiddle, formatSec } from 'helpers/lib';

export const columns = [
  { text: 'Event ID', dataKey: 'id', className: 'text-left' },
  { text: 'Block', dataKey: 'blockId', className: 'text-right' },
  { text: 'Extrinsic Hash', dataKey: 'hash', className: 'text-right' },
  { text: 'Time', dataKey: 'timestamp', className: 'text-right' },
  { text: 'Action', dataKey: 'action', className: 'text-right' },
]

export const render = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'id':
      return (
        <>
          {/* <Link href={`/extrinsic/${record.address}`}> */}
          <Link href={`/extrinsic/event/513569-0`}>
            <a className="textToken">{ "7440231-2" }</a>
          </Link>
        </>
      )
    case 'blockId':
      return (
        <Link href={`/block/event/513569`}>
            <a className="textToken">{ "7440231" }</a>
        </Link>
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
  }
}

export default {
  columns,
  render
}
