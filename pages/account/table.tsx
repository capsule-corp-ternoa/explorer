import Link from 'next/link'
import CAPSDark from 'components/assets/CAPSDark';
import Copy from 'components/assets/Copy';
import { FormattedNumber } from 'react-intl';

export const columns = [
  { text: 'Address', dataKey: 'address', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Amount', dataKey: 'amount', className: 'text-left' },
  { text: '', dataKey: 'details', mobileClassName: 'col-12' },
]

export const render = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'amount':
      return (
        <>
          <FormattedNumber value={record[dataKey]} format='decimal' />
          &nbsp;CAPS
        </>
      )
    case 'extrinsics':
      return (
        <FormattedNumber value={record[dataKey]} format='decimal' />
      )
    case 'address':
      return (
        <div className="d-flex">
          <CAPSDark className="webIcon me-2" />
          <span className="textToken mt-1">{record[dataKey]}</span>
          <div className="ms-2 mt-1" onClick={()=>navigator.clipboard.writeText(record[dataKey])}>
            <Copy className="cursor-point" />
          </div>
        </div>
      )
    case 'details':
    default:
      return (
        <Link href={`/account/${record.address}`}>
          <a>
            <button className="btn btn-info rounded-pill px-5 py-2">
              Details
            </button>
          </a>
        </Link>
      )
  }
}

export default {
  columns,
  render
}
