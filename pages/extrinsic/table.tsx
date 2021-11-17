import Link from 'next/link'
import Check from 'components/assets/Check';

export const columns = [
  { text: 'Extrinsic ID', dataKey: 'id', className: 'text-left' },
  { text: 'Block', dataKey: 'block_id', className: 'text-left' },
  { text: 'Module', dataKey: 'module', className: 'text-left' },
  { text: 'Call', dataKey: 'call', className: 'text-left' },
  { text: 'Signed', dataKey: 'signed', className: 'text-left' },
  { text: 'Success', dataKey: 'success', className: 'text-left' },
  { text: '', dataKey: 'detail' },
]

export const render = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'signed':
      return record[dataKey] ? 'Yes' : 'No'

    case 'success':
      return record[dataKey] && <Check className="webCheckIcon" />

    case 'detail':
      return (
        <Link href={`/extrinsic/${record.id}`}>
          <a>
            <button className="btn btn-info rounded-pill px-5 py-2">
              Details
            </button>
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
