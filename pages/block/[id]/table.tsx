import Link from 'next/link';
import { FormattedDate } from 'react-intl';
import CAPSDark from 'components/assets/CAPSDark';
import Check from 'components/assets/Check';
import { ellipsifyMiddle, formatSec } from 'helpers/lib';

export const blockFields = [
  { text: 'Timestamp', dataKey: 'timestamp' },
  { text: 'Hash', dataKey: 'block_hash', mobileClassName: 'col-12' },
  { text: 'Parent Hash', dataKey: 'parent_hash', mobileClassName: 'col-12' },
  { text: 'State Root', dataKey: 'state_root', mobileClassName: 'col-12' },
  { text: 'Extrinsics Root', dataKey: 'extrinsics_root', mobileClassName: 'col-12' },
  { text: 'Extrinsics', dataKey: 'extrinsics' },
  { text: 'Total Module Events', dataKey: 'module_events' },
  { text: 'Runtime Version', dataKey: 'runtime_version' },
  { text: 'Block Time', dataKey: 'age' },
]

export const extrinsicColumns = [
  { text: 'Extrinsic ID', dataKey: 'id' },
  { text: 'From', dataKey: 'from', mobileClassName: 'col-12' },
  { text: 'Module', dataKey: 'module' },
  { text: 'Call', dataKey: 'call' },
  { text: 'Success', dataKey: 'success' },
  { text: '', dataKey: 'detail' },
]

export const eventColumns = [
  { text: 'Event ID', dataKey: 'id' },
  { text: 'Extrinsic Hash', dataKey: 'hash' },
  { text: 'Time', dataKey: 'age' },
  { text: 'Action', dataKey: 'action' },
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

export const extrinsicRender = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'timestamp':
      return (
        <FormattedDate value={record[dataKey]} />
      )

    case 'from':
      return (
        <>
          <CAPSDark className="webIcon me-2" />
          <span className="textToken">{record[dataKey]}</span>
        </>
      )

    case 'success':
      return record[dataKey] ? <Check className="webCheckIcon" /> : null

    case 'detail':
      return (
        <Link href={`/block/${record.block_id}/${record.id}`}>
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

export const eventRender = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'id':
      return (
        <>
          <Link href={`/event/${record[dataKey]}`}>
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
  blockFields,
  blockRender,
  extrinsicColumns,
  extrinsicRender
}
