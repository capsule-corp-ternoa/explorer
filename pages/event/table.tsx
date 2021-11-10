import Link from 'next/link'
import { ellipsifyMiddle, formatSec } from 'helpers/lib';

export const columns = [
  { text: 'Event ID', dataKey: 'id', className: 'text-left' },
  { text: 'Block', dataKey: 'blockId', className: 'text-right' },
  { text: 'Extrinsic Hash', dataKey: 'hash', className: 'text-right' },
  { text: 'Time', dataKey: 'age', className: 'text-right' },
  { text: 'Action', dataKey: 'action', className: 'text-right' },
]

export const render = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'id':
      return (
        <>
          <Link href={`/extrinsic/e/${record[dataKey]}`}>
            <a className="textToken">{record[dataKey]}</a>
          </Link>
        </>
      )
    case 'blockId':
      return (
        <>
          <Link href={`/block/e/${record[dataKey]}`}>
              <a className="textToken">{record[dataKey]}</a>
          </Link>
        </>
      )
    case 'hash':
      return (
        <>
          <span className="textToken" title={record[dataKey]}>
            {ellipsifyMiddle(record[dataKey])}
          </span>
        </>
      )
    case 'age':
      return `${formatSec(record[dataKey])} ago`
    case 'action':
      return (
        <span className="textToken">{record[dataKey]}</span>
      )
    default:
  }
}

export default {
  columns,
  render
}
