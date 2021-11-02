import Link from 'next/link'
import Check from 'components/assets/Check';

export const columns = [
  { text: 'Extrinsic ID', dataKey: 'id', className: 'text-left' },
  { text: 'Block', dataKey: 'block_id', className: 'text-left' },
  { text: 'Module', dataKey: 'module' },
  { text: 'Call', dataKey: 'call' },
  { text: 'Signed', dataKey: 'signed' },
  { text: 'Success', dataKey: 'success' },
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
            <button className="btn btn-secondary rounded-pill px-4 py-2">
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
