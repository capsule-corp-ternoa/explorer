import React from 'react'
import clsx from 'clsx'

type Row = {
  [dataKey in string]: any
}

type Column = {
  text: string
  dataKey: string
  className?: string
  mobileClassName?: string
}

interface TableProps {
  columns: Column[]
  data: Row[] | null
  renderCell: (data: Row, dataKey: string) => React.ReactNode
  footer?: React.ReactNode
  className?: string
}

const ListView: React.FC<TableProps> = ({
  columns,
  data,
  renderCell,
  footer,
  className
}) => {
  return (
  <>
    <table className={clsx('table table-borderless data-table full-opacity', className)}>
      <thead>
        <tr>
          {columns.map((col, key) => (
            <th
              className={clsx(
                col.className,
                {'ps-4': key === 0, 'pe-4': key === columns.length - 1 }
              )}
              key={key}
            >
              {col.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data && data.map((record, rowKey) => (
          <tr key={rowKey}>
            {columns.map((col, key) => (
              <td
                key={key}
                className={clsx(
                  'text-large text-opacity',
                  col.className,
                  { 'ps-4': key === 0, 'd-flex justify-content-center pe-4': key === columns.length - 1 }
                )}
              >
                {renderCell(record, col.dataKey)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div>
      {footer && (
         footer
        )}
    </div>
  </>
)}

export default ListView
