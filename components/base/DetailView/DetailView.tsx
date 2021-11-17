import clsx from 'clsx'
import React from 'react'

type DetailViewField = {
  text: string
  dataKey: string
  mobileClassName?: string
}

interface DetailViewProps {
  title: string
  fields: DetailViewField[]
  data: { [dataKey in string]: any } | null
  renderCell: (data: any, dataKey: string) => React.ReactNode
}

const DetailView: React.FC<DetailViewProps> = ({
  title,
  fields,
  data,
  renderCell
}) => (
  <>
  <div className="custom_table">
    <div className="title mt-4 mb-4 blockTitle full-opacity">
      {title}
    </div>
    <table className="only-desktop table table-borderless mb-3 data-table">
      <tbody className="tbody-detail">
        {fields.map(({ text, dataKey }) => (
          <tr key={dataKey}>
            <td className="text-large text-opacity">
              {text}
            </td>
            <td className="text-large text-opacity">
              {data && renderCell(data, dataKey)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="only-mobile mobileView data-table">
      <div className='row'>
        {fields && fields.map(({ text, dataKey, mobileClassName }) => (
          <div className={clsx('col col-auto py-2 data-overflow', mobileClassName ?? 'col-6')} key={dataKey}>
            <div className="mobileLabel">
              {text}
            </div>
            <div className="mobileValue">
              {data && renderCell(data, dataKey)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  </>
)

export default DetailView
