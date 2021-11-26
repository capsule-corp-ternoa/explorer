import Link from 'next/link'
import CAPSDark from 'components/assets/CAPSDark';
import Copy from 'components/assets/Copy';
import Detail from 'components/assets/Detail';
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
        { record[dataKey] < 1 && parseFloat(record[dataKey]) !== 0 ?
          <>
            {record[dataKey]}
            &nbsp;CAPS 
          </>
          :
          <>
            <FormattedNumber value={record[dataKey]} format='decimal' />
            &nbsp;CAPS
          </>
        }
        </>
      )
    case 'address':
      return (
        <div className="d-flex">
          <CAPSDark className="webIcon me-2" />
          <Link href={`/account/${record[dataKey]}`}>
          <a className="textToken mt-1">{record[dataKey]}</a>
          </Link>
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
