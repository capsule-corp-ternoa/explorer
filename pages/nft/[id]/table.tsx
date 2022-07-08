import { FormattedTime, FormattedNumber } from 'react-intl';
import Link from 'next/link'
import CAPSDark from 'components/assets/CAPSDark';
import Copy from 'components/assets/Copy';
import { ellipsifyMiddle, formatSec } from 'helpers/lib';

export const fields = [
  { text: 'NFT Id', dataKey: 'nftId', mobileClassName: 'col-12' },
  { text: 'Operation', dataKey: 'typeOfTransaction', className: 'text-left' },
  { text: 'Sender', dataKey: 'from', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Receiver', dataKey: 'to', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Creator', dataKey: 'creator', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Date', dataKey: 'timestamp', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Fees', dataKey: 'fees', className: 'text-left', mobileClassName: 'col-12' },
]

export const eventColumns = [
  { text: 'Event ID', dataKey: 'id', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Extrinsic Hash', dataKey: 'hash', className: 'text-left only-desktop', mobileClassName: 'col-12' },
  { text: 'Time', dataKey: 'age', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Action', dataKey: 'action', className: 'text-left', mobileClassName: 'col-12' },
]

export const render = (data: any, dataKey: string) => {
  switch (dataKey) {
    case 'timestamp':
      return (
        <FormattedTime format='default' value={data[dataKey]}/>
      )

    case 'extrinsic_type':
      return (
        <span className="textToken">{data[dataKey]}</span>
      )
    
    case 'fees':
      return (
        <>
          <FormattedNumber value={data[dataKey]} format='fees' />
          &nbsp;CAPS
        </>
      )

    case 'typeOfTransaction':
      return (
        <div>{data.typeOfTransaction}</div>
      )

    case 'to':
    case 'from':
    case 'creator':
      return (
        data[dataKey] && (
          <div className="d-flex align-items-center">
            <CAPSDark className="webIcon me-2" />
            <span className="textToken" title={data[dataKey]}>
              {ellipsifyMiddle(data[dataKey])}
            </span>
            <div
              className="ms-2"
              onClick={() => navigator.clipboard.writeText(data[dataKey])}
            >
              <Copy className="cursor-point" />
            </div>
          </div>
        )
      );

    default:
      return data[dataKey]
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
  fields,
  render
}
