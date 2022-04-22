import React from 'react'

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
  button?: React.ReactNode
  className?: string
}

const ListView: React.FC<TableProps> = ({
  columns,
  data,
  renderCell,
  footer,
  button, 
  className
}) => {
  return (
  <>
    <table className={`table table-borderless data-table full-opacity ${className}`}>
      <thead>
        <tr>
          {columns.map((col, key) => (
            <th className={`${col.className} text-large ${key === 0 && 'ps-4'} ${key === columns.length - 1 && 'pe-4'}`} key={key}>
              {col.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data && data.map((record, rowKey) => (
          <tr key={rowKey}>
            {columns.map((col, key) => (
              <td key={key} className={`${col.className} text-white-50 text-medium ${key === 0 && 'ps-4'} ${key === columns.length - 1 && 'd-flex justify-content-start align-items-center pe-4'}`}
              >
                {renderCell(record, col.dataKey)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    {footer && footer}
    {button && <div className='d-block d-sm-none'>{button}</div>}
  </>
)}

export default ListView
