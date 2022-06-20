import Link from 'next/link'
import Copy from 'components/assets/Copy';
import Detail from 'components/assets/Detail';
import CAPSDark from 'components/assets/CAPSDark';
import { ellipsifyMiddle, formatSec } from 'helpers/lib';
import { FormattedNumber } from 'react-intl';
import { INftOperation } from 'interfaces/api';

export const blockColumns = [
  { text: 'Number', dataKey: 'number', className: 'text-left' },
  { text: 'Age', dataKey: 'age', className: 'text-left' },
  { text: 'Block Hash', dataKey: 'block_hash', className: 'text-left only-desktop' },
  { text: 'Signed Extrinsics', dataKey: 'signed_extrinsics', className: 'text-center only-desktop' },
  { text: 'Module Events', dataKey: 'module_events', className: 'text-center only-desktop' },
  { text: '', dataKey: 'details', className: 'text-left' },
]

export const nftOperationsColumns = [
  { text: 'Name/ID', dataKey: 'nftId', className: 'text-left' },
  // { text: 'Date', dataKey: 'timestamp', className: 'text-left only-desktop' },
  { text: 'Sender', dataKey: 'from', className: 'text-left only-desktop' },
  { text: 'Receiver', dataKey: 'to', className: 'text-left only-desktop' },
  { text: 'Operation', dataKey: 'typeOfTransaction', className: 'text-left' },
  { text: '', dataKey: 'details', className: 'text-left' },
]

export const transferColumns = [
  { text: 'Block', dataKey: 'block_id', className: 'text-left' },
  { text: 'From', dataKey: 'from', className: 'text-left' },
  { text: 'To', dataKey: 'to', className: 'text-left only-desktop' },
  { text: 'Amount', dataKey: 'amount', className: 'text-left only-desktop' },
  { text: '', dataKey: 'details', className: 'text-left' },
]

export const renderBlock = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'number':
      return (
        <>
          <Link href={`/block/${record[dataKey]}`}>
              <a className="textToken">{record[dataKey]}</a>
          </Link>
        </>
      )
    case 'signed_extrinsics':
    case 'module_events':
      return record[dataKey]
    
    case 'block_hash':
      return (
        <div className="d-flex align-items-center">
          <Link href={`/block/${record['number']}`}>
            <a className="textToken">{ellipsifyMiddle(record[dataKey])}</a>
          </Link>
          <div className="ms-2" onClick={()=>navigator.clipboard.writeText(record[dataKey])}>
            <Copy className="cursor-point" />
          </div>
        </div>
      )

    case 'age':
      return `${formatSec(record[dataKey])} ago`

    case 'details':
    default:
      return (
        <Link href={`/block/${record.number}`}>
          <a className='mx-auto'>
            <Detail className="detail"/>
          </a>
        </Link>
      )
  }
}

export const renderNftOperation = (
  record: INftOperation,
  dataKey: string
) => {
  switch (dataKey) {
    case 'nftId':
      return (
        <Link
          href={{
            pathname: `/nft/${record.id}`,
            query: { extrinsic: record.extrinsicId },
          }}
        >
          <a className="textToken">{record[dataKey]}</a>
        </Link>
      );
    case 'from':
    case 'to':
      return (
        <div className="d-flex align-items-center">
          <CAPSDark className="webIcon me-2" />
          <span className="textToken" title={record[dataKey]}>
            {ellipsifyMiddle(record[dataKey])}
          </span>
          <div
            className="ms-2"
            onClick={() => navigator.clipboard.writeText(record[dataKey])}
          >
            <Copy className="cursor-point" />
          </div>
        </div>
      );

    case 'typeOfTransaction':
      return <div>{record.typeOfTransaction}</div>;

    case 'details':
      return (
        <Link
          href={{
            pathname: `/nft/${record.id}`,
            query: { extrinsic: record.extrinsicId },
          }}
        >
          <a className="mx-auto">
            <Detail className="detail" />
          </a>
        </Link>
      );

    default:
      return;
  }
};

export const renderTransfer = (record: any, dataKey: string) => {
  switch (dataKey) {
    case 'block_id':
      return (
        <>
          <Link href={`/block/${record[dataKey]}`}>
              <a className="textToken">{record[dataKey]}</a>
          </Link>
        </>
      )
    case 'amount':
      return (
        <>
          <FormattedNumber value={record[dataKey]} format='decimal' />
          &nbsp;{record.currency}
        </>
      )

    case 'from':
    case 'to':
      return (
        <div>
          <div className="only-desktop">
            <div className="d-flex align-items-center">
              <CAPSDark className="webIcon me-2" />
              <span className="textToken" title={record[dataKey]}>
                {ellipsifyMiddle(record[dataKey])}
              </span>
              <div className="ms-2" onClick={()=>navigator.clipboard.writeText(record[dataKey])}>
                <Copy className="cursor-point" />
              </div>
            </div>
          </div>
          <div className="only-mobile">
             <span className="textToken" title={record[dataKey]}>
              {ellipsifyMiddle(record[dataKey])}
            </span>
          </div>
        </div>
      )
    case 'details':
      return (
        <Link href={`/trans/${record.id}`}>
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
  blockColumns,
  nftOperationsColumns,
  transferColumns,
  renderBlock,
  renderNftOperation,
  renderTransfer
}
