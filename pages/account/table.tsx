import Link from 'next/link'
import CAPSDark from 'components/assets/CAPSDark';
import Copy from 'components/assets/Copy';
import Detail from 'components/assets/Detail';
import { FormattedNumber } from 'react-intl';
import { ellipsifyLast } from 'helpers/lib';

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
    case 'address':
      return (
        <>
          <div className="only-desktop">
            <div className="d-flex">
              <CAPSDark className="webIcon me-2" />
              <Link href={`/account/${record[dataKey]}`}>
              <a className="textToken mt-1">{record[dataKey]}</a>
              </Link>
              <div className="ms-2 mt-1" onClick={()=>navigator.clipboard.writeText(record[dataKey])}>
                <Copy className="cursor-point" />
              </div>
            </div>
          </div>
          <div className="only-mobile">
            <Link href={`/account/${record[dataKey]}`}>
              <a className="textToken mt-1">{ellipsifyLast(record[dataKey])}</a>
            </Link>
          </div>
        </>
      )
    case 'details':
    default:
      return (
        <Link href={`/account/${record.address}`}>
          <a className='mx-auto'>
            <Detail className="detail"/>
          </a>
        </Link>
      )
  }
}

export default {
  columns,
  render
}
