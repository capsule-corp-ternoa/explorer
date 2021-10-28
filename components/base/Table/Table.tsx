import React from 'react'
import clsx from 'clsx'
import style from './Table.module.scss'

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

const Table: React.FC<TableProps> = ({
  columns,
  data,
  renderCell,
  className
}) => (
  <div className={clsx(style.Table, className)}>
    <table className={clsx('table table-borderless', style.Table__desktop)}>
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
                  { 'ps-4': key === 0, 'pe-4': key === columns.length - 1 }
                )}
              >
                {renderCell(record, col.dataKey)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div className={style.Table__mobile}>
      {data && data.map((record, rowKey) => (
        <div key={rowKey} className={clsx('mobileView py-2', { mobileDarkView: rowKey % 2 === 1 })}>
          <div className='row'>
            {columns.map(({ dataKey, mobileClassName }, key) => (
              <div key={key} className={clsx('col col-auto py-2', mobileClassName)}>
                <div className='mobileRowLabel mb-1'>
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
    </div>
  </div>
)

export default Table
