import Link from 'next/link';
import { FormattedTime } from 'react-intl';
import CAPSDark from 'components/assets/CAPSDark';
import { ellipsifyMiddle, formatSec } from 'helpers/lib';
import Check from 'components/assets/Check';

export const extrinsicFields = [
  { text: 'ID', dataKey: 'id' },
  { text: 'Block', dataKey: 'block_id' },
  { text: 'Timestamp', dataKey: 'timestamp' },
  { text: 'Extrinsic Index', dataKey: 'extrinsic_index' },
  { text: 'Extrinsic Hash', dataKey: 'hash', mobileClassName: 'col-12' },
  { text: 'Module', dataKey: 'module' },
  { text: 'Call', dataKey: 'call' },
  { text: 'Description', dataKey: 'description', mobileClassName: 'col-12' },
  { text: 'Address', dataKey: 'signer', mobileClassName: 'col-12' },
  { text: 'Nonce', dataKey: 'nonce' },
  { text: 'Signature', dataKey: 'signature', mobileClassName: 'col-12' },
  { text: 'Result', dataKey: 'success' },
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
        <>
          <CAPSDark className="webIcon me-2" />
          <span className="textToken" title={record[dataKey]}>
            {ellipsifyMiddle(record[dataKey])}
          </span>
        </>
      )

    case 'signer':
      return (
        <span className="textToken" title={record[dataKey]}>
          {ellipsifyMiddle(record[dataKey])}
        </span>
      )

    case 'success':
      return record[dataKey] ? <Check className="webCheckIcon" /> : null

    default:
      return record[dataKey]
  }
}

export const parameterFields = [
  { text: 'Destination', dataKey: 'args_name' },
  { text: 'Value', dataKey: 'args_value' },
]

export const parameterRender = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'args_name':
      return (
        <>
          <span className="textToken" title={record[dataKey]}>
            {record[dataKey] && record[dataKey][0]}
          </span>
        </> 
      );
    case 'args_value':
      return (
        <>
          <span className="textToken" title={record[dataKey]}>
            {record[dataKey] && record[dataKey][0]}
          </span>
        </> 
      );
    default:
      return record[dataKey]
  }
}

export default {
  extrinsicFields,
  extrinsicRender,
  parameterFields,
  parameterRender
}
