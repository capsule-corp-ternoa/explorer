import Link from 'next/link'
import CAPSDark from 'components/assets/CAPSDark';
import Copy from 'components/assets/Copy';
import { ellipsifyMiddle, formatSec } from 'helpers/lib';

export const columns = [
  { text: 'Number', dataKey: 'number', className: 'text-left' },
  { text: 'Age', dataKey: 'age', className: 'text-left' },
  { text: 'Block Hash', dataKey: 'block_hash', className: 'text-left only-desktop', mobileClassName: 'col-12' },
  { text: 'Signed Extrinsics', dataKey: 'signed_extrinsics', className: 'text-left  only-desktop' },
  { text: 'Module Events', dataKey: 'module_events', className: 'text-left  only-desktop' },
  { text: '', dataKey: 'details' },
]

export const render = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'number':
      return (
        <>
          <Link href={`/block/${record[dataKey]}`}>
              <a className="textToken">{record[dataKey]}</a>
          </Link>
        </>
      )
    case 'signed_extrinsics':
    case 'module_events':
      return record[dataKey]

    case 'age':
      return `${formatSec(record[dataKey])} ago`

    case 'block_hash':
      return (
        <div className="d-flex">
          <CAPSDark className="webIcon me-2" />
          <Link href={`/block/${record['number']}`}>
            <a className="textToken mt-1" title={record[dataKey]}>
              {ellipsifyMiddle(record[dataKey])}
            </a>
          </Link>
          <div className="ms-2 mt-1" onClick={()=>navigator.clipboard.writeText(record[dataKey])}>
            <Copy className="cursor-point" />
          </div>
        </div>
      )

    case 'details':
    default:
      return (
        <Link href={`/block/${record.number}`}>
          <a>
            <button className="btn btn-info rounded-pill px-4 py-1 text-small text-bold">
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
