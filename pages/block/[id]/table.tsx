import Link from 'next/link';
import { FormattedDate } from 'react-intl';
import CAPSDark from 'components/assets/CAPSDark';
import Check from 'components/assets/Check';
import Close from 'components/assets/Close';
import Detail from 'components/assets/Detail';
import Copy from 'components/assets/Copy';
import { ellipsifyMiddle, ellipsifyLast, formatSec } from 'helpers/lib';

export const blockFields = [
  { text: 'Timestamp', dataKey: 'timestamp', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Hash', dataKey: 'block_hash', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Parent Hash', dataKey: 'parent_hash', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'State Root', dataKey: 'state_root', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Extrinsics Root', dataKey: 'extrinsics_root', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Extrinsics', dataKey: 'extrinsics', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Total Module Events', dataKey: 'module_events', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Runtime Version', dataKey: 'runtime_version', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Block Time', dataKey: 'age', className: 'text-left', mobileClassName: 'col-12' },
]

export const extrinsicColumns = [
  { text: 'Extrinsic ID', dataKey: 'id', className: 'text-left' },
  { text: 'From', dataKey: 'from', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Module', dataKey: 'module', className: 'text-left only-desktop' },
  { text: 'Call', dataKey: 'call', className: 'text-left only-desktop' },
  { text: 'Success', dataKey: 'success', className: 'text-left only-desktop' },
  { text: '', dataKey: 'detail' },
]

export const eventColumns = [
  { text: 'Event ID', dataKey: 'id', className: 'text-left' },
  { text: 'Extrinsic Hash', dataKey: 'hash', className: 'text-left only-desktop' },
  { text: 'Time', dataKey: 'age', className: 'text-left' },
  { text: 'Action', dataKey: 'action', className: 'text-left' },
]

export const blockRender = (data: any, dataKey: string) => {
  switch (dataKey) {
    case 'block_hash':
    case 'parent_hash':
    case 'state_root':
    case 'extrinsics_root':
      return (
        <div className="d-flex align-items-center">
          <CAPSDark className="webIcon me-2" />
          <span className="textToken" title={data[dataKey]}>
            {ellipsifyMiddle(data[dataKey])}
          </span>
          <div className="ms-2" onClick={()=>navigator.clipboard.writeText(data[dataKey])}>
            <Copy className="cursor-point" />
          </div>
        </div>
      )

    case 'age':
      return `${formatSec(data[dataKey])} ago`

    default:
      return data[dataKey]
  }
}

export const extrinsicRender = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'id':
      return (
        <>
          <Link href={`/extrinsic/${record[dataKey]}`}>
              <a className="textToken">{record[dataKey]}</a>
          </Link>
        </>
      )
    case 'timestamp':
      return (
        <FormattedDate value={record[dataKey]} />
      )

    case 'from':
      return (
        <>
          <div className="only-desktop">
            <div className="d-flex align-items-center">
              <CAPSDark className="webIcon me-2" />
              <span className="textToken">{record[dataKey]}</span>
              <div className="ms-2" onClick={()=>navigator.clipboard.writeText(record[dataKey])}>
                <Copy className="cursor-point" />
              </div>
            </div>
          </div>
          <div className="only-mobile">
            <span className="textToken">{ellipsifyLast(record[dataKey])}</span>
          </div>
        </>
      )

    case 'success':
      return record[dataKey] ? <Check className="webCheckIcon" /> : <Close className="webCheckIcon"/>

    case 'detail':
      return (
        <Link href={`/block/${record.block_id}/${record.id}`}>
          <a>
            <Detail className="detail"/>
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
        <div className="d-flex align-items-center">
          <span className="textToken" title={record[dataKey]}>
            {ellipsifyMiddle(record[dataKey])}
          </span>
          <div className="ms-2" onClick={()=>navigator.clipboard.writeText(record[dataKey])}>
            <Copy className="cursor-point" />
          </div>
        </div>
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
