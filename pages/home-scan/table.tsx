import Link from 'next/link'

export const renderLatestBlockCell = (record: any, dataKey: string) => {
  if (['number', 'transactions', 'module_events'].includes(dataKey)) {
    return record[dataKey]
  } else if (dataKey === 'age') {
    return record[dataKey] + ' hours ago'
  } else {
    return (
      <Link href={`/block/${record.number}`}>
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
  renderLatestBlockCell
}
