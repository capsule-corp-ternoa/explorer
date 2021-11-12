import Link from 'next/link'
import CAPSDark from 'components/assets/CAPSDark';
import { ellipsifyMiddle, formatSec } from 'helpers/lib';

export const columns = [
  { text: 'Number', dataKey: 'number', className: 'text-left' },
  { text: 'Age', dataKey: 'age', className: 'text-left' },
  { text: 'Block Hash', dataKey: 'block_hash', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Signed Extrinsics', dataKey: 'signed_extrinsics', className: 'text-left' },
  { text: 'Module Events', dataKey: 'module_events', className: 'text-left' },
  { text: '', dataKey: 'details' },
]

export const render = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'number':
    case 'signed_extrinsics':
    case 'module_events':
      return record[dataKey]

    case 'age':
      return `${formatSec(record[dataKey])} ago`

    case 'block_hash':
      return (
        <>
          <CAPSDark className="webIcon me-2" />
          <span className="textToken" title={record[dataKey]}>
            {ellipsifyMiddle(record[dataKey])}
          </span>
        </>
      )

    case 'details':
    default:
      return (
        <Link href={`/block/${record.number}`}>
          <a>
            <button className="btn btn-secondary rounded-pill px-4 py-2">
              Details
            </button>
          </a>
        </Link>
      )
  }
}

export default {
  columns,
  render
}
