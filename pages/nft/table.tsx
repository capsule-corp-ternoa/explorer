import Link from 'next/link'
import CAPSDark from 'components/assets/CAPSDark';
import Copy from 'components/assets/Copy';
import Detail from 'components/assets/Detail';
import { FormattedTime, FormattedNumber } from 'react-intl';
import { ellipsifyMiddle } from 'helpers/lib';

export const columns = [
  { text: 'Name/ID', dataKey: 'nftId', className: 'text-left' },
  { text: 'Date', dataKey: 'timestamp', className: 'text-left only-desktop' },
  { text: 'Sender', dataKey: 'from', className: 'text-left only-desktop', mobileClassName: 'col-12' },
  { text: 'Receiver', dataKey: 'to', className: 'text-left only-desktop', mobileClassName: 'col-12' },
  { text: 'Operation', dataKey: 'typeOfTransaction', className: 'text-left' },
  { text: '', dataKey: 'details', mobileClassName: 'col-12' },
]

export const render = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'nft_id':
      return (
        <>
          <Link href={{pathname: `/nft/${record.id}`, query: {extrinsic: record['extrinsic_id']}}}>
              <a className="textToken">{record[dataKey]}</a>
          </Link>
        </>
      )
    case 'timestamp':
      return (
        <FormattedTime format='default' value={record[dataKey]} />
      )

    case 'typeOfTransaction':
      return (
        <div>{record.typeOfTransaction}</div>
      )

    case 'from':
    case 'to':
      return (
        record[dataKey] && (
          <div className="d-flex align-items-center">
            <CAPSDark className="webIcon me-2" />
            <span className="textToken" title={record[dataKey]}>
              {ellipsifyMiddle(record[dataKey])}
            </span>
            {
              <div
                className="ms-2"
                onClick={() => navigator.clipboard.writeText(record[dataKey])}
              >
                <Copy className="cursor-point" />
              </div>
            }
          </div>
        )
      );
    case 'details':
      return (
        <Link href={{pathname: `/nft/${record.id}`, query: {extrinsic: record['extrinsicId']}}}>
          <a className='mx-auto'>
            <Detail className="detail"/>
          </a>
        </Link>
      )

    default:
      return record[dataKey]
  }
}

export default {
  columns,
  render
}
