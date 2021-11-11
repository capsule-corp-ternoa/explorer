import Link from 'next/link'
import CAPSDark from 'components/assets/CAPSDark';
import { FormattedNumber } from 'react-intl';

export const columns = [
  { text: 'Address', dataKey: 'address', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Extrinsics', dataKey: 'extrinsics', className: 'text-left' },
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
        <>
          <CAPSDark className="webIcon me-2" />
          <span className="textToken">{record[dataKey]}</span>
        </>
      )
    case 'details':
    default:
      return (
        <Link href={`/account/${record.address}`}>
          <a>
            <button className="btn btn-secondary rounded-pill px-4 py-2">
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
