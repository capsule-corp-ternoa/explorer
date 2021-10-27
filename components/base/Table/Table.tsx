import React from 'react'
import clsx from 'clsx'
import style from './Table.module.scss'

type Row = {
  [dataKey in string]: any
}

interface TableProps {
  columns: string[]
  data: Row[]
  dataKeys: string[]
  renderCell: (data: Row, dataKey: string) => React.ReactNode
  footer?: React.ReactNode
  className?: string
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  dataKeys,
  renderCell,
  className
}) => (
  <div className={clsx(style.Table, className)}>
    <table className={clsx('table table-borderless', style.Table__desktop)}>
      <thead>
        <tr>
          {columns.map((column, key) => (
            <th
              className={clsx({'ps-4': key === 0, 'pe-4': key === columns.length - 1 })}
              key={key}
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((record, rowKey) => (
          <tr key={rowKey}>
            {dataKeys.map((dataKey, key) => (
              <td
                key={key}
                className={clsx('text-large text-opacity', { 'ps-4': key === 0, 'pe-4': key === dataKeys.length - 1 })}
              >
                {renderCell(record, dataKey)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div className={style.Table__mobile}>
      {data.map((record, rowKey) => (
        <div key={rowKey} className={clsx('mobileView', { mobileDarkView: rowKey % 2 === 1 })}>
          <div className='row'>
            {dataKeys.map((dataKey, key) => (
              <div key={key} className='col col-auto flex flex-items-center'>
                <div className='mobileRowLabel me-2'>{columns[key]}</div>
                <div className='mobileValue'>{renderCell(record, dataKey)}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Table
