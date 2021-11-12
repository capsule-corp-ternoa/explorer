import { FormattedTime, FormattedNumber } from 'react-intl';
import Link from 'next/link'
import CAPSDark from 'components/assets/CAPSDark';
import { ellipsifyMiddle } from 'helpers/lib';

export const fields = [
  { text: 'NFT Id', dataKey: 'nft_id' },
  { text: 'Type of Extrinsic', dataKey: 'extrinsic_type', className: 'text-left' },
  { text: 'Amount', dataKey: 'amount', className: 'text-left' },
  { text: 'Sender', dataKey: 'from', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Receiver', dataKey: 'to', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Creator', dataKey: 'creator', className: 'text-left', mobileClassName: 'col-12' },
  { text: 'Date', dataKey: 'timestamp', className: 'text-left' },
  { text: 'Content URL', dataKey: 'uri', className: 'text-left', mobileClassName: 'col-12' },
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

    case 'uri':
      return (
        <Link href={'https://www.secret-nft.com/nft/' + data['nft_id']}>
          <a target='_blank'>{'https://www.secret-nft.com/nft/' + data['nft_id']}</a>
        </Link>
      )

    case 'amount':
      return (
        <>
          <FormattedNumber value={data[dataKey]} format='decimal' />
          &nbsp;Caps
        </>
      )

    case 'to':
    case 'from':
    case 'creator':
      return (
        <>
          <CAPSDark className="webIcon me-2" />
          <span className="textToken" title={data[dataKey]}>
            {ellipsifyMiddle(data[dataKey])}
          </span>
        </>
      )

    default:
      return data[dataKey]
  }
}

export default {
  fields,
  render
}
