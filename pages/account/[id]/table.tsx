import { FormattedNumber } from 'react-intl';
import Check from 'components/assets/Check';
import Close from 'components/assets/Close';
import Link from 'next/link';
import { ellipsifyMiddle, formatSec } from 'helpers/lib';
import Copy from 'components/assets/Copy';
import Detail from 'components/assets/Detail';

export const fields = [
  { text: 'Total Balance', dataKey: 'total_balance', className: 'text-left', mobileClassName: 'col-12 col-sm-6' },
  { text: 'Free Balance', dataKey: 'free_balance', className: 'text-left', mobileClassName: 'col-12 col-sm-6' },
  { text: 'Nonce', dataKey: 'nonce', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Active', dataKey: 'active', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Past Roles', dataKey: 'past_roles', className: 'text-left', mobileClassName: 'col-12' },
]

export const eventsListColumns = [
  { text: 'Event ID', dataKey: 'id', className: 'text-left only-desktop' },
  { text: 'Extrinsic Hash', dataKey: 'hash', className: 'text-left only-desktop' },
  { text: 'Time', dataKey: 'age', className: 'text-left' },
  { text: 'Action', dataKey: 'action', className: 'text-left' },
  { text: '', dataKey: 'details' },
]

export const render = (data: any, dataKey: string) => {
  switch (dataKey) {
    case 'total_balance':
    case 'free_balance':
      return (
        <>
          <FormattedNumber value={data[dataKey]} format='decimal' />
          &nbsp;CAPS
        </>
      )

    case 'nonce':
      return data[dataKey]

    case 'active':
      return data[dataKey] ? <Check className="webCheckIcon" /> : <Close className="webCheckIcon"/>

    case 'past_roles':
      return data[dataKey]
  }
}

export const eventsListRender = (record: any, dataKey: string) => {
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
    case 'details':
        return (
          <Link href={`/event/${record.id}`}>
            <a className='mx-auto'>
              <Detail className="detail"/>
            </a>
          </Link>
        )
    default:
  }
}

export default {
  fields,
  render, 
  eventsListColumns,
  eventsListRender
}
