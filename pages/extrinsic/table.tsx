import Link from 'next/link'
import Check from 'components/assets/Check';
import Detail from 'components/assets/Detail';
import Close from 'components/assets/Close';

export const columns = [
  { text: 'Extrinsic ID', dataKey: 'id', className: 'text-left' },
  { text: 'Block', dataKey: 'block_id', className: 'text-left' },
  { text: 'Module', dataKey: 'module', className: 'text-left only-desktop' },
  { text: 'Call', dataKey: 'call', className: 'text-left only-desktop' },
  { text: 'Signed', dataKey: 'signed', className: 'text-left only-desktop' },
  { text: 'Success', dataKey: 'success', className: 'text-left only-desktop' },
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
      return record[dataKey] ? <Check className="webCheckIcon" /> : <Close className="webCheckIcon"/>

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
