import Link from 'next/link'
import Check from 'components/assets/Check';
import Detail from 'components/assets/Detail';

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
    case 'id':
      return (
        <>
          <Link href={`/extrinsic/${record[dataKey]}`}>
              <a className="textToken">{record[dataKey]}</a>
          </Link>
        </>
      )
    case 'signed':
      return record[dataKey] ? 'Yes' : 'No'

    case 'success':
      return record[dataKey] && <Check className="webCheckIcon" />

    case 'detail':
      return (
        <Link href={`/extrinsic/${record.id}`}>
          <a>
            <Detail className="detail"/>
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
