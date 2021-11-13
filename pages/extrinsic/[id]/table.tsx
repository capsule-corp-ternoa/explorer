import Link from 'next/link';
import { FormattedTime } from 'react-intl';
import CAPSDark from 'components/assets/CAPSDark';
import { ellipsifyMiddle, formatSec } from 'helpers/lib';
import Check from 'components/assets/Check';
import Copy from 'components/assets/Copy';
import JSONPretty from 'react-json-pretty';

export const extrinsicFields = [
  { text: 'ID', dataKey: 'id', className: 'text-left' },
  { text: 'Block', dataKey: 'block_id', className: 'text-left' },
  { text: 'Timestamp', dataKey: 'timestamp', className: 'text-left' },
  { text: 'Extrinsic Index', dataKey: 'extrinsic_index', className: 'text-left' },
  { text: 'Extrinsic Hash', dataKey: 'hash', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Module', dataKey: 'module', className: 'text-left' },
  { text: 'Call', dataKey: 'call', className: 'text-left' },
  { text: 'Description', dataKey: 'description', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Address', dataKey: 'signer', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Nonce', dataKey: 'nonce', className: 'text-left' },
  { text: 'Signature', dataKey: 'signature', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Result', dataKey: 'success', className: 'text-left' },
]

export const parameterFields = [
  { text: 'Destination', dataKey: 'name', className: 'text-left' },
  { text: 'Value', dataKey: 'value', className: 'text-left', mobileClassName: 'col-12' },
]

export const eventColumns = [
  { text: 'Event ID', dataKey: 'id', className: 'text-left' },
  { text: 'Extrinsic Hash', dataKey: 'hash', className: 'text-left' },
  { text: 'Time', dataKey: 'age', className: 'text-left' },
  { text: 'Action', dataKey: 'action', className: 'text-left' },
]

export const extrinsicRender = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'timestamp':
      return (
        <FormattedTime format="default" value={record[dataKey]} />
      )

    case 'hash':
    case 'signature':
      return (
        <div className="d-flex">
          <CAPSDark className="webIcon me-2" />
          <span className="textToken mt-1" title={record[dataKey]}>
            {ellipsifyMiddle(record[dataKey])}
          </span>
          <div className="ms-2 mt-1" onClick={()=>navigator.clipboard.writeText(record[dataKey])}>
            <Copy className="cursor-point" />
          </div>
        </div>
      )

    case 'signer':
      return (
        <div className="d-flex">
          <span className="textToken mt-1" title={record[dataKey]}>
            {ellipsifyMiddle(record[dataKey])}
          </span>
          <div className="ms-2 mt-1" onClick={()=>navigator.clipboard.writeText(record[dataKey])}>
          <Copy className="cursor-point" />
          </div>
        </div>
      )

    case 'success':
      return record[dataKey] ? <Check className="webCheckIcon" /> : null

    default:
      return record[dataKey]
  }
}

export const parameterRender = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'name':
      return (
        <>
          <span className="textToken" title={record[dataKey]}>
            {record[dataKey]}
          </span>
        </> 
      );
    case 'value':
      return (
        <div className="mt-3">
          <JSONPretty id="json-pretty" data={JSON.parse(record[dataKey])}></JSONPretty>
        </div> 
      );
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
        <div className="d-flex">
          <span className="textToken mt-1" title={record[dataKey]}>
            {ellipsifyMiddle(record[dataKey])}
          </span>
          <div className="ms-2 mt-1" onClick={()=>navigator.clipboard.writeText(record[dataKey])}>
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
  extrinsicFields,
  extrinsicRender,
  parameterFields,
  parameterRender
}
