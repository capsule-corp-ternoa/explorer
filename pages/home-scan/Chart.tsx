import React, { useState } from 'react'
import style from './HomeScan.module.scss';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, ComposedChart, Bar } from 'recharts';
import clsx from 'clsx';

const chartMargin = {
  top: 10,
  right: 40,
  left: -15,
  bottom: 0,
}

interface ChartProps {
  data: any
  className?: string
}

interface ChartCheckboxProps {
  onChange?: (value: boolean) => void
  className?: string
  checked: boolean
  label: string
}

const ChartCheckbox: React.FC<ChartCheckboxProps> = ({
  checked,
  label,
  onChange,
  className
}) => (
  <div className={clsx("cursor-point flex flex-row flex-items-center", className)}>
    <label className='d-flex align-items-center'>
      <input
        className={clsx(style.chartCheckbox, checked ? style.activeChartRect : style.inactiveChartRect)}
        type="checkbox"
        onChange={(e: any) => onChange && onChange(e.target.checked)}
        checked={checked}
      />
      <span className={checked ? style.chartLabel : style.chartInactiveLabel}>
        {label}
      </span>
    </label>
  </div>
)

export const ExtrinsicChart: React.FC<ChartProps> = ({
  data,
  className
}) => {
  const [totalTrans, setTotalTrans] = useState(true)
  const [newAccount, setNewAccount] = useState(true)

  return (
    <div className={clsx(style.chartBlock, className)}>
      <div className={clsx("flex flex-row flex-items-center flex-between", style.mMinus50)}>
        <ChartCheckbox
          checked={totalTrans}
          onChange={setTotalTrans}
          label='Total extrinsic by day'
        />
        <ChartCheckbox
          checked={newAccount}
          onChange={setNewAccount}
          className='ms-3'
          label='New account by day'
        />
      </div>
      <ResponsiveContainer width="100%" height="80%" className={style.chartView}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={chartMargin}
        >
          <defs>
            <linearGradient id="blockUV" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9F9FFF" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#EABBFB" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis tickLine={false} axisLine={false} dataKey="name" style={{color:'white'}} />
          <YAxis tick={false} tickLine={false} axisLine={false} />
          <Tooltip />
          {newAccount && (
            <Area type="linear" dataKey="uv" stroke="transparent" fill="url(#blockUV)" />
          )}
          {totalTrans && (
            <Bar dataKey="pv" barSize={25} fill="#9F9FFF" radius={[20,20,20,20]} />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export const BlockChart: React.FC<ChartProps> = ({
  data,
  className
}) => {
  const [averBlock, setAverBlock] = useState(true)
  return (
    <div className={clsx(style.chartBlock, className)}>
      <div className={clsx("flex flex-row flex-items-center flex-between", style.mMinus50)}>
        <ChartCheckbox onChange={setAverBlock} label='Average block time by day' checked={averBlock} />
      </div>
      <ResponsiveContainer width="100%" height="80%" className={style.chartView}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={chartMargin}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis tickLine={false} axisLine={false} dataKey="name" style={{color:'white'}} />
          <YAxis tick={false} tickLine={false} axisLine={false} />
          <Tooltip />
          {averBlock && (
            <Area strokeWidth={5} type="linear" dataKey="uv" baseLine={8} stroke="#9F9FFF" fill="url(#colorUv)" />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default {
  ExtrinsicChart,
  BlockChart
}
