export const eventFields = [
  { text: 'Block', dataKey: 'block_id', className: 'text-left' },
  { text: 'Referenced Extrinsic', dataKey: 'extrinsic_index', className: 'text-left' },
  { text: 'Event Index', dataKey: 'event_index', className: 'text-left' },
  { text: 'Module', dataKey: 'module', className: 'text-left' },
  { text: 'Event name', dataKey: 'call', className: 'text-left'},
  { text: 'Description', dataKey: 'description', className: 'text-left'},
]

export const eventRender = (record: any, dataKey: string) => {
  switch (dataKey) {
    default:
      return <span className="textToken">{record[dataKey]}</span>
  }
}

export default {
  eventFields,
  eventRender
}
