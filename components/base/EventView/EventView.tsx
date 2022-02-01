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
  className?: string
}

const EventView: React.FC<TableProps> = ({
  columns,
  data,
  renderCell,
  footer,
  className
}) => {
  return(
  <>
    <h1 className="subTitle mt-4">Events ()</h1>
    <table className={`table table-borderless data-table only-desktop ${className}`}>
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
              <td key={key} className={`text-medium text-opacity ${col.className} ${key === 0 && 'ps-4'} ${key === columns.length - 1 && 'pe-4'}`}>
                {renderCell(record, col.dataKey)}
              </td>
            ))}
          </tr>
        ))}
        {footer && (
          <tr>
            <td colSpan={99} className='py-4'>{footer}</td>
          </tr>
        )}
      </tbody>
    </table>
    <div className={`only-mobile data-table ${className}`}>
      {data && data.map((record, rowKey) => (
        <div key={rowKey} className={`mobileView py-2 ${rowKey % 2 === 1 && "mobileDarkView"}`}>
          <div className='row'>
            {columns.map(({ dataKey, mobileClassName }, key) => (
              <div key={key} className={`col col-auto py-2 data-overflow', ${mobileClassName ?? 'col-6'}`}>
                <div className='mobileRowLabel mb-3'>
                  {columns[key].text}
                </div>
                <div className='mobileValue'>
                  {renderCell(record, dataKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {footer && (
        <div className='col col-12 py-3'>
          {footer}
        </div>
      )}
    </div>
  </>
)}

export default EventView
