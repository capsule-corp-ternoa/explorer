import { FormattedTime, FormattedNumber } from 'react-intl';
import Link from 'next/link'
import CAPSDark from 'components/assets/CAPSDark';
import { ellipsifyMiddle } from 'helpers/lib';

export const fields = [
  { text: 'NFT Name', dataKey: 'nft_id' },
  { text: 'Type of Transaction', dataKey: 'transaction_type' },
  { text: 'Amount', dataKey: 'amount' },
  { text: 'Minting Contract', dataKey: 'minter' },
  { text: 'NFT Asset Address', dataKey: 'asset' },
  { text: 'Sender', dataKey: 'from', mobileClassName: 'col-12' },
  { text: 'Receiver', dataKey: 'to', mobileClassName: 'col-12' },
  { text: 'Creator', dataKey: 'creator', mobileClassName: 'col-12' },
  { text: 'Date', dataKey: 'timestamp' },
  { text: 'Quantity', dataKey: 'quantity' },
  { text: 'Content URL', dataKey: 'uri', mobileClassName: 'col-12' },
]

export const render = (data: any, dataKey: string) => {
  switch (dataKey) {
    case 'timestamp':
      return (
        <FormattedTime format='default' value={data[dataKey]}/>
      )

    case 'uri':
      return (
        <Link href={data[dataKey]}>
          <a target='_blank'>{data[dataKey]}</a>
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
