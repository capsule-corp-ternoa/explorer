import Link from 'next/link'
var unescapeJs = require('unescape-js');

export const eventFields = [
  { text: 'Block', dataKey: 'block_id', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Referenced Extrinsic', dataKey: 'extrinsic_index', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Event Index', dataKey: 'event_index', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Module', dataKey: 'module', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Event name', dataKey: 'call', className: 'text-left', mobileClassName: 'col-12'},
  { text: 'Description', dataKey: 'description', className: 'text-left', mobileClassName: 'col-12'},
]

export const eventRender = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'block_id':
      return (
        <>
          <Link href={`/block/${record[dataKey]}`}>
            <a className="textToken">{record[dataKey]}</a>
          </Link>
        </>
      )
    case 'description':
      return (
        <>
          <span className="description">{unescapeJs(record[dataKey])}</span>
        </>
      )
    default:
      return <span className="textToken">{record[dataKey]}</span>
  }
}

export default {
  eventFields,
  eventRender
}
